import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 inline-block text-transparent bg-clip-text">
            Welcome to My App
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            A beautiful React application with a sunset-inspired design
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feature One</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <button className="mt-6 px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-lg hover:opacity-90 transition-opacity duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feature Two</h2>
              <p className="text-gray-600 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
              <button className="mt-6 px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-lg hover:opacity-90 transition-opacity duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feature Three</h2>
              <p className="text-gray-600 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
              </p>
              <button className="mt-6 px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-lg hover:opacity-90 transition-opacity duration-300">
                Learn More
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500">
          <p>&copy; 2024 My App. Made with ❤️ using React and Tailwind CSS</p>
        </div>

      </div>
    </div>
  );
}

export default App;