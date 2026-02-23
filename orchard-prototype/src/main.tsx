import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import PasswordGate from './components/PasswordGate.tsx' // Re-enable for password protection

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Password protection temporarily disabled - uncomment to re-enable:
    <PasswordGate>
      <App />
    </PasswordGate>
    */}
    <App />
  </StrictMode>,
)
