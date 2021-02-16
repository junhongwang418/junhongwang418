import React, { FunctionComponent } from "react"
import styled from "../styled/index"

const Root = styled.a`
  color: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.secondary};
  cursor: pointer;
  display: inline-block;
  padding: 8px 48px;
  border-radius: 2px;
  :hover {
    color: ${props => props.theme.colors.comment};
    border: 1px solid ${props => props.theme.colors.comment};
  }
  text-decoration: none;
  @media (max-width: 420px) {
    padding: 4px 24px;
  }
`

const Button: FunctionComponent<React.PropsWithChildren<
  React.HTMLProps<HTMLAnchorElement>
>> = props => {
  return <Root {...props}>{props.children}</Root>
}

export default Button
