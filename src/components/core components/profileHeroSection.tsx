import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
            {/* Profile Picture */}
            <div className="mb-6">
                <img
                    src="/profile-image.jpg" // Make sure the path is correct
                    alt="Harish"
                    className="w-48 h-48 rounded-full border-4 border-gray-500 shadow-lg object-cover"
                />
            </div>

            {/* Intro Text */}
            <div>
            <h1 className="text-5xl font-bold mb-2 text-blue-400">Hello, I&apos;m Harish</h1>

                <h2 className="text-3xl font-light mb-4 text-gray-300">
                    A Full-Stack Developer Focused on Scalable Web & Mobile Applications
                </h2>
                <p className="max-w-xl mx-auto text-lg mb-6 text-gray-400">
                    With a passion for crafting seamless digital experiences, I specialize in React, Node.js, and AI/ML integration. I love solving complex problems and building impactful applications.
                </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex space-x-4">
                <a
                    href="/projects" // Adjust anchor or route
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-lg font-semibold transition text-white"
                >
                    View My Projects
                </a>
                <a
                    href="/contact" // Adjust anchor or route
                    className="px-6 py-3 bg-green-500 hover:bg-green-400 rounded-full text-lg font-semibold transition text-white"
                >
                    Contact Me
                </a>
            </div>

          
        </section>
    );
};

export default HeroSection;
