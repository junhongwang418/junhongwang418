import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { graphql, Link as GatsbyLink } from "gatsby";
import * as React from "react";
import Bio from "../components/Bio";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Container maxWidth="md">
        <Bio />
        <Box sx={{ mb: 4 }} />
        <List>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            return (
              <ListItem key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <Typography variant="h5">
                      <Link
                        component={GatsbyLink}
                        to={post.fields.slug}
                        itemProp="url"
                      >
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </Typography>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Layout>
  );
};

export default Blog;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog" />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
