"use client";

import React from 'react';

interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      <img 
        src={review.image} 
        alt={review.name} 
        className="w-12 h-12 rounded-full mr-4"
      />
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
);

const Reviews = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO at TechCorp",
      content: "Amazing product that has transformed our business operations!",
      rating: 5,
      image: "/path/to/image1.jpg"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Marketing Director",
      content: "The customer support is outstanding. They went above and beyond to help us implement the solution.",
      rating: 5,
      image: "/path/to/image2.jpg"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Small Business Owner",
      content: "Great value for money. Helped streamline our workflow within days of implementation.",
      rating: 4,
      image: "/path/to/image3.jpg"
    },
    {
      id: 4,
      name: "Emma Thompson",
      role: "Project Manager",
      content: "Intuitive interface and powerful features. Would highly recommend to any team looking to improve efficiency.",
      rating: 5,
      image: "/path/to/image4.jpg"
    },
    {
      id: 5,
      name: "David Kim",
      role: "CTO at StartupX",
      content: "Some minor issues at first, but the team was quick to resolve them. Overall, very satisfied with the product.",
      rating: 4,
      image: "/path/to/image5.jpg"
    },
    {
      id: 6,
      name: "Lisa Parker",
      role: "Operations Manager",
      content: "Been using this for 6 months now and it's made a significant impact on our productivity.",
      rating: 5,
      image: "/path/to/image6.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews; 