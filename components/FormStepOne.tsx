'use client'

import { step1Schema } from '@/schema/formSchema';
import Button from '@/shared/components/Button';
import FormHeader from '@/shared/components/FormHeader';
import InputField from '@/shared/components/InputField';
import Wrapper from '@/shared/components/Wrapper';
import { validateFiscalCode } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface FormStepOneProps {
    onNext: (data: any) => void,
    defaultValues?: any
}

function FormStepOne({ onNext, defaultValues }: FormStepOneProps) {
    const [dateOfBirth, setDateOfBirth] = useState();
    const { register, handleSubmit, setError, formState: { errors, isSubmitting, isValid } } = useForm({
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
        onNext(data);
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
                        register={register}
                        placeholder='Cognome'
                        error={errors?.lastName}
                        inputProps={{
                            "aria-labelledby": "lastName",
                            "aria-label": "Last Name"
                        }}
                    />
                    <InputField
                        id='dateOfBirth'
                        name='dateOfBirth'
                        type='date'
                        register={register}
                        placeholder='Data di nascita (DD/MM/YYYY)'
                        error={errors?.dateOfBirth}
                        inputProps={{
                            "aria-labelledby": "dateOfBirth",
                            "aria-label": "Date Of Birth",
                            min: '1900-01-01',
                            max: '9999-12-31',
                        }}
                    />
                    <InputField
                        id='fiscalCode'
                        name='fiscalCode'
                        register={register}
                        placeholder='Codice Fiscale'
                        error={errors?.fiscalCode}
                        inputProps={{
                            "aria-labelledby": "fiscalCode",
                            "aria-label": "Fiscal Code"
                        }}
                    />
                    <DatePicker
                        dateFormat='dd/MM/yyyy'
                        selected={dateOfBirth}
                        onChange={(date: any) => { setDateOfBirth(date) }}
                        placeholderText='Data di Nascita (DD/MM/YYYY)'
                    />
                </div>
            </Wrapper>
            <Button
                label='Continua'
                type="submit"
                role='button'
                disabled={!isValid || isSubmitting}
                className={`w-[244px] h-[45px] 
                    rounded-[100px] text-white text-[14px] 
                    leading-[150%] tracking-[0%] font-semibold 
                    px-4 mx-auto mt-auto
                    ${!isValid || isSubmitting ? 'bg-button-secondary' : 'bg-button-primary'}
                    `}
            />
        </form>
    );
}
export default FormStepOne