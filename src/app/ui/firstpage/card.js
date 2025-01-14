import React, { useState } from 'react';
import Image from 'next/image';

const FeaturedProductCard = ({ id, title, description, picture, location, date, isFeatured, price }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div className=" relative max-w-sm rounded min-w-[433px] min-h-[413px] overflow-hidden shadow-lg border border-[#006C54] gap-6">
            <Image
                className="w-full"
                src={picture}
                alt={title}
                width={433}
                height={250}
            />
            <div className=' absolute w-[29px] h-[29px] right-[5%] top-[5%] bg-white rounded-full justify-center items-center flex cursor-pointer ' onClick={toggleWishlist} >
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
            <div className="relative pl-0">
                <div className="absolute flex max-w-[134px] h-[28px] items-center bottom-[8rem] left-5">
                    {isFeatured && <span className="bg-[#006C54] text-white text-[24px] font-[400] px-2 py-1 rounded">Featured</span>}
                </div>
                <div className={`relative px-4 ${isFeatured ? 'border-l-8 border-transparent' : 'top-2'}`}>
                    {isFeatured && (
                        <div className="absolute top-2 -left-2 h-[124%] border-l-8 border-[#006C54]"></div>
                    )}
                    <p className="text-black text-[24px] font-[400] mt-5">₹ {price}</p>
                    <p className="text-black text-[16px] h-[38px] font-[400] mb-5">{description}</p>
                    <p className="absolute text-black text-[16px] font-[400]">{location}</p>
                    <p className="text-black text-[16px] text-right"> {date}</p> {/* Displaying the id */}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProductCard;
