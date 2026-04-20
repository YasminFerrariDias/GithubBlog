import { IconType } from "react-icons";
import styled from "styled-components";

interface IconTextContainerProps {
  $icon: IconType
}

export const IconTextContainer = styled.div<IconTextContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  width: auto;
  width: fit-content;
  margin: 0;
  padding: 0;
`;