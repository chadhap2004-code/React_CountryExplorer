# Country Explorer 🌍

A React application to browse and explore information about 250+ countries worldwide using a live REST API.

**Live Demo:** http://localhost:5173/  
**Built as part of:** 30 Days of React — Day 8

---

## Features

- Browse 250+ countries in a responsive grid
- Live search — filters countries instantly as you type
- Loading skeleton cards while data is being fetched
- Error state with retry button if API fails
- Click any country to view detailed information
- Detail view shows capital, population, currency, languages, area, and timezone
- Back navigation using browser history
- Fetch cancellation using AbortController on unmount

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool and dev server |
| CSS | Styling — no external UI library |
| REST Countries API | Country data source |
| flagcdn.com | Flag images |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/country-explorer.git

# Navigate into the project
cd country-explorer

# Install dependencies
npm install

# Start the development server
npm run dev
```





