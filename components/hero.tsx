import { cn } from '@/lib/utils';
import React from 'react';
import DotPattern from './magicui/dot-pattern';
import Navbar from './navbar';
import { BottmDock } from './bottomDock';
import GradualSpacing from './magicui/gradual-spacing';
import BlurIn from "@/components/magicui/blur-in";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Hero = () => {
    return (
        <div>
            <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <AnimatedGridPattern
                    numSquares={50}
                    maxOpacity={0.2}
                    duration={3}
                    repeatDelay={0.1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 w-full",
                    )}
                />
            </div>
            {/* <Navbar /> */}
            <div className='absolute top-[200px] w-full overflow-hidden flex flex-col justify-center'>
                <div className='flex justify-center'>
                    <p className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic web magic with Nextjs</p>
                </div>
                <div className='flex flex-col items-center p-3 lg:px-32'>
                    <BlurIn
                        word={<>Architecting scalable solutions for modern <span className="text-blue-500">web applications</span></>}
                        className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mt-4 lg:pr-[150px] lg:pl-[150px]"
                    />
                </div>

                <div className='flex justify-center pt-2'>
                    <GradualSpacing
                        className="text-center mb-4 text-sm md:text-normal lg:text-normal"
                        text="Hi I'm Kaustubh, A Next.js developer based in India"
                    />
                </div>
                <BottmDock />
            </div>
        </div>
    )
}

export default Hero
