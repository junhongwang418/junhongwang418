import * as React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Root = styled.div``;

const Emoji = styled.span`
  cursor: pointer;
`;

interface ThemeToggleProps {
  setIsDark: (isDark: boolean) => void;
}

const ThemeToggle = (props: ThemeToggleProps) => {
  const { setIsDark } = props;
  const theme = useTheme();

  return (
    <Root>
      <Emoji
        onClick={() => {
          setIsDark(!theme.isDark);
        }}
      >
        {theme.isDark ? "🌙" : "☀️"}
      </Emoji>
    </Root>
  );
};

export default ThemeToggle;
