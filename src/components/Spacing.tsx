import React, { FunctionComponent } from "react"

interface SpacingProps {
  width?: number
  height?: number
  flex?: number
  inlineBlock?: boolean
}

const Spacing: FunctionComponent<SpacingProps> = props => {
  const { children, width, height, flex, inlineBlock } = props
  return (
    <div
      style={{
        width,
        height,
        flexBasis: flex,
        flexGrow: 0,
        flexShrink: 0,
        display: inlineBlock ? "inline-block" : "block",
      }}
    >
      {children}
    </div>
  )
}

export default Spacing
