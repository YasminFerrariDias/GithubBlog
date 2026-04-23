import { Card } from "../../components/Card";
import { Text } from "../../components/Text";
import { Issues } from "../../hooks/useLoadIssues";
import { formatDateRelative } from "../../utils/formatDateRelative";
import { FormatMarkdownToReact } from "../../utils/formatMarkdownToReact";
import { CardPostContainer, Header, Time, LinkDecoration, DescriptionText } from "./styles";

export function CardPost({ issue }: { issue: Issues }) {
  if (!issue || !issue.body) {
    return <p>Carregando...</p>
  }

  const previewText = issue.body.length <= 195
    ? issue.body
    : `${issue.body.slice(0, 195)}...`

  return (
    <LinkDecoration to={`/Description/${issue.number}`}>
      <Card variant="post">
        <CardPostContainer>
          <Header>
            <Text variantSize="xl" variantWeight="bold" variantColor="title" children={issue.title.length <= 40 ? `${issue.title}` : `${issue.title.slice(0, 40)}...`} />
            <Time>
              <Text variantSize="sm" variantWeight="regular" variantColor="span">
                {formatDateRelative(issue.created_at)}
              </Text>
            </Time>
          </Header>
          <DescriptionText><FormatMarkdownToReact>{previewText}</FormatMarkdownToReact></DescriptionText>
        </CardPostContainer>
      </Card>
    </LinkDecoration>
  )
}
