import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { inter, satoshi } from '@ctrliq/quantic-fonts'
import './styles.css'
import { App } from './App'

inter.inject()
satoshi.inject()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
