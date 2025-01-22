'use client';
import Image from 'next/image';
import { useState } from 'react';

const ProductCards = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div className='max-w-sm sm:max-w-xs md:max-w-md lg:max-w-lg flex flex-col justify-start items-start rounded-lg border border-[#D6D6D6] mx-2 my-2'>
            <Image src='/productfooter/unsplash_d4w4V32pg7k.png' alt='product_img' width={308} height={250} className='rounded-t-md w-full object-cover' />
            <p className='w-full text-[24px] font-[400] border-b-[1px] border-[#D6D6D6] px-2'>House</p>
            <div className='w-full border-b-[1px] border-[#D6D6D6] flex flex-col justify-start gap-[1px] px-2'>
                <p className='text-[20px] font-[600]'>Luxury Family House</p>
                <p className='text-[16px] font-[400]'>Duplex House</p>
                <div className='flex items-center'>
                    <Image src='/productfooter/location.svg' alt='location_icon' width={16} height={16} />
                    <p className='text-[16px] font-[400] ml-1'>Dakha Bangladesh</p>
                </div>
            </div>
            <div className='w-full border-b-[1px] border-[#D6D6D6] flex flex-row justify-between items-center px-2'>
                <div className='flex flex-col'>
                    <p className='text-[16px] font-[400]'>Price</p>
                    <p className='text-[16px] font-[400]'>$ 7,19,500</p>
                </div>
                <div className='mt-4 cursor-pointer' onClick={toggleWishlist}>
                    <svg
                        width="27"
                        height="27"
                        viewBox="0 0 24 24"
                        fill={isWishlisted ? 'red' : 'none'}
                        stroke={isWishlisted ? 'red' : 'black'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                    </svg>
                </div>
            </div>
            <div className='w-full flex justify-center mx-auto my-4 px-10'>
                <button className='w-full rounded-md bg-[#006C54] text-white text-[20px] font-[400]'>Contact</button>
            </div>
        </div>
    );
};

export default ProductCards;