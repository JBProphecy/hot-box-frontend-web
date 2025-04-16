////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { forwardRef } from "react"
import type { ElementAttributes } from "@/types"
import { Div } from "./vanilla"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Layer = forwardRef<HTMLDivElement, ElementAttributes>((props, ref) => {
  const { classes = [], ...attributes } = props
  return <Div ref={ref} classes={["layer", ...classes]} {...attributes} />
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
