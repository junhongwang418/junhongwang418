import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const RouterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  :hover {
    color: ${(props) => props.theme.color.blue};
  }
`;

export default RouterLink;
