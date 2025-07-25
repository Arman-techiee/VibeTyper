import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Keyboard, Menu, X, Home, Info, Target, BarChart3, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Initialize state from localStorage or prefers-color-scheme
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark') return true;
      if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Typing Test', href: '/typing-test', icon: Target },
    { name: 'Results', href: '/result', icon: BarChart3 },
    { name: 'About', href: '/about', icon: Info },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Keyboard className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">VibeTyper</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 dark:hover:text-blue-400 transition-colors"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
            
            {/* Desktop Auth and Dark Mode */}
            <div className="flex items-center space-x-3">
              <DarkModeToggle />
              
              {/* Desktop Auth Buttons */}
              <SignedOut>
                <SignInButton mode="modal">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors">
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
              
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>

          {/* Mobile menu and controls */}
          <div className="flex items-center md:hidden space-x-2">
            <DarkModeToggle />
            
            {/* Mobile Auth Buttons */}
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8"
                  }
                }}
              />
            </SignedIn>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;