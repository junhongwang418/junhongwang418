import * as React from "react";
import styled from "@emotion/styled";
import Spacing from "./Spacing";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material";
import SiteContext from "../contexts/SiteContext";

const Root = styled.div`
  display: flex;
  align-items: center;
`;

const Toggle = styled.div`
  width: 32px;
  height: 16px;
  border: 1px solid;
  border-radius: 8px;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const ToggleInner = styled.div<{ isDark: boolean }>`
  width: 16px;
  height: 14px;
  border-radius: 8px;
  margin-left: ${(props) => (props.isDark ? "calc(100% - 16px)" : "1px")};
  margin-right: ${(props) => (props.isDark ? "1px" : "calc(100% - 16px)")};
  background: ${(props) => props.theme.palette.text.primary};
  transition: all 0.2s ease;
`;

const ThemeToggle = () => {
  const siteContext = React.useContext(SiteContext);

  const theme = useTheme();

  return (
    <Root>
      <LightModeIcon
        onClick={siteContext.toggleDark}
        style={{ cursor: "pointer" }}
      />
      <Spacing width={8} />
      <Toggle onClick={siteContext.toggleDark}>
        <ToggleInner isDark={theme.palette.mode === "dark"} />
      </Toggle>
      <Spacing width={8} />
      <DarkModeIcon
        onClick={siteContext.toggleDark}
        style={{ cursor: "pointer" }}
      />
    </Root>
  );
};

export default ThemeToggle;
