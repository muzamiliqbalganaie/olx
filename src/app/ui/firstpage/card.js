import React from 'react';
import Image from 'next/image';

const ProductCard = ({ id, title, description, picture, location, date, isFeatured, price }) => {
    return (
        <div className=" relative max-w-sm rounded min-w-[433px] min-h-[413px] overflow-hidden shadow-lg border border-[#006C54] gap-6">
            <Image
                className="w-full"
                src={picture}
                alt={title}
                width={433}
                height={250}
            />
            <div className=' absolute w-[29px] h-[29px] right-[5%] top-[5%] bg-white rounded-full justify-center items-center flex'>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.12211 7.80143C1.74752 7.43001 1.45074 6.9879 1.24906 6.50085C1.04737 6.0138 0.944818 5.49156 0.947368 4.96455C0.947368 3.89867 1.37157 2.87645 2.12665 2.12275C2.88173 1.36906 3.90584 0.945643 4.97368 0.945643C6.47053 0.945643 7.77789 1.75888 8.46947 2.96928H9.53053C9.88211 2.35373 10.3908 1.84218 11.0049 1.48671C11.619 1.13124 12.3165 0.944544 13.0263 0.945643C14.0942 0.945643 15.1183 1.36906 15.8734 2.12275C16.6284 2.87645 17.0526 3.89867 17.0526 4.96455C17.0526 6.07093 16.5789 7.09221 15.8779 7.80143L9 14.6572L2.12211 7.80143ZM16.5411 8.47282C17.4411 7.56502 18 6.33571 18 4.96455C18 3.64787 17.476 2.38513 16.5432 1.4541C15.6105 0.523065 14.3454 1.70704e-05 13.0263 1.70704e-05C11.3684 1.70704e-05 9.9 0.803799 9 2.05202C8.54062 1.41514 7.93573 0.89677 7.23551 0.539901C6.53528 0.183032 5.7599 -0.00204662 4.97368 1.70704e-05C3.65458 1.70704e-05 2.38951 0.523065 1.45676 1.4541C0.524012 2.38513 0 3.64787 0 4.96455C0 6.33571 0.558947 7.56502 1.45895 8.47282L9 16L16.5411 8.47282Z" fill="black" />
                </svg>
            </div>
            <div className=" relative px-6 py-4">
                <div className=" absolute flex max-w-[134px] h-[28px]  items-center bottom-[7rem]  ">
                    {isFeatured && <span className="bg-[#006C54] text-white text-[24px] font-[400] px-2 py-1 rounded">Featured</span>}
                </div>
                <p className="text-black text-[24px] font-[400]">₹ {price}</p>
                <p className="text-black text-[16px] h-[38px] font-[400]">{description}</p>
                <p className="absolute text-black text-[16px] font-[400]">{location}</p>
                <p className="text-black text-[16px] text-right"> {date}</p> {/* Displaying the id */}
            </div>
        </div>
    );
};

export default ProductCard;
