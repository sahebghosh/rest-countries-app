# 🌍 React Country Explorer App

A modern React application to explore countries, built with a focus on **performance**, **user experience**, and **interview-ready features**.

---

## 🚀 Features

### 🔎 Smart Search

- Debounced search with custom `useDebounce` hook
- Filters countries by name with minimal API reprocessing

### 🌐 Region Filters

- Tab-based filtering for All, Europe, Asia, Africa, Oceania, Americas, Antarctic
- Dynamic count displayed on each region tab

### 📜 Scroll-Based Pagination

- Infinite scroll loading using `IntersectionObserver`
- Smooth user experience for large datasets

### 🧭 Routing

- Built with `react-router-dom@6`
- Home page `/` and dynamic Country Detail route `/country/:name`
- Graceful 404 route handling

### 💥 Error Boundaries

- Custom `ErrorBoundary` component wraps risky UI
- Prevents complete app crash on runtime errors

### 🎯 Performance Optimizations

- Used `useMemo`, `useCallback`, `React.memo` to prevent unnecessary renders
- Modular, clean architecture

### 💄 Final UI Polish

- Responsive design using Tailwind CSS
- Country cards grid with flag, capital, region
- Country detail page with flag, region, capital, population, currency, and languages
- Subtle UX touches (hover effects, spinners, clear layout)

---

## 🛠️ Tech Stack

- React (v18+)
- React Router DOM v6
- Tailwind CSS 3.x
- REST Countries API: [https://restcountries.com](https://restcountries.com)

---

## 🧪 How to Run

```bash
npm install
npm start

Visit http://localhost:3000



```

---

## 👨‍💻 Developer

Saheb Ghosh
Frontend Developer (React/Angular)
