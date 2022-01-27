import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    width: auto;
    font-family: 'montserratregular';
  }
  
  main, header{
    margin: 40px 100px;
    @media (min-width: 320px) and (max-width: 768px) {
      margin: 20px;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

// @font-face {
//   font-family: 'montserratregular';
//   src: url('../font/montserrat-regular-webfont.woff2') format('woff2'),
//        url('../font/montserrat-regular-webfont.woff') format('woff');
//   font-weight: normal;
//   font-style: normal;

// }
export default GlobalStyled
