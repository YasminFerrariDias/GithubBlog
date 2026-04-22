import { Card } from "../../components/Card";
import { CardProfileContainer, Container, Header, Link, Icon } from "./styles";
import { Text } from "../../components/Text";
import Avatar from "../../assets/avatar.png"
import { IconText } from "../../components/IconText";
import { FaBuilding, FaGithub } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { useLoadProfile } from "../../hooks/useLoadProfile";

export function CardProfile() {
  const { profile, loading } = useLoadProfile();

  if (loading) {
    return <p>Carregando perfil...</p>
  }

  if (!profile) {
    return <p>Perfil não encontrado</p>
  }

  return (
    <Card variant="profile">
      <CardProfileContainer>
        <img src={Avatar} />
        <Container>
          <Header>
            <Text variantSize="2xl" variantWeight="regular" variantColor="title" children={profile.name} />
            <Link><Text variantSize="xs" variantWeight="regular" children="GITHUB"></Text></Link>
          </Header>
          <Text variantSize="md" variantWeight="regular">
            {profile.bio || "Este usuário não possui uma biografia cadastrada."}
          </Text>
          <Icon>
            <IconText icon={FaGithub} variantSize="md" variantWeight="regular" DirectionIcon="left" children={profile.name} colorIcon="label" />

            <IconText
              icon={FaBuilding}
              variantSize="md"
              DirectionIcon="left"
              variantWeight="regular"
              colorIcon="label"
              children={!profile.company 
                ? `Informação não disponível`
                : `${profile.company} seguidores`}
            />

            <IconText
              icon={FaUserGroup}
              variantSize="md"
              DirectionIcon="left"
              variantWeight="regular"
              colorIcon="label"
              children={profile.followers === 1
                ? `${profile.followers} seguidor`
                : `${profile.followers} seguidores`}
            />
          </Icon>
        </Container>
      </CardProfileContainer>
    </Card >
  )
}