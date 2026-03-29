# 🔍 AutoComplete Search

A fast, responsive autocomplete search application that fetches recipe data in real-time. Built with React and Vite for optimal performance and developer experience.

## ✨ Features

- **Real-time Autocomplete**: Search recipes as you type with debounced API calls
- **Smart Caching**: Results are cached locally to minimize API requests
- **Smooth UX**: Focus-based results dropdown with blur-to-hide functionality
- **Fast Performance**: Vite-powered for instant HMR and rapid builds
- **Clean Code**: ESLint configured for consistent code quality

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.1
- **API**: DummyJSON Recipes API
- **Styling**: CSS3
- **Linting**: ESLint

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/uday-009/autocompletesearch.git
cd autocompletesearch

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
autocompletesearch/
├── src/
│   ├── App.jsx          # Main autocomplete component
│   ├── App.css          # Application styles
│   ├── main.jsx         # React entry point
│   ├── index.css        # Global styles
│   └── assets/          # Static assets
├── public/              # Public files
├── package.json         # Dependencies & scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint rules
└── README.md            # This file
```

## 🎯 How It Works

1. User types in the search input field
2. A 300ms debounce timer prevents excessive API calls
3. Application checks the cache first for matching results
4. If not cached, fetches from DummyJSON Recipes API
5. Results are cached and displayed in a dropdown
6. Dropdown shows/hides based on input focus

## 📝 Code Quality

Lint your code:

```bash
npm run lint
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created by [uday-009](https://github.com/uday-009)
