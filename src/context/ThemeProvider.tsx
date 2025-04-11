////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useRef, useState } from "react"
import { ThemeContext } from "./ThemeContext"
import { themes, type ThemeName } from "@/constants"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function ThemeProvider({ children }: { children: React.ReactNode }) {

  // Element Ref
  const root = useRef<HTMLElement>(document.getElementById("root")!)

  // Theme State
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const [name, setName] = useState<ThemeName>("dark")

  // Functions
  const addTransitionClass = () => { root.current.classList.add("themeTransition") }
  const removeTransitionClass = () => { root.current.classList.remove("themeTransition") }
  const setThemeValues = () => {
    root.current.style.setProperty("--backgroundColor", themes[name].backgroundColor)
    root.current.style.setProperty("--fontColor", themes[name].fontColor)
  }

  // Initialize Theme
  useEffect(() => { setThemeValues(); setIsInitialized(true) }, [])

  // Switch Theme
  useEffect(() => {
    if (!isInitialized) { return }
    addTransitionClass(); setThemeValues()
    root.current.addEventListener("transitionend", removeTransitionClass)
    return () => { root.current.removeEventListener("transitionend", removeTransitionClass) }
  }, [name])

  // Return Context
  return (
    <ThemeContext.Provider value={{ name, setName }}>
      {children}
    </ThemeContext.Provider>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
