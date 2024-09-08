import { MoveRight, PencilLine } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Exploremore() {
    return (
        <>
            <Link
                href="/"
                className="relative inline-flex items-center justify-center  px-8 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-lg shadow-md group"
            >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                    <PencilLine />
                </span>
                <span className="absolute flex gap-1 items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Eplore More <MoveRight />
                </span>
                <span className="relative invisible">Button Text</span>
            </Link>

        </>
    )
}


