////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import './App.css'
import "@/styles/elements.css"

import { ThemeProvider } from '@/providers'
import { TestPage } from '@/pages'

export default function App() {
  return (
    <ThemeProvider>
      <TestPage />
    </ThemeProvider>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
