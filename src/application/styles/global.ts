import { colors } from './colors'

import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  :root {
    --toastify-color-error: ${colors.red};
  }

  html, body, #root {
    height: 100%;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input[type="password"], input[type="email"], input[type="text"] {
    border: none;
    outline: none;
  }

  button {
    border: none;
    cursor: pointer;

    :focus {
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
