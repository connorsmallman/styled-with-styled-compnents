import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  h1:not(:first-child) {
    margin-top: 1000px;
  }
`;

export default GlobalStyle;
