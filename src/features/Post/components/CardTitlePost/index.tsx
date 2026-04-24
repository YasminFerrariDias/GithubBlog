import { IoIosArrowBack } from "react-icons/io";
import { Card } from "../../components/Card";
import { IconText } from "../../components/IconText";
import { Text } from "../../components/Text";
import { FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { CardTitlePostContainer, Footer, Header, LinkDecoration, ADecoration } from "./styles";
import { Issues } from "../../hooks/useLoadIssues";
import { useLoadProfile } from "../../hooks/useLoadProfile";
import { formatDateRelative } from "../../utils/formatDateRelative";

export function CardTitlePost({ issue }: { issue: Issues }) {
  const { profile } = useLoadProfile();

  if (!issue) {
    return <p>Carregando...</p>
  }

  if (!profile) {
    return <p>Perfil não encontrado</p>
  }

  return (
    <Card variant="DescriptionPost">
      <CardTitlePostContainer>
        <Header>
          <LinkDecoration to={"/"}>
            <IconText
              icon={IoIosArrowBack}
              children="VOLTAR"
              variantSize="xs"
              variantWeight="regular"
              colorIcon="blue"
              variantColor="blue"
              DirectionIcon="left"
            />
          </LinkDecoration>

          <ADecoration href={issue.html_url} >
            <IconText
              icon={FaExternalLinkAlt}
              children="VER NO GITHUB"
              variantSize="xs"
              variantWeight="regular"
              colorIcon="blue"
              variantColor="blue"
              DirectionIcon="right"
            />
          </ADecoration>
        </Header>

        <Text children={issue.title} variantSize="2xl" variantWeight="bold" variantColor="title" />

        <Footer>
          <IconText icon={FaGithub} children={profile.login} variantSize="md" variantWeight="regular" colorIcon="span" variantColor="span" DirectionIcon="left" />
          <IconText icon={FaCalendarDay} children={formatDateRelative(issue.created_at)} variantSize="md" variantWeight="regular" colorIcon="span" variantColor="span" DirectionIcon="left" />
          <IconText
            icon={FaComment}
            variantSize="md"
            variantWeight="regular"
            colorIcon="span"
            variantColor="span"
            DirectionIcon="left"
            children={issue.comments === 1
              ? `${issue.comments} comentário`
              : `${issue.comments} comentários`} />
        </Footer>
      </CardTitlePostContainer>
    </Card>
  )
}