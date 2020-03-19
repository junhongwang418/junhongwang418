import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import * as THREE from 'three';
// @ts-ignore
import GLOBE from 'vanta/dist/vanta.net.min';
import {useTheme as useThemeState} from "./theme/ThemeContext";
import useTheme from "@material-ui/core/styles/useTheme";

const VantaEffect: FunctionComponent = (props) => {

  const [effect, setEffect] = useState(null);
  const ref = useRef(null);
  const themeState = useThemeState();
  const theme = useTheme();

  useEffect(() => {
    if (!effect) setEffect(GLOBE({
      el: ref.current,
      THREE: THREE,
      mouseControls: false,
      touchControls: false,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.secondary.main
    }));

    return () => {
      // @ts-ignore
      if (effect) effect.destroy();
    }
  }, [effect]);

  useEffect(() => {
    // @ts-ignore
    if (effect) effect.destroy();

    setEffect(GLOBE({
      el: ref.current,
      THREE: THREE,
      mouseControls: false,
      touchControls: false,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.secondary.main
    }));
  }, [themeState.dark]);

  return (
    <div ref={ref}>
      {props.children}
    </div>
  );
};

export default VantaEffect;
