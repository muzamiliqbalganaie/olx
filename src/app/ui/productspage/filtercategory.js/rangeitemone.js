'use client';
import React, { useState } from 'react';

const RangeInput = ({ label, fromPlaceholder, toPlaceholder, fromValue, toValue, onFromChange, onToChange }) => {
    // const [isFocused, setIsFocused] = useState(false);
    // const [isSelected, setIsSelected] = useState(false);
    // const handleFromChange = (event) => {
    //     onFromChange(event);
    //     setIsSelected(true);
    //     setIsFocused(false);
    //     console.log(event.target.value);
    // }
    // const handleToChange = (event) => {
    //     onToChange(event);
    //     setIsSelected(true);
    //     setIsFocused(false);
    //     console.log(event.target.value);
    // }
    return (
        <div className="w-[269px] bg-white rounded   " >
            <div className="grid grid-cols-3 gap-3 my-1 items-center">
                <label className="block text-[16px] font-[400] max-w-[91px] text-color2 ">{label}</label>
                <div className='w-[70px]'>
                    <input
                        type="number"
                        placeholder={fromPlaceholder}
                        value={fromValue}
                        onChange={onFromChange}
                        // onFocus={() => setIsFocused(true)}
                        // onBlur={() => !isSelected && setIsFocused(false)}
                        // onMouseLeave={() => !isSelected && setIsFocused(false)}
                        className="w-[70px] mt-1 block  px-3 py-2 border bg-[#F1F2F6] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm placeholder-black no-spinner"
                    />
                </div>
                <div className=' w-[70px]'>
                    <input
                        type="number"
                        placeholder={toPlaceholder}
                        value={toValue}
                        onChange={onToChange}
                        // onFocus={() => setIsFocused(true)}
                        // onBlur={() => !isSelected && setIsFocused(false)}
                        // onMouseLeave={() => !isSelected && setIsFocused(false)}
                        className="w-[70px] mt-1 block  px-3 py-2 border bg-[#F1F2F6] border-gray-300 rounded-md  focus:outline-none focus:ring-black focus:border-black sm:text-sm placeholder-black no-spinner"
                    />
                </div>
            </div>
        </div>
    );
};

export default RangeInput;