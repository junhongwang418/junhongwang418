import { Typography } from "@mui/material";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom align="center">
        404: Not Found
      </Typography>
      <Typography align="center">
        You just hit a route that doesn't exist... the sadness.
      </Typography>
    </Layout>
  );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
