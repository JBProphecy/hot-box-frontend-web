////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./TestPage.module.css"

import { useContext } from "react"
import { ThemeContext, type ThemeContextContents } from "@/context/ThemeContext"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function TestPage() {
  // Theme Context
  const theme: ThemeContextContents | undefined = useContext(ThemeContext)
  if (!theme) { throw new Error("Missing Theme Provider") }

  // Toggle Theme
  const toggleTheme = () => {
    if (theme.name === "dark") { theme.setName("light") }
    else { theme.setName("dark") }
  }

  // Return Element
  return (
    <div className={styles.page}>
      <h1
        onClick={toggleTheme}
      >Hello</h1>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
