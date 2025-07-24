import React from 'react';
import { Link } from 'react-router-dom';
import { Keyboard, Target, Trophy, BarChart3, Clock, CheckCircle, ArrowRight, GraduationCap, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl">
              <Keyboard className="w-20 h-20 text-white" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              VibeTyper
            </span>
            <span className="block text-4xl md:text-5xl mt-2 font-bold text-gray-800 dark:text-gray-200">
              Professional Typing Assessment
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge typing assessment platform engineered by students at Texas College of Management and IT. 
            Designed for professionals, students, and organizations seeking comprehensive typing proficiency evaluation.
          </p>

          {/* Academic Credentials */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-blue-200 dark:border-gray-600 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-200 font-semibold">Developed by Students</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-indigo-600" />
              <span className="text-gray-700 dark:text-gray-200 font-semibold">Texas College of Management & IT</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/typing-test"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Begin Professional Assessment
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-10 py-5 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-bold text-lg rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              About VibeTyper
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-indigo-700 dark:via-purple-700 dark:to-purple-800 py-20">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Professional Assessment
          </h2>
          <p className="text-xl text-blue-100 dark:text-indigo-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals and students who trust VibeTyper for accurate, 
            comprehensive typing proficiency evaluation. Start your assessment today.
          </p>
          <Link
            to="/typing-test"
            className="inline-flex items-center px-12 py-6 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-bold text-xl rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            Launch Assessment Platform
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
