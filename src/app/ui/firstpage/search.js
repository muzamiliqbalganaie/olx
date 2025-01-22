'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import '../../globals.css';

const Search = ({ width, height }) => {
    const [locOpen, setLocOpen] = useState(false);
    const [location, setLocation] = useState('Srinagar');

    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
        setLocOpen(false);
    };


    return (
        <div className="relative py-10 min-w-[813px] " >
            <div className="flex items-center border border-[#006C54] rounded-full bg-white w-full">
                <div className="relative flex items-center w-full py-4">
                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 pt-2" width="53" height="53" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C14.4183 20 18 16.4183 18 12C18 7.58172 14.4183 4 10 4C5.58172 4 2 7.58172 2 12C2 16.4183 5.58172 20 10 20Z" stroke="#6D6D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 22L18 18" stroke="#6D6D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="search" placeholder="Search To Buy..." className="u-search w-full text-[24px] font-[400] pl-[4.5rem] pr-4  bg-transparent border-none rounded-l-full focus:outline-none appearance-none" />
                    <div className="absolute right-3 align-middle border-[1px] border-[rgba(0, 0, 0, 0.2)] px-4 rounded-[10px] ">
                        <div className='flex justify-evenly  items-center gap-1 whitespace-nowrap right-3'>
                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black" />
                            </svg>
                            <button
                                className="text-custom1 select-none max-w-[156px] px-2 py-2 text-[24px] leading-[28.13px] text-left underline-offset-auto font-[500] border-r-[1px] border-[rgba(0, 0, 0, 0.2)] "
                                onClick={() => setLocOpen(!locOpen)}>
                                {location}
                            </button>
                            <Image src="/productspage/Arrow.svg" alt="arrow" width={14} height={7} />

                        </div>
                        {locOpen && (
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleLocationChange('Location 1')}>Location 1</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleLocationChange('Location 2')}>Location 2</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleLocationChange('Location 3')}>Location 3</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Search;