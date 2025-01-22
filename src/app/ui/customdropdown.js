import { useEffect, useState } from 'react';
import Image from 'next/image';

const CustomDropdown = ({ options, selectedValue, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = useState(selectedValue || '');

    useEffect(() => {
        setSelectedCountryCode(selectedValue);
    }, [selectedValue]);

    const handleSelect = (value) => {
        onChange(value);
        setSelectedCountryCode(value);
        setIsOpen(false);
    };
    //select the selected flage and countryCode
    const selectedOption = options.find(option => option.code === selectedCountryCode) || options[0];
    return (
        <div className="absolute ">
            <button
                type="button"
                className="border-r-[1px] border-color3 rounded-l-[8px] px-4  text-[24px] leading-[28.13px] flex items-center gap-3 p-5"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image src={selectedOption.flag} alt={`${selectedOption.code} flag`} width={15} height={15} />
                <Image src='/productspage/Arrow.svg' alt='arrow' width={5.67} height={5.67} />
            </button>
            {isOpen && (
                <ul className="absolute z-10 mt-2 w-full bg-white border border-color3 rounded-[8px] shadow-lg">
                    {options.map((option) => (
                        <li
                            key={option.code}
                            className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleSelect(option.code)}
                        >
                            <Image src={option.flag} alt={`${option.code} flag`} width={15} height={15} />
                            <span className="text-[12px] font-[500] text-color2">{option.code}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;