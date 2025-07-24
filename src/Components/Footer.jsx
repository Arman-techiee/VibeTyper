import React from 'react';
import { Keyboard, Github, Mail, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mr-4 shadow-lg">
                <Keyboard className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  VibeTyper
                </span>
                <p className="text-slate-400 text-sm mt-1">Professional Typing Assessment</p>
              </div>
            </div>
            
            <p className="text-slate-300 max-w-2xl text-base leading-relaxed mb-6">
              Advanced typing assessment platform engineered for professional development 
              and skill enhancement. Built with modern web technologies to deliver 
              accurate, real-time performance analytics.
            </p>

            {/* Academic Badge */}
            <div className="inline-flex items-center gap-3 bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-blue-300 font-medium text-sm">Academic Excellence</p>
                <p className="text-slate-400 text-xs">Texas College of Management & IT</p>
              </div>
            </div>
          </div>

          {/* Contact & Links */}
          <div className="text-center lg:text-right">
            <h3 className="text-lg font-semibold text-white mb-6">Connect With Us</h3>
            <div className="flex justify-center lg:justify-end gap-4 mb-8">
              <a
                href="https://github.com/Arman-techiee"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-slate-800 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="GitHub Repository"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:arman.techiee@gmail.com"
                className="group p-3 bg-slate-800 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="text-slate-400 text-sm space-y-2">
              <p>For inquiries and support</p>
              <p className="text-blue-400 font-medium">arman.techiee@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © 2025 VibeTyper. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Built with React, Tailwind CSS, and dedication to excellence
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm font-medium">
                Student Innovation Project
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Texas College of Management & Information Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;