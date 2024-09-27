'use client';
import SplineModel from '@/components/core components/splinemodel';

import React from 'react';

function Contact() {
  return (
    <div className="relative h-screen">
      
      <SplineModel />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl text-center text-orange-400">
          Hi, I am Harish Malakar
        </h1>
      </div>
    </div>
  );
}

export default Contact;
