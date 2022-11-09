/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

const Root = styled.div``;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  return (
    <Root>
      <Grid container spacing={1}>
        <Grid item>
          <StaticImage
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/icon.png"
            width={50}
            height={50}
            quality={95}
            alt="Profile picture"
          />
        </Grid>
        <Grid item xs>
          {author?.name && (
            <Typography>
              Written by{" "}
              <Typography component="span" fontWeight="bold" gutterBottom>
                {author.name}
              </Typography>
            </Typography>
          )}
          {author?.summary && <Typography>{author?.summary}</Typography>}
        </Grid>
      </Grid>
    </Root>
  );
};

export default Bio;
