import { cn } from '@/lib/utils'
import React from 'react'
import DotPattern from './magicui/dot-pattern'
import Navbar from './navbar'

const Hero = () => {
    return (
        <div>
            <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <DotPattern
                    width={25}
                    className={cn(
                        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>
            <Navbar/>
        </div>
    )
}

export default Hero
