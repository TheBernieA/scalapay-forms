import { infoIcon } from '@/public/assets/icons';
import Image from 'next/image';
import React from 'react'

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
                    {(icon !== '' && icon) && <Image src={icon} alt='info-icon' className='size-5' />}
                </div>
                <input
                    id={id}
                    type="checkbox"
                    className='sr-only peer'
                    {...register(name)}
                    role="switch"
                    {...inputProps}
                />
                <span className={`
                    slider round
                    /* focus ring when keyboard focusing the input */
                    peer-focus-visible:outline-none
                    peer-focus-visible:ring-2
                    peer-focus-visible:ring-offset-2
                    peer-focus-visible:ring-green-500 
                    `}></span>
            </label>
        </>
    )
}

export default Toggle