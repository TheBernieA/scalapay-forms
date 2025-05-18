'use client';

import Header from '@/components/Header';
import { AppDispatch, RootState } from '@/store';
import { goToStep, resetForm, updateFormData } from '@/store/formSlice';
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const FormStepOne = dynamic(() => import('@/components/FormStepOne'))
const FormStepTwo = dynamic(() => import('@/components/FormStepTwo'))

function MultiStepFormPage() {
    const router = useRouter()
    const pathName = usePathname()
    const dispatch = useDispatch<AppDispatch>()
    const step = useSelector((state: RootState) => state.form.step)
    const formData = useSelector((state: RootState) => state.form.data)

    const handleStep1Submit = (data: any) => {
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

    const handleStep2Submit = async (data: any) => {
        dispatch(updateFormData(data));
        const completeData = { ...formData, ...data };
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(completeData),
            });

            if (!response.ok) {
                const errorPayload = await response.json().catch(() => null);
                const errMsg =
                    errorPayload?.message ||
                    `Server responded with status ${response.status}`;
                throw new Error(errMsg);
            }
            toast.success('Dati inviati con successo!')
            router.push('/')
        } catch (err: any) {
            console.error('Submit failed:', err);
            toast.error(`Errore durante l'invio dei dati: ${err.message || 'Si è verificato un errore'
                }`)
        }
    };
    return (
        <div className='flex flex-col w-full h-full bg-[#F6F7FB] pb-[30px] relative'>
            <Header />
            <div className="flex-1 px-4 z-30">
                {step === 1 && <FormStepOne onNext={handleStep1Submit} defaultValues={formData} />}
                {step === 2 && <FormStepTwo onSubmit={handleStep2Submit} defaultValues={formData} />}
            </div>
        </div>
    );
}

export default MultiStepFormPage