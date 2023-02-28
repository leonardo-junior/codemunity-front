import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export default createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: ${theme.font.family.brand}, sans-serif;
    box-sizing: border-box;
    -webkit-box-sizing: border-box; /* Safari/Chrome */
    -moz-box-sizing: border-box;    /* Firefox */
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    @media (pointer: fine) {
      cursor: pointer;
    }
  }

  #__next {
    min-width: 320px;
    min-height: 100vh;
    display: flex;
  }
`
