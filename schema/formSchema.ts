import { differenceInYears, isValid } from "date-fns";
import { z } from "zod";

export const step1Schema = z.object({
  email: z.string().email("Email is not valid, please enter a valid email"),
  firstName: z
    .string()
    .min(2, "Firstname should have at least 2 characters")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Only alphabets are accepted"),
  lastName: z
    .string()
    .min(2, "Lastname should have at least 2 character")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Only alphabets are accepted"),
  dateOfBirth: z
    .date({
      required_error: "Date of birth is required",
      invalid_type_error: "Invalid date format",
    })
    .refine((date) => {
      return isValid(date) && differenceInYears(new Date(), date) >= 18;
    }, "You must be at least 18 years"),
  fiscalCode: z.string().min(1, "Fiscal code is required"),
});

export const step2Schema = z.object({
  street: z
    .string()
    .min(5, "address must be at least 5 characters")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Invalid input, only alpabets are allowed"),
  number: z.string().regex(/^\d+$/, "Only numerical inputs are accepted"),
  postalCode: z.string().min(4, "CAP is not valid").max(10, "CAP is not valid"),
  province: z.string().min(1, "Province is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Please select country from dropdown"),
  currentlyLiveHere: z.boolean().optional(),
  isPEP: z.boolean().optional(),
});
