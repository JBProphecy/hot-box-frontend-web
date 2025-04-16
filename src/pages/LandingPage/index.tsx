////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.css"

import { useContext, useEffect, useState } from "react"
import { ThemeContext, type ThemeContextContents } from "@/context"

import type { ComponentAttributes } from "@/types"
import { Display, Row, SimpleButton, Text } from "@/modules/elements"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type LandingPageProps = ComponentAttributes

export function LandingPage({ isInteractive }: LandingPageProps) {

  // Initial Render
  const [isVisible, setIsVisible] = useState<boolean>(false)
  useEffect(() => { setIsVisible(true) }, [])

  // Theme Context
  const theme: ThemeContextContents | undefined = useContext(ThemeContext)
  if (!theme) { throw new Error("Missing Theme Provider") }

  // Toggle Theme
  const toggleTheme = () => {
    if (theme.name === "dark") { theme.setName("light") }
    else { theme.setName("dark") }
  }

  // Return Content
  return (
    <Display classes={["linked", styles.display, isVisible ? styles.visible : ""]}>
      <Row classes={[styles.title]}>
        <SimpleButton
          children={<Text classes={[styles.text]}>Click This Shit</Text>}
          baseClass={styles.button}
          hoverClass={styles.hover}
          activeClass={styles.active}
          linkedKeys={["Enter", "f", "u", "c", "k", "l"]}
          pressedAction={toggleTheme}
          isInteractive={isInteractive}
        />
      </Row>
    </Display>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
