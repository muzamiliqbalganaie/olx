'use client';
import Image from 'next/image';
import React, { use, useState } from 'react';

const DropdownInput = ({ label, options, value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectChange = (event) => {
        onChange(event);
        setIsSelected(true);
        setIsFocused(false);
        console.log(event.target.value);
    }
    return (
        <div className=" select-container relative max-w-[269px] bg-white rounded flex flex-row items-center  gap-1">
            <label className="block text-[16px] font-[400] max-w-[91px] text-color2 basis-1/3 pr-3">{label}</label>
            <div className='relative'>
                <select
                    value={value}
                    onChange={handleSelectChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => !isSelected && setIsFocused(false)}
                    onMouseLeave={() => !isSelected && setIsFocused(false)}
                    className="w-[161px] mt-1 block  px-3 py-2 border bg-[#F1F2F6] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm placeholder-black no-spinner basis-2/3 appearance-none"
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <Image className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-200 ease-in-out" src="/productspage/select.png" style={{ transform: isFocused ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)' }} alt="select" width={16} height={16} />
            </div>
        </div>
    );
};

export default DropdownInput;
