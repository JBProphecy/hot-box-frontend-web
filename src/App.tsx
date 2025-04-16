////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import "@/App.css"
import "@/styles/elements.css"

import { useRef } from "react"

import { InputProvider, ThemeProvider } from "@/providers"
import { useDimensions } from "@/hooks"
import type { Dimensions } from "@/types"
import { Container } from "@/modules/elements"
import { toStringPX } from "@/utils"

import { LandingPage } from "@/pages"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function App() {
  // Root Container
  const containerRef = useRef<HTMLDivElement>(null)
  const containerDimensions: Dimensions = useDimensions(containerRef)

  return (
    <InputProvider>
      <ThemeProvider>
        <Container
          ref={containerRef}
          id="root-container"
          styles={{
            "--containerWidth": toStringPX(containerDimensions.width),
            "--containerHeight": toStringPX(containerDimensions.height)
          }}
        >
          <LandingPage isInteractive={true} />
        </Container>
      </ThemeProvider>
    </InputProvider>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
