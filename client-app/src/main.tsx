import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import App from './app/layout/App'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
