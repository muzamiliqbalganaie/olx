import { React, useState } from 'react';

import FeaturedProductCard from './card';

const FreshRecomands = () => {
    const [carddata, setCardData] = useState([
        {
            id: 4,
            title: "Brand new Cafe, Restaurant office chair",
            description: "Comfortable and stylish office chair perfect for cafes and restaurants.",
            picture: null,
            price: 444,
            location: "Tilak Nagar, Delhi, Delhi",
            date: "Dec 09",
            isFeatured: true,
        },
        {
            id: 5,
            title: "Modern Office Chair",
            description: "Ergonomic office chair with adjustable height and lumbar support.",
            picture: null,
            price: 444,
            location: "Connaught Place, Delhi, Delhi",
            date: "Dec 10",
            isFeatured: false,
        },
        {
            id: 6,
            title: "Luxury Office Chair",
            description: "High-end office chair with premium leather and advanced features.",
            picture: null,
            price: 444,
            location: "Saket, Delhi, Delhi",
            date: "Dec 11",
            isFeatured: true,
        },
        {
            id: 7,
            title: "Vintage Office Chair",
            description: "Classic office chair with wooden frame and leather upholstery.",
            picture: null,
            price: 444,
            location: "Dwarka, Delhi, Delhi",
            date: "Dec 12",
            isFeatured: false,
        },
        {
            id: 8,
            title: "Ergonomic Office Chair",
            description: "Ergonomic office chair with adjustable headrest and back support.",
            picture: null,
            price: 444,
            location: "Rohini, Delhi, Delhi",
            date: "Dec 13",
            isFeatured: true,
        },
        {
            id: 9,
            title: "Executive Office Chair",
            description: "Executive office chair with premium leather and high back support.",
            picture: null,
            price: 444,
            location: "Nehru Place, Delhi, Delhi",
            date: "Dec 14",
            isFeatured: false,
        }
    ]);
    return (
        <section className="flex flex-col w-full  ">
            <p className="text-left text-[40px] font-[400] px-[3rem] pt-10 pb-6">Fresh Recommendations</p>
            <div className='max-w-full grid grid-cols-3 gap-16'>
                {
                    carddata.map((card) => (
                        <div key={card.id} className="flex justify-center flex-row items-center ">
                            <FeaturedProductCard
                                id={card.id}
                                title={card.title}
                                description={card.description}
                                picture={card.picture === null ? '/chair.svg' : card.picture}
                                price={card.price}
                                location={card.location}
                                date={card.date}
                                isFeatured={card.isFeatured}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default FreshRecomands;