import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AmazingNavBar from './components/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AmazingNavBar />
    <App />
  </StrictMode>,
)
