import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'
import { fonts } from './fonts'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.family.primary};
    line-height: ${fonts.lineHeight};
  }
  
  body {
    background: ${colors.base.background};
    color: ${colors.base.text};
  }
`