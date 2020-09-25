import styled, { CreateStyled } from "@emotion/styled"

/**
 * Add type checkings to styled. See https://emotion.sh/docs/typescript#define-a-theme.
 */
type Theme = {
  colors: {
    background: string
    primary: string
    secondary: string
    text: string
  }
}

export default styled as CreateStyled<Theme>
