import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SearchContextProvider } from './contexts/SearchContext.tsx'
import { MonthProvider } from './contexts/MonthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchContextProvider>
      <MonthProvider>

        <App />
      </MonthProvider>
    </SearchContextProvider>
  </React.StrictMode>,
)
