'use client';

import Header from '@/components/Header';
import { IStep1Values } from '@/interface/formInterface';
import { AppDispatch, RootState } from '@/store';
import { goToStep, resetForm, updateFormData } from '@/store/formSlice';
import { Step1FormValues, Step2FormValues } from '@/types/forms-types';
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Bounce, toast } from 'react-toastify';

const FormStepOne = dynamic(() => import('@/components/FormStepOne'))
const FormStepTwo = dynamic(() => import('@/components/FormStepTwo'))


function MultiStepFormPage() {
    const router = useRouter()
    const pathName = usePathname()
    const dispatch = useDispatch<AppDispatch>()
    const step = useSelector((state: RootState) => state.form.step)
    const formData = useSelector((state: RootState) => state.form.data)

    const handleStep1Submit: SubmitHandler<IStep1Values> = (data) => {
        dispatch(updateFormData(data))
        dispatch(goToStep(2))
    };

    useEffect(() => {
        if (pathName === '/') {
            dispatch(resetForm())
        }
    }, [pathName, dispatch])

    useEffect(() => {
        return () => {
            dispatch(resetForm())
        }
    }, [pathName, dispatch])

    const handleStep2Submit: SubmitHandler<Step2FormValues> = async (data) => {
        dispatch(updateFormData(data));
        const payload = { ...formData, ...data };
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorPayload = await response.json().catch(() => null);
                const errMsg =
                    errorPayload?.message ||
                    `Server responded with status ${response.status}`;
                throw new Error(errMsg);
            }
            toast.success('Dati inviati con successo!', {
                autoClose: 1000,
                transition: Bounce,
                hideProgressBar: true
            })
            router.push('/')
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Submit failed:', err);
                toast.error(`Errore durante l'invio dei dati: ${err.message || 'Si è verificato un errore'}`
                )
            }
        }
    };
    return (
        <div className='flex flex-col w-full h-full bg-background-light pb-[30px] relative'>
            <Header />
            <div className="flex-1 px-4 z-30">
                {step === 1 && <FormStepOne onNext={handleStep1Submit} defaultValues={formData as Partial<Step1FormValues>} />}
                {step === 2 && <FormStepTwo onSubmit={handleStep2Submit} defaultValues={formData as Partial<Step2FormValues>} />}
            </div>
        </div>
    );
}

export default MultiStepFormPage