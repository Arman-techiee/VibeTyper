import React from 'react';
import { Keyboard, Github, Mail, GraduationCap, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-t border-slate-700 dark:from-slate-950 dark:to-slate-900 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mr-4">
                <Keyboard className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                VibeTyper
              </span>
            </div>
            <p className="text-slate-300 dark:text-slate-400 mb-6 max-w-lg text-lg leading-relaxed">
              Professional typing assessment platform engineered by students at Texas College of Management and IT. 
              Advancing digital literacy through innovative technology and academic excellence.
            </p>

            {/* Academic Credentials */}
            <div className="bg-slate-800/50 dark:bg-slate-900/50 rounded-xl p-4 mb-6 border border-slate-700 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">Academic Project</span>
              </div>
              <p className="text-slate-400 text-sm">
                Student Innovation Initiative - Texas College of Management & IT
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Arman-techiee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-slate-600 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="mailto:arman.techiee@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-slate-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Academic Partnership */}
        <div className="border-t border-slate-700 dark:border-slate-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-300 dark:text-slate-400 font-semibold">
                  Developed by Students of Texas College of Management & IT
                </p>
                <p className="text-slate-400 dark:text-slate-500 text-sm">
                  Advancing Digital Education Through Innovation
                </p>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-slate-300 dark:text-slate-400 text-sm">
                © 2025 VibeTyper. All rights reserved.
              </p>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">
                Built with React, Tailwind CSS & Academic Excellence
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-slate-800/30 dark:bg-slate-900/40 rounded-lg border border-slate-700 dark:border-slate-800">
          <p className="text-slate-400 dark:text-slate-500 text-xs text-center">
            This platform is an academic project developed for educational purposes. 
            All assessment methodologies are based on industry standards and academic research.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
