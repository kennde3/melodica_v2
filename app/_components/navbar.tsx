import React from 'react'
// import logo from '@/public/4.png'
// import Image from 'next/image'
import { CircleUserRound, Compass, Heart, LogIn, Minus, Search, ShoppingBasket } from 'lucide-react'
import Link from 'next/link'


export default function Navbar() {
    return (
        <>
            <div className='w-[100%] lg:h-[80px] h-fit md:h-fit bg-[#111827] flex items-center justify-around fixed flex-wrap inset-0 m-0 z-30'>
                {/* <div className='bg-[red] absolute left-0'><Image src={logo} className='lg:w-[120px] lg:h-[120px]' alt='' /></div> */}
                <div className='relative'>
                    <input type="text" className='w-[20em] py-[8px] rounded-lg bg-[#374151] outline-none pl-10 text-white' />
                    <Search className='absolute top-2 left-2 text-[#969ba3]' />
                </div>
                <div className='flex gap-5 items-center my-2 lg:my-0'>
                    <Link href={"/ExploreMore"} className='lg:flex text-white font-medium text-lg items-center gap-2 py-2 px-4 hover:bg-[#374151] rounded-lg cursor-pointer'>
                        <div className='hidden lg:block md:hidden'>Explore</div> <Compass />
                    </Link>

                    <div className='lg:flex items-center text-[#374151] rotate-90 hidden'><Minus /></div>

                    <div className='flex text-white text-lg items-center gap-2 cursor-pointer'>
                        <Heart /> 0
                    </div>

                    <div className='lg:flex items-center text-[#374151] rotate-90 hidden'><Minus /></div>
                    <Link href={"/CheckOut"} className='flex text-white text-lg items-center gap-2 cursor-pointer' >
                        <ShoppingBasket /> 0
                    </Link>

                    <div className='lg:flex items-center text-[#374151] rotate-90 hidden'><Minus /></div>

                    <Link className='flex text-white text-lg items-center gap-2 cursor-pointer' href={'/users'}>
                        <CircleUserRound />
                    </Link>

                    <div className='lg:flex items-center text-[#374151] rotate-90 hidden'><Minus /></div>

                    <Link className=' lg:flex text-white font-medium text-lg items-center gap-2 py-2 px-4 hover:bg-[#374151] rounded-lg cursor-pointer' href={'/LoginPage'}>
                        <div className='hidden lg:block md:hidden'>Log In</div> <LogIn />
                    </Link>
                </div>
            </div>
        </>
    )
}