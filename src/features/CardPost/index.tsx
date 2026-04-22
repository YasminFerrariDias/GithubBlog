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
    ))
  )
}