import React from "react";

interface ButtonProps {
    label: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    buttonProps?: any;
    disabled?: boolean;
    role: string
}

const Button = ({
    label,
    className,
    type = "button",
    buttonProps,
    disabled,
    role
}: ButtonProps) => {
    return (
        <button
            type={type}
            role={role}
            className={`capitalize cursor-pointer ${className}`}
            disabled={disabled}
            {...buttonProps}
        >
            {label}
        </button>
    );
};

export default Button;
