'use client';
import React, { useState } from "react";
import LocationItem from "./locationitem";

const locations = [
    {
        id: 1,
        country: 'United States',
        flag: '🇺🇸',
        cities: [
            { name: 'New York' },
            { name: 'Los Angeles' },
            { name: 'Chicago' },
            { name: 'Houston' },
            { name: 'Phoenix' }
        ]
    },
    {
        id: 2,
        country: 'India',
        flag: '🇮🇳',
        cities: [
            { name: 'Mumbai' },
            { name: 'Delhi' },
            { name: 'Bangalore' },
            { name: 'Hyderabad' },
            { name: 'Ahmedabad' }
        ]
    },
    {
        id: 3,
        country: 'United Kingdom',
        flag: '🇬🇧',
        cities: [
            { name: 'London' },
            { name: 'Birmingham' },
            { name: 'Leeds' },
            { name: 'Glasgow' },
            { name: 'Sheffield' }
        ]
    },
    {
        id: 4,
        country: 'Canada',
        flag: '🇨🇦',
        cities: [
            { name: 'Toronto' },
            { name: 'Montreal' },
            { name: 'Calgary' },
            { name: 'Ottawa' },
            { name: 'Edmonton' }
        ]
    },
    {
        id: 5,
        country: 'Australia',
        flag: '🇦🇺',
        cities: [
            { name: 'Sydney' },
            { name: 'Melbourne' },
            { name: 'Brisbane' },
            { name: 'Perth' },
            { name: 'Adelaide' }
        ]
    }
];

const LocationList = () => {
    const [openLocations, setOpenLocations] = useState(Array(locations.length).fill(false));

    const handleMouseEnter = (index) => {
        const newOpenLocations = openLocations.map((isOpen, i) => i === index);
        setOpenLocations(newOpenLocations);
    };

    const handleMouseLeave = () => {
        setOpenLocations(Array(locations.length).fill(false));
    };

    return (
        <div className='w-full flex flex-col p-4 mx-auto border-[0.5px] border-[#D6D6D6DD]'>
            <p className='text-color2 text-[24px] font-[500]'>Locations</p>
            {locations.map((location, index) => (
                <LocationItem
                    key={location.id}
                    name={location.country}
                    cities={location.cities}
                    isLocOpen={openLocations[index]}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
};

export default LocationList;