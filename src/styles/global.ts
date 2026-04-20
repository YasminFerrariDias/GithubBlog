import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'
import { fonts } from './fonts'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.family.primary};
    line-height: ${fonts.lineHeight};
  }
  
  body {
    background: ${colors.background};
    color: ${colors.text};
  }
`