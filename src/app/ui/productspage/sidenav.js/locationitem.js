'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const LocationItem = ({ name, cities, isLocOpen, onMouseEnter, onMouseLeave }) => {
    const [openCities, setOpenCities] = useState(Array(cities.length).fill(false));

    const handleCityMouseEnter = (index) => {
        const newOpenCities = openCities.map((isOpen, i) => i === index);
        setOpenCities(newOpenCities);
    };

    const handleCityMouseLeave = () => {
        setOpenCities(Array(cities.length).fill(false));
    };

    return (
        <div className={`relative inline-block  ${isLocOpen ? 'h-auto' : 'h-8'}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div className={`flex justify-start items-center whitespace-nowrap cursor-pointer  rounded-[4px] px-2 my-1 ${isLocOpen ? 'py-2' : 'py-1'}`}>
                <Image src="/productspage/countryflag.png" alt="country flag" width={24} height={16} />
                <button
                    className="text-custom1 select-none min-w-[85px] px-3  text-[16px] font-[500] leading-[18.7spx] text-left underline-offset-auto"
                >
                    {name}
                </button>
            </div>
            {isLocOpen && (
                <div className={`${isLocOpen ? 'max-h-full ' : 'h-auto'}`}>
                    {cities.map((city, index) => (
                        <div key={index} className={`relative bg-color5 ${isLocOpen ? 'max-h-full  ' : 'h-auto'}`}>
                            <label className='text-[16px] font-[400] text-color4 pl-3 flex flex-row gap-1 p-2 items-center ,
                            leading-[18.75px]'>
                                <input type='checkbox' name='city' value={city.name} className='custom-checkbox' />
                                {city.name}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LocationItem;