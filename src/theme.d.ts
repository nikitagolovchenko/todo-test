import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      secondary: string;
      primaryDark: string;
      secondaryDark: string;
      dark: string;
      light: string;
      gray: string;
    };
    spacing: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    transition: {
      easing: string;
      duration: string;
    };
    typography: {
      fontSize: string;
      fontSizeLg: string;
    }
  }
}
