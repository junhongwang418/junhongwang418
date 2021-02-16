import styled, { CreateStyled } from "@emotion/styled"

/**
 * Add type checkings to styled. See https://emotion.sh/docs/typescript#define-a-theme.
 */
type Theme = {
  colors: {
    foreground: string
    background: string
    primary: string
    secondary: string
    comment: string
  }
}

export default styled as CreateStyled<Theme>
