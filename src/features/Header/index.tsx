import { Text } from "../../components/Text";
import { Container, HeaderContainer } from "./styles";
import LogoHeader from "../../assets/LogoHeader.svg"

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <img src={LogoHeader} alt="" />
        <Text variantSize="2xl" variantWeight="regular" variantColor={"blue"} >
          GITHUB BLOG
        </Text>
      </Container>
    </HeaderContainer>
  )
}