import styled from "styled-components";
import ImageBackground from "../../assets/Background.png";

export const HeaderContainer = styled.div`
  background-image: url(${ImageBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 18.5rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 4rem;
`;
