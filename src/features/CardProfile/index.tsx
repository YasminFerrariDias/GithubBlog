import { Card } from "../../components/Card";
import { CardProfileContainer, Container, Header, Link } from "./styles";
import { Text } from "../../components/Text";
import Avatar from "../../assets/avatar.png"

export function CardProfile() {
  return (
    <Card variant="profile">
      <CardProfileContainer>
        <img src={Avatar} />
        <Container>
        <Header>
          <Text variantSize="2xl" variantWeight="regular" variantColor="title">Cameron Williamson</Text>
          <Link><Text variantSize="xs" variantWeight="regular">GITHUB</Text></Link>
        </Header>
        <Text variantSize="md" variantWeight="regular">Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</Text>
        </Container>
      </CardProfileContainer>
    </Card>
  )
}