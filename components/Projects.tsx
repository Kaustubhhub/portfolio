import React from 'react';

const Projects = () => {
    return (
        <div className="bg-gray-900 py-40 h-screen">
            <h1 className="text-4xl font-bold text-center text-white mb-10">My Projects</h1>
            <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {PROJECTS.map((p, i) => (
                    <div key={i} className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold text-white mb-2">{p.name}</h2>
                        <p className="text-gray-400 mb-4">{p.description}</p>
                        <div className="mb-4">
                            <span className="font-semibold text-gray-300">Tech Stack: </span>
                            <span className="text-gray-400">{p.techStack}</span>
                        </div>
                        <div className="flex justify-between">
                            <a
                                href={p.githubRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                GitHub Repo
                            </a>
                            <a
                                href={p.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:underline"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const PROJECTS = [
    {
        name: "Yoom",
        liveLink: "https://zoom-clone-smoky-three.vercel.app/",
        githubRepo: 'https://github.com/Kaustubhhub/zoom-clone',
        description: "Video conferencing App",
        techStack: 'Next.js, Clerk, Tailwind, Stream'
    },
    {
        name: "Chat-app",
        liveLink: "https://chat-app-v1-z7do.onrender.com/login",
        githubRepo: 'https://github.com/Kaustubhhub/chat_app_v1',
        description: "A chat application",
        techStack: 'Node.js, Next.js, Postgres, Prisma ORM'
    },
    {
        name: "Anglera - Landing Page",
        liveLink: "https://alglera.vercel.app/",
        githubRepo: 'https://github.com/Kaustubhhub/alglera_landing_page',
        description: "A startup backed by Y-combinator",
        techStack: 'Next.js'
    },
];

export default Projects;
