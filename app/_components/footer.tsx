import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='w-[100%] bg-[#111827] text-white flex justify-between flex-col-reverse lg:flex-row text-center lg:px-20 py-5 text-base tracking-wide mb-0'>
                <div>
                    Copyright © Melodica. All Rights Reserved.
                </div>
                <div className='flex gap-6 items-center justify-center'>
                    <div>Github</div>
                    <div>Twitter</div>
                    <div>LinkedIn</div>
                </div>
            </div>
        </>
    )
}

