'use client';
import Image from 'next/image';
import { useState } from 'react';
import logo from '/public/Logo.svg';
import '../../globals.css';
import SubNav from './subnav';

const Navbar = () => {
    const [exploreOpen, setExploreOpen] = useState(false);
    const [dealsOpen, setDealsOpen] = useState(false);
    return (
        <header className=' fixed top-0 left-0 right-0  z-50 '>
            <nav className=" p-4  max-w-full bg-white ">
                <div className="container mx-auto flex justify-between  items-center max-w-[1680px]">
                    <div className="text-green-900 font-bold text-2xl">
                        <Image src={logo} alt="header logo" width={123} height={63} />
                    </div>
                    <div className="flex space-x-4">
                        <div className="relative inline-block">
                            <div className='flex justify-evenly  items-center gap-1 whitespace-nowrap'
                                onMouseEnter={() => setExploreOpen(!exploreOpen)}
                                onMouseOut={() => setExploreOpen(exploreOpen)}
                            >
                                <button
                                    className="text-custom1 select-none min-w-[80px] px-3 py-2 text-[24px] font-normal leading-[28.13px] text-left  underline-offset-auto"
                                >
                                    Explore
                                </button>
                                <svg width="24px" height="24px" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.0413 0.424414L1.04193 0.576055C0.859698 0.578161 0.681493 0.629928 0.526495 0.72578C0.371497 0.821633 0.245576 0.957942 0.162284 1.12004C0.078993 1.28213 0.041487 1.46387 0.0538015 1.6457C0.0661159 1.82753 0.127787 2.00255 0.232175 2.15193L9.34137 15.0756C9.7189 15.6115 10.6169 15.6039 10.9863 15.0618L19.8765 1.98643C19.9794 1.83562 20.039 1.65948 20.0488 1.47717C20.0587 1.29485 20.0183 1.11333 19.9323 0.95232C19.8462 0.79131 19.7176 0.656971 19.5605 0.563901C19.4034 0.470831 19.2239 0.422588 19.0413 0.424414Z" fill="black" />
                                </svg>
                            </div>
                            {exploreOpen && (
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                >
                                    <div className="py-1"
                                    >
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ghi</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">def</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">abc</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative inline-block">
                            <div className=' inline-flex items-center gap-1 whitespace-nowrap'
                                onMouseEnter={() => setDealsOpen(!dealsOpen)}
                                onMouseLeave={() => setDealsOpen(dealsOpen)}
                            >
                                <button
                                    className="text-custom1  select-none min-w-[80px]  px-3 py-2 text-[24px] font-normal leading-[28.13px] text-left  underline-offset-auto"
                                >
                                    Today&apos;s <span className='inline-block'>deal </span>
                                </button>
                                <svg width="24px" height="24px" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.0413 0.424414L1.04193 0.576055C0.859698 0.578161 0.681493 0.629928 0.526495 0.72578C0.371497 0.821633 0.245576 0.957942 0.162284 1.12004C0.078993 1.28213 0.041487 1.46387 0.0538015 1.6457C0.0661159 1.82753 0.127787 2.00255 0.232175 2.15193L9.34137 15.0756C9.7189 15.6115 10.6169 15.6039 10.9863 15.0618L19.8765 1.98643C19.9794 1.83562 20.039 1.65948 20.0488 1.47717C20.0587 1.29485 20.0183 1.11333 19.9323 0.95232C19.8462 0.79131 19.7176 0.656971 19.5605 0.563901C19.4034 0.470831 19.2239 0.422588 19.0413 0.424414Z" fill="black" />
                                </svg>
                            </div>
                            {dealsOpen && (
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Deal 1</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Deal 2</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Deal 3</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center max-w-[392px] space-x-4">
                        <button className="w-[191px] px-4 py-2 bg-[#CFE9DC] text-[#006C54] rounded-full font-[400] text-[24px]">LOGIN</button>
                        <button className="w-[191px] px-4 py-2 bg-[#006C54] text-[#FFFFFF]  rounded-full font-[400] text-[24px]">+ Sell</button>
                    </div>
                </div>
            </nav>
        </header>


    );
};

export default Navbar;
