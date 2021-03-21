import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FunctionComponent } from "react"
import styled from "../styled/index"

const Root = styled.a`
  color: ${props => props.theme.colors.secondary};
  :hover {
    color: ${props => props.theme.colors.comment};
  }
`

export interface IconLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  icon: IconProp
}

const IconLink: FunctionComponent<IconLinkProps> = props => {
  const { icon } = props
  return (
    <Root {...props}>
      <FontAwesomeIcon icon={icon} size="lg" />
    </Root>
  )
}

export default IconLink
