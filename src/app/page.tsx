'use client';
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import FloatingDockDemo from "@/components/core components/navbar";
import HeroSection from "@/components/core components/profileHeroSection";
import SplineModel from "@/components/core components/splinemodel";
import SkillsSection from "@/components/core components/skilsView";
import SplineModel1 from "@/components/core components/sphereparticles";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <div className="bg-black">
      <BackgroundBeamsWithCollision>
        <FloatingDockDemo />

        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          What&apos;s faster than Development?{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Rapid building.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Rapid building.</span>
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>

      <div className="grid gap-0 m-2 mt-0 sm:grid-cols-2 grid-cols-1">
        <div className="flex flex-col h-screen"> <HeroSection /></div>
        <div className="flex flex-col h-screen"><SplineModel/></div>
        <div className="flex flex-col h-screen"><SkillsSection/></div>
        <div className="flex flex-col h-screen"><SplineModel1/></div>
      </div>
      
    </div>
  );
}
