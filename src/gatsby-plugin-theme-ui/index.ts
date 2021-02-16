import { roboto } from "@theme-ui/presets"

/**
 * Monokai Colors
 */
const BLACK = "#272822"
const GRAY = "#75715E"
const BLUE = "#66D9EF"
const PURPLE = "#AE81FF"
const WHITE = "#F8F8F2"

export default {
  ...roboto,
  colors: {
    foreground: WHITE,
    background: BLACK,
    primary: BLUE,
    secondary: PURPLE,
    comment: GRAY,
  },
}
