import styled from "styled-components";

export const InputTextContainer = styled.input`
  width: 54rem;
  height: 3.125rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  font-size: ${({ theme }) => theme.fonts.size.md};

  &::placeholder {
    color: ${({ theme }) => theme.colors.label};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
      outline: none;
    }
  }
`;