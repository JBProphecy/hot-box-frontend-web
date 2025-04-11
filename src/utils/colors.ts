////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * accepts HSL values as parameters and builds a string that can be used in a StyleSheet
 * @param h the value for hue (0-360)
 * @param s the value for saturation (0-100)
 * @param l the value for lightness (0-100)
 * @returns a string formatted for HSL in a StyleSheet
 */
export function hsl(h: number, s: number, l: number): string {
  return `hsl(${h}, ${s}%, ${l}%)`
}

/**
 * accepts RGB values as parameters and builds a string that can be used in a StyleSheet
 * @param r the value for red (0-255)
 * @param g the value for green (0-255)
 * @param b the value for blue (0-255)
 * @returns a string formatted for RGB in a StyleSheet
 */
export function rgb(r: number, g: number, b: number): string {
  return `rgb(${r}, ${g}, ${b})`
}

/**
 * accepts RGBA values as parameters and builds a string that can be used in a StyleSheet
 * @param r the value for red (0-255)
 * @param g the value for green (0-255)
 * @param b the value for blue (0-255)
 * @param a the value for alpha (0-1)
 * @returns a string formatted for RGBA in a StyleSheet
 */
export function rgba(r: number, g: number, b: number, a: number): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
