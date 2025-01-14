'use client'
import { React, useState } from 'react';

const AdsPostedTime = ({ onFilterChange }) => {
    const [selectedTime, setSelectedTime] = useState('');

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setSelectedTime(value);
        onFilterChange(value);
    };

    return (
        <div className='w-full flex flex-col gap-2 border-[0.5px] border-[#D6D6D6DD] py-1'>
            <p className='text-color2 text-[24px] font-[500] border-b-[0.5px] border-[#D6D6D6DD] p-10'>Ads Posted Time</p>
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row gap-1  '>
                <input type='radio' value='today' checked={selectedTime === 'today'} onChange={handleFilterChange} />
                Today
            </label>
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row gap-1 '>
                <input type='radio' value='this_week' checked={selectedTime === 'this_week'} onChange={handleFilterChange} />
                This Week
            </label>
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row gap-1 '>
                <input type='radio' value='this_month' checked={selectedTime === 'this_month'} onChange={handleFilterChange} />
                This Month
            </label >
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row gap-1 '>
                <input type='radio' value='this_year' checked={selectedTime === 'this_year'} onChange={handleFilterChange} />
                This Year
            </label >
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row gap-1 '>
                <input type='radio' value='two_years' checked={selectedTime === 'two_years'} onChange={handleFilterChange} />
                2 Years
            </label >
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row gap-1 '>
                <input type='radio' value='three_years' checked={selectedTime === 'three_years'} onChange={handleFilterChange} />
                3 Years
            </label >
        </div >
    );
};

export default AdsPostedTime;