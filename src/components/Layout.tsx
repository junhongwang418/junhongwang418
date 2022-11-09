import * as React from "react";
import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <Container>
      <Box sx={{ mb: 2 }} />
      <Header />
      <Box sx={{ mb: 16 }} />
      {children}
      <Box sx={{ mb: 16 }} />
      <Footer />
      <Box sx={{ mb: 2 }} />
    </Container>
  );
};

export default Layout;
