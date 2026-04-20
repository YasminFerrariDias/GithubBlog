import { Card } from "../../components/Card";
import { CardProfileContainer } from "./styles";
import { Text } from "../../components/Text";

export function CardProfile() {
  return (
    <CardProfileContainer>
      <Card variant="profile">
        <div>
          <Text variantSize="2xl" variantWeight="regular" variantColor="title">Cameron Williamson</Text>
          <Text variantSize="xs" variantWeight="regular" >GITHUB</Text>
        </div>
        <Text variantSize="md" variantWeight="regular">Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</Text>
      </Card>
    </CardProfileContainer>
  )
}