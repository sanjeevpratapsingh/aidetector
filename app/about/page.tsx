"use client";

import React from 'react';
import { Carousel } from '@/components/ui/carousel'; // Assuming you have this component
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from "lucide-react"; // If you want to use Lucide icons instead

const About = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "The team delivered exceptional results that exceeded our expectations. Their attention to detail and innovative approach helped us achieve our goals faster.",
      rating: 5,
      image: "/avatars/sarah.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Lead",
      content: "Outstanding service and technical expertise. They were able to tackle complex challenges with innovative solutions.",
      rating: 5,
      image: "/avatars/michael.jpg"
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Product Manager",
      content: "Great communication throughout the project. The team was responsive and delivered quality work on time.",
      rating: 4,
      image: "/avatars/emma.jpg"
    },
    // Add more reviews as needed
  ];

  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Projects Completed", value: "1000+" },
    { label: "Team Members", value: "50+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transforming businesses through innovative digital solutions
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We're dedicated to providing innovative solutions that help businesses 
              grow and succeed in the digital age.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To become the leading platform for business transformation and digital excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <Card key={index} className="p-6 text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Team Member Name</h3>
              <p className="text-gray-600 dark:text-gray-400">Position</p>
              <p className="mt-4 text-sm">
                Brief description about the team member and their expertise.
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Client Reviews</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experiences working with us.
          </p>
          
          <Carousel className="max-w-6xl mx-auto">
            {reviews.map((review) => (
              <div key={review.id} className="p-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{review.content}</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Let's discuss how we can help you achieve your goals
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;