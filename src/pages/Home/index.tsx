import { InputText } from "../../components/InputText";
import { Text } from "../../components/Text";
import { CardPost } from "../../features/CardPost";
import { CardProfile } from "../../features/CardProfile";
import { Header } from "../../features/Header";
import { HomeContainer, Info, Catalog, Input } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <CardProfile />

      <Info>
        <Text variantSize="lg" variantWeight="regular" text="Publicações" variantColor="subtitle" />
        <Text variantSize="sm" variantWeight="regular" text="6 publicações" variantColor="span" />
      </Info>

      <Input>
        <InputText placeholder="Buscar Conteúdo" />
      </Input>

      <Catalog>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </Catalog>
    </HomeContainer>
  )
}