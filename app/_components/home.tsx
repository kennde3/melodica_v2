import React from 'react'
import Exploremore from './exploremore'

export default function Home() {
    return (
        <>
            <div className='mx-[40px]'>
                <div className='h-fit mt-[150px] max-w-2xl '>
                    <div className='text-6xl font-bold tracking-tight text-gray-100'>
                        <div className='text-xl tracking-wide'>WELCOME</div>
                        <span className='text-transparent bg-clip-text bg-gradient-to-tr from-[#ff4694] to-[#776fff]'>MELODICA</span>
                    </div>
                    <div className='mt-6 text-lg leading-8 text-gray-300'>
                        Uncover a World of Literary Delights: Explore and Shop the Vast Library of Our E-Commerce Bookstore
                    </div>
                    <div className='mt-3'>
                        <Exploremore />
                    </div>
                </div>

            </div>
        </>
    )
}


