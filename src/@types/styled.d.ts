import 'styled-components'
import { colors } from '../styles/colors'
import { fonts } from '../styles/fonts'
import { Theme } from '../styles/themes/defaultTheme'

type ColorsType = typeof colors
type FontsType = typeof fonts

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}