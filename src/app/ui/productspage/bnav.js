import React from 'react'
import Search from '../firstpage/search'
import Image from 'next/image';
// import { filter } from '/productspage/filter.png'
const BodyNav = () => {
    return (
        <div className='grid grid-cols-3 justify-items-center border-b-[0.5px] border-[#D6D6D6]  py-4'>
            {/* adavance filter */}
            <div className='flex flex-row items-center justify-center md:justify-start md:pl-4 md:py-2 gap-2'>
                <Image src='/productspage/filter.png' alt='filter' width={47} height={47} />
                <span className=' w-[62px] text-[16px] font-[400] text-color2'>Advance Filters</span>
            </div>
            <div>
                <Search width='437px' height='87' />
            </div>
            {/*ads View*/}
            <div className='flex flex-row items-center justify-center md:justify-start md:pl-4 md:py-2 gap-2'>
                <span className=' w-[62px] text-[16px] font-[400] text-color2'>Ads views</span>
                <Image src='/productspage/ads.png' alt='filter' width={47} height={47} />
            </div>
        </div>
    )
}

export default BodyNav;