import React from 'react'

const Search = ({ width, height }) => {
    return (
        <div className="relative " styles={{ width: width, height: height }}>
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 " width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.5417 37.5417L46.375 46.375M6.625 24.2917C6.625 28.9772 8.4863 33.4707 11.7994 36.7839C15.1126 40.097 19.6062 41.9583 24.2917 41.9583C28.9772 41.9583 33.4707 40.097 36.7839 36.7839C40.097 33.4707 41.9583 28.9772 41.9583 24.2917C41.9583 19.6062 40.097 15.1126 36.7839 11.7994C33.4707 8.4863 28.9772 6.625 24.2917 6.625C19.6062 6.625 15.1126 8.4863 11.7994 11.7994C8.4863 15.1126 6.625 19.6062 6.625 24.2917Z" stroke="#6D6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input type="search" placeholder="Search To Buy..." className="w-full h-[73px] pl-[5rem] pr-4 py-2 bg-[#FFFFFF] border-[1px] border-[#006C54]  rounded-full font-[400] text-[24px]" />
            <button className='absolute mx-4 bottom-0 w-[84px] h-[84px] bg-[#006C54] rounded-full inline-flex'>
                <div className='m-auto'>
                    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.5417 37.5417L46.375 46.375M6.625 24.2917C6.625 28.9772 8.4863 33.4707 11.7994 36.7839C15.1126 40.097 19.6062 41.9583 24.2917 41.9583C28.9772 41.9583 33.4707 40.097 36.7839 36.7839C40.097 33.4707 41.9583 28.9772 41.9583 24.2917C41.9583 19.6062 40.097 15.1126 36.7839 11.7994C33.4707 8.4863 28.9772 6.625 24.2917 6.625C19.6062 6.625 15.1126 8.4863 11.7994 11.7994C8.4863 15.1126 6.625 19.6062 6.625 24.2917Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default Search