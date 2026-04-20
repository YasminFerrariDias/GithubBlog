import 'styled-components'
import { colors } from '../styles/colors'
import { fonts } from '../styles/fonts'

type ColorsType = typeof colors
type FontsType = typeof fonts

export interface ThemeType {
  colors: ColorsType
  fonts: FontsType
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}