import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
  UseFormWatch,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

export interface IFormStepProps<T extends FieldValues> {
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  setError: UseFormSetError<T>;
  watch?: UseFormWatch<T>;
  defaultValues?: Partial<T>;
  control: Control<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  isSubmitting: boolean;
  handler: SubmitHandler<T>;
}

export interface IStep1Values {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  fiscalCode: string;
}

export interface IStep2Values {
  street: string;
  number: number;
  postalCode: string;
  province: string;
  city: string;
  country: string;
  currentlyLiveHere?: boolean;
  isPEP?: boolean;
}

export interface ICompleteFormValues extends IStep1Values, IStep2Values {}
