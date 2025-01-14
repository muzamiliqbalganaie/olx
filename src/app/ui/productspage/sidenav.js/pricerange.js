'use client'
import { React, useState } from 'react';
import '../../../globals.css'

const AdsPostedTime = ({ onFilterChange }) => {
    const [selectedTime, setSelectedTime] = useState('');
    const [rangeValue, setRangeValue] = useState(1);

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setSelectedTime(value);
        onFilterChange(value);
    };

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
    };

    return (
        <div className='w-full flex flex-col gap-2 border-[0.5px] border-[#D6D6D6DD] py-1'>
            <p className='text-color2 text-[24px] font-[500] border-b-[0.5px] border-[#D6D6D6DD] p-10'>Price Range</p>
            <div className='flex flex-col space-y-2 p-4'>
                <label className='flex justify-between'>
                    <span>{rangeValue}</span>
                    <span>{1000000}</span>
                </label>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    value={rangeValue}
                    onChange={handleRangeChange}
                    className="w-full h-2 bg-gray-300 outline-none opacity-70 transition-opacity duration-200 hover:opacity-100 appearance-none cursor-pointer custom-slider"
                    id="myRange"
                    step="1"
                />

                <label className='font-[500] text-[16px] text-color2 text-center'>Choose a price range above</label>
            </div>
        </div>
    );
};

export default AdsPostedTime;