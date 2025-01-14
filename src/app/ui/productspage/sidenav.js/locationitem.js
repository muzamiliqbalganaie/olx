import Image from 'next/image';
import React, { useState } from 'react'

const LocationItem = ({ name, cities, locDropOpen, setLocDropOpen, onFilterChange }) => {
    const [selectedLoc, setSelectedLoc] = useState('');
    const exploreOpen = locDropOpen;

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setSelectedLoc(value);
        onFilterChange(value);
    };
    return (
        <div className="relative inline-block">
            <div className='flex justify-start  items-center gap-1 whitespace-nowrap cursor-pointer px-2 my-1'
                onMouseEnter={() => setLocDropOpen(!exploreOpen) && handleFilterChange()}
                onMouseLeave={() => setLocDropOpen(false)}
            >
                <Image src="/productspage/countryflag.png" alt="country flag" width={24} height={16} />
                <button
                    className="text-custom1 select-none min-w-[80px] px-3 py-2 text-[24px] font-normal leading-[28.13px] text-left  underline-offset-auto"
                >
                    {name}
                </button>
            </div>
            {locDropOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lgring-1 ring-black ring-opacity-5 bg-[#F1F2F6] "
                >
                    <div className="py-1"
                    >
                        {cities.map((city, index) => (
                            <label key={index} className='text-[16px] font-[400] text-color2 pl-10 flex flex-row gap-1'>
                                <input type='radio' name='city' value={city.name} />
                                {city.name}
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>

    )
}

export default LocationItem;