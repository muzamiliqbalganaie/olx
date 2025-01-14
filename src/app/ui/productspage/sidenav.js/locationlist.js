'use client';
import { React, useState } from "react";
import LocationItem from "./locationitem";

const locations = [
    {
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
    const [locDropOpen, setLocDropOpen] = useState(false);
    return (
        <div className='w-full flex flex-col p-4 mx-auto border-[0.5px] border-[#D6D6D6DD]'>
            <p className='text-color2 text-[24px] font-[500]'>Locations</p>
            {locations.map((location, index) => (
                <LocationItem
                    key={index}
                    name={location.country}
                    cities={location.cities}
                    flag={location.flag}
                    locDropOpen={locDropOpen}
                    setLocDropOpen={setLocDropOpen}
                />
            ))}
        </div>
    );
};

export default LocationList;