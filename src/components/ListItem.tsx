import * as React from "react";
import styled from "@emotion/styled";
import Spacing from "./Spacing";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Grid, Typography } from "@mui/material";

const Root = styled.div`
  display: flex;
`;

const Image = styled.div`
  width: 64px;
  height: 64px;
`;

const Right = styled.div``;

const Title = styled.div`
  font-size: 18px;
`;

const Subtitle = styled.div`
  font-size: 16px;
`;

interface ListItemProps {
  image: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

const ListItem: React.FunctionComponent<ListItemProps> = (props) => {
  const { image, title, subtitle } = props;

  return (
    <Root>
      <Grid container spacing={2}>
        <Grid item>{image}</Grid>
        <Grid item xs>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography>{subtitle}</Typography>
        </Grid>
      </Grid>
    </Root>
  );
};

export default ListItem;
