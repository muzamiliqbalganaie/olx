'use client';
import React, { useState } from 'react'
import Quicklinks from './quicklinks';
import Search from './search';
import AddButton from './addbutton';

const SubNav = () => {
    const [locOpen, setLocOpen] = useState(false);
    return (
        <section className='background-container max-w-full h-screen'>
            <div className=' max-w-full h-screen  justify-center flex-col items-center bg-blackOverlay  mx-auto py-10  justify-items-center'>
                <p className='text-5xl text-[800] w-[762px] justify-center mt-20 text-center' >Sell Your Home & Unused Products Effortlessly on OLX</p>
                <p className='text-2xl w-[470px] text-center my-10'>Declutter Your Space and Earn Extra Income by Selling Unused Items on OLX.</p>
                <AddButton />
                <div className="relative grid grid-cols-1 gap-4 my-3">
                    <div className=' flex flex-row items-center gap-1 whitespace-nowrap'
                    // onMouseEnter={() => setLocationOpen(!locOpen)}
                    // onMouseLeave={() => setLocationOpen(!locOpen)}
                    >
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black" />
                        </svg>
                        <button
                            className="text-custom1  select-none min-w-[80px]  px-3 py-2 text-[24px] leading-[28.13px] text-left  underline-offset-auto font-[500]"
                        >
                            Srinagar
                        </button>
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L8 8.5L15 1.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {locOpen && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"></a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Deal 2</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Deal 3</a>
                            </div>
                        </div>
                    )}
                </div>
                <Search />
                <Quicklinks />
            </div>
        </section>
    )
}

export default SubNav;