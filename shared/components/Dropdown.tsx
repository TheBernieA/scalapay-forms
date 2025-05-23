"use client"

import React, { ChangeEvent, useRef, useState } from 'react';
import { FieldError } from 'react-hook-form';

interface IData {
    code: string,
    name: string
}
interface DropdownProps<T> {
    id: string;
    placeholder: string;
    label?: string;
    testId?: string;
    dropdownTestId?: string;
    data: T[];
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    error?: FieldError;
    onSelect: (date: T) => void;
}

function DropdownInput<T extends IData>({ id, onSelect, testId, dropdownTestId, label, data, error, inputProps, placeholder }: DropdownProps<T>) {
    const [query, setQuery] = useState('')
    const [filtered, setFiltered] = useState<T[]>([])
    const [showDropdown, setShowDropdown] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1);
    const inputRef = useRef(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setQuery(value)
        setFiltered(data.filter((item: T) => item.name.toLowerCase().includes(value.toLowerCase())))
        setShowDropdown(true)
    }

    const handleSelect = (item: any) => {
        setQuery(item.name);
        setShowDropdown(false);
        onSelect(item);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                setShowDropdown(true);
                setActiveIndex(i => Math.min(i + 1, filtered.length - 1));
                break;
            case 'ArrowUp':
                e.preventDefault()
                setActiveIndex(i => Math.max(i - 1, 0));
                break;
            case 'Enter':
                e.preventDefault()
                if (showDropdown && activeIndex >= 0) {
                    handleSelect(filtered[activeIndex]);
                    setShowDropdown(false);
                }
                break;
            case 'Escape':
                e.preventDefault()
                setShowDropdown(false);
                break;
            case 'Tab':
                if (showDropdown && activeIndex >= 0) {
                    handleSelect(filtered[activeIndex]);
                }
                break;
        }
    };

    return (
        <div className="relative w-full">
            <label htmlFor="country" className="font-medium text-[#333] mb-1 block">{label}</label>
            <input
                id={id}
                ref={inputRef}
                type="text"
                value={query}
                {...inputProps}
                data-testid={testId}
                role="combobox"
                aria-expanded={showDropdown}
                aria-controls="country-list"
                aria-autocomplete="list"
                aria-activedescendant={showDropdown && activeIndex >= 0 ? `option-${activeIndex}` : undefined}
                onKeyDown={onKeyDown}
                onChange={handleChange}
                onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                placeholder={placeholder}
                className={`
                    w-full
                    h-[56px]
                    border 
                    rounded-[8px]
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
            {showDropdown && filtered.length > 0 && (
                <ul data-testid={dropdownTestId} className="absolute z-50 bg-white border border-gray-200 w-full rounded-md mt-1 shadow-md max-h-40 overflow-y-auto">
                    {filtered.map((item, index: number) => (
                        <li
                            id={`option-${index}`}
                            key={item.code}
                            role='option'
                            aria-selected={index === activeIndex}
                            onMouseDown={() => handleSelect(item)}
                            className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${index === activeIndex ? 'bg-gray-100' : ''}`}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
            {error?.message && (
                <p className="text-xs text-red-400 mt-1">{error.message.toString()}</p>
            )}
        </div>
    )
}

export default DropdownInput