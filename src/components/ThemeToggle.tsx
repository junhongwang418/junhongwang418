import * as React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { Sun, Moon } from "react-feather";
import Spacing from "./Spacing";

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

const ToggleInner = styled.div<{ on: boolean }>`
  width: 16px;
  height: 14px;
  border-radius: 8px;
  margin-left: ${(props) => (props.on ? "calc(100% - 16px)" : "1px")};
  margin-right: ${(props) => (props.on ? "1px" : "calc(100% - 16px)")};
  background: ${(props) => props.theme.color.body};
  transition: all 0.2s ease;
`;

interface ThemeToggleProps {
  setIsDark: (isDark: boolean) => void;
}

const ThemeToggle = (props: ThemeToggleProps) => {
  const { setIsDark } = props;
  const theme = useTheme();

  const toggleTheme = React.useCallback(() => {
    setIsDark(!theme.isDark);
  }, [theme.isDark]);

  return (
    <Root>
      <Sun size={24} onClick={toggleTheme} style={{ cursor: "pointer" }} />
      <Spacing width={8} />
      <Toggle onClick={toggleTheme}>
        <ToggleInner on={theme.isDark} />
      </Toggle>
      <Spacing width={8} />
      <Moon size={24} onClick={toggleTheme} style={{ cursor: "pointer" }} />
    </Root>
  );
};

export default ThemeToggle;
