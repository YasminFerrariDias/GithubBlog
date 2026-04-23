import { IoIosArrowBack } from "react-icons/io";
import { Card } from "../../components/Card";
import { IconText } from "../../components/IconText";
import { Text } from "../../components/Text";
import { FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { CardTitlePostContainer, Footer, Header } from "./styles";
import { Issues } from "../../hooks/useLoadIssues";

export function CardTitlePost({issue}: {issue: Issues}) {
  if (!issue) {
    return <p>Carregando...</p>
  }

  return (
    <Card variant="DescriptionPost">
      <CardTitlePostContainer>
        <Header>
          <IconText icon={IoIosArrowBack} children="VOLTAR" variantSize="xs" variantWeight="regular" colorIcon="blue" variantColor="blue" DirectionIcon="left" />
          <IconText icon={FaExternalLinkAlt} children="VER NO GITHUB" variantSize="xs" variantWeight="regular" colorIcon="blue" variantColor="blue" DirectionIcon="right" />
        </Header>

        <Text children={issue.title} variantSize="2xl" variantWeight="bold" variantColor="title" />

        <Footer>
          <IconText icon={FaGithub} children="cameronwill" variantSize="md" variantWeight="regular" colorIcon="span" variantColor="span" DirectionIcon="left" />
          <IconText icon={FaCalendarDay} children="Há 1 dia" variantSize="md" variantWeight="regular" colorIcon="span" variantColor="span" DirectionIcon="left" />
          <IconText icon={FaComment} children="5 comentários" variantSize="md" variantWeight="regular" colorIcon="span" variantColor="span" DirectionIcon="left" />
        </Footer>
      </CardTitlePostContainer>
    </Card>
  )
}