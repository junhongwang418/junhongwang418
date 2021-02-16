import React from "react"
import styled from "../styled/index"

interface RootProps {
  maxWidth: number
}

const Root = styled.div`
  margin: 0 auto;
  max-width: ${(props: RootProps) => props.maxWidth}px;
  padding: 0 16px;
  color: ${props => props.theme.colors.foreground};
`

interface ContainerProps {
  maxWidth: number
  children: React.ReactNode
}

export default function Container(props: ContainerProps) {
  const { maxWidth, children } = props
  return <Root maxWidth={maxWidth}>{children}</Root>
}
