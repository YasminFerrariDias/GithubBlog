import { TextContainer } from "./styles";

interface TextProps {
  variantWeight: 'regular' | 'bold'
  variantSize: 'xs' | 'sm' | 'md' | 'lg' |'xl' | '2xl'
  children: React.ReactNode
}

export function Text({ variantWeight, variantSize, children }: TextProps ) {
  return (
    <TextContainer $variantWeight={variantWeight} $variantSize={variantSize}>
      {children}
    </TextContainer>
  )
}
