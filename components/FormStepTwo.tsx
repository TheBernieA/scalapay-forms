import { countries } from '@/lib/countries';
import { faqIcon, infoIcon } from '@/public/assets/icons';
import { step2Schema } from '@/schema/formSchema';
import Button from '@/shared/components/Button';
import DropdownInput from '@/shared/components/Dropdown';
import FormHeader from '@/shared/components/FormHeader';
import InputField from '@/shared/components/InputField';
import Toggle from '@/shared/components/Toggle';
import Wrapper from '@/shared/components/Wrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

interface FormStepTwoProps {
    onSubmit: (data: any) => void;
    defaultValues?: any;
}

function FormStepTwo({ onSubmit, defaultValues }: FormStepTwoProps) {
    const { register, watch, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(step2Schema),
        defaultValues,
        mode: 'onChange',
        reValidateMode: 'onChange'
    });

    const currentlyLiveHere = watch('currentlyLiveHere', defaultValues?.currentlyLiveHere)
    const isPEP = watch('isPEP', defaultValues?.isPEP)

    const handleCountrySelect = (country: { code: string; name: string }) => {
        setValue('country', country.code)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col'>
            <FormHeader />
            <Wrapper className='p-4'>
                <div className="flex gap-[5px] items-center mb-3">
                    <h2 className='text-text-primary font-semibold text-[15px] leading-[160%] tracking-[0%] '>Indirizzo di residenza</h2>
                    <Image src={faqIcon} alt='faq-icon' className='size-6' />
                </div>
                <div className='flex flex-col gap-4 mt-2'>
                    <div className="grid grid-cols-3 gap-4 items-start">
                        <InputField
                            id='street'
                            name='street'
                            testId='street-input'
                            register={register}
                            placeholder='Via, piazza, etc'
                            error={errors?.street}
                            inputProps={{
                                "aria-labelledby": "street",
                                "aria-label": "Street"
                            }}
                            className='col-span-2'
                        />
                        <InputField
                            id='number'
                            name='number'
                            type='number'
                            testId='number-input'
                            register={register}
                            placeholder='N°'
                            error={errors?.number}
                            inputProps={{
                                "aria-labelledby": "number",
                                "aria-label": "Number",
                                inputMode: "numeric"
                            }}
                            className='col-span-1'
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 items-start">
                        <InputField
                            id='postalCode'
                            name='postalCode'
                            testId='postalCode-input'
                            register={register}
                            placeholder='CAP'
                            error={errors?.postalCode}
                            inputProps={{
                                "aria-labelledby": "postalCode",
                                "aria-label": "Postal Code",
                                inputMode: "numeric"
                            }}
                            className='col-span-1'
                        />
                        <InputField
                            id='province'
                            name='province'
                            testId='province-input'
                            register={register}
                            placeholder='Provincia'
                            error={errors?.province}
                            inputProps={{
                                "aria-labelledby": "province",
                                "aria-label": "Province"
                            }}
                            className='col-span-1'
                        />
                    </div>
                    <InputField
                        id='city'
                        name='city'
                        testId='city-input'
                        register={register}
                        placeholder='Città'
                        error={errors?.city}
                        inputProps={{
                            "aria-labelledby": "city",
                            "aria-label": "City"
                        }}
                    />
                    <DropdownInput
                        id='country'
                        placeholder='Nazione'
                        testId='country-input'
                        dropdownTestId='country-dropdown-list'
                        data={countries}
                        onSelect={handleCountrySelect}
                        error={errors?.country}
                    />
                    <input type="hidden" {...register("country")} />

                    <div className="">
                        <Toggle
                            id='currentlyLiveHere'
                            label='I currently live here'
                            name='currentlyLiveHere'
                            register={register}
                            inputProps={{
                                "aria-checked": currentlyLiveHere,
                                "aria-label": "I currently live here"
                            }}
                        />
                        <Toggle
                            id='isPEP'
                            label='Dichiaro di essere una PEP'
                            name='isPEP'
                            icon={infoIcon}
                            register={register}
                            inputProps={{
                                "aria-checked": isPEP,
                                "aria-label": "Dichiaro di essere una PEP"
                            }}
                            className='mb-4 border-t border-[#EFF1F5]'
                        />
                    </div>
                </div>
            </Wrapper>

            <Button
                label='Salva'
                role='button'
                type='submit'
                loadingSpinner={isSubmitting}
                disabled={isSubmitting}
                className={`w-[244px] h-[45px] 
                    rounded-[100px] text-white text-[14px] 
                    leading-[150%] tracking-[0%] 
                    font-semibold px-4 mx-auto mt-auto
                     ${(isSubmitting) ? 'bg-button-secondary' : 'bg-button-primary'}
                     `}
            />

        </form>
    );
}

export default FormStepTwo