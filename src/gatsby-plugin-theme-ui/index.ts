import { roboto } from "@theme-ui/presets"

/**
 * Use https://colorhunt.co/palette/2763 as the theme.
 */
const BLACK = "#222831"
const GRAY = "#a6a6a4"
const TURQUOISE = "#00adb5"
const WHITE = "#eeeeee"

export default {
  ...roboto,
  colors: {
    text: WHITE,
    background: BLACK,
    primary: TURQUOISE,
    secondary: GRAY,
  },
}
