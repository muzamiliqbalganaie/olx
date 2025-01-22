import Image from 'next/image';
import React from 'react';
import bannerImg from '/public/addpbanner.svg';
import PlayButton from './playbutton';
import buttonlogo from '../../../../public/ei_plus (1).svg';

const AddBanner = () => {
    return (
        <section className="w-full overflow-hidden">
            <div className='flex flex-col md:flex-row  justify-center gap-10 bg-[#002118] rounded-2xl mx-4 md:mx-10 my-10 md:my-20 p-4 md:p-10 '>
                <div className='flex justify-center md:justify-start glow'>
                    <Image src={bannerImg} alt='add_post_banner_img' width={423} />
                </div>

                <div className='flex flex-col items-start justify-start md:basis-7/12'>
                    <p className='text-[#FFFFFF] font-[800] text-[24px] md:text-[40px] mt-4 md:mt-16'>
                        Post your ad now
                    </p>
                    <p className='text-[#FFFFFF] font-[400] text-[16px] md:text-[24px] text-left my-4'>
                        Do you have any extra product lying around your home that you’re not using? Why not sell them to make some extra cash?
                    </p>
                    <div className='flex flex-row justify-start items-center gap-4 my-8 md:my-24'>
                        <button className="flex items-center px-4 py-5 bg-color1 text-white rounded-full  font-[400] text-[24px] leading-[28.8px]">
                            <Image src={buttonlogo} alt="button logo" width={25} height={25} />
                            Post Ads
                        </button>
                        <PlayButton />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddBanner;