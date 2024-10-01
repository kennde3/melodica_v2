import Image from 'next/image'
import React from 'react'
import background from "@/public/boksbg.png"
import Home from '../_components/home'
import FrontCategory from '../_components/frontCategory'


export default function Page() {
  return (
    <>
      <div className='relative'><Image src={background} className='w-[100%] h-[100vh] object-cover fixed -z-10 inset-0 m-0' alt={''} /></div>

      <Home />
      <FrontCategory />
    </>
  )
}
