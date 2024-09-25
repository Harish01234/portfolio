'use client';
import React from 'react';
import FloatingDockDemo from "@/components/core components/navbar";

function Projects() {
  return (
    <div className="relative">
      {/* Fixed navbar at the top */}
      <div className="fixed top-0 left-0 w-full z-30 bg-white dark:bg-gray-900">
        <FloatingDockDemo />
      </div>
      {/* Main content area, with padding to account for the fixed navbar height */}
      <div className="pt-20"> {/* Adjust padding as needed based on the navbar height */}
        {/* Your main project content goes here */}
        <h1 className="text-2xl">My Projects</h1>
        <p>Details about your projects will be displayed here.</p>
      </div>
    </div>
  );
}

export default Projects;
