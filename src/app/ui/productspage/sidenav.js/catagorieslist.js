'use client'
import { React, useState } from "react";
import CategoryItem from "./categoryitem";

const categories = [
    {
        name: 'Vehicles',
        subcategories: [
            { name: 'Bikes', count: 44461 },
            { name: 'Cars', count: 4852 },
            { name: 'Trucks', count: 4622 },
            { name: 'Scooters', count: 12345 }
        ]
    },
    {
        name: 'Smartphones',
        subcategories: [
            { name: 'Android Phones', count: 23456 },
            { name: 'iPhones', count: 12345 },
            { name: 'Feature Phones', count: 6789 },
            { name: 'Accessories', count: 4321 }
        ]
    },
    {
        name: 'Houses and Apartments',
        subcategories: [
            { name: 'Apartments', count: 5678 },
            { name: 'Villas', count: 2345 },
            { name: 'Townhouses', count: 1234 },
            { name: 'Studios', count: 789 }
        ]
    },
    {
        name: 'Electronics',
        subcategories: [
            { name: 'Laptops', count: 3456 },
            { name: 'Tablets', count: 2345 },
            { name: 'Cameras', count: 1234 },
            { name: 'Wearables', count: 678 }
        ]
    },
    {
        name: 'Furniture',
        subcategories: [
            { name: 'Sofas', count: 4567 },
            { name: 'Beds', count: 3456 },
            { name: 'Dining Tables', count: 2345 },
            { name: 'Chairs', count: 1234 }
        ]
    }
];

const CategoriesList = () => {
    const [catVehDropOpen, setCatVehDropOpen] = useState(false);
    return (
        <div className='w-full flex flex-col p-4 mx-auto border-[0.5px] border-[#D6D6D6DD]'>
            <p className='text-color2 text-[24px] font-[500]'>Categories</p>
            {categories.map((category, index) => (
                <CategoryItem
                    key={index}
                    name={category.name}
                    subcategories={category.subcategories}
                    count={category.subcategories.count}
                    catVehDropOpen={catVehDropOpen}
                    setCatVehDropOpen={setCatVehDropOpen}
                />
            ))}
        </div>
    );
};

export default CategoriesList;