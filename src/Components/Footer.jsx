import React from 'react';
import { Keyboard, Github, Mail, Building2, Shield, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 text-slate-800 dark:text-white border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="p-2.5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg mr-4 shadow-sm">
                <Keyboard className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-semibold text-slate-900 dark:text-white">
                  VibeTyper
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Professional Assessment Platform</p>
              </div>
            </div>
            
            <p className="text-slate-700 dark:text-slate-300 max-w-lg text-sm leading-relaxed mb-6">
              Enterprise-grade typing assessment solution designed for professional development, 
              recruitment processes, and skill certification. Trusted by organizations worldwide 
              for accurate performance evaluation.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Real-time Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Building2 className="w-4 h-4 text-purple-600" />
                <span>Enterprise Ready</span>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4">Contact</h3>
            <div className="space-y-3 mb-6">
              <div className="text-sm">
                <p className="text-slate-600 dark:text-slate-400">Support & Inquiries</p>
                <a 
                  href="mailto:arman.techiee@gmail.com" 
                  className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  arman.techiee@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex gap-3">
              <a
                href="https://github.com/Arman-techiee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-200"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:arman.techiee@gmail.com"
                className="p-2 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-200"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex flex-col md:flex-row items-center gap-4 text-slate-600 dark:text-slate-400">
              <p>© 2025 VibeTyper. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
            
            <div className="text-slate-500 dark:text-slate-500 text-center md:text-right">
              <p>Developed at Texas College of Management & IT</p>
              <p className="mt-1">Built with React · Tailwind CSS · Modern Web Standards</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;