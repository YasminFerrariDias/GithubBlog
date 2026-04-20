import { colors } from './../../styles/colors';
import { theme } from './../../styles/themes/defaultTheme';
import { IconType } from "react-icons";
import styled from "styled-components";

interface IconTextContainerProps {
  $icon: IconType
  $colorIcon?: keyof typeof colors
}

export const IconTextContainer = styled.div<IconTextContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  width: auto;
  width: fit-content;
  margin: 0;
  padding: 0;
  color: ${({ theme, $colorIcon = 'text' }) =>
    theme.colors[$colorIcon]
  };
`;