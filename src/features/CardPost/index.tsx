import { Card } from "../../components/Card";
import { Text } from "../../components/Text";
import { CardPostContainer, Header, Time } from "./styles";

export function CardPost() {
  return (
    <Card variant="post">
      <CardPostContainer>
        <Header>
          <Text variantSize="xl" variantWeight="bold" variantColor="title" children="JavaScript data types and data structures" />
          <Time>
            <Text variantSize="sm" variantWeight="regular" variantColor="span" children="Há 1 dia" />
          </Time>
        </Header>
        <Text variantSize="md" variantWeight="regular" variantColor="text" children="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..." />
      </CardPostContainer>
    </Card>
  )
}