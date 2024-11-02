"use client";

import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section className="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Get in Touch</h2>
              <p className="text-gray-700 mb-4 dark:text-gray-300">
                Have questions or want to learn more? We'd love to hear from you. 
                Reach out to us using any of the methods below.
              </p>
            </section>

            <div className="space-y-4">
              <div className="border p-4 rounded-md hover:shadow-lg transition dark:border-gray-700">
                <h3 className="text-xl font-medium dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">contact@yourcompany.com</p>
              </div>
              
              <div className="border p-4 rounded-md hover:shadow-lg transition dark:border-gray-700">
                <h3 className="text-xl font-medium dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
              </div>
              
              <div className="border p-4 rounded-md hover:shadow-lg transition dark:border-gray-700">
                <h3 className="text-xl font-medium dark:text-white">Office</h3>
                <p className="text-gray-600 dark:text-gray-300">123 Business Street, Suite 100<br />City, State 12345</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 