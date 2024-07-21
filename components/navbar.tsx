"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
    const handleClick = (message: string) => () => {
        alert(message);
    };

    return (
        <div className="z-20 flex justify-around absolute top-0 h-20 w-full border items-center bg-slate-300 bg-opacity-10 backdrop-blur-md">
            <div className="flex justify-center items-center">
                {/* <div>
                    <Image src={'/images/logo.png'} height={50} width={50} alt="logo"/>
                </div> */}
                <div className="cursor-pointer text-3xl font-bold">
                    KK.
                </div>
            </div>

            <ul className="flex gap-12">
                <li className="cursor-pointer text-[#CBD5E1] hover:text-white" onClick={handleClick('hi')}>About</li>
                <li className="cursor-pointer text-[#CBD5E1] hover:text-white" onClick={handleClick('hi')}>Projects</li>
                <li className="cursor-pointer text-[#CBD5E1] hover:text-white" onClick={handleClick('hi')}>Resume</li>
            </ul>

            <div className="flex justify-center items-center gap-5">
                <div className="cursor-pointer">
                    <FaGithub className="text-3xl" />
                </div>
                <button className="border cursor-pointer border-white p-1 bg-white text-black rounded-xl hover:shadow-vibgyor">
                    <span className="p-2">Let's work</span>
                </button>

            </div>
        </div>
    );
}



export default Navbar
