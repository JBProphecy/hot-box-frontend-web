////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { forwardRef, useContext } from "react"
import { InputContext, type InputContextType } from "@/context"
import type { ElementAttributes } from "@/types"
import { joinClasses } from "@/utils"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Form = forwardRef<HTMLFormElement, ElementAttributes>((props, ref) => {
  const {
    classes = [],
    styles = {},
    tabIndex = 0,
    isTabbable = false,
    isInteractive = true,
    onFocus,
    onMouseMove, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp,
    onKeyDown, onKeyUp,
    ...rest
  } = props

  // Input Context
  const inputContext: InputContextType | undefined = useContext(InputContext)
  if (!inputContext) { throw new Error("Missing Input Provider") }
  const { inputMode } = inputContext

  return (
    <form
      ref={ref}
      className={joinClasses(...classes)}
      tabIndex={isInteractive && isTabbable ? tabIndex : -1}
      style={styles}

      // Focus
      onFocus={(event: React.FocusEvent<HTMLElement, Element>) => { if (inputMode === "mouse") { event.currentTarget.blur() } }}

      // Mouse Functions
      onMouseMove={(event: React.MouseEvent<HTMLElement, MouseEvent>) => { if (isInteractive && onMouseMove) { onMouseMove(event) } }}
      onMouseEnter={(event: React.MouseEvent<HTMLElement, MouseEvent>) => { if (isInteractive && onMouseEnter) { onMouseEnter(event) } }}
      onMouseLeave={(event: React.MouseEvent<HTMLElement, MouseEvent>) => { if (isInteractive && onMouseLeave) { onMouseLeave(event) } }}
      onMouseDown={(event: React.MouseEvent<HTMLElement, MouseEvent>) => { if (isInteractive && onMouseDown) { onMouseDown(event) } }}
      onMouseUp={(event: React.MouseEvent<HTMLElement, MouseEvent>) => { if (isInteractive && onMouseUp) { onMouseUp(event) } }}
      
      // Key Functions
      onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => { if (isInteractive && onKeyDown) { onKeyDown(event) } }}
      onKeyUp={(event: React.KeyboardEvent<HTMLElement>) => { if (isInteractive && onKeyUp) { onKeyUp(event) } }}
      
      // The Rest
      {...rest}
    />
  )
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
