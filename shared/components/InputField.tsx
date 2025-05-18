import React from 'react';

interface InputProps {
    id?: string;
    label?: string;
    name: string;
    type?: string;
    placeholder?: string;
    register?: any;
    error?: any;
    flexDirection?: string;
    testId?: string;
    className?: string;
    disabled?: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputField = ({
    id,
    label,
    type = "text",
    name,
    placeholder,
    error,
    flexDirection = "flex-col",
    register,
    testId,
    className = "",
    disabled,
    inputProps
}: InputProps) => {
    return (
        <div className={`flex ${flexDirection} justify-center gap-[10px] ${className}`}>
            {label && (
                <label
                    htmlFor={id}
                    className="font-medium leading-[19.2px] text-[#333333] capitalize"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                data-testid={testId}
                {...register?.(name)}
                {...inputProps}
                placeholder={placeholder}
                disabled={disabled}
                className={`
                    w-full
                    h-[56px]
                    border 
                    rounded-[10px]
                    px-[14px]
                    text-sm
                    placeholder:font-medium
                    placeholder:text-[13px]
                    placeholder:leading-[150%]
                    placeholder:opacity-[38%]
                    placeholder:capitalize
                    bg-white
                    border-border-primary
                    text-[#3A4045]
                    hover:border-black
                    placeholder:text-[#898989]
                    focus:border-[#5666F0]
                    outline-none
                `}
            />
            {error?.message && (
                <p className="text-xs text-red-400">{error.message.toString()}</p>
            )}
        </div>
    );
};

export default InputField;
