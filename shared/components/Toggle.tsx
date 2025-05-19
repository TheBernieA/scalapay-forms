import Image from 'next/image';
import React from 'react';
import '@/styles/toggle.css'

interface ToggleProps {
    id?: string;
    label?: string;
    name: string;
    placeholder?: string;
    register?: any;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    className?: string
    icon?: any
}

const Toggle = ({ id,
    label,
    name,
    className,
    icon,
    register,
    inputProps, }: ToggleProps) => {
    return (
        <>
            <label className={`switch w-full flex justify-between items-center label-text py-[14.5px] pl-[8px] ${className}`} htmlFor={id}>
                <div className="flex items-center gap-[8px]">
                    <span className="text-text-primary label-text font-medium text-[11px] leading-[150%] tracking-[0%]">{label}</span>
                    {(icon !== '' && icon) && <Image src={icon} alt='info-icon' className='size-6' />}
                </div>
                <input
                    id={id}
                    type="checkbox"
                    className='sr-only peer'
                    {...register(name)}
                    role="switch"
                    {...inputProps}
                />
                <span className={`slider round`}></span>
            </label>
        </>
    )
}

export default Toggle