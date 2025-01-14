'use client';
import React, { useState } from 'react'
import RangeInput from './filtercategory.js/rangeitemone';
import DropdownInput from './filtercategory.js/rangeitemtwo';

const FilterProduct = () => {
    const [filters, setFilters] = useState({
        yearFrom: '',
        yearTo: '',
        motorPowerFrom: '',
        motorPowerTo: '',
        engineCapacityFrom: '',
        engineCapacityTo: '',
        mileageFrom: '',
        mileageTo: '',
        fuelType: 'All',
        driverType: 'All',
        transmission: 'All',
        bodyType: 'All',
        countryOfOrigin: 'All',
        color: 'All',
        steeringWheel: 'All',
        condition: 'All'
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
        console.log(filters);
    };

    return (
        <div className=" w-full grid grid-cols-3 gap-4  justify-evenly justify-items-center py-4">
            <RangeInput
                label="Year of Manufacture"
                fromPlaceholder="From"
                toPlaceholder="Into"
                fromValue={filters.yearFrom}
                toValue={filters.yearTo}
                onFromChange={(e) => handleChange({
                    target: {
                        name: 'yearFrom',
                        value: e.target.value
                    }
                })}
                onToChange={(e) => handleChange({
                    target: {
                        name: 'yearTo',
                        value: e.target.value
                    }
                })}
            />
            <RangeInput
                label="Capacity of Engine"
                fromPlaceholder="From"
                toPlaceholder="Into"
                fromValue={filters.engineCapacityFrom}
                toValue={filters.engineCapacityTo}
                onFromChange={(e) => handleChange({
                    target:
                    {
                        name: 'engineCapacityFrom',
                        value: e.target.value
                    }
                })}
                onToChange={(e) => handleChange({
                    target: {
                        name: 'engineCapacityTo',
                        value: e.target.value
                    }
                })}
            />
            <RangeInput
                label="Car Mileage"
                fromPlaceholder="From"
                toPlaceholder="Into"
                fromValue={filters.mileageFrom}
                toValue={filters.mileageTo}
                onFromChange={(e) => handleChange({
                    target:
                    {
                        name: 'mileageFrom',
                        value: e.target.value
                    }
                })}
                onToChange={(e) => handleChange({
                    target: {
                        name: 'mileageTo',
                        value: e.target.value
                    }
                })}
            />
            <RangeInput
                label="Motor Power"
                fromPlaceholder="From"
                toPlaceholder="Into"
                fromValue={filters.motorPowerFrom}
                toValue={filters.motorPowerTo}
                onFromChange={(e) => handleChange({
                    target: {
                        name: 'motorPowerFrom',
                        value: e.target.value
                    }
                })}
                onToChange={(e) => handleChange({
                    target: {
                        name: 'motorPowerTo',
                        value: e.target.value
                    }
                })}
            />
            <DropdownInput
                label="Type of Fuel"
                options={['All', 'Petrol', 'Diesel', 'Electric', 'Hybrid']}
                value={filters.fuelType}
                onChange={(e) => handleChange({
                    target: {
                        name: 'fuelType',
                        value: e.target.value
                    }
                })}
            />
            <DropdownInput
                label="Type of Driver"
                options={['All', 'Left-Hand Drive', 'Right-Hand Drive']}
                value={filters.driverType} onChange={(e) => handleChange({
                    target: {
                        name: 'driverType',
                        value: e.target.value
                    }
                })}
            />
            <DropdownInput
                label="Type of Transmission"
                options={['All', 'Manual', 'Automatic', 'Semi-Automatic', 'CVT']}
                value={filters.transmission}
                onChange={(e) => handleChange({
                    target: {
                        name: 'transmission',
                        value: e.target.value
                    }
                })}
            />
            <DropdownInput
                label="Type of Body"
                options={['All', 'Sedan', 'Hatchback', 'SUV', 'Coupe', 'Convertible', 'Wagon', 'Van', 'Truck']}
                value={filters.bodyType}
                onChange={(e) => handleChange({
                    target: {
                        name: 'bodyType',
                        value: e.target.value
                    }
                })}
            />
            <DropdownInput
                label="Country of Origin"
                options={['All', 'USA', 'Japan', 'Germany', 'South Korea', 'Italy', 'France', 'UK', 'India', 'China']}
                value={filters.countryOfOrigin}
                onChange={(e) => handleChange({
                    target: {
                        name: 'countryOfOrigin',
                        value: e.target.value
                    }
                })}
            />
            <DropdownInput
                label="Choose Color"
                options={['All', 'Red', 'Blue', 'Green', 'Black', 'White', 'Silver', 'Grey', 'Yellow', 'Orange']}
                value={filters.color}
                onChange={(e) => handleChange({
                    target: {
                        name: 'color',
                        value: e.target.value
                    }
                })}
            />
            <DropdownInput
                label="Steering Wheel"
                options={['All', 'Left-Hand', 'Right-Hand']}
                value={filters.steeringWheel}
                onChange={(e) => handleChange({
                    target: {
                        name: 'steeringWheel',
                        value: e.target.value
                    }
                })}
            />
            <DropdownInput
                label="Car Condition"
                options={['All', 'New', 'Used', 'Certified Pre-Owned']}
                value={filters.condition}
                onChange={(e) => handleChange({
                    target: {
                        name: 'condition',
                        value: e.target.value
                    }
                })}
            />
        </div>
    )
}

export default FilterProduct
