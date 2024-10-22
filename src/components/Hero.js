import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 pt-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Your Name
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Hero;