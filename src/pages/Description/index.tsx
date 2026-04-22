import { CardTitlePost } from "../../features/CardTitlePost";
import { DescriptionPost } from "../../features/DescriptionPost";
import { Header } from "../../features/Header";
import { DescriptionContainer } from "./styles";

export function Description() {
  return (
    <DescriptionContainer>
      <Header />
      <CardTitlePost />
      <DescriptionPost />
    </DescriptionContainer>
  )
}