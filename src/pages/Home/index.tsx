import { useState } from "react";
import { Text } from "../../components/Text";
import { CardProfile } from "../../features/CardProfile";
import { Catalog } from "../../features/Catalog";
import { Header } from "../../features/Header";
import { SearchText } from "../../features/SeachText";
import { HomeContainer, Info } from "./styles";
import { useLoadIssues } from "../../hooks/useLoadIssues";
import { useSearchIssues } from "../../hooks/useSearchIssues";

export function Home() {
  const [searchTerm, setSearchTerm] = useState(""); // guarda o que foi digitado
  const { issues: allIssues } = useLoadIssues(); // pega a lista completa
  const { results: searchResults } = useSearchIssues(searchTerm); // lista filtrada

  const issuesToShow =
    searchTerm === "" ? allIssues : searchResults;

  return (
    <HomeContainer>
      <Header />
      <CardProfile />

      <Info>
        <Text variantSize="lg" variantWeight="regular" children="Publicações" variantColor="subtitle" />
        <Text variantSize="sm" variantWeight="regular" children={issuesToShow.length.toString()} variantColor="span" />
      </Info>

      <SearchText searchTerm={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <Catalog issues={issuesToShow} />
    </HomeContainer>
  )
}