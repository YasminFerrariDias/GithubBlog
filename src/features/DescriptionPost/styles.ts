import styled from "styled-components";

export const DescriptionPostContainer = styled.div`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  width: 54rem;
  height: auto;
`;

export const Description = styled.div``;

export const DescriptionFirst = styled.div`
  flex-direction: row;
  display: flex;
  padding-bottom: 1.5rem;
`;

export const Code = styled.div`
  background-color: ${({ theme }) => theme.colors.post};
  margin-top: 1.5rem;
  padding: 1rem;
  display: flex;
`;

export const Row = styled.div`
  display: flex; 
  gap: 0.5rem;
`;

export const Comment = styled.div`
  display: flex; 
  margin-left: 3rem;
`;
