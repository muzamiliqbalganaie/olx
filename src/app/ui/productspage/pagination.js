'use client';
import React, { useState } from 'react';

const Pagination = ({ totalPages, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div>
            <nav>
                <ul className='flex justify-center items-center gap-2'>
                    <li>
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className='text-[#006C54] font-[400]'
                        >
                            prev
                        </button>
                    </li>
                    {[...Array(totalPages)].map((_, i) => (
                        <li key={i}>
                            <button
                                onClick={() => {
                                    setCurrentPage(i + 1);
                                    onPageChange(i + 1);
                                }}
                                className={`text-[#006C54] font-[400] ${currentPage === i + 1 ? 'font-bold' : ''}`}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className='text-[#006C54] font-[400]'
                        >
                            nxt
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;