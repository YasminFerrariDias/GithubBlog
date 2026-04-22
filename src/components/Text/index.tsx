import { TextContainer } from "./styles";
import { theme } from "../../styles/themes/defaultTheme";
import { ReactNode } from "react";

interface TextProps {
  variantWeight: 'regular' | 'bold'
  variantSize: 'xs' | 'sm' | 'md' | 'lg' |'xl' | '2xl'
  variantColor?: keyof typeof theme.colors
  children: ReactNode
}

export function Text({ variantWeight, variantSize, variantColor, children}: TextProps ) {
  return (
    <TextContainer $variantWeight={variantWeight} $variantSize={variantSize} $variantColor={variantColor}>
      {children}
    </TextContainer>
  )
}
