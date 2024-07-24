"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Yesteryear } from '@next/font/google';
import { cn } from "@/lib/utils";
import GradualSpacing from "./magicui/gradual-spacing";
const yesteryear = Yesteryear({
    subsets: ['latin'],
    weight: '400',
});
const Navbar = () => {
    const handleClick = (message: string) => () => {
        alert(message);
    };

    return (
        <div className="z-20 flex justify-around absolute top-0 h-20 w-full border items-center bg-slate-300 bg-opacity-10 backdrop-blur-md">
            
            <div className="flex justify-center items-center">
                <div className={cn(yesteryear.className, "cursor-pointer text-4xl font-bold hidden md:block")}>
                    Kaustubh.
                </div>
                <div className={cn(yesteryear.className, "cursor-pointer text-4xl font-bold block md:hidden")}>
                    K.
                </div>
            </div>


            <ul className="hidden md:flex gap-12">
                <li className="cursor-pointer text-[#CBD5E1] hover:text-white" onClick={() => handleClick('hi')}>About</li>
                <li className="cursor-pointer text-[#CBD5E1] hover:text-white" onClick={() => handleClick('hi')}>Projects</li>
                <li className="cursor-pointer text-[#CBD5E1] hover:text-white" onClick={() => window.open('https://drive.google.com/file/d/1G1dAfqvopgkOgFdSXdSOt10aM1GN-Qnh/view?usp=sharing', '_blank')}>Resume</li>
            </ul>


            <div className="flex justify-center items-center gap-5">
                <div className="cursor-pointer hidden md:block">
                    <FaGithub onClick={() => window.open('https://github.com/kaustubhhub')} className="text-3xl" />
                </div>
                <button
                    className="border cursor-pointer border-white p-1 bg-white text-black rounded-xl hover:shadow-vibgyor"
                    onClick={() => window.location.href = 'mailto:kaustubhkumbhare02@gmail.com'}
                >
                    <span className="p-2">Let's work</span>
                </button>


            </div>
        </div>
    );
}



export default Navbar
