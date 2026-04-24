import { IoMdPhotos } from "react-icons/io";
import { Card } from "../../components/Card";
import { Text } from "../../components/Text";
import { Issues } from "../../hooks/useLoadIssues";
import { formatDateRelative } from "../../utils/formatDateRelative";
import { FormatMarkdownToReact } from "../../utils/formatMarkdownToReact";
import { CardPostContainer, Header, Time, LinkDecoration, DescriptionText, Icon } from "./styles";

export function CardPost({ issue }: { issue: Issues }) {
  if (!issue || !issue.body) {
    return <p>Carregando...</p>
  }

  let content;
  const hasImage = issue.body.includes('![Image](') || issue.body.includes('<img');

  if (hasImage) {
    content = <Icon><IoMdPhotos size={30} /> Contém imagem </Icon>;
  } else {
    content =  <FormatMarkdownToReact>{issue.body.length <= 195
      ? issue.body
      : `${issue.body.slice(0, 195)}...`}</FormatMarkdownToReact>
  }

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
          <DescriptionText>
            {content}
          </DescriptionText>
        </CardPostContainer>
      </Card>
    </LinkDecoration>
  )
}
