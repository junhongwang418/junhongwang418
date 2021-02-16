import styled from "../styled/index"

const Markdown = styled.div`
  a {
    color: ${props => props.theme.colors.foreground};
    :hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
  img,
  iframe {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`

export default Markdown
