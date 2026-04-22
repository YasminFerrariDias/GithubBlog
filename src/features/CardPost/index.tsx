import { Card } from "../../components/Card";
import { Text } from "../../components/Text";
import { useLoadIssues } from "../../hooks/useLoadIssues";
import { formatDateRelative } from "../../utils/formatDateRelative";
import { CardPostContainer, Header, Time } from "./styles";

export function CardPost() {
  const { issues, loading } = useLoadIssues();

  if (loading) {
    return <p>Carregando os repositórios...</p>
  }

  if (!issues) {
    return <p>Repositórios não encontrado</p>
  }
  console.log(issues)

  return (
    issues.map(issue => (
      <Card variant="post" key={issue.id}>
        <CardPostContainer>
          <Header>
            <Text variantSize="xl" variantWeight="bold" variantColor="title">
              {issue.title}
            </Text>
            <Time>
              <Text variantSize="sm" variantWeight="regular" variantColor="span">
                {formatDateRelative(issue.created_at)}
              </Text>
            </Time>
          </Header>
          <Text variantSize="md" variantWeight="regular" variantColor="text" children="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..." />
        </CardPostContainer>
      </Card>
    ))
  )
}