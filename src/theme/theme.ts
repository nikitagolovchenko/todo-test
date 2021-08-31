import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '15px',
  colors: {
    primary: '#3498db',
    primaryDark: '#2980b9',
    secondary: '#e74c3c',
    secondaryDark: '#c0392b',
    dark: '#34495e',
    light: '#ecf0f1',
    gray: '#bdc3c7'
  },
  spacing: {
    0: '0px',
    1: '10px',
    2: '20px',
    3: '30px',
    4: '40px',
    5: '50px'
  },
  transition: {
    easing: 'ease-in-out',
    duration: '0.3s'
  },
  typography: {
    fontSize: '16px',
    fontSizeLg: '20px'
  }
}

export default theme;