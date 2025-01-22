'use client';
import { React, useState } from 'react';
import PaginatedProductList from '../ui/productspage/productlist';
import FilterProduct from '../ui/productspage/filter';
import BodyNav from '../ui/productspage/bnav';


const ProductPage = () => {
    // const [currentPage, setCurrentPage] = useState(1);
    const products = [...Array(90).keys()];
    // const productsPerPage = 9;
    // const totalPages = Math.ceil(ProductCards.length / productsPerPage);

    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    //     //Fetch new data basedon the page nuumber
    // }
    //calculate the start amnd end indicies for the current page
    // const startIndex = (currentPage - 1) * productsPerPage;
    // const endIndex = startIndex + productsPerPage;
    // const currentProducts = products.slice(startIndex, endIndex);
    return (
        <div className='w-full'>
            <BodyNav />
            <FilterProduct width={600} height={50} />
            <PaginatedProductList products={products} />


        </div>
    )
}

export default ProductPage;