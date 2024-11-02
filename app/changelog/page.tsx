"use client";

import React from 'react';


const Changelog = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Changelog</h1>
        
        <div className="grid gap-8">
          <section className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Version 1.2.0</h2>
              <p className="text-gray-600">Released on March 15, 2024</p>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-600">✨ New Features</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>Added dark mode support</li>
                    <li>Introduced new dashboard analytics</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-green-600">🐛 Bug Fixes</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>Fixed mobile navigation issues</li>
                    <li>Resolved data loading performance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-2">Version 1.1.0</h2>
              <p className="text-gray-600">Released on February 28, 2024</p>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-600">✨ New Features</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>Implemented user profiles</li>
                    <li>Added export functionality</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Changelog; 