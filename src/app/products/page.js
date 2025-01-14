'use client';
import { React, useState } from 'react'
import ProductCards from '../ui/productspage/card'
import FilterProduct from '../ui/productspage/filter'
import BodyNav from '../ui/productspage/bnav'
import Pagination from '../ui/productspage/pagination'

const ProductPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const products = [...Array(30).keys()];
    const productsPerPage = 9;
    const totalPages = Math.ceil(ProductCards.length / productsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        //Fetch new data basedon the page nuumber
    }
    //calculate the start amnd end indicies for the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    return (
        <div className='w-full'>
            <BodyNav />
            <FilterProduct width={600} height={50} />
            <div className='grid grid-cols-3 justify-evenly justify-items-center  border-t-[0.5px] borderB-color3'>
                {currentProducts.map((product, i) => (
                    <ProductCards key={i} product={product} />
                ))}
            </div>
            <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    )
}

export default ProductPage;