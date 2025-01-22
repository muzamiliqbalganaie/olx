'use client'
import { React, useState } from 'react';
import { fetchProductsByPostedTime } from '/modules/products';

const AdsPostedTime = ({ onFilterChange }) => {
    const [selectedTime, setSelectedTime] = useState('');


    const handleFilterChange = async (event) => {
        const value = event.target.value;
        setSelectedTime(value);
        try {
            const data = await fetchProductsByPostedTime(value);
            onFilterChange(value);
        } catch (error) {
            console.log('Error fetching posted time data:', error)
        }
    };

    return (
        <div className='w-full flex flex-col gap-2 border-[0.5px] border-[#D6D6D6DD] py-1'>
            <p className='text-color2 text-[24px] font-[500] border-b-[0.5px] border-[#D6D6D6DD] p-10'>Ads Posted Time</p>
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row  items-center gap-1  '>
                <input type='checkbox' value='today' checked={selectedTime === 'today'} onChange={handleFilterChange} className="custom-checkbox" />
                Today
            </label>
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row  items-center gap-1 '>
                <input type='checkbox' value='this_week' checked={selectedTime === 'this_week'} onChange={handleFilterChange} className="custom-checkbox" />
                This Week
            </label>
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row  items-center gap-1 '>
                <input type='checkbox' value='this_month' checked={selectedTime === 'this_month'} onChange={handleFilterChange} className="custom-checkbox" />
                This Month
            </label >
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row  items-center gap-1 '>
                <input type='checkbox' value='this_year' checked={selectedTime === 'this_year'} onChange={handleFilterChange} className="custom-checkbox" />
                This Year
            </label >
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row  items-center gap-1 '>
                <input type='checkbox' value='two_years' checked={selectedTime === 'two_years'} onChange={handleFilterChange} className="custom-checkbox" />
                2 Years
            </label >
            <label className='text-[16px] font-[400] text-color2 pl-10 flex flex-row  items-center gap-1 '>
                <input type='checkbox' value='three_years' checked={selectedTime === 'three_years'} onChange={handleFilterChange} className="custom-checkbox" />
                3 Years
            </label >
        </div >
    );
};

export default AdsPostedTime;