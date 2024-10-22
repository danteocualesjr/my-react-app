import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      {/* Background dots decoration */}
      <div className="absolute inset-0 grid grid-cols-12 gap-2 p-2 pointer-events-none opacity-20">
        {[...Array(144)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-gray-900 dark:bg-gray-100" />
        ))}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 tracking-wider">
          Hello, I'm
        </p>
        
        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Your Name
        </h1>
        
        {/* Title */}
        <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-12">
          I'm a{' '}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            Full Stack Developer
          </span>
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          I build beautiful and functional web applications with modern technologies.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            href="#projects"
            className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View My Work
          </a>
          
            href="#contact"
            className="px-8 py-3 text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;