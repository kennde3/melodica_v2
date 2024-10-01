import React from 'react';
import book1 from '@/public/booksCover/cover1.jpg';
import Image from 'next/image';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const books = [
    { id: 1, title: 'Macbeth', price: 120, originalPrice: 200, rating: 4.5, image: book1 },
    { id: 2, title: 'Hamlet', price: 90, originalPrice: 150, rating: 4.3, image: book1 },
    { id: 3, title: 'Hamlet', price: 90, originalPrice: 150, rating: 4.3, image: book1 },
    { id: 4, title: 'Hamlet', price: 90, originalPrice: 150, rating: 4.3, image: book1 },
    { id: 5, title: 'Hamlet', price: 90, originalPrice: 150, rating: 4.3, image: book1 },
];

export default function Allbooks() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 md:p-4'>
            {books.map((book) => (
                <div key={book.id} className='w-full md:w-fit p-2 lg:p-4 self-start border border-gray-900 rounded-lg hover:bg-gray-800 hover:border hover:border-gray-700'>
                    <div className='relative'>
                        <Image
                            src={book.image}
                            alt={book.title}
                            className='w-full h-full object-cover rounded-t-lg'
                        />
                        <div className='absolute -top-2 -right-2 bg-[#978299] p-2 rounded-full'>
                            <Heart className='hover:fill-[#db2777] text-[#db2777]' />
                        </div>
                    </div>
                    <div className='mt-3 text-white text-lg sm:text-xl lg:text-2xl font-bold'>{book.title}</div>
                    <div className='text-white text-2xl sm:text-3xl font-extrabold mt-3 sm:mt-5'>{book.price} RWF</div>
                    <div className='flex justify-between text-white mt-2'>
                        <div className='line-through'>${book.originalPrice}</div>
                        <div className='flex'>
                            <Star fill='#FFD700' stroke='0' />{book.rating}
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-full px-4 py-2 text-xs lg:text-sm font-semibold text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950 lg:gap-3 mt-2 cursor-pointer'>
                        <ShoppingCart className='hidden md:block lg:block' />
                        ADD TO CART
                    </div>
                </div>
            ))}
        </div>
    );
}
