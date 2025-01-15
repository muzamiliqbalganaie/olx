'use client'
import { React, useState } from "react";
import CategoryItem from "./categoryitem";
import axios from 'axios';
const categories = [
    {
        id: 1,
        name: 'Vehicles',
        subcategories: [
            {
                id: 1, name: 'Bikes', count: 44461, brands: [
                    { id: 1, name: 'Yamaha' },
                    { id: 2, name: 'Honda' },
                    { id: 3, name: 'Suzuki' }
                ]
            },
            {
                id: 2, name: 'Cars', count: 4852, brands: [
                    { id: 1, name: 'Toyota' },
                    { id: 2, name: 'Ford' },
                    { id: 3, name: 'BMW' }
                ]
            },
            {
                id: 3, name: 'Trucks', count: 4622, brands: [
                    { id: 1, name: 'Volvo' },
                    { id: 2, name: 'Scania' },
                    { id: 3, name: 'MAN' }
                ]
            },
            {
                id: 4, name: 'Scooters', count: 12345, brands: [
                    { id: 1, name: 'Vespa' },
                    { id: 2, name: 'Honda' },
                    { id: 3, name: 'Yamaha' }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Smartphones',
        subcategories: [
            {
                id: 1, name: 'Android Phones', count: 23456, brands: [
                    { id: 1, name: 'Samsung' },
                    { id: 2, name: 'OnePlus' },
                    { id: 3, name: 'Google' }
                ]
            },
            {
                id: 2, name: 'iPhones', count: 12345, brands: [
                    { id: 1, name: 'Apple' }
                ]
            },
            {
                id: 3, name: 'Feature Phones', count: 6789, brands: [
                    { id: 1, name: 'Nokia' },
                    { id: 2, name: 'Samsung' },
                    { id: 3, name: 'LG' }
                ]
            },
            {
                id: 4, name: 'Accessories', count: 4321, brands: [
                    { id: 1, name: 'Anker' },
                    { id: 2, name: 'Belkin' },
                    { id: 3, name: 'Logitech' }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Houses and Apartments',
        subcategories: [
            {
                id: 1, name: 'Apartments', count: 5678, brands: [
                    { id: 1, name: 'Brand A' },
                    { id: 2, name: 'Brand B' },
                    { id: 3, name: 'Brand C' }
                ]
            },
            {
                id: 2, name: 'Villas', count: 2345, brands: [
                    { id: 1, name: 'Brand D' },
                    { id: 2, name: 'Brand E' },
                    { id: 3, name: 'Brand F' }
                ]
            },
            {
                id: 3, name: 'Townhouses', count: 1234, brands: [
                    { id: 1, name: 'Brand G' },
                    { id: 2, name: 'Brand H' },
                    { id: 3, name: 'Brand I' }
                ]
            },
            {
                id: 4, name: 'Studios', count: 789, brands: [
                    { id: 1, name: 'Brand J' },
                    { id: 2, name: 'Brand K' },
                    { id: 3, name: 'Brand L' }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Electronics',
        subcategories: [
            {
                id: 1, name: 'Laptops', count: 3456, brands: [
                    { id: 1, name: 'Dell' },
                    { id: 2, name: 'HP' },
                    { id: 3, name: 'Apple' }
                ]
            },
            {
                id: 2, name: 'Tablets', count: 2345, brands: [
                    { id: 1, name: 'Apple' },
                    { id: 2, name: 'Samsung' },
                    { id: 3, name: 'Microsoft' }
                ]
            },
            {
                id: 3, name: 'Cameras', count: 1234, brands: [
                    { id: 1, name: 'Canon' },
                    { id: 2, name: 'Nikon' },
                    { id: 3, name: 'Sony' }
                ]
            },
            {
                id: 4, name: 'Wearables', count: 678, brands: [
                    { id: 1, name: 'Apple' },
                    { id: 2, name: 'Fitbit' },
                    { id: 3, name: 'Garmin' }
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Furniture',
        subcategories: [
            {
                id: 1, name: 'Sofas', count: 4567, brands: [
                    { id: 1, name: 'Ikea' },
                    { id: 2, name: 'Ashley' },
                    { id: 3, name: 'Wayfair' }
                ]
            },
            {
                id: 2, name: 'Beds', count: 3456, brands: [
                    { id: 1, name: 'Ikea' },
                    { id: 2, name: 'Ashley' },
                    { id: 3, name: 'Wayfair' }
                ]
            },
            {
                id: 3, name: 'Dining Tables', count: 2345, brands: [
                    { id: 1, name: 'Ikea' },
                    { id: 2, name: 'Ashley' },
                    { id: 3, name: 'Wayfair' }
                ]
            },
            {
                id: 4, name: 'Chairs', count: 1234, brands: [
                    { id: 1, name: 'Ikea' },
                    { id: 2, name: 'Ashley' },
                    { id: 3, name: 'Wayfair' }
                ]
            }
        ]
    }
];



const CategoriesList = () => {
    const [openCategories, setOpenCategories] = useState(Array(categories.length).fill(false));
    // const [openSubcategories, setOpenSubcategories] = useState(Array(categories.length).fill(false));

    const handleMouseEnter = (index) => {
        const newOpenCategories = openCategories.map((isOpen, i) => i === index);
        setOpenCategories(newOpenCategories);
    };

    const handleMouseLeave = () => {
        setOpenCategories(Array(categories.length).fill(false));
    };

    const [selectedCategory, setSelectedCategory] = useState([...categories]);

    const handleCategory = async (sub) => {
        setSelectedCategory();
        try {
            // const response = await axios.post('http://localhost:3000/api/subcategory', sub);
            // console.log(response.data);
            console.log('Subcategory posted:', sub);

            console.log('Selected brand:',);
        } catch (error) {
            console.error('Error in posting subcategory:', error);
        }
    };

    return (
        <div className='w-full flex flex-col p-4 mx-auto border-[0.5px] border-[#D6D6D6DD]'>
            <p className='text-color2 text-[24px] font-[500]'>Categories</p>
            {categories.map((category, index) => (
                <CategoryItem
                    key={category.id}
                    name={category.name}
                    subcategories={category.subcategories}
                    isCatOpen={openCategories[index]}
                    isSubCatOpen={openCategories[index]}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onSubCatSel={handleCategory}
                />
            ))}
        </div>
    );
};

export default CategoriesList;