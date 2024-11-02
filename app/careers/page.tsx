"use client";

import React from 'react';


const Careers = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Careers</h1>
        
        <div className="grid gap-8">
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
            <p className="text-gray-700 mb-4">
              We're always looking for talented individuals to join our growing team. 
              At our company, we believe in innovation, collaboration, and creating meaningful impact.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Open Positions</h2>
            
            <div className="grid gap-4">
              <div className="border p-4 rounded-md hover:shadow-lg transition">
                <h3 className="text-xl font-medium">Senior Software Engineer</h3>
                <p className="text-gray-600">Full-time • Remote</p>
              </div>
              
              <div className="border p-4 rounded-md hover:shadow-lg transition">
                <h3 className="text-xl font-medium">Product Designer</h3>
                <p className="text-gray-600">Full-time • Hybrid</p>
              </div>
              
              <div className="border p-4 rounded-md hover:shadow-lg transition">
                <h3 className="text-xl font-medium">Marketing Manager</h3>
                <p className="text-gray-600">Full-time • On-site</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Careers; 