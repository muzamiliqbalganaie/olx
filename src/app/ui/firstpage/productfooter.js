import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductFooter = () => {
    return (
        <div className='grid grid-rows-2 justify-evenly  w-full min-h[381px] bg-[#002118] text-white  '>
            <div className='w-full grid grid-cols-6 gap-[9rem]  pt-12 items-end '>
                <Image src='/productfooter/c1.svg' alt='product_company' width={152} height={85} ></Image>
                <Image src='/productfooter/c2.svg' alt='product_company' width={152} height={85} ></Image>
                <Image src='/productfooter/image 10.png' alt='product_company' width={152} height={85} ></Image>
                <Image src='/productfooter/c4.svg' alt='product_company' width={152} height={85} ></Image>
                <Image src='/productfooter/c5.svg' alt='product_company' width={152} height={85} ></Image>
                <Image src='/productfooter/c6.svg' alt='product_company' width={152} height={85} ></Image>
            </div>
            <div className='max-w-full py-4 flex flex-row justify-between items-end'>
                <p className='text-[16px] font-[800]'>
                    <Link className='underline' href='https://help.olx.in/hc/en-us'>Help</Link>
                    <span className='px-1'>-</span>
                    <Link className='underline' href='https://www.olx.in/en-in/sitemap/most-popular'>SiteMap
                    </Link>

                </p>
                <p>
                    All rights reserved © 2006-2024 OLX
                </p>
            </div>
        </div>
    )
}


export default ProductFooter