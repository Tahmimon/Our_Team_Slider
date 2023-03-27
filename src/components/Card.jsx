import React from 'react';

const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 max-w-sm flex flex-col justify-center items-center">
      <img
        className="rounded-full w-28 h-28 object-cover"
        src="https://images.pexels.com/photos/14737533/pexels-photo-14737533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="card image"
      />
      <div className="px-4 md:px-6 py-4 md:py-6">
        <h1 className="text-lg md:text-xl font-medium mb-2">
          Md. Zakir Hossain
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          CEO & Founder
        </p>
        <p className="text-gray-600 text-sm md:text-base">
          CEO & Founder
        </p>
      </div>
    </div>
  );
};

export default Card;
