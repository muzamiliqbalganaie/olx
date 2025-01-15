'use client';
import Image from 'next/image';
import { React, useState } from 'react';

const CategoryItem = ({ name, subcategories, isCatOpen, isSubCatOpen, onMouseEnter, onMouseLeave, onSubCatSel }) => {
    const [openSubcategories, setOpenSubcategories] = useState(Array(subcategories.length).fill(false));

    const handleSubcategoryMouseEnter = (index) => {
        const newOpenSubcategories = openSubcategories.map((isCatOpen, i) => i === index);
        setOpenSubcategories(newOpenSubcategories);
    };

    const handleSubcategoryMouseLeave = () => {
        setOpenSubcategories(Array(subcategories.length).fill(false));
    };

    return (
        <div className={`relative inline-block gap-3 ${isCatOpen ? 'h-auto' : 'h-12'}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div className={`flex justify-start items-center whitespace-nowrap cursor-pointer bg-[#F1F2F6] rounded-[4px] px-2 my-1 ${isCatOpen ? 'py-2' : 'py-1'}`}>
                {!isCatOpen && <Image
                    src="/productspage/Mobile Social Networking.svg"
                    width={30}
                    height={30}
                    alt={`${name} icon`}
                    className={`transform transition-transform duration-300 ${isCatOpen ? 'rotate-180 ' : 'rotate-0'}`}
                />}
                {isCatOpen && <Image
                    src="/productspage/Arrow.svg"
                    width={16}
                    height={16}
                    alt={`${name} icon`}
                    className={'transform transition-transform duration-300 '}
                />}
                <button
                    className="max-w-full text-custom1 select-none min-w-[80px] px-1 py-1 text-[24px] font-normal leading-[28.13px] text-left underline-offset-auto"
                    aria-expanded={isCatOpen}
                    aria-haspopup="true"
                >
                    {name}
                </button>
            </div>
            {isCatOpen && (
                <div className={`${isCatOpen ? 'max-h-60 overflow-y-scroll' : 'h-auto'}`}>
                    {subcategories.map((sub, index) => (
                        <div key={sub.id} className={`relative ${isCatOpen ? 'max-h-60 overflow-y-scroll' : 'h-auto'}`}>
                            <a
                                href="#"
                                className="block px-4 py-2 text-[16px] text-color2 font-[400] hover:bg-gray-100"

                                onClick={() => onSubCatSel(sub)}
                            >
                                {sub.name}
                                <span className='ml-2 text-[16px] font-[300] text-color2'>
                                    ({sub.count})
                                </span>
                            </a>
                            {isSubCatOpen && (
                                <div key={index} className={`${isCatOpen ? 'max-h-60 overflow-y-scroll' : 'h-auto'}`}>
                                    {sub.brands.map((brand, brandIndex) => (
                                        <label key={sub.brands.id} className="flex items-center gap-2">
                                            <a
                                                key={sub.brands.id}
                                                href="#"
                                                className="block px-4 py-2 text-[16px] text-color2 font-[400] hover:bg-gray-100"
                                                onMouseEnter={() => handleSubcategoryMouseEnter(brandIndex)}
                                                onMouseLeave={handleSubcategoryMouseLeave}
                                                onClick={() => onSubCatSel(brand)}
                                            >
                                                {brand}
                                                {console.log('Selected brand:', brand.id)}
                                            </a>
                                        </label>
                                    ))}
                                </div>

                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryItem;