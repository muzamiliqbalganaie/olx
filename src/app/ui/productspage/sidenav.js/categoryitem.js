'use client';
import Image from 'next/image';
import React, { useState } from 'react'

const CategoryItem = ({ name, subcategories, count, catVehDropOpen, setCatVehDropOpen }) => {
    const [exploreOpen, setExploreOpen] = useState(false);
    return (

        <div className="relative inline-block">
            <div className='flex justify-start  items-center gap-1 whitespace-nowrap cursor-pointer bg-[#F1F2F6] rounded-[4px] px-2 my-1'
                onMouseEnter={() => (!exploreOpen)}
            // onMouseLeave={() => setCatVehDropOpen(false)}
            >
                <Image src="/productspage/select.png" width={16} height={16} alt="vehicles" />
                <button
                    className=" max-w-full text-custom1 select-none min-w-[80px] px-1 py-1 text-[24px] font-normal leading-[28.13px] text-left  underline-offset-auto"
                >
                    {name}
                </button>
            </div>
            {catVehDropOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                    <div className="py-1"
                    >
                        {subcategories.map(({ name, count }, index) => (
                            <a key={index} href="#" className="block pr-[1px] py-2 text-[16px] text-color2 font-[400]">{name}<span className='text-[16px] font-[300] text-color2'>{count}</span></a>
                        ))}
                    </div>
                </div>
            )}
        </div>

    )
}

export default CategoryItem;