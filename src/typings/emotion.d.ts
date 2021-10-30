import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    isDark: boolean;
    color: {
      black: string;
      comment: string;
      white: string;
      yellow: string;
      green: string;
      orange: string;
      purple: string;
      pink: string;
      blue: string;
      body: string;
      background: string;
    };
  }
}
