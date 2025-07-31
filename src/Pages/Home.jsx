import React, { useState, useEffect } from 'react';
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
  BookOpen,
  Zap,
  Globe,
  Star
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = 'Professional Typing Assessment Platform';
  
  // Words for floating animation
  const floatingWords = ['Speed', 'Accuracy', 'Professional', 'Assessment', 'Typing', 'Excellence'];

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation for subtitle
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypingText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    // Floating words animation
    const wordInterval = setInterval(() => {
      setCurrentWordIndex(prev => (prev + 1) % floatingWords.length);
    }, 2000);

    // Mouse tracking for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(typingInterval);
      clearInterval(wordInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { number: '50', label: 'Assessments Completed', icon: CheckCircle },
    { number: '99.9%', label: 'Accuracy Rate', icon: Target },
    { number: '4.5/5', label: 'User Rating', icon: Star },
    { number: '24/7', label: 'Platform Availability', icon: Clock },
  ];

  const features = [
    {
      icon: Target,
      title: 'Precision Metrics',
      description: 'Industry-standard WPM calculations, accuracy measurements, and detailed error analysis.',
      gradient: 'from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600',
      iconBg: 'bg-blue-100 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-100 dark:border-gray-500'
    },
    {
      icon: Trophy,
      title: 'Performance Classification',
      description: 'Professional skill level assessment from beginner to expert classifications.',
      gradient: 'from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600',
      iconBg: 'bg-green-100 dark:bg-green-900',
      iconColor: 'text-green-600 dark:text-green-400',
      border: 'border-green-100 dark:border-gray-500'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Live performance tracking with comprehensive statistical analysis and reporting.',
      gradient: 'from-purple-50 to-violet-50 dark:from-gray-700 dark:to-gray-600',
      iconBg: 'bg-purple-100 dark:bg-purple-900',
      iconColor: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-100 dark:border-gray-500'
    },
    {
      icon: Clock,
      title: 'Timed Assessments',
      description: 'Standardized timing protocols for consistent and reliable evaluation results.',
      gradient: 'from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600',
      iconBg: 'bg-orange-100 dark:bg-orange-900',
      iconColor: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-100 dark:border-gray-500'
    },
    {
      icon: Shield,
      title: 'Academic Standards',
      description: 'Developed following educational best practices and assessment methodologies.',
      gradient: 'from-teal-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600',
      iconBg: 'bg-teal-100 dark:bg-teal-900',
      iconColor: 'text-teal-600 dark:text-teal-400',
      border: 'border-teal-100 dark:border-gray-500'
    },
    {
      icon: Award,
      title: 'Certification Ready',
      description: 'Results formatted for professional portfolios and academic transcripts.',
      gradient: 'from-rose-50 to-pink-50 dark:from-gray-700 dark:to-gray-600',
      iconBg: 'bg-rose-100 dark:bg-rose-900',
      iconColor: 'text-rose-600 dark:text-rose-400',
      border: 'border-rose-100 dark:border-gray-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden relative">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs with mouse parallax */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse" 
          style={{
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse" 
          style={{
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-blue-400/30 dark:bg-blue-500/20 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-1/3 w-6 h-6 bg-indigo-400/30 dark:bg-indigo-500/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-purple-400/30 dark:bg-purple-500/20 rotate-12 animate-float-slow"></div>
        
        {/* Floating words */}
        <div className="absolute top-1/4 left-10 opacity-20 dark:opacity-10">
          <div className="text-6xl font-bold text-blue-500 animate-float-word">
            {floatingWords[currentWordIndex]}
          </div>
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-20 dark:opacity-10">
          <div className="text-4xl font-bold text-indigo-500 animate-float-word-reverse">
            {floatingWords[(currentWordIndex + 2) % floatingWords.length]}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          {/* Enhanced Animated Logo */}
          <div className={`flex justify-center mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative p-6 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group animate-glow">
              <Keyboard className="w-20 h-20 text-white transform transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              {/* Orbiting dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-orbit"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-orbit-reverse"></div>
            </div>
          </div>
          
          {/* Enhanced Animated Title */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent hover:from-indigo-600 hover:to-purple-600 transition-all duration-500">
                VibeTyper
              </span>
              <span className="block text-3xl md:text-4xl mt-4 font-semibold text-gray-700 dark:text-gray-300 min-h-[1.2em]">
                {typingText}
                <span className="animate-pulse text-blue-600">|</span>
              </span>
            </h1>
          </div>
          
          {/* Enhanced Animated Description */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              Advanced typing assessment platform developed by students at Texas College of Management and IT. 
              Designed for professionals, educational institutions, and organizations requiring comprehensive 
              typing proficiency evaluation with industry-standard metrics.
            </p>
          </div>

          {/* Enhanced Animated Credentials Banner */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-600 shadow-lg max-w-3xl mx-auto hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in">
              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 group">
                <GraduationCap className="w-7 h-7 text-blue-600 dark:text-blue-400 animate-bounce group-hover:animate-spin" style={{animationDelay: '1s'}} />
                <div className="text-left">
                  <div className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-600 transition-colors">Academic Excellence</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Student-Developed Platform</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-600 animate-grow"></div>
              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 group">
                <Users className="w-7 h-7 text-indigo-600 dark:text-indigo-400 animate-bounce group-hover:animate-spin" style={{animationDelay: '2s'}} />
                <div className="text-left">
                  <div className="text-gray-900 dark:text-white font-semibold group-hover:text-indigo-600 transition-colors">Institutional Backing</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Texas College of Management & IT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Animated Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link
              to="/typing-test"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white font-semibold text-lg rounded-lg hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 animate-button-glow"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse group-hover:scale-125 transition-transform" />
              Start Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold text-lg rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 animate-button-glow-alt"
            >
              <BookOpen className="w-5 h-5 mr-2 group-hover:animate-pulse group-hover:scale-125 transition-transform" />
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Animated Stats Section */}
      <div className="relative bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-800/20 dark:to-indigo-800/20 py-16 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`text-center transform transition-all duration-1000 hover:scale-110 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{transitionDelay: `${1200 + index * 200}ms`}}
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse group-hover:animate-bounce group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-count-up">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="relative bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-500 animate-spin hover:animate-pulse" style={{animationDuration: '3s'}} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
              Professional Assessment Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up">
              Comprehensive evaluation tools designed to meet industry standards and academic requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group p-6 bg-gradient-to-br ${feature.gradient} rounded-xl border ${feature.border} hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer animate-card-float`}
                  style={{
                    animationDelay: `${2000 + index * 150}ms`,
                    animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                  }}
                >
                  <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 animate-icon-bounce`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor} group-hover:animate-pulse group-hover:scale-125 transition-transform`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-bounce-right" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Call to Action Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-700 py-20 overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce animate-glow-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce animate-glow-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce animate-glow-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white/10 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 right-10 w-6 h-6 bg-white/10 rounded-full animate-float"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <TrendingUp className="w-12 h-12 text-white mx-auto animate-pulse hover:animate-bounce hover:scale-125 transition-transform" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 animate-text-glow">
            Begin Your Professional Assessment
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Join professionals and students worldwide who rely on VibeTyper for accurate, 
            comprehensive typing proficiency evaluation. Experience the standard in typing assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/typing-test"
              className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold text-lg rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 animate-cta-glow"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse group-hover:scale-125 transition-transform" />
              Launch Assessment
              <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="group inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-cta-glow-alt"
            >
              Platform Overview
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-8px) rotate(12deg); }
        }

        @keyframes float-word {
          0%, 100% { 
            transform: translateY(0) rotate(-2deg);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-20px) rotate(2deg);
            opacity: 0.3;
          }
        }

        @keyframes float-word-reverse {
          0%, 100% { 
            transform: translateY(0) rotate(2deg);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(20px) rotate(-2deg);
            opacity: 0.3;
          }
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
        }

        @keyframes orbit-reverse {
          0% { transform: rotate(0deg) translateX(25px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(25px) rotate(360deg); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }

        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes button-glow {
          0%, 100% { box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6); }
        }

        @keyframes button-glow-alt {
          0%, 100% { box-shadow: 0 4px 15px rgba(107, 114, 128, 0.3); }
          50% { box-shadow: 0 8px 25px rgba(107, 114, 128, 0.5); }
        }

        @keyframes card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes icon-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes bounce-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.3); }
          50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.6); }
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
          50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
        }

        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3); }
          50% { box-shadow: 0 12px 40px rgba(255, 255, 255, 0.5); }
        }

        @keyframes cta-glow-alt {
          0%, 100% { box-shadow: 0 8px 30px rgba(255, 255, 255, 0.2); }
          50% { box-shadow: 0 12px 40px rgba(255, 255, 255, 0.4); }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes grow {
          0% { height: 0; }
          100% { height: 3rem; }
        }

        @keyframes count-up {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        /* Animation classes */
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        .animate-float-word {
          animation: float-word 6s ease-in-out infinite;
        }

        .animate-float-word-reverse {
          animation: float-word-reverse 7s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 4s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 3s linear infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-text-shimmer {
          background: linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6, #6366f1, #3b82f6);
          background-size: 200% 100%;
          animation: text-shimmer 3s ease-in-out infinite;
        }

        .animate-button-glow {
          animation: button-glow 2s ease-in-out infinite;
        }

        .animate-button-glow-alt {
          animation: button-glow-alt 2s ease-in-out infinite;
        }

        .animate-card-float {
          animation: card-float 4s ease-in-out infinite;
        }

        .animate-icon-bounce {
          animation: icon-bounce 2s ease-in-out infinite;
        }

        .animate-bounce-right {
          animation: bounce-right 1s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }

        .animate-cta-glow {
          animation: cta-glow 2s ease-in-out infinite;
        }

        .animate-cta-glow-alt {
          animation: cta-glow-alt 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }

        .animate-grow {
          animation: grow 1s ease-out forwards;
        }

        .animate-count-up {
          animation: count-up 1s ease-out forwards;
        }

        /* Hover effects */
        .group:hover .animate-pulse {
          animation-duration: 0.5s;
        }

        .group:hover .animate-bounce {
          animation-duration: 0.8s;
        }

        /* Dark mode adjustments */
        .dark .animate-glow {
          animation: glow 2s ease-in-out infinite;
          filter: brightness(0.8);
        }

        /* Responsive animations */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Performance optimizations */
        .animate-float,
        .animate-float-delayed,
        .animate-float-slow,
        .animate-orbit,
        .animate-orbit-reverse,
        .animate-spin-slow {
          will-change: transform;
        }

        .animate-glow,
        .animate-button-glow,
        .animate-button-glow-alt,
        .animate-glow-pulse,
        .animate-cta-glow,
        .animate-cta-glow-alt {
          will-change: box-shadow;
        }

        .animate-text-shimmer {
          will-change: background-position;
        }
      `}</style>
    </div>
  );
};

export default Home;