import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fantsy from '@/public/Categories/Fantasy.jpg';
import sciFi from '@/public/Categories/Biography.jpg';
import thriller from '@/public/Categories/Horror.jpg';

const categories = [
    {
        id: 1,
        title: 'Fantasy',
        description: 'Fantasy books involve magic, creatures, quests, and battles between good and evil.',
        image: fantsy,
        link: '/'
    },
    {
        id: 2,
        title: 'Sci-Fi',
        description: 'Science fiction explores futuristic technology, space exploration, and extraordinary possibilities.',
        image: sciFi,
        link: '/'
    },
    {
        id: 3,
        title: 'Thriller',
        description: 'Thrillers are packed with suspense, tension, and unexpected twists that keep you on edge.',
        image: thriller,
        link: '/'
    },
    {
        id: 3,
        title: 'Thriller',
        description: 'Thrillers are packed with suspense, tension, and unexpected twists that keep you on edge.',
        image: thriller,
        link: '/'
    },
    {
        id: 3,
        title: 'Thriller',
        description: 'Thrillers are packed with suspense, tension, and unexpected twists that keep you on edge.',
        image: thriller,
        link: '/'
    },
];

export default function FrontCategory() {
    return (
        <div className='mx-[40px] my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {categories.map((category) => (
                    <Link href={category.link} key={category.id}>
                        <div className='w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-gray-400 bg-gray-700 transition-all duration-200 rounded-lg cursor-pointer backdrop-filter backdrop-blur-md hover:bg-gray-600 hover:bg-opacity-60 bg-opacity-60 relative border'>
                            <div className='p-3'>
                                <Image className='object-cover' src={category.image} alt={category.title} />
                            </div>
                            <div className='absolute top-[63%] px-3 py-1 ml-6 leading-7 text-gray-100 bg-gray-600 backdrop-blur-md backdrop-filter bg-clip-padding bg-opacity-20 lg:gap-x-10 md:flex rounded-xl'>
                                {category.title}
                            </div>
                            <div className='ml-3 mb-2 text-gray-300'>
                                {category.description}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
