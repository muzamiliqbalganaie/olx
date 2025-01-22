'use client';
import React, { useState } from 'react'
import Quicklinks from './quicklinks';
import Search from './search';
import AddButton from './addbutton';

const SubNav = () => {
    const [locOpen, setLocOpen] = useState(false);
    return (
        <section className='background-container max-w-full h-screen  '>
            <div className=' max-w-full   justify-center flex-col items-center   mx-auto pt-10  justify-items-center  '>
                <div className='flex flex-col items-center max-w-full  bg-white bg-opacity-27 mx-auto py-10 mt-52 mb-20  justify-items-center'>
                    <p className='text-[73px] font-[800] w-full px-40 justify-center  text-center text-color3 leading-[85.55px]' >Sell Your Home & Unused Products Effortlessly on OLX</p>
                    <p className='text-2xl w-[621.01px]  font-[400] text-center my-2 text-color3 leading-[28.13px]'>Declutter Your Space and Earn Extra Income by Selling Unused Items on OLX.</p>
                </div>
                <AddButton />
                <Search width='437px' height='69px' />
                <Quicklinks />
            </div>
        </section>
    )
}

export default SubNav;