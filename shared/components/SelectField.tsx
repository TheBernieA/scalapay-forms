import React from "react";

type Option = {
    value: string | number;
    label: string;
};

type SelectFieldProps = {
    id: string;
    label?: string;
    name?: string;
    defaultValue?: string;
    placeholder: string;
    className?: any;
    value?: any;
    onChange?: any;
    error?: any;
    enumData?: any;
    countryObject?: any;
    options?: Option[];
    register?: any;
    objectData?: any;
    required?: boolean;
    disabled?: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const SelectField = ({
    id,
    label,
    defaultValue,
    name,
    placeholder,
    error,
    enumData,
    countryObject,
    register,
    value,
    onChange,
    objectData,
    options = [],
    required,
    disabled,
    inputProps,
    className,
}: SelectFieldProps) => {
    return (
        <div className={`flex flex-col w-full gap-[10px] ${className}`}>
            <label
                htmlFor={id}
                className="font-medium leading-[19.2px] text-[#333333] capitalize"
            >
                {label}
            </label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                {...register(name)}
                defaultValue={defaultValue}
                required={required}
                disabled={disabled}
                className="bg-[#F6F8FD] border border-[#E0E0E0] rounded-[6px] px-[14px] py-3 text-[#333333] text-sm outline-none appearance-none placeholder:capitalize"
            >
                <option defaultValue="" disabled className="capitalize text-[#898989]">
                    {placeholder}
                </option>
                {enumData &&
                    Object.entries(enumData)
                        .sort()
                        .map(([key, value]: any, index: number) => (
                            <option value={key} key={index} className="text-[#333333]">
                                {String(value)}
                            </option>
                        ))}
                {objectData &&
                    objectData.map((item: any, index: any) => (
                        <option value={item.value} key={index} className="text-[#333333]">
                            {item.label}
                        </option>
                    ))}
                {countryObject &&
                    countryObject.map((item: any, index: any) => (
                        <option value={item.code} key={index} className="text-[#333333]">
                            {item.name}
                        </option>
                    ))}
                {options &&
                    options.map((option, index) => (
                        <option value={option.value} key={index} className="text-[#333333]">
                            {option.label}
                        </option>
                    ))}
            </select>
            {error?.message && (
                <p className="text-xs text-red-400">{error.message.toString()}</p>
            )}{" "}
        </div>
    );
};

export default SelectField;
