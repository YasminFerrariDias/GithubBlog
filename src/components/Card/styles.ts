import { theme } from "../../styles/themes/defaultTheme";
import styled from "styled-components";

interface CardContainerProps {
  $variant: 'profile' | 'post'
}

const variantStyles = {
  profile: `
    width: 54rem;
    height: 13.25rem;
    padding: 2rem;
    background-color: ${theme.colors.profile};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 0.625rem;
  `,

  post: `
    width: 26rem;
    height: 13.25rem;
    padding: 2rem;
    background-color: ${theme.colors.post};
    border-radius: 0.625rem;
  `
};

export const CardContainer = styled.div<CardContainerProps>`
  ${({ $variant }) => variantStyles[$variant]}
`;
