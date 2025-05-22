import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// tailwind.config.js

module.exports = {
  // ...
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    // Add any other file paths containing your HTML, JavaScript, or Vue components here.
  ],
}
