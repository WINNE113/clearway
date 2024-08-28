import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <h1 className="text-3xl font-bold underline text-orange-600">
    Hello world!
  </h1>
)
