import { theme } from "@/styles/themes/defaultTheme";
import styled from "styled-components";

interface TextContainerProps {
  $variantWeight: 'regular' | 'bold'
  $variantSize: 'xs' | 'sm' | 'md' | 'lg' |'xl' | '2xl'
}

export const TextContainer = styled.p<TextContainerProps>`
  font-weight: ${({ theme, $variantWeight }) => theme.fonts.weight[$variantWeight]};
  font-size: ${({ theme, $variantSize }) => theme.fonts.size[$variantSize]};
`;