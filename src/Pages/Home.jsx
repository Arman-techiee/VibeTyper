import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Keyboard, 
  Target, 
  Trophy, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  GraduationCap, 
  Users,
  Shield,
  Award,
  TrendingUp,
  BookOpen
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 rounded-2xl shadow-xl">
              <Keyboard className="w-20 h-20 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              VibeTyper
            </span>
            <span className="block text-3xl md:text-4xl mt-4 font-semibold text-gray-700 dark:text-gray-300">
              Professional Typing Assessment Platform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed">
            Advanced typing assessment platform developed by students at Texas College of Management and IT. 
            Designed for professionals, educational institutions, and organizations requiring comprehensive 
            typing proficiency evaluation with industry-standard metrics.
          </p>

          {/* Credentials Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-600 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              <div className="text-left">
                <div className="text-gray-900 dark:text-white font-semibold">Academic Excellence</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Student-Developed Platform</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-3">
              <Users className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              <div className="text-left">
                <div className="text-gray-900 dark:text-white font-semibold">Institutional Backing</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Texas College of Management & IT</div>
              </div>
            </div>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/typing-test"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white font-semibold text-lg rounded-lg hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold text-lg rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Learn More
              <BookOpen className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Assessment Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive evaluation tools designed to meet industry standards and academic requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-blue-100 dark:border-gray-500">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Precision Metrics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Industry-standard WPM calculations, accuracy measurements, and detailed error analysis.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-green-100 dark:border-gray-500">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Performance Classification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional skill level assessment from beginner to expert classifications.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-purple-100 dark:border-gray-500">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Real-time Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Live performance tracking with comprehensive statistical analysis and reporting.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-orange-100 dark:border-gray-500">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Timed Assessments</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Standardized timing protocols for consistent and reliable evaluation results.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-teal-100 dark:border-gray-500">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Academic Standards</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Developed following educational best practices and assessment methodologies.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-rose-100 dark:border-gray-500">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Certification Ready</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Results formatted for professional portfolios and academic transcripts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-700 py-20">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Begin Your Professional Assessment
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join professionals and students worldwide who rely on VibeTyper for accurate, 
            comprehensive typing proficiency evaluation. Experience the standard in typing assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/typing-test"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold text-lg rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              Launch Assessment
              <TrendingUp className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
            >
              Platform Overview
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;