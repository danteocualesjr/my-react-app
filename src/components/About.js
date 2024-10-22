import React from 'react';

const About = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Python", "SQL", "AWS"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <img
                  src="/api/placeholder/400/400"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            {/* Experience badge */}
            <div className="absolute -right-6 -bottom-6 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg shadow-xl">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Experience</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">5+ Years</p>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hi! I'm a passionate developer with a love for creating beautiful and functional web applications. 
              I specialize in full-stack development and enjoy working with modern technologies.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through technical writing.
            </p>

            {/* Skills Tags */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">20+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">99%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;