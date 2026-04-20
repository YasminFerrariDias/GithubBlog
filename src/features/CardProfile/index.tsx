import { Card } from "../../components/Card";
import { CardProfileContainer, Container, Header, Link } from "./styles";
import { Text } from "../../components/Text";
import Avatar from "../../assets/avatar.png"
import { IconText } from "../../components/IconText";
import { FaGithub } from "react-icons/fa";

export function CardProfile() {
  return (
    <Card variant="profile">
      <CardProfileContainer>
        <img src={Avatar} />
        <Container>
        <Header>
          <Text variantSize="2xl" variantWeight="regular" variantColor="title" text="Cameron Williamson" />
          <Link><Text variantSize="xs" variantWeight="regular" text="GITHUB" /></Link>
        </Header>
        <Text variantSize="md" variantWeight="regular" text="Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass." />
        <IconText icon={FaGithub} variantSize="md" variantWeight="regular" text="oiiii" />
        </Container>
      </CardProfileContainer>
    </Card>
  )
}