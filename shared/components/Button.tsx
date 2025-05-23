import React from "react";

interface ButtonProps {
    label: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    buttonProps?: any;
    disabled?: boolean;
    role: string;
    loadingSpinner?: boolean
}

const Button = ({
    label,
    className,
    type = "button",
    buttonProps,
    disabled,
    loadingSpinner,
    role
}: ButtonProps) => {
    return (
        <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
            <button
                type={type}
                role={role}
                className={`capitalize cursor-pointer w-full h-full px-4`}
                disabled={disabled}
                {...buttonProps}
            >
                {label}
            </button>
            {loadingSpinner && <div className="absolute top-0 right-0 inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="animate-spin rounded-full size-8 border-b-2 border-white"></div>
            </div>}
        </div>
    );
};

export default Button;
