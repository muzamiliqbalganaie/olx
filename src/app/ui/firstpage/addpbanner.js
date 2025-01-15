import Image from 'next/image';
import React from 'react';
import bannerImg from '/public/addpbanner.svg';
import PlayButton from './playbutton';
import AddButton from './addbutton';

const AddBanner = () => {
    return (
        <section className="w-full ">
            <div className='basis-5/12 max-w-full  flex flex-row overflow-hidden justify-center gap-10 bg-[#002118] rounded-2xl mx-10 my-20 '>
                <div className='glow'>
                    <Image src={bannerImg} alt='add_post_banner_img' width={423} height={500}>
                    </Image>
                </div>

                <div className='basis-7/12 flex flex-col item-start justify-self-start'>
                    <p className='text-[#FFFFFF] font-[800] text-[40px] mt-16 '>
                        Post your ad now
                    </p>
                    <p className='text-[#FFFFFF] font-[400] text-[24px] text-left min-w-[582px] my-4'>
                        Do you have any extra product lying around your home that you’re not using?Why not sell them to make some extra cash?
                    </p>
                    <div className='flex flex-row justify-start items-center gap-4 my-24'>
                        <AddButton />
                        <PlayButton />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddBanner