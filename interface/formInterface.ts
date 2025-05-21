export interface FormStepProps {
  error?: any;
  register: any;
  setValue?: any;
  setError?: any;
  watch?: any;
  defaultValues?: any;
  control?: any;
  handleSubmit: any;
  isSubmitting: boolean;
  handler: (data: any) => void;
}

export interface Step1Values {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  fiscalCode: string;
}

export interface Step2Values {
  street: string;
  number: number;
  postalCode: string;
  province: string;
  city: string;
  country: string;
  currentlyLiveHere?: boolean;
  isPEP?: boolean;
}

export interface FormValues extends Step1Values, Step2Values {}
