import { IoIosArrowBack } from "react-icons/io";
import { Card } from "../../components/Card";
import { IconText } from "../../components/IconText";
import { Text } from "../../components/Text";
import { FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { CardDescriptionPostContainer, Footer, Header } from "./styles";

export function CardDescriptionPost() {
  return (
    <Card variant="DescriptionPost">
      <CardDescriptionPostContainer>
        <Header>
          <IconText icon={IoIosArrowBack} text="VOLTAR" variantSize="xs" variantWeight="regular" colorIcon="blue" variantColor="blue"  />
          <IconText icon={FaExternalLinkAlt} text="VER NO GITHUB" variantSize="xs" variantWeight="regular" colorIcon="blue" variantColor="blue" />
        </Header>

        <Text text="JavaScript data types and data structures" variantSize="2xl" variantWeight="bold" variantColor="title" />

        <Footer>
          <IconText icon={FaGithub} text="cameronwill" variantSize="md" variantWeight="regular" colorIcon="span" variantColor="span" />
          <IconText icon={FaCalendarDay} text="Há 1 dia" variantSize="md" variantWeight="regular" colorIcon="span" variantColor="span" />
          <IconText icon={FaComment} text="5 comentários" variantSize="md" variantWeight="regular" colorIcon="span" variantColor="span" />
        </Footer>
      </CardDescriptionPostContainer>
    </Card>
  )
}