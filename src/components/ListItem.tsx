import * as React from "react";
import styled from "@emotion/styled";
import Spacing from "./Spacing";

const Root = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
`;

const Right = styled.div``;

const Title = styled.div`
  font-size: 18px;
`;

const Subtitle = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.color.comment};
`;

interface ListItemProps {
  imgUrl: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

const ListItem: React.FunctionComponent<ListItemProps> = (props) => {
  const { imgUrl, title, subtitle } = props;
  return (
    <Root>
      <Image src={imgUrl} />
      <Spacing width={16} />
      <Right>
        <Title>{title}</Title>
        <Spacing height={8} />
        <Subtitle>{subtitle}</Subtitle>
      </Right>
    </Root>
  );
};

export default ListItem;
