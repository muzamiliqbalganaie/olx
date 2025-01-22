'use client'
import { React, useState, useCallback, useEffect } from 'react';
import '../../../globals.css'
import axios from 'axios';
import { fetchProducts } from '../../../../../modules/products';

const PriceRange = ({ onFilterChange }) => {
    const [rangeValue, setRangeValue] = useState(1);

    const handkeRangeChange = (event) => {
        const value = event.target.value;
        setRangeValue(value);
        debounceFetchData(value);
    }

    // Function to fetch data based on the price range using the module
    const fetchData = async (value) => {
        try {
            const data = await fetchProducts(value);
            onFilterChange(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // Debounce function to limot the rate of api calls
    const debounce = (func, wait) => {
        let timeout;
        return function (...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    };
    //Memoized version of debounce fetchData
    const debounceFetchData = useCallback(debounce(fetchData, 300), []);

    //handle range change
    const handleRangeChange = (event) => {
        const value = event.target.value;
        setRangeValue(value);
        debounceFetchData(value);
    }

    //fetch data intiallly when the component is mounted
    useEffect(() => {
        fetchData(rangeValue);
    }, []);

    return (
        <div className='w-full flex flex-col gap-2 border-[0.5px] border-[#D6D6D6DD] py-1'>
            <p className='text-color2 text-[24px] font-[500] border-b-[0.5px] border-[#D6D6D6DD] p-10'>Price Range</p>
            <div className='flex flex-col space-y-2 p-4'>
                <label className='flex justify-between'>
                    <span>{rangeValue}</span>
                    <span>{1000000}</span>
                </label>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    value={rangeValue}
                    onChange={handleRangeChange}
                    className="w-full h-2 bg-gray-300 outline-none opacity-70 transition-opacity duration-200 hover:opacity-100 appearance-none cursor-pointer custom-slider"
                    id="myRange"
                    step="1"
                />

                <label className='font-[500] text-[16px] text-color2 text-center'>Choose a price range above</label>
            </div>
        </div>
    );
};

export default PriceRange;