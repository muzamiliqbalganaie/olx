import Image from 'next/image';
import React from 'react';
import buttonlogo from '../../../../public/ei_plus.svg';

const AddButton = () => {
    return (
        <button className="flex items-center px-4 py-2 bg-color1 text-white rounded-[15px]  font-[700] text-[24px]">
            <Image src={buttonlogo} alt="button logo" width={25} height={25} />
            Post Ads Now
        </button>

    )
}

export default AddButton;