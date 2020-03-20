import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import * as THREE from 'three';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';
import {useTheme as useThemeState} from "./theme/ThemeContext";
import useTheme from "@material-ui/core/styles/useTheme";

const VantaEffect: FunctionComponent = (props) => {

  const [effect, setEffect] = useState(null);
  const ref = useRef(null);
  const themeState = useThemeState();
  const theme = useTheme();

  useEffect(() => {
    if (!effect) setEffect(NET({
      el: ref.current,
      THREE: THREE,
      points: 3,
      spacing: 30,
      maxDistance: 60,
      mouseControls: false,
      touchControls: false,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.secondary.main
    }));

    return () => {
      // @ts-ignore
      if (effect) effect.destroy();
    }
  }, []);

  useEffect(() => {

    // @ts-ignore
    if (effect) effect.destroy();

    setEffect(NET({
      el: ref.current,
      THREE: THREE,
      points: 3,
      spacing: 50,
      maxDistance: 60,
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
