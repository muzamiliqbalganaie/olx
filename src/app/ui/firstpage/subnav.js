'use client';
import React, { useState } from 'react'

const SubNav = () => {
    const [locOpen, setLocOpen] = useState(false);
    return (
        <section className='background-container w-full h-screen'>
            <div className=' w-full h-screen  justify-center flex-col items-center bg-blackOverlay grid grid-rows-6 mx-auto py-10  justify-items-center'>
                <p className='text-3xl' >Sell Your Home & Unused Products Effortlessly on OLX</p>
                <p className='text-3xl'>Declutter Your Space and Earn Extra Income by Selling Unused Items on OLX.</p>
                <button className="max-w-[224px] h-[73px] items-center  px-4 py-2 bg-[#006C54] text-[#FFFFFF]  rounded-full font-[400] text-[24px]">+ Post Ads Now</button>
                <div className="relative grid grid-cols-1 gap-4">
                    <div className=' flex flex-row items-center gap-1 whitespace-nowrap'
                    // onMouseEnter={() => setLocationOpen(!locOpen)}
                    // onMouseLeave={() => setLocationOpen(!locOpen)}
                    >
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black" />
                        </svg>
                        <button
                            className="text-custom1  select-none min-w-[80px]  px-3 py-2 text-[24px] font-normal leading-[28.13px] text-left  underline-offset-auto"
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
                <div className="relative w-[813px]">
                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 " width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.5417 37.5417L46.375 46.375M6.625 24.2917C6.625 28.9772 8.4863 33.4707 11.7994 36.7839C15.1126 40.097 19.6062 41.9583 24.2917 41.9583C28.9772 41.9583 33.4707 40.097 36.7839 36.7839C40.097 33.4707 41.9583 28.9772 41.9583 24.2917C41.9583 19.6062 40.097 15.1126 36.7839 11.7994C33.4707 8.4863 28.9772 6.625 24.2917 6.625C19.6062 6.625 15.1126 8.4863 11.7994 11.7994C8.4863 15.1126 6.625 19.6062 6.625 24.2917Z" stroke="#6D6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="search" placeholder="Search To Buy..." className="w-full h-[73px] pl-[5rem] pr-4 py-2 bg-[#FFFFFF] border-[1px] border-[#006C54]  rounded-full font-[400] text-[24px]" />
                    <button className='absolute mx-4 bottom-0 w-[84px] h-[84px] bg-[#006C54] rounded-full inline-flex'>
                        <div className='m-auto'>
                            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.5417 37.5417L46.375 46.375M6.625 24.2917C6.625 28.9772 8.4863 33.4707 11.7994 36.7839C15.1126 40.097 19.6062 41.9583 24.2917 41.9583C28.9772 41.9583 33.4707 40.097 36.7839 36.7839C40.097 33.4707 41.9583 28.9772 41.9583 24.2917C41.9583 19.6062 40.097 15.1126 36.7839 11.7994C33.4707 8.4863 28.9772 6.625 24.2917 6.625C19.6062 6.625 15.1126 8.4863 11.7994 11.7994C8.4863 15.1126 6.625 19.6062 6.625 24.2917Z" stroke="#6D6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className='grid grid-cols-5 gap-10 py-10'>
                    <div className='flex flex-col items-center'>
                        <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.35714 30.5C3.29643 30.5 2.38871 30.2332 1.634 29.6995C0.879285 29.1659 0.501286 28.5236 0.5 27.7727V3.22727C0.5 2.47727 0.878 1.83545 1.634 1.30182C2.39 0.768182 3.29771 0.500909 4.35714 0.5H23.6429C24.7036 0.5 25.6119 0.767273 26.3679 1.30182C27.1239 1.83636 27.5013 2.47818 27.5 3.22727V27.7727C27.5 28.5227 27.1226 29.165 26.3679 29.6995C25.6132 30.2341 24.7049 30.5009 23.6429 30.5H4.35714ZM4.35714 26.4091V27.7727H23.6429V26.4091H4.35714ZM4.35714 23.6818H23.6429V7.31818H4.35714V23.6818ZM4.35714 4.59091H23.6429V3.22727H4.35714V4.59091Z" fill="black" />
                        </svg>
                        <span> helloddddddddddd</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.35714 30.5C3.29643 30.5 2.38871 30.2332 1.634 29.6995C0.879285 29.1659 0.501286 28.5236 0.5 27.7727V3.22727C0.5 2.47727 0.878 1.83545 1.634 1.30182C2.39 0.768182 3.29771 0.500909 4.35714 0.5H23.6429C24.7036 0.5 25.6119 0.767273 26.3679 1.30182C27.1239 1.83636 27.5013 2.47818 27.5 3.22727V27.7727C27.5 28.5227 27.1226 29.165 26.3679 29.6995C25.6132 30.2341 24.7049 30.5009 23.6429 30.5H4.35714ZM4.35714 26.4091V27.7727H23.6429V26.4091H4.35714ZM4.35714 23.6818H23.6429V7.31818H4.35714V23.6818ZM4.35714 4.59091H23.6429V3.22727H4.35714V4.59091Z" fill="black" />
                        </svg>
                        <span> hello</span>
                    </div>
                    <div className='flex flex-col items-center '>
                        <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.35714 30.5C3.29643 30.5 2.38871 30.2332 1.634 29.6995C0.879285 29.1659 0.501286 28.5236 0.5 27.7727V3.22727C0.5 2.47727 0.878 1.83545 1.634 1.30182C2.39 0.768182 3.29771 0.500909 4.35714 0.5H23.6429C24.7036 0.5 25.6119 0.767273 26.3679 1.30182C27.1239 1.83636 27.5013 2.47818 27.5 3.22727V27.7727C27.5 28.5227 27.1226 29.165 26.3679 29.6995C25.6132 30.2341 24.7049 30.5009 23.6429 30.5H4.35714ZM4.35714 26.4091V27.7727H23.6429V26.4091H4.35714ZM4.35714 23.6818H23.6429V7.31818H4.35714V23.6818ZM4.35714 4.59091H23.6429V3.22727H4.35714V4.59091Z" fill="black" />
                        </svg>
                        <span> hello</span>
                    </div>
                    <div className='flex flex-col items-center '>
                        <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.35714 30.5C3.29643 30.5 2.38871 30.2332 1.634 29.6995C0.879285 29.1659 0.501286 28.5236 0.5 27.7727V3.22727C0.5 2.47727 0.878 1.83545 1.634 1.30182C2.39 0.768182 3.29771 0.500909 4.35714 0.5H23.6429C24.7036 0.5 25.6119 0.767273 26.3679 1.30182C27.1239 1.83636 27.5013 2.47818 27.5 3.22727V27.7727C27.5 28.5227 27.1226 29.165 26.3679 29.6995C25.6132 30.2341 24.7049 30.5009 23.6429 30.5H4.35714ZM4.35714 26.4091V27.7727H23.6429V26.4091H4.35714ZM4.35714 23.6818H23.6429V7.31818H4.35714V23.6818ZM4.35714 4.59091H23.6429V3.22727H4.35714V4.59091Z" fill="black" />
                        </svg>
                        <span> hello</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.35714 30.5C3.29643 30.5 2.38871 30.2332 1.634 29.6995C0.879285 29.1659 0.501286 28.5236 0.5 27.7727V3.22727C0.5 2.47727 0.878 1.83545 1.634 1.30182C2.39 0.768182 3.29771 0.500909 4.35714 0.5H23.6429C24.7036 0.5 25.6119 0.767273 26.3679 1.30182C27.1239 1.83636 27.5013 2.47818 27.5 3.22727V27.7727C27.5 28.5227 27.1226 29.165 26.3679 29.6995C25.6132 30.2341 24.7049 30.5009 23.6429 30.5H4.35714ZM4.35714 26.4091V27.7727H23.6429V26.4091H4.35714ZM4.35714 23.6818H23.6429V7.31818H4.35714V23.6818ZM4.35714 4.59091H23.6429V3.22727H4.35714V4.59091Z" fill="black" />
                        </svg>
                        <span> hello</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubNav;