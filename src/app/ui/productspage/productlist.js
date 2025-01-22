'use client';
import React, { useState } from 'react';
import ProductCards from './card';
import Image from 'next/image';

const PaginatedProductList = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Get the products for the current page
    const currentProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };
    // Generate the page Array
    const pageButtons = [...Array(totalPages).keys()].map((i) => i + 1);

    // function to determine if a page button should be shown
    const shouldShowPageButton = (page) => {
        if (page === 0 || page === totalPages) return true;
        if (page >= currentPage - 5 && page <= currentPage + 5) return true;
        return false;
    };
    return (
        <div>
            <div className='grid grid-cols-3 justify-evenly justify-items-center  border-t-[0.5px] borderB-color3'>
                {currentProducts.map((product, i) => (
                    <ProductCards key={i} product={product} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="px-3   text-color2  disabled:opacity-50 border-[2px] border-color3 rounded-full "
                >
                    <Image src='/productspage/prev.svg' alt='arrow-left' width={14} height={7} />
                </button>
                {pageButtons.map((page, i) => (
                    shouldShowPageButton(page) && (
                        <button
                            key={i}
                            onClick={() => handlePageClick(page)}
                            className={`px-3 py-1 mx-1 text-color2 border-[2px] border-color3 rounded-full ${currentPage === page ? 'bg-color1 text-white scale-110' : ''}`}
                        >
                            {page}
                        </button>
                    )
                ))}
                { /*<span className="px-4 py-2 mx-2">{`Page ${currentPage} of ${totalPages}`}</span>*/}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-3  text-color2 border-[2px] border-color3 rounded-full disabled:opacity-50"
                >
                    <Image src='/productspage/prev.svg' alt='arrow-left' width={14} height={7} className='rotate-180' />
                </button>
            </div>
        </div>
    );
};

export default PaginatedProductList;