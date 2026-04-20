import { Card } from "../../components/Card";
import { Text } from "../../components/Text";
import { CardPostContainer, Header, Time } from "./styles";

export function CardPost() {
  return (
    <Card variant="post">
      <CardPostContainer>
        <Header>
          <Text variantSize="xl" variantWeight="bold" text="JavaScript data types and data structures" variantColor="title" />
          <Time>
            <Text variantSize="sm" variantWeight="regular" text="Há 1 dia" variantColor="span" />
          </Time>
        </Header>
        <Text variantSize="md" variantWeight="regular" text="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..." variantColor="text" />
      </CardPostContainer>
    </Card>
  )
}