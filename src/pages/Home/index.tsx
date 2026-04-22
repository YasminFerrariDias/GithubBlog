import { Text } from "../../components/Text";
import { CardPost } from "../../features/CardPost";
import { CardProfile } from "../../features/CardProfile";
import { Header } from "../../features/Header";
import { SearchText } from "../../features/SeachText";
import { HomeContainer, Info, Catalog } from "./styles";

export function Home() {


  return (
    <HomeContainer>
      <Header />
      <CardProfile />

      <Info>
        <Text variantSize="lg" variantWeight="regular" children="Publicações" variantColor="subtitle" />
        <Text variantSize="sm" variantWeight="regular" children="6 publicações" variantColor="span" />
      </Info>

      <SearchText />

      <Catalog>
        <CardPost />
      </Catalog>
    </HomeContainer>
  )
}