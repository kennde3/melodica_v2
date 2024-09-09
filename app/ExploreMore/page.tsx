import React from 'react'
import DrawerButton from '../_components/drawerButton'
import Allbooks from '../_components/allbooks'

export default function ExploreMore() {
    return (
        <>
            <div className='mt-[150px] lg:mx-20 mx-2'>
                <div className='flex items-center justify-between '>
                    <div className='text-4xl font-extrabold text-white'>BOOKS</div>
                    <div><DrawerButton /></div>
                </div>
                <Allbooks />
            </div>
        </>
    )
}

