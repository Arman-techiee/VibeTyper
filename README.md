TypeTester - React.js Typing Speed Test Application

A modern, interactive typing speed test application built with React.js, Vite, and Tailwind CSS. Test and improve your typing skills with real-time feedback on speed, accuracy, and errors.

Features

•
Real-time Typing Speed Calculation: Measures Words Per Minute (WPM) as you type

•
Accuracy Tracking: Tracks typing accuracy with visual error highlighting

•
Multiple Text Samples: Various text samples for diverse typing practice

•
Performance Level Assessment: Categorizes typing performance from Novice to Expert

•
Test History: Stores and displays previous test results

•
Responsive Design: Works seamlessly on desktop and mobile devices

•
Modern UI: Clean, professional interface with Tailwind CSS

•
React Router: Multi-page navigation with client-side routing

Technology Stack

•
React.js - Frontend framework for building user interfaces

•
Vite - Fast build tool and development server

•
React Router - Client-side routing for navigation

•
Tailwind CSS - Utility-first CSS framework for styling

•
Local Storage - Browser storage for persisting test results

Project Structure

Plain Text


typetester-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Navigation component
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── TypingTest.jsx      # Main typing test interface
│   │   ├── Results.jsx         # Test results and history
│   │   └── About.jsx           # About page with information
│   ├── hooks/
│   │   └── useTypingTest.js    # Custom hook for typing test logic
│   ├── utils/
│   │   └── textSamples.js      # Text samples for typing practice
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles with Tailwind directives
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md


Installation and Setup

Prerequisites

•
Node.js (version 16 or higher)

•
npm or yarn package manager

Installation Steps

1.
Clone or create the project:

2.
Install dependencies:

3.
Install and configure Tailwind CSS (if not already done):

4.
Configure Tailwind CSS in tailwind.config.js:

5.
Add Tailwind directives to src/index.css:

Running the Application

Development Mode

Start the development server:

Bash


npm run dev


The application will be available at http://localhost:5173/

Build for Production

Create a production build:

Bash


npm run build


Preview Production Build

Preview the production build locally:

Bash


npm run preview


Usage Guide

Taking a Typing Test

1.
Navigate to the Typing Test page

2.
Read the text displayed in the gray text box

3.
Click in the text area and start typing

4.
Watch your real-time statistics update:

•
WPM: Words per minute

•
Accuracy: Percentage of correct characters

•
Errors: Number of incorrect characters

•
Time: Elapsed time



5.
Complete the entire text to finish the test

6.
View your results and performance level

Viewing Results

•
After completing a test, you'll be automatically redirected to the Results page

•
View your latest test performance and level assessment

•
Check your test history to track progress over time

•
Clear history if needed

Performance Levels

•
Expert (70+ WPM): Professional typing speed

•
Advanced (50-69 WPM): Above average speed

•
Intermediate (30-49 WPM): Average typing speed

•
Beginner (15-29 WPM): Learning phase

•
Novice (<15 WPM): Starting level

Key Components

Custom Hooks

useTypingTest.js: Manages all typing test logic including:

•
Timer functionality

•
WPM calculation

•
Accuracy tracking

•
Error counting

•
Test state management

Pages

•
Home: Welcome page with feature overview

•
TypingTest: Main typing interface with real-time feedback

•
Results: Test results display and history

•
About: Application information and usage guide

Utilities

textSamples.js: Contains various text samples for typing practice, including topics like technology, programming, and general knowledge.

Customization

Adding New Text Samples

Edit src/utils/textSamples.js to add new typing texts:

JavaScript


export const textSamples = [
  "Your new text sample here...",
  // ... existing samples
];


Styling Modifications

The application uses Tailwind CSS for styling. Modify classes in components or extend the Tailwind configuration for custom styling.

Performance Level Thresholds

Adjust WPM thresholds in src/pages/Results.jsx:

JavaScript


const getPerformanceLevel = (wpm) => {
  if (wpm >= 70) return { level: 'Expert', color: 'text-purple-600', bg: 'bg-purple-50' };
  // ... modify thresholds as needed
};


Browser Compatibility

•
Chrome (recommended)

•
Firefox

•
Safari

•
Edge

Local Storage

The application uses browser Local Storage to persist:

•
Latest test result

•
Test history

•
User preferences

Contributing

1.
Fork the repository

2.
Create a feature branch

3.
Make your changes

4.
Test thoroughly

5.
Submit a pull request

License

This project is open source and available under the MIT License.

Support

For issues or questions:

1.
Check the About page for usage instructions

2.
Review this README for setup guidance

3.
Test in different browsers if experiencing issues





Happy Typing! 🚀

