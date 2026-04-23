import { useParams } from "react-router-dom";
import { CardTitlePost } from "../../features/CardTitlePost";
import { DescriptionPost } from "../../features/DescriptionPost";
import { Header } from "../../features/Header";
import { DescriptionContainer } from "./styles";
import { useLoadPost } from "../../hooks/useLoadPost";

export function Description() {
  const { number } = useParams();
  const { post, loading } = useLoadPost(Number(number))

  if (loading) return <p>Carregando...</p>
  if (!post) return <p>Post não encontrado</p>

  return (
    <DescriptionContainer>
      <Header />
      <CardTitlePost issue={post} />
      <DescriptionPost issue={post} />
    </DescriptionContainer>
  )
}