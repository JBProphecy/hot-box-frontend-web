////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useClickable, type UseClickableProps, type ClickableHook } from "./useClickable"
import { useHover, type HoverHook } from "./useHover"
import { useKeyable, type UseKeyableProps, type KeyableHook } from "./useKeyable"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type UseButtonProps = {
  clickable?: UseClickableProps
  hover?: boolean
  keyable?: UseKeyableProps
}

export type ButtonHook = {
  clickable?: ClickableHook
  hover?: HoverHook
  keyable?: KeyableHook
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function useButton(props: UseButtonProps): ButtonHook {

  const clickable: ClickableHook | undefined = props.clickable ? useClickable(props.clickable) : undefined
  const hover: HoverHook | undefined = props.hover ? useHover() : undefined
  const keyable: KeyableHook | undefined = props.keyable ? useKeyable(props.keyable) : undefined

  return { clickable, hover, keyable }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
