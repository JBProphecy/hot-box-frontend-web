////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import type { HTMLAttributes } from "@/types"
import { joinClasses } from "@/utils"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function Element(props: HTMLAttributes) {
  const { reference, children, classes = [], styles = {}, tabIndex = 0, isFocusable = false } = props
  return (
    <div
      ref={reference}
      className={joinClasses("element", ...classes)}
      tabIndex={isFocusable ? tabIndex : -1}
      style={styles}
    >{children}</div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function Display(props: HTMLAttributes) {
  const { classes = [], ...attributes } = props
  return <Element classes={["display", ...classes]} {...attributes} />
}

export function Container(props: HTMLAttributes) {
  const { classes = [], ...attributes } = props
  return <Element classes={["container", ...classes]} {...attributes} />
}

export function Section(props: HTMLAttributes) {
  const { classes = [], ...attributes } = props
  return <Element classes={["section", ...classes]} {...attributes} />
}

export function Wrapper(props: HTMLAttributes) {
  const { classes = [], ...attributes } = props
  return <Element classes={["wrapper", ...classes]} {...attributes} />
}

export function Component(props: HTMLAttributes) {
  const { classes = [], ...attributes } = props
  return <Element classes={["component", ...classes]} {...attributes} />
}

export function Onion(props: HTMLAttributes) {
  const { classes = [], ...attributes } = props
  return <Element classes={["onion", ...classes]} {...attributes} />
}

export function Layer(props: HTMLAttributes) {
  const { classes = [], ...attributes } = props
  return <Element classes={["layer", ...classes]} {...attributes} />
}

export function List(props: HTMLAttributes) {
  const { classes = [], ...attributes } = props
  return <Element classes={["list", ...classes]} {...attributes} />
}

export function Item(props: HTMLAttributes) {
  const { classes = [], ...attributes } = props
  return <Element classes={["item", ...classes]} {...attributes} />
}

export function Row(props: HTMLAttributes) {
  const { classes = [], ...attributes } = props
  return <Element classes={["row", ...classes]} {...attributes} />
}

export function Column(props: HTMLAttributes) {
  const { classes = [], ...attributes } = props
  return <Element classes={["column", ...classes]} {...attributes} />
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
