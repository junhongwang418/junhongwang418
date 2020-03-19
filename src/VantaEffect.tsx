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
      backgroundColor: themeState.dark ? 0x303030 : 0xfafafa,
      color: themeState.dark ? 0x7ebaeb : 0xd193e3
    }));

    return () => {
      // @ts-ignore
      if (effect) effect.destroy();
    }
  }, [effect]);

  useEffect(() => {
    if (effect) {
      // @ts-ignore
      effect.setOptions({
        backgroundColor: themeState.dark ? 0x303030 : 0xfafafa,
        color: themeState.dark ? 0x7ebaeb : 0xd193e3
      });
    }
  }, [themeState.dark]);

  return (
    <div ref={ref}>
      {props.children}
    </div>
  );
};

export default VantaEffect;
