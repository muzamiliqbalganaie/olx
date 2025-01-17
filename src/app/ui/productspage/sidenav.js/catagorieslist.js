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
                    { id: 1, name: 'Yamaha', count: 15000 },
                    { id: 2, name: 'Honda', count: 20000 },
                    { id: 3, name: 'Suzuki', count: 9461 }
                ]
            },
            {
                id: 2, name: 'Cars', count: 4852, brands: [
                    { id: 1, name: 'Toyota', count: 2000 },
                    { id: 2, name: 'Ford', count: 1500 },
                    { id: 3, name: 'BMW', count: 1352 }
                ]
            },
            {
                id: 3, name: 'Trucks', count: 4622, brands: [
                    { id: 1, name: 'Volvo', count: 2000 },
                    { id: 2, name: 'Scania', count: 1500 },
                    { id: 3, name: 'MAN', count: 1122 }
                ]
            },
            {
                id: 4, name: 'Scooters', count: 12345, brands: [
                    { id: 1, name: 'Vespa', count: 5000 },
                    { id: 2, name: 'Honda', count: 4500 },
                    { id: 3, name: 'Yamaha', count: 1845 }
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
                    { id: 1, name: 'Samsung', count: 10000 },
                    { id: 2, name: 'OnePlus', count: 8000 },
                    { id: 3, name: 'Google', count: 5456 }
                ]
            },
            {
                id: 2, name: 'iPhones', count: 12345, brands: [
                    { id: 1, name: 'Apple', count: 12345 }
                ]
            },
            {
                id: 3, name: 'Feature Phones', count: 6789, brands: [
                    { id: 1, name: 'Nokia', count: 3000 },
                    { id: 2, name: 'Samsung', count: 2000 },
                    { id: 3, name: 'LG', count: 1789 }
                ]
            },
            {
                id: 4, name: 'Accessories', count: 4321, brands: [
                    { id: 1, name: 'Anker', count: 1500 },
                    { id: 2, name: 'Belkin', count: 1500 },
                    { id: 3, name: 'Logitech', count: 1321 }
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
                    { id: 1, name: 'Brand A', count: 2000 },
                    { id: 2, name: 'Brand B', count: 2000 },
                    { id: 3, name: 'Brand C', count: 1678 }
                ]
            },
            {
                id: 2, name: 'Villas', count: 2345, brands: [
                    { id: 1, name: 'Brand D', count: 1000 },
                    { id: 2, name: 'Brand E', count: 800 },
                    { id: 3, name: 'Brand F', count: 545 }
                ]
            },
            {
                id: 3, name: 'Townhouses', count: 1234, brands: [
                    { id: 1, name: 'Brand G', count: 500 },
                    { id: 2, name: 'Brand H', count: 400 },
                    { id: 3, name: 'Brand I', count: 334 }
                ]
            },
            {
                id: 4, name: 'Studios', count: 789, brands: [
                    { id: 1, name: 'Brand J', count: 300 },
                    { id: 2, name: 'Brand K', count: 250 },
                    { id: 3, name: 'Brand L', count: 239 }
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
                    { id: 1, name: 'Dell', count: 1500 },
                    { id: 2, name: 'HP', count: 1000 },
                    { id: 3, name: 'Apple', count: 956 }
                ]
            },
            {
                id: 2, name: 'Tablets', count: 2345, brands: [
                    { id: 1, name: 'Apple', count: 1000 },
                    { id: 2, name: 'Samsung', count: 800 },
                    { id: 3, name: 'Microsoft', count: 545 }
                ]
            },
            {
                id: 3, name: 'Cameras', count: 1234, brands: [
                    { id: 1, name: 'Canon', count: 500 },
                    { id: 2, name: 'Nikon', count: 400 },
                    { id: 3, name: 'Sony', count: 334 }
                ]
            },
            {
                id: 4, name: 'Wearables', count: 678, brands: [
                    { id: 1, name: 'Apple', count: 300 },
                    { id: 2, name: 'Fitbit', count: 200 },
                    { id: 3, name: 'Garmin', count: 178 }
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
                    { id: 1, name: 'Ikea', count: 2000 },
                    { id: 2, name: 'Ashley', count: 1500 },
                    { id: 3, name: 'Wayfair', count: 1067 }
                ]
            },
            {
                id: 2, name: 'Beds', count: 3456, brands: [
                    { id: 1, name: 'Ikea', count: 1500 },
                    { id: 2, name: 'Ashley', count: 1000 },
                    { id: 3, name: 'Wayfair', count: 956 }
                ]
            },
            {
                id: 3, name: 'Dining Tables', count: 2345, brands: [
                    { id: 1, name: 'Ikea', count: 1000 },
                    { id: 2, name: 'Ashley', count: 800 },
                    { id: 3, name: 'Wayfair', count: 545 }
                ]
            },
            {
                id: 4, name: 'Chairs', count: 1234, brands: [
                    { id: 1, name: 'Ikea', count: 500 },
                    { id: 2, name: 'Ashley', count: 400 },
                    { id: 3, name: 'Wayfair', count: 334 }
                ]
            }
        ]
    }
];



const CategoriesList = () => {
    const [openCategories, setOpenCategories] = useState(Array(categories.length).fill(false));
    // const [openSubcategories, setOpenSubcategories] = useState(Array(categories.length).fill(false));
    // const subcategories = categories.map(category => category.subcategories);


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
                    // index={index}
                    subcategories={category.subcategories}
                    isCatOpen={openCategories[index]}
                    // isSubCatOpen={subcategories[index]}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onSubCatSel={handleCategory}
                />
            ))}
        </div>
    );
};

export default CategoriesList;