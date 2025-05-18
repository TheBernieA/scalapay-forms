import React from 'react'

interface ToggleProps {
    id?: string;
    label?: string;
    name: string;
    placeholder?: string;
    register?: any;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    className?: string
}

const Toggle = ({ id,
    label,
    name,
    className,
    register,
    inputProps, }: ToggleProps) => {
    return (
        <>
            <label className={`switch label-text py-[14.5px] pl-[8px] ${className}`} htmlFor={id}>
                <span className="text-text-primary label-text font-medium text-[11px] leading-[150%] tracking-[0%]">{label}</span>
                <input
                    id={id}
                    type="checkbox"
                    {...register(name)}
                    role="switch"
                    {...inputProps}
                />
                <span className="slider round"></span>
            </label>
        </>
    )
}

export default Toggle