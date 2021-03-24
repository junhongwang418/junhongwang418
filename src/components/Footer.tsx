import React from "react"
import styled from "../styled/index"

const Root = styled.div`
  text-align: center;
`

const CopyRight = styled.h5``

export default function Footer() {
  return (
    <Root>
      <CopyRight>©︎ Junhong Wang 2021</CopyRight>
    </Root>
  )
}
