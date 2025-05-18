import React from 'react'
import DatePicker from 'react-datepicker'
import { Controller } from 'react-hook-form'
import 'react-datepicker/dist/react-datepicker.css';


interface DatePickerProps {
    control: any;
    error: any
}

const DatePickerCmp = ({ control, error }: DatePickerProps) => {
    return (
        <div>
            <Controller
                control={control}
                name="dateOfBirth"
                render={({ field }) => (
                    <div className="flex flex-col">
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            selected={field.value}
                            onChange={(date) => field.onChange(date)}
                            placeholderText="Data di Nascita (DD/MM/YYYY)"
                            maxDate={new Date()}
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={100}
                            className="
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
                            outline-none"
                            customInput={
                                <input
                                    maxLength={10}
                                    pattern="\d{2}/\d{2}/\d{4}"
                                />
                            }
                        />
                        {error?.message && (
                            <p className="text-xs text-red-400 mt-1">{error.message.toString()}</p>
                        )}
                    </div>
                )}
            />

        </div>
    )
}

export default DatePickerCmp