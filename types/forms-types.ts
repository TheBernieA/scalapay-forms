import { step1Schema, step2Schema } from "@/schema/formSchema";
import { z } from "zod";

export type Step1FormValues = z.infer<typeof step1Schema>;
export type Step2FormValues = z.infer<typeof step2Schema>;
