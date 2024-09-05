import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-900 py-40 h-screen">
            <h1 className="text-4xl font-bold text-center text-white mb-10">About Me</h1>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
                <div className="flex-shrink-0 mb-8 lg:mb-0 items-start justify-center flex">
                    <img 
                        src="/profile-picture.jpg" // Replace with your image path
                        alt="Kaustubh Kumbhare"
                        className="rounded-full w-48 h-48 object-cover lg:w-64 lg:h-64"
                    />
                </div>

                {/* Content Section */}
                <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-white">
                    <p className="text-lg mb-4">
                        I am a passionate full-stack developer with hands-on experience in building and deploying web applications. 
                        During my time at Studium Tech, I played a key role in transforming wireframes into interactive and responsive 
                        interfaces using technologies like React, Next.js, and Vue.js. I worked on a wide range of projects, from small 
                        components to large-scale web applications, and consistently delivered high-quality, robust solutions.
                    </p>
                    <p className="text-lg mb-4">
                        One of my notable achievements at Studium Tech was developing the Academic Performance Indicator (A.P.I.) module 
                        using Next.js. This feature became widely used by 90% of our clients and played a significant role in attracting 
                        new business, increasing client acquisition by 80%. My work also extended into back-end development, where I utilized 
                        MongoDB, Firebase, and AWS services to manage efficient data storage and secure authentication workflows.
                    </p>
                    <p className="text-lg">
                        I am continuously expanding my skill set, particularly in technologies like Rust, TypeScript, and blockchain development 
                        with Solana, aiming to create cutting-edge solutions that make an impact.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
