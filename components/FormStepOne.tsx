import { IStep1Values } from '@/interface/formInterface';
import { step1Schema } from '@/schema/formSchema';
import Button from '@/shared/components/Button';
import DatePickerCmp from '@/shared/components/DatePicker';
import FormHeader from '@/shared/components/FormHeader';
import InputField from '@/shared/components/InputField';
import Wrapper from '@/shared/components/Wrapper';
import { Step1FormValues } from '@/types/forms-types';
import { validateFiscalCode } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface FormStepOneProps {
    onNext: (data: IStep1Values) => void,
    defaultValues?: Partial<Step1FormValues>
}

function FormStepOne({ onNext, defaultValues }: FormStepOneProps) {
    const { register, handleSubmit, setValue, setError, control, formState: { errors, isSubmitting, isValid } } = useForm<Step1FormValues>({
        resolver: zodResolver(step1Schema),
        defaultValues,
        mode: 'onChange',
        reValidateMode: 'onChange'
    });

    const onSubmit = async (data: z.infer<typeof step1Schema>) => {
        const isValidFiscal = await validateFiscalCode(data.fiscalCode);
        if (!isValidFiscal) {
            setError('fiscalCode', { type: 'manual', message: 'Codice fiscale non valido' });
            return;
        }

        const formattedData: IStep1Values = {
            ...data,
            dateOfBirth: format(data.dateOfBirth, 'dd/MM/yyyy')
        }

        onNext(formattedData);
    };

    return (
        <form role='form' data-testid="form" onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col'>
            <FormHeader />
            <Wrapper className="p-4 ">
                <h4 className='font-semibold text-[15px] leading-[160%] tracking-[0%] mb-3'>Crea account</h4>
                <div className='flex flex-col gap-4 mt-2'>
                    <InputField
                        id='email'
                        name='email'
                        testId='email-input'
                        register={register}
                        placeholder='Email'
                        error={errors?.email}
                        inputProps={{
                            "aria-labelledby": "email",
                            "aria-label": "Email",
                            inputMode: "email"
                        }}
                    />
                    <InputField
                        id='firstName'
                        name='firstName'
                        testId='firstName-input'
                        register={register}
                        placeholder='Nome'
                        error={errors?.firstName}
                        inputProps={{
                            "aria-labelledby": "firstName",
                            "aria-label": "First Name"
                        }}
                    />
                    <InputField
                        id='lastName'
                        name='lastName'
                        testId='lastName-input'
                        register={register}
                        placeholder='Cognome'
                        error={errors?.lastName}
                        inputProps={{
                            "aria-labelledby": "lastName",
                            "aria-label": "Last Name"
                        }}
                    />
                    <DatePickerCmp
                        testId='dateOfBirth-input'
                        control={control}
                        error={errors?.dateOfBirth}
                    />

                    <InputField
                        id='fiscalCode'
                        name='fiscalCode'
                        testId='fiscalCode-input'
                        register={register}
                        placeholder='Codice Fiscale'
                        error={errors?.fiscalCode}
                        inputProps={{
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                                const toUpperCase = e.target.value.toUpperCase()
                                setValue('fiscalCode', toUpperCase, { shouldValidate: true, shouldDirty: true })
                            },
                            maxLength: 16,
                            "aria-labelledby": "fiscalCode",
                            "aria-label": "Fiscal Code"
                        }}
                    />

                </div>
            </Wrapper>
            <Button
                label='Continua'
                type="submit"
                role='button'
                loadingSpinner={isSubmitting}
                disabled={isSubmitting}
                className={`w-[244px] h-[45px] 
                    rounded-[100px] text-white text-[14px] 
                    leading-[150%] tracking-[0%] font-semibold mx-auto mt-auto
                    ${isSubmitting ? 'bg-button-secondary' : 'bg-button-primary'}`}
            />
        </form>
    );
}
export default FormStepOne