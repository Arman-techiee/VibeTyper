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
} from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Advanced Algorithmic Analysis',
      description:
        'Proprietary machine learning algorithms developed by our student research team provide unprecedented accuracy in WPM and precision metrics with real-time computational feedback.',
    },
    {
      icon: Medal,
      title: 'Academic Standard Compliance',
      description:
        'Assessment methodology rigorously tested and validated against international professional standards, ensuring credible evaluation metrics recognized by industry leaders.',
    },
    {
      icon: TrendingUp,
      title: 'Comprehensive Performance Analytics',
      description:
        'Multi-dimensional progress tracking with advanced statistical modeling, trend analysis, and predictive performance forecasting based on historical data patterns.',
    },
    {
      icon: Code,
      title: 'Diverse Content Repository',
      description:
        'Extensive database of professional, technical, academic, and specialized texts curated to enhance typing versatility across multiple domains and industries.',
    },
  ];

  const skillLevels = [
    {
      level: 'Novice',
      wpm: '0-24 WPM',
      description: 'Foundation-level typing development',
      color: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100',
      progress: '10%',
    },
    {
      level: 'Developing',
      wpm: '25-39 WPM',
      description: 'Building core competency skills',
      color: 'bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100',
      progress: '30%',
    },
    {
      level: 'Proficient',
      wpm: '40-59 WPM',
      description: 'Professional-level competency',
      color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100',
      progress: '60%',
    },
    {
      level: 'Advanced',
      wpm: '60-79 WPM',
      description: 'High-efficiency performance',
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
      progress: '80%',
    },
    {
      level: 'Expert',
      wpm: '80+ WPM',
      description: 'Elite-level mastery achievement',
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100',
      progress: '100%',
    },
  ];

  const researchAreas = [
    {
      icon: Brain,
      title: 'Cognitive Performance Analysis',
      description:
        'Research into typing patterns and cognitive load optimization for enhanced learning outcomes.',
    },
    {
      icon: Target,
      title: 'Precision Measurement Systems',
      description:
        'Development of advanced metrics for accuracy assessment and error pattern recognition.',
    },
    {
      icon: Lightbulb,
      title: 'Adaptive Learning Algorithms',
      description:
        'Machine learning models that adapt assessment difficulty based on individual performance curves.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl">
              <Keyboard className="w-20 h-20" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              VibeTyper
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-200">
            An innovative academic research project developed by dedicated
            students at Texas College of Management and IT...
          </p>

          {/* Academic Badge */}
          <div className="mt-10 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
            <GraduationCap className="w-6 h-6 text-blue-300" />
            <span className="text-blue-100 font-semibold">
              Student Innovation Project 2025
            </span>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <article>
            <header className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Our Academic Mission
              </h2>
            </header>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              In the rapidly evolving digital landscape...
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Our interdisciplinary student team...
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Research-Driven Development
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Every feature is backed by extensive research...
              </p>
            </div>
          </article>

          <aside className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Award className="w-7 h-7 text-indigo-600 dark:text-indigo-300" />
              Impact of Typing Proficiency
            </h3>
            <ul className="space-y-4 list-none">
              {[
                'Enhanced academic productivity and research efficiency',
                'Reduced cognitive load allowing focus on content creation',
                'Improved digital literacy and technological competence',
                'Competitive advantage in professional environments',
                'Better performance in standardized testing scenarios',
                'Increased confidence in digital communication platforms',
                'Reduced physical strain and repetitive stress injuries',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-500 dark:text-blue-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Academic Research Focus Areas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our student research team explores...
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <article
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800 rounded-xl mb-6">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Advanced Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover the sophisticated features...
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={index}
                  className="flex items-start space-x-6 p-6 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800 rounded-xl">
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skill Levels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Academic Performance Classifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our scientifically-validated classification system...
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillLevels.map((skill, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${skill.color}`}>
                {skill.level}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{skill.wpm}</div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">{skill.description}</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: skill.progress }}
                ></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Aligned with Global Professional Standards
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our assessment platform conforms to international typing certification standards...
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
