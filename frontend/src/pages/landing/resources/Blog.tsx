import React from 'react';
import {  Tag, Calendar, User, Mail,  } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the Blogs page
const Blog = () => {
  // Simulated blog post data
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Solutions",
      author: "Jane Doe",
      date: "July 25, 2025",
      category: "AI & ML",
      snippet: "Explore how artificial intelligence is reshaping enterprise operations and driving unprecedented efficiency...",
      imageUrl: "https://placehold.co/600x400/3B82F6/ffffff?text=AI+Future"
    },
    {
      id: 2,
      title: "Blockchain Beyond Crypto: Enterprise Use Cases",
      author: "John Smith",
      date: "July 20, 2025",
      category: "Blockchain",
      snippet: "Dive into real-world applications of blockchain technology that are transforming supply chains and finance...",
      imageUrl: "https://placehold.co/600x400/8B5CF6/ffffff?text=Blockchain+Enterprise"
    },
  ];

  const latestPosts = [
    {
      id: 3,
      title: "Robotics in Logistics: A Game Changer",
      author: "Alice Brown",
      date: "July 18, 2025",
      category: "Robotics",
      snippet: "How robotic automation is revolutionizing warehouse management and delivery systems.",
    },
    {
      id: 4,
      title: "The Power of Predictive Analytics in Business",
      author: "Bob White",
      date: "July 15, 2025",
      category: "Analytics",
      snippet: "Unlocking actionable insights from data to forecast trends and optimize decision-making.",
    },
    {
      id: 5,
      title: "Telemedicine: Bridging the Healthcare Gap",
      author: "Carol Green",
      date: "July 12, 2025",
      category: "Healthcare",
      snippet: "The impact of virtual consultations on patient access and healthcare delivery.",
    },
  ];

  const categories = [
    { name: "AI & ML", count: 12 },
    { name: "Blockchain", count: 8 },
    { name: "Robotics", count: 15 },
    { name: "Analytics", count: 10 },
    { name: "Healthcare", count: 7 },
    { name: "Cloud Computing", count: 9 },
  ];

  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Insights & Innovation from <span className="text-orange-400">Our Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Stay ahead with our latest articles, thought leadership, and industry trends in enterprise technology and solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#latest-posts" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Read Our Blog
              </a>
              <a href="#subscribe" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Subscribe
              </a>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section id="featured-posts" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <div key={post.id} className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden transform hover:scale-105 transition duration-300">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" onError={(e) => { const target = e.target as HTMLImageElement; target.src="https://placehold.co/600x400/4B5563/ffffff?text=Image+Unavailable"; }} />
                  <div className="p-8">
                    <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">{post.category}</span>
                    <h3 className="text-2xl font-semibold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.snippet}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                      <Calendar className="h-4 w-4 ml-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <a href="#" className="mt-6 inline-block text-orange-400 hover:text-orange-300 font-semibold transition duration-300">Read More &rarr;</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Explore By Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <a key={category.name} href="#" className="bg-gray-900 text-gray-300 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2">
                  <Tag className="h-5 w-5" />
                  <span>{category.name} ({category.count})</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Posts Section */}
        <section id="latest-posts" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map(post => (
                <div key={post.id} className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                  <span className="inline-block bg-gray-700 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">{post.category}</span>
                  <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.snippet}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                    <Calendar className="h-4 w-4 ml-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <a href="#" className="mt-6 inline-block text-orange-400 hover:text-orange-300 font-semibold transition duration-300">Read More &rarr;</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action / Subscription Section */}
        <section id="subscribe" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Never Miss an Insight!</h2>
            <p className="text-lg text-gray-300 mb-10">
              Subscribe to our newsletter to get the latest articles, industry news, and expert analysis delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                <Mail className="h-5 w-5 inline-block mr-2" /> Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default Blog;
