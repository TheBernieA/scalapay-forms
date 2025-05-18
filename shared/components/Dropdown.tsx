"use client"

import { useState } from 'react';

interface DropdownProps {
    id: string;
    placeholder: string;
    label?: string;
    testId?: string;
    dropdownTestId?: string;
    data: any;
    inputProps?: any;
    error?: any;
    onSelect: (date: any) => void;
}
const DropdownInput = ({ id, onSelect, testId, dropdownTestId, label, data, error, inputProps, placeholder }: DropdownProps) => {
    const [query, setQuery] = useState('')
    const [filtered, setFiltered] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)

    const handleChange = (e: any) => {
        const value = e.target.value
        setQuery(value)
        setFiltered(data.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase())))
        setShowDropdown(true)
    }

    const handleSelect = (data: any) => {
        setQuery(data.name)
        setShowDropdown(false)
        onSelect(data)
    }

    return (
        <div className="relative w-full">
            <label htmlFor="country" className="font-medium text-[#333] mb-1 block">{label}</label>
            <input
                id={id}
                type="text"
                value={query}
                {...inputProps}
                data-testid={testId}
                onChange={handleChange}
                onFocus={() => setShowDropdown(true)}
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
                    {filtered.map((item: any) => (
                        <li
                            key={item.code}
                            onMouseDown={() => handleSelect(item)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
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