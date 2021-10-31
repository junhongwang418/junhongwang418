import styled from "@emotion/styled";

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  :hover {
    color: ${(props) => props.theme.color.blue};
  }
`;

export default Link;
