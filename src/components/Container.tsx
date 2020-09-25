import React from "react"
import styled from "../styled/index"

const Root = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 16px;
`

export default function Container({ children }) {
  return <Root>{children}</Root>
}
