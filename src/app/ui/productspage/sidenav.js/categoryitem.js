'use client';
import Image from 'next/image';
import { React, useEffect, useState } from 'react';
import '../../../globals.css'

const CategoryItem = ({ name, subcategories, isCatOpen, onMouseEnter, onMouseLeave, onSubCatSel }) => {
    const [openSubcategories, setOpenSubcategories] = useState(Array(subcategories.length).fill(false));
    console.log('Subcategories:', subcategories);
    useEffect(() => {
        console.log('iscatopen:', isCatOpen);
    }, [isCatOpen]);
    const handleSubcategoryMouseEnter = (index) => {
        const newOpenSubcategories = openSubcategories.map((isCatOpen, i) => i === index);
        setOpenSubcategories(newOpenSubcategories);
    };

    const handleSubcategoryMouseLeave = () => {
        setOpenSubcategories(Array(subcategories.length).fill(false));
    };

    const handleSubCategory = async (brand) => {
        setSelectedSubcategory();
        try {
            // const response = await axios.post('http://localhost:3000/api/brand', brand);
            // console.log(response.data);
            console.log('Brand posted:', brand);
        } catch (error) {
            console.error('Error in posting brand:', error);
        }
    }

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
                <div className={`${isCatOpen ? 'max-h-full ' : 'h-auto'}`}>
                    {subcategories.map((sub, index) => (
                        <div key={index} className={`relative ${isCatOpen ? 'max-h-full  ' : 'h-auto'}`}>
                            <a
                                href="#"
                                className="block px-4 py-2 text-[20px] text-color2 font-[400] "
                                onMouseEnter={() => handleSubcategoryMouseEnter(index)}
                                onMouseLeave={handleSubcategoryMouseLeave}
                                onClick={() => onSubCatSel(sub)}
                            >
                                {sub.name}
                                <span className='ml-2 text-[20px] font-[300] text-color2'>
                                    ({sub.count})
                                </span>
                            </a>
                            <div className={`${isCatOpen ? 'max-h-12' : 'h-auto'} flex flex-col gap-2 pl-4 overflow-y-auto custom-scrollbar `}>
                                {sub.brands.map((brand, brandIndex) => (
                                    <label key={`brand-${brand.id}-${brandIndex}`} className="flex items-center gap-[1px] ">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <a
                                            href="#"
                                            className="block  text-[14px] text-color2 font-[400]"
                                            onClick={() => handleSubCategory(brand)}
                                        >
                                            {brand.name}
                                            <span className=' text-[14px] font-[300] text-color2'>
                                                ({brand.count})
                                            </span>
                                        </a>
                                    </label>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            )
            }
        </div >
    );
};

export default CategoryItem;