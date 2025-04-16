////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Button } from "@/modules/elements"
import type { ElementAttributes } from "@/types"
import { useClickable, useHover, useKeyable } from "@/hooks"
import type { ClickableHook, HoverHook, KeyableHook } from "@/hooks"
import { toStringMS } from "@/utils"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type SimpleButtonProps = ElementAttributes & {
  linkedKeys?: string[]
  pressedAction?: () => void
  heldAction?: () => void
  baseClass?: string
  hoverClass?: string
  activeClass?: string
}

export function SimpleButton({
  baseClass, hoverClass, activeClass,
  linkedKeys = [], pressedAction, heldAction, isInteractive, ...props
}: SimpleButtonProps) {

  // Other Props
  const { classes = [], styles, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onKeyDown, onKeyUp, ...rest } = props

  // Constants
  const shared = {
    transitionDuration: 50, holdDuration: 150,
    pressedAction, heldAction
  }

  // Hooks
  const clickable: ClickableHook = useClickable({...shared })
  const keyable: KeyableHook = useKeyable({ linkedKeys, ...shared })
  const hover: HoverHook = useHover()

  return (
    <Button
      classes={[
        baseClass ? baseClass : "",
        hover.isHovered && hoverClass ? hoverClass : "",
        clickable.isActive && activeClass ? activeClass: "",
        keyable.isActive && activeClass ? activeClass : "",
        ...classes
      ]}
      styles={{
        "--transitionDuration": toStringMS(shared.transitionDuration),
        ...styles
      }}

      // Interaction
      isTabbable={true}
      isInteractive={isInteractive}

      // Event Handlers
      onMouseEnter={(event) => {
        hover.handleMouseEnter()
        clickable.handleMouseEnter()
        onMouseEnter?.(event)
      }}
      onMouseLeave={(event) => {
        hover.handleMouseLeave()
        clickable.handleMouseLeave()
        onMouseLeave?.(event)
      }}
      onMouseDown={(event) => { clickable.handleMouseDown(event); onMouseDown?.(event) }}
      onMouseUp={(event) => { clickable.handleMouseUp(event); onMouseUp?.(event) }}
      onKeyDown={(event) => { keyable.handleKeyDown(event); onKeyDown?.(event) }}
      onKeyUp={(event) => { keyable.handleKeyUp(event); onKeyUp?.(event) }}

      // The Rest
      {...rest}
    />
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
