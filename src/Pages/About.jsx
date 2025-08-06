import React, { useState, useEffect } from 'react';
import {
  Target,
  Users,
  Award,
  Keyboard,
  TrendingUp,
  GraduationCap,
  Brain,
  Code,
  Lightbulb,
  Medal,
  ChevronRight,
  BookOpen,
  Shield,
  BarChart3,
  Clock,
  CheckCircle,
  Building,
  User
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState('');
  const fullText = 'VibeTyper';
  
  // Typing animation for hero title
  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 150);
    
    return () => clearInterval(typeTimer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const platformFeatures = [
    {
      icon: Brain,
      title: 'Advanced Assessment Engine',
      description:
        'Sophisticated algorithms analyze typing patterns, accuracy metrics, and performance indicators to provide comprehensive evaluation with industry-standard precision.',
    },
    {
      icon: Medal,
      title: 'Academic Excellence Standards',
      description:
        'Assessment methodology validated against international educational standards, ensuring reliable evaluation metrics recognized by academic institutions and employers.',
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Analytics Dashboard',
      description:
        'Real-time performance tracking with detailed statistical analysis, progress monitoring, and historical data visualization for informed skill development.',
    },
    {
      icon: Shield,
      title: 'Professional Content Library',
      description:
        'Curated collection of professional, academic, and technical texts designed to enhance typing proficiency across diverse domains and industry contexts.',
    },
  ];

  const skillClassifications = [
    {
      level: 'Beginner',
      wpm: '0-24 WPM',
      description: 'Foundation level - Building basic typing skills',
      color: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
      progress: '20%',
      progressColor: 'bg-red-500',
    },
    {
      level: 'Developing',
      wpm: '25-39 WPM',
      description: 'Intermediate level - Developing core competencies',
      color: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800',
      progress: '40%',
      progressColor: 'bg-yellow-500',
    },
    {
      level: 'Proficient',
      wpm: '40-59 WPM',
      description: 'Competent level - Professional-grade proficiency',
      color: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
      progress: '60%',
      progressColor: 'bg-green-500',
    },
    {
      level: 'Advanced',
      wpm: '60-79 WPM',
      description: 'Advanced level - High-efficiency performance',
      color: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
      progress: '80%',
      progressColor: 'bg-blue-500',
    },
    {
      level: 'Expert',
      wpm: '80+ WPM',
      description: 'Expert level - Professional mastery achievement',
      color: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800',
      progress: '100%',
      progressColor: 'bg-purple-500',
    },
  ];

  const researchFocus = [
    {
      icon: Target,
      title: 'Performance Measurement',
      description:
        'Development of precise metrics for typing speed, accuracy assessment, and comprehensive error analysis methodologies.',
    },
    {
      icon: Brain,
      title: 'Cognitive Load Analysis',
      description:
        'Research into typing patterns and cognitive processing to optimize learning outcomes and skill development pathways.',
    },
    {
      icon: TrendingUp,
      title: 'Adaptive Assessment',
      description:
        'Implementation of intelligent systems that adapt assessment difficulty and content based on individual performance profiles.',
    },
  ];

  const benefits = [
    'Enhanced productivity in academic and professional environments',
    'Improved digital literacy and technological competence',
    'Reduced cognitive load enabling focus on content creation',
    'Competitive advantage in employment and educational settings',
    'Superior performance in digital communication and documentation',
    'Increased efficiency in research and data entry tasks',
    'Optimized physical technique reducing strain and fatigue',
    'Enhanced confidence in technology-dependent work environments'
  ];

  const developmentTeam = [
    { name: 'Arman Khan', role: 'BIT Student' },
    { name: 'Samiksha Dhamala', role: 'BIT Student' },
    { name: 'Kalpana Chaudhary', role: 'BIT Student' },
    { name: 'Sampada K.C.', role: 'BIT Student' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full animate-spin duration-[20s]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-3 animate-bounce">
              <Keyboard className="w-20 h-20 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-blue-300 inline-block">
              {typedText}
              <span className="animate-blink">|</span>
            </span>
            <span className="block text-3xl md:text-4xl font-light text-blue-100 mt-2 animate-fade-in-up delay-2000">
              Professional Typing Assessment Platform
            </span>
          </h1>
          
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-blue-100 mb-10 animate-fade-in-up delay-3000">
            A state-of-the-art typing proficiency evaluation system engineered by BIT students 
            at Texas College of Management and IT, implementing evidence-based assessment methodologies 
            for academic and professional excellence.
          </p>

          <div className="inline-flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-xl px-8 py-4 border border-white/30 shadow-lg animate-fade-in-up delay-4000 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <GraduationCap className="w-7 h-7 text-blue-300 animate-bounce" />
            <span className="font-semibold text-blue-100 text-lg">
              Academic Research Initiative | Texas College of Management & IT
            </span>
          </div>
        </div>
      </section>

      {/* Development Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div 
          id="team-header"
          data-animate
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible['team-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Development Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            VibeTyper represents the collaborative effort of dedicated BIT students, 
            combining technical expertise with rigorous academic research methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {developmentTeam.map((member, index) => (
            <div
              key={index}
              id={`team-member-${index}`}
              data-animate
              className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible[`team-member-${index}`] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          id="team-support"
          data-animate
          className={`bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 transform transition-all duration-1000 hover:scale-[1.02] ${
            isVisible['team-support'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Academic Supervision & Institutional Support
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              This project is conducted under the academic guidance of the IT Department 
              at Texas College of Management and IT, with institutional support ensuring adherence to 
              international standards in educational technology and assessment methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div 
              id="mission-content"
              data-animate
              className={`transform transition-all duration-1000 ${
                isVisible['mission-content'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <Target className="w-10 h-10 text-blue-600 dark:text-blue-400 animate-pulse" />
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Mission Statement</h2>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                VibeTyper addresses the critical need for standardized, reliable typing proficiency 
                assessment in contemporary academic and professional environments. Our platform integrates 
                advanced computational methodologies with established educational assessment principles 
                to deliver precise, actionable insights into typing performance.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                Developed through extensive research and iterative design processes, this platform 
                represents the synthesis of academic rigor, technological innovation, and practical 
                application in educational assessment technology.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400 animate-bounce" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Research Foundation</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Every algorithmic component and assessment metric is grounded in peer-reviewed educational 
                  research and validated against established international standards for typing proficiency evaluation.
                </p>
              </div>
            </div>

            <div 
              id="benefits-section"
              data-animate
              className={`bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 rounded-xl shadow-xl p-10 border border-gray-200 dark:border-gray-700 transform transition-all duration-1000 hover:scale-105 ${
                isVisible['benefits-section'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-spin duration-[3s]" />
                Professional Impact & Benefits
              </h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 animate-fade-in-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0 animate-pulse" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div 
          id="research-header"
          data-animate
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible['research-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Research & Development Framework
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our interdisciplinary research approach combines computational linguistics, cognitive psychology, 
            and educational assessment theory to advance typing proficiency evaluation methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {researchFocus.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                id={`research-${index}`}
                data-animate
                className={`bg-white dark:bg-gray-800 rounded-xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 transform hover:scale-110 hover:-translate-y-4 ${
                  isVisible[`research-${index}`] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="features-header"
            data-animate
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible['features-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Advanced Platform Architecture
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Sophisticated technological infrastructure designed to deliver precise, reliable, 
              and comprehensive typing assessment capabilities for diverse educational contexts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  id={`feature-${index}`}
                  data-animate
                  className={`flex gap-8 p-8 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-500 border border-gray-200 dark:border-gray-600 transform hover:scale-105 hover:-translate-y-2 ${
                    isVisible[`feature-${index}`] 
                      ? 'translate-x-0 opacity-100' 
                      : `${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'} opacity-0`
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Classifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div 
          id="classifications-header"
          data-animate
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible['classifications-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Standardized Performance Classification
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our evidence-based classification system provides internationally recognized benchmarks 
            for typing proficiency assessment across all competency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillClassifications.map((skill, index) => (
            <div
              key={index}
              id={`skill-${index}`}
              data-animate
              className={`${skill.color} rounded-xl p-8 border-2 hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 hover:rotate-1 ${
                isVisible[`skill-${index}`] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{skill.level}</h3>
                <div className="text-3xl font-bold mb-3 animate-pulse">{skill.wpm}</div>
                <p className="text-sm opacity-90 leading-relaxed">{skill.description}</p>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                <div
                  className={`${skill.progressColor} h-3 rounded-full transition-all duration-1000 ease-out animate-progress-fill`}
                  style={{ 
                    width: isVisible[`skill-${index}`] ? skill.progress : '0%',
                    transitionDelay: `${index * 200 + 500}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standards and Recognition */}
      <section className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300/10 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-indigo-300/10 rounded-full animate-float delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div 
            id="standards-icon"
            data-animate
            className={`flex justify-center mb-8 transform transition-all duration-1000 ${
              isVisible['standards-icon'] ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            <Building className="w-16 h-16 text-blue-200 animate-bounce" />
          </div>
          
          <h2 
            id="standards-title"
            data-animate
            className={`text-4xl font-bold mb-8 transform transition-all duration-1000 ${
              isVisible['standards-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            International Standards Compliance
          </h2>
          
          <p 
            id="standards-description"
            data-animate
            className={`text-xl max-w-5xl mx-auto leading-relaxed text-blue-100 mb-12 transform transition-all duration-1000 ${
              isVisible['standards-description'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            VibeTyper's assessment methodology rigorously adheres to international standards for 
            typing proficiency evaluation, ensuring comprehensive compatibility with academic 
            institutions and professional certification requirements worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { icon: Clock, title: 'Standardized Protocols', desc: 'Consistent assessment duration, timing mechanisms, and evaluation protocols' },
              { icon: Target, title: 'Precision Metrics', desc: 'Advanced algorithms for accurate measurement of speed, accuracy, and error analysis' },
              { icon: Award, title: 'Professional Certification', desc: 'Assessment results suitable for academic transcripts and professional portfolios' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  id={`standard-${index}`}
                  data-animate
                  className={`text-center transform transition-all duration-1000 hover:scale-110 ${
                    isVisible[`standard-${index}`] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-blue-200 animate-pulse" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-blue-200 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-progress-fill {
          animation: progress-fill 1.5s ease-out forwards;
        }
        
        @keyframes progress-fill {
          from { width: 0%; }
          to { width: var(--progress-width); }
        }
        
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
        .delay-3000 { animation-delay: 3s; }
        .delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default About;