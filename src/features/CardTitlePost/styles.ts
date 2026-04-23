import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardTitlePostContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
`;

export const LinkDecoration = styled(Link)`
  text-decoration-line: none;
  border-bottom: 1px solid transparent;
  transition: 0.2s;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const ADecoration = styled.a`
  text-decoration-line: none;
  border-bottom: 1px solid transparent;
  transition: 0.2s;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;
