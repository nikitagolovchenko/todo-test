import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: ${(props) => props.theme.spacing[0]};
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.dark}
  }
`;

export default GlobalStyle;
