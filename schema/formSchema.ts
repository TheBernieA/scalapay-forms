import { differenceInYears, isValid } from "date-fns";
import { z } from "zod";

export const step1Schema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email("Email is not valid, please enter a valid email"),
  firstName: z
    .string()
    .trim()
    .nonempty("Firstname is required")
    .min(2, "Firstname should have at least 2 characters")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Only letters are accepted"),
  lastName: z
    .string()
    .trim()
    .nonempty("Lastname is required")
    .min(2, "Lastname should have at least 2 character")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Only letters are accepted"),
  dateOfBirth: z
    .date({
      required_error: "Date of birth is required",
      invalid_type_error: "Invalid date format",
    })
    .refine((date) => {
      return isValid(date) && differenceInYears(new Date(), date) >= 18;
    }, "You must be at least 18 years"),
  fiscalCode: z.string().trim().min(1, "Fiscal code is required"),
});

export const step2Schema = z.object({
  street: z
    .string()
    .trim()
    .nonempty("Street is required")
    .min(5, "address must be at least 5 characters")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Invalid input, only letters are allowed"),
  number: z
    .string()
    .trim()
    .nonempty("Number is required")
    .regex(/^\d+$/, "Only numerical inputs are accepted"),
  postalCode: z
    .string()
    .trim()
    .nonempty("Postal code is required")
    .length(5, "CAP must be exactly 5 characters long")
    .regex(/^\d+$/, "Invalid CAP input, only numerical inputs are accepted"),
  province: z
    .string()
    .nonempty("Province is required")
    .trim()
    .length(2, "Field requires 2 values eg.(PA)")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Invalid input, only letters are allowed"),
  city: z
    .string()
    .trim()
    .min(1, "City is required")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Invalid input, only letters are allowed"),
  country: z.string().trim().min(1, "Please select country from dropdown"),
  currentlyLiveHere: z.boolean().optional(),
  isPEP: z.boolean().optional(),
});

export const completeFormScherma = step1Schema.merge(step2Schema);
