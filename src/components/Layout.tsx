import * as React from "react";
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteContext from "../contexts/SiteContext";
import { ListItemButton } from "gatsby-theme-material-ui";
import CloseIcon from "@mui/icons-material/Close";

const Layout = ({ children }) => {
  return (
    <Container>
      <Box sx={{ pt: 4 }} />
      <Header />
      <Box sx={{ mb: 16 }} />
      {children}
      <Box sx={{ mb: 16 }} />
      <Footer />
      <Box sx={{ pb: 4 }} />
    </Container>
  );
};

export default Layout;
