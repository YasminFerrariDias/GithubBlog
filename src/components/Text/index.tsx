import { TextContainer } from "./styles";
import { theme } from "../../styles/themes/defaultTheme";

interface TextProps {
  variantWeight: 'regular' | 'bold'
  variantSize: 'xs' | 'sm' | 'md' | 'lg' |'xl' | '2xl'
  variantColor?: keyof typeof theme.colors
  text: string
}

export function Text({ variantWeight, variantSize, variantColor, text }: TextProps ) {
  return (
    <TextContainer $variantWeight={variantWeight} $variantSize={variantSize} $variantColor={variantColor}>
      {text}
    </TextContainer>
  )
}
