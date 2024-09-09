import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const Viewmore = () => {
    return (
        <Link className="grid place-content-center mr-2" href="/allmovie">
            <DrawOutlineButton><div className="flex gap-2">View More <ExternalLink className="h-5 w-5" /></div></DrawOutlineButton>
        </Link>
    );
};

const DrawOutlineButton = ({ children, ...rest }: any) => {
    return (
        <button
            {...rest}
            className="group relative lg:px-4 lg:py-2 px-1 py-1 font-medium text-sm lg:text-base text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
        >
            <span>{children}</span>

            {/* TOP */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
    );
};

export default Viewmore;