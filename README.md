# VibeTyper - Professional Typing Assessment Platform

**A modern, interactive typing speed test application built with React.js, Vite, and Tailwind CSS**

Version: 1.0.0 | License: MIT | React: 19.1.0 | Vite: 7.0.4 | Tailwind CSS: 4.1.11

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Configuration](#configuration)
- [Performance Levels](#performance-levels)
- [Authentication](#authentication)
- [Dark Mode](#dark-mode)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [Academic Information](#academic-information)
- [License](#license)

---

## 🎯 Overview

**VibeTyper** is an enterprise-grade typing assessment solution developed as an academic project at **Texas College of Management and IT** by **Arman Khan**, BIT student. The platform provides accurate performance evaluation through real-time analytics, comprehensive metrics, and professional certification capabilities.

### Key Highlights

- 🎓 **Academic Excellence**: Student-developed platform with institutional backing
- 🏆 **Professional Standards**: Industry-standard WPM calculations and accuracy measurements
- 📊 **Real-time Analytics**: Live performance tracking with detailed statistical analysis
- 🎨 **Modern UI/UX**: Clean, responsive interface with smooth animations
- 🔒 **Secure Authentication**: Powered by Clerk for user management
- 🌙 **Dark Mode**: Full dark mode support with system preference detection
- 📱 **Responsive Design**: Seamless experience across desktop and mobile devices

---

## ✨ Features

### Core Assessment Features

- **Real-time Typing Speed Calculation**: Accurate Words Per Minute (WPM) measurement
- **Accuracy Tracking**: Precise character-level accuracy with visual error highlighting
- **Multiple Difficulty Levels**: Casual, Professional, and Technical text samples
- **Customizable Test Duration**: 30 seconds to 5 minutes test options
- **Performance Classification**: Beginner to Expert level categorization
- **Test History**: Persistent storage of previous test results
- **Certificate Generation**: Professional typing certificates with downloadable PNG format

### User Experience

- **Intuitive Interface**: Clean, modern design with Tailwind CSS
- **Live Feedback**: Real-time WPM, accuracy, and error count updates
- **Progress Indicators**: Visual progress bars and completion status
- **Animated Transitions**: Smooth, engaging UI animations
- **Keyboard Shortcuts**: Quick navigation and test controls
- **Responsive Layout**: Optimized for all screen sizes

### Technical Features

- **Client-side Routing**: React Router for seamless navigation
- **State Management**: React hooks for efficient state handling
- **Local Storage**: Browser storage for test history and preferences
- **Performance Optimization**: Lazy loading and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Friendly**: Optimized meta tags and semantic HTML

---

## 🛠 Technology Stack

### Frontend Framework & Build Tools

- **React.js** (v19.1.0) - Frontend UI library
- **Vite** (v7.0.4) - Fast build tool and development server
- **React Router DOM** (v7.7.0) - Client-side routing

### Styling & UI

- **Tailwind CSS** (v4.1.11) - Utility-first CSS framework
- **@tailwindcss/vite** - Tailwind CSS Vite integration
- **Lucide React** (v0.525.0) - Icon library
- **tw-animate-css** - Animation utilities

### UI Components

- **Radix UI** - Headless UI components
  - `@radix-ui/react-slot`
- **Class Variance Authority** - CSS utility composition
- **clsx** & **tailwind-merge** - Conditional className utilities

### Authentication

- **Clerk React** (v5.36.0) - User authentication and management

### Development Tools

- **ESLint** (v9.30.1) - Code linting
- **eslint-plugin-react-hooks** - React hooks linting
- **eslint-plugin-react-refresh** - React refresh integration
- **@vitejs/plugin-react** - React plugin for Vite

---

## 📁 Project Structure

```
vibetyper/
├── public/
│   └── vite.svg                    # Application favicon
│
├── src/
│   ├── Components/
│   │   ├── ui/
│   │   │   ├── button.jsx          # Reusable button component
│   │   │   ├── card.jsx            # Card component
│   │   │   ├── DarkModeToggle.jsx  # Dark mode toggle button
│   │   │   ├── Instructions.jsx     # Test instructions component
│   │   │   ├── ResultsDisplay.jsx   # Results display component
│   │   │   ├── SettingsPanel.jsx    # Settings configuration panel
│   │   │   ├── StatCard.jsx         # Statistics card component
│   │   │   ├── TestHistory.jsx      # Test history component
│   │   │   ├── TextDisplay.jsx      # Text display with highlighting
│   │   │   └── TypingInput.jsx      # Typing input component
│   │   ├── Footer.jsx               # Application footer
│   │   ├── NavBar.jsx               # Navigation bar
│   │   ├── PleaseSignIn.jsx         # Sign-in prompt component
│   │   └── ProtectedRoute.jsx       # Route protection wrapper
│   │
│   ├── Pages/
│   │   ├── Home.jsx                 # Landing page
│   │   ├── TypingTest.jsx           # Main typing test interface
│   │   ├── Results.jsx              # Test results and history
│   │   └── About.jsx                # About page
│   │
│   ├── hooks/
│   │   └── useTypingTest.js         # Custom hook for typing test logic
│   │
│   ├── lib/
│   │   ├── textSamples.js           # Text samples for typing practice
│   │   └── utils.js                 # Utility functions
│   │
│   ├── context/
│   │   └── DarkModeContext.jsx      # Dark mode context provider
│   │
│   ├── routes/
│   │   └── AppRoute.jsx             # Application routing configuration
│   │
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Application entry point
│   ├── index.css                    # Global styles with Tailwind directives
│   └── App.css                      # Additional app styles
│
├── .gitignore                       # Git ignore configuration
├── components.json                  # Shadcn UI configuration
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML entry point
├── jsconfig.json                    # JavaScript configuration
├── package.json                     # Project dependencies
├── package-lock.json                # Dependency lock file
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration (if separate)
└── README.md                        # This file
```

---

## 🚀 Installation & Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v20.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn**

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/armanroot/vibetyper.git
cd vibetyper
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Clerk Authentication**

Create a `.env` file in the root directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

Get your Clerk publishable key from [Clerk Dashboard](https://dashboard.clerk.com/)

4. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📖 Usage Guide

### Taking a Typing Test

1. **Navigate to the Typing Test page** from the navigation menu
2. **Configure test settings** (optional):
   - Test duration: 30s, 1min, 2min, or 5min
   - Difficulty level: Casual, Professional, or Technical
3. **Click in the text area** to begin typing
4. **Type the displayed text** exactly as shown
5. **Monitor real-time statistics**:
   - ⚡ WPM (Words Per Minute)
   - 🎯 Accuracy percentage
   - ❌ Error count
   - ⏱️ Time remaining
6. **Complete the test** by typing all text or when time expires
7. **View your results** and performance level

### Viewing Results

- **Latest Test**: Automatically displayed after completing a test
- **Test History**: View past performance in the Results page
- **Certificate**: Generate and download your typing certificate
- **Performance Tracking**: Monitor progress over time

### Dark Mode

Toggle between light and dark modes using:

- **Navigation bar**: Click the sun/moon icon
- **Keyboard shortcut**: The toggle respects system preferences
- **Persistent**: Your preference is saved in local storage

---

## ⚙️ Configuration

### Test Settings

Configure test parameters in the Settings Panel:

```javascript
testSettings = {
  duration: 60, // Test duration in seconds (30, 60, 120, 300)
  difficulty: "professional", // Text difficulty level
  showKeyboard: false, // Show/hide virtual keyboard (future feature)
};
```

### Difficulty Levels

- **Casual**: Everyday conversation and general topics
- **Professional**: Business communication and formal writing
- **Technical**: Programming, technology, and specialized content

### Customization

Edit `src/lib/textSamples.js` to add new typing texts:

```javascript
export const professionalTexts = [
  "Your new professional text here...",
  // ... existing samples
];
```

Modify performance thresholds in `src/lib/utils.js`:

```javascript
export const getPerformanceLevel = (wpm) => {
  if (wpm >= 80) return { level: 'Expert', ... };
  // ... modify thresholds as needed
};
```

---

## 🏆 Performance Levels

The platform categorizes typing proficiency into five levels:

| Level          | WPM Range | Description                    | Color     |
| -------------- | --------- | ------------------------------ | --------- |
| **Expert**     | 80+ WPM   | Professional typing mastery    | 🟣 Purple |
| **Advanced**   | 60-79 WPM | High-efficiency performance    | 🔵 Blue   |
| **Proficient** | 40-59 WPM | Professional-grade proficiency | 🟢 Green  |
| **Developing** | 25-39 WPM | Intermediate level             | 🟡 Yellow |
| **Beginner**   | 0-24 WPM  | Foundation level               | 🔴 Red    |

### Assessment Criteria

- **Speed**: Words per minute (WPM) calculation
- **Accuracy**: Percentage of correct characters
- **Consistency**: Error rate and correction patterns
- **Duration**: Total time taken for assessment

---

## 🔐 Authentication

VibeTyper uses **Clerk** for secure user authentication:

### Features

- **Sign In/Sign Up**: Email, Google, GitHub authentication
- **User Management**: Profile management and settings
- **Protected Routes**: Results page requires authentication
- **Session Management**: Persistent login sessions
- **Security**: Industry-standard OAuth 2.0

### Implementation

```jsx
// Protected route wrapper
<ProtectedRoute>
  <Results />
</ProtectedRoute>
```

---

## 🌙 Dark Mode

### Features

- **System Preference Detection**: Automatically matches OS theme
- **Manual Toggle**: Switch between light and dark modes
- **Persistent Storage**: Saves preference in localStorage
- **Smooth Transitions**: Animated theme switching
- **Full Coverage**: All components support dark mode

### Implementation

```jsx
// Dark mode context provider
<DarkModeProvider>
  <App />
</DarkModeProvider>
```

---

## 🌐 Browser Compatibility

VibeTyper is compatible with modern browsers:

| Browser | Version           | Support |
| ------- | ----------------- | ------- |
| Chrome  | Latest 2 versions | ✅ Full |
| Firefox | Latest 2 versions | ✅ Full |
| Safari  | Latest 2 versions | ✅ Full |
| Edge    | Latest 2 versions | ✅ Full |
| Opera   | Latest version    | ✅ Full |

**Note**: Internet Explorer is not supported.

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with clear messages**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Code Style

- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add comments for complex logic

---

## 🎓 Academic Information

### Project Details

- **Institution**: Texas College of Management and IT
- **Developer**: Arman Khan
- **Program**: Bachelor of Information Technology (BIT)
- **Project Type**: Academic Development Project
- **Year**: 2025

### Project Goals

- Demonstrate full-stack development skills
- Implement modern React patterns and best practices
- Create a practical, user-friendly typing assessment tool
- Showcase UI/UX design capabilities
- Apply industry-standard development workflows

### Contact

- **Email**: arman.techiee@gmail.com
- **GitHub**: [armanroot](https://github.com/armanroot)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Arman Khan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- **Texas College of Management and IT** - Institutional support and guidance
- **React Team** - Amazing framework and documentation
- **Vite Team** - Lightning-fast build tool
- **Tailwind CSS** - Excellent utility-first CSS framework
- **Clerk** - Seamless authentication solution
- **Lucide** - Beautiful icon library

---

## 📞 Support

For issues, questions, or suggestions:

1. **Check existing issues** on GitHub
2. **Open a new issue** with detailed information
3. **Email support**: arman.techiee@gmail.com
4. **Review documentation** in this README

---

<div align="center">

**Built with ❤️ by Arman Khan**

**Texas College of Management & IT | 2025**

[⬆ Back to Top](#vibetyper---professional-typing-assessment-platform)

</div>

