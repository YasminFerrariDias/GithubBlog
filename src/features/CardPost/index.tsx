import { Card } from "../../components/Card";
import { Text } from "../../components/Text";
import { Issues } from "../../hooks/useLoadIssues";
import { formatDateRelative } from "../../utils/formatDateRelative";
import { CardPostContainer, Header, Time, LinkDecoration } from "./styles";

export function CardPost({ issue }: { issue: Issues }) {
  return (
    <LinkDecoration to={`/Description/${issue.number}`}>
      <Card variant="post">
        <CardPostContainer>
          <Header>
            <Text variantSize="xl" variantWeight="bold" variantColor="title" children={issue.title.length <= 45 ? `${issue.title}` : `${issue.title.slice(0, 45)}...`} />
            <Time>
              <Text variantSize="sm" variantWeight="regular" variantColor="span">
                {formatDateRelative(issue.created_at)}
              </Text>
            </Time>
          </Header>
          <Text variantSize="md" variantWeight="regular" variantColor="text" children={issue.body.length <= 125 ? `${issue.body}` : `${issue.body.slice(0, 125)}...`} />
        </CardPostContainer>
      </Card>
    </LinkDecoration>
  )
}
