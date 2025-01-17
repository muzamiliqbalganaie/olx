import React from 'react';

const SubcategoryItem = ({ sub, isSubCatOpen, onbrandMouseEnter, onbrandMouseLeave, onSubCatSel, onBrandSel }) => (
    <div key={`subcategory-${sub.id}`} className={`relative ${isSubCatOpen ? 'max-h-60 overflow-y-scroll' : 'h-auto'}`}>
        <a
            href="#"
            className="block px-4 py-2 text-[16px] text-color2 font-[400] hover:bg-gray-100"
            onMouseEnter={onbrandMouseEnter}
            onMouseLeave={onbrandMouseLeave}
            onClick={() => onSubCatSel(sub)}
        >
            {sub.name}
            <span className='ml-2 text-[16px] font-[300] text-color2'>
                ({sub.count})
            </span>
        </a>
        {isSubCatOpen && sub.brands && Array.isArray(sub.brands) && (
            <div className="flex flex-col gap-2">
                {sub.brands.map((brand, brandIndex) => (
                    <label key={`brand-${brand.id}-${brandIndex}`} className="flex items-center gap-2">
                        <a
                            href="#"
                            className="block px-4 py-2 text-[16px] text-color2 font-[400] hover:bg-gray-100"
                            onClick={() => onBrandSel(brand)}
                        >
                            {brand.name}
                        </a>
                    </label>
                ))}
            </div>
        )}
    </div>
);

export default SubcategoryItem;