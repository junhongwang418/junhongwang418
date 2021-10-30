import * as React from "react";
import styled from "@emotion/styled";
import Spacing from "./Spacing";

const Root = styled.div``;

type ListProps = React.PropsWithChildren<{
  spacing: number;
}>;

const List: React.FunctionComponent<ListProps> = (props) => {
  const { spacing, children } = props;

  if (children instanceof Array && children.length > 0) {
    return (
      <Root>
        {children.reduce((prev, curr, i) => [
          prev,
          <Spacing height={spacing} key={i} />,
          curr,
        ])}
      </Root>
    );
  }

  return <Root>{children}</Root>;
};

export default List;
