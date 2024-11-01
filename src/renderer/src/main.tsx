import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from '@renderer/components/ui/sonner'
import { ThemeProvider } from '@renderer/components/theme-provider'
import App from './App'
import '@fontsource-variable/inter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
)
