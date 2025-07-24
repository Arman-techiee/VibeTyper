import React from 'react';
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
  Building
} from 'lucide-react';

const About = () => {
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
    'Better performance in digital communication and documentation',
    'Increased efficiency in research and data entry tasks',
    'Reduced physical strain through proper technique development',
    'Confidence building in technology-dependent work environments'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Keyboard className="w-16 h-16" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            About <span className="text-blue-300">VibeTyper</span>
          </h1>
          
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-blue-100 mb-8">
            A comprehensive typing assessment platform developed by students at Texas College of Management and IT, 
            designed to evaluate and enhance typing proficiency through evidence-based methodologies.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <GraduationCap className="w-6 h-6 text-blue-300" />
            <span className="font-semibold text-blue-100">
              Academic Research Project - Texas College of Management & IT
            </span>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              VibeTyper was developed to address the growing need for standardized typing proficiency assessment 
              in academic and professional environments. Our platform combines rigorous educational methodology 
              with modern technology to provide accurate, reliable typing evaluation tools.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Developed by a dedicated team of students from Texas College of Management and IT, this platform 
              represents the intersection of academic research, technological innovation, and practical application 
              in educational assessment.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Academic Foundation</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Every feature is grounded in educational research and designed to meet the standards expected 
                by academic institutions and professional organizations worldwide.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Award className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              Benefits of Typing Proficiency
            </h3>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Research and Development Focus
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our student research team focuses on advancing typing assessment methodologies through 
              innovative approaches and evidence-based practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchFocus.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Platform Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Advanced features designed to provide comprehensive typing assessment and skill development support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {platformFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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
      </section>

      {/* Performance Classifications */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Performance Classification System
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our standardized classification system provides clear benchmarks for typing proficiency 
              assessment across all skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skillClassifications.map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} rounded-lg p-6 border-2 hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold mb-1">{skill.level}</h3>
                  <div className="text-2xl font-bold mb-2">{skill.wpm}</div>
                  <p className="text-sm opacity-90">{skill.description}</p>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className={`${skill.progressColor} h-2 rounded-full transition-all duration-500`}
                    style={{ width: skill.progress }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards and Recognition */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Building className="w-12 h-12 text-blue-200" />
          </div>
          
          <h2 className="text-3xl font-bold mb-6">
            Professional Standards Compliance
          </h2>
          
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-blue-100 mb-8">
            VibeTyper assessment methodology aligns with international standards for typing proficiency 
            evaluation, ensuring results are recognized by educational institutions and professional organizations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">Standardized Timing</h3>
              <p className="text-sm text-blue-200">Consistent assessment duration and protocols</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">Accuracy Metrics</h3>
              <p className="text-sm text-blue-200">Precise measurement of typing accuracy and errors</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">Professional Recognition</h3>
              <p className="text-sm text-blue-200">Results suitable for academic and professional portfolios</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;