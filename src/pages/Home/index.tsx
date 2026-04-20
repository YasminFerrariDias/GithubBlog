import { InputText } from "../../components/InputText";
import { Text } from "../../components/Text";
import { CardPost } from "../../features/CardPost";
import { CardProfile } from "../../features/CardProfile";
import { Header } from "../../features/Header";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <CardProfile />
      <div>
        <Text variantSize="lg" variantWeight="regular" text="Publicações" variantColor="subtitle" />
        <Text variantSize="sm" variantWeight="regular" text="6 publicações" variantColor="span" />
      </div>

      <InputText placeholder="Buscar Conteúdo" />

      <div>
        <CardPost />
      </div>
    </HomeContainer>
  )
}