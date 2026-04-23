import { ReactNode } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Text } from "../../components/Text";

export const CardPostContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  height: 3rem;
`;

export const Time = styled.div`
  white-space: nowrap;
`;

export const LinkDecoration = styled(Link)`
  text-decoration-line: none;
`;

export const DescriptionText = styled.div<{ children: React.ReactNode }>`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;