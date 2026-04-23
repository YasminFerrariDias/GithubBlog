import { useLoadIssues } from "../../hooks/useLoadIssues";
import { CardPost } from "../CardPost";
import { CatalogContainer } from "./styles";

export function Catalog() {
  const { issues, loading } = useLoadIssues();

  if (loading) {
    return <p>Carregando os issues...</p>
  }

  if (!issues) {
    return <p>Issues não encontrado</p>
  }
  console.log(issues)

  return (
    <CatalogContainer>
      {issues.map(issue => (
        <CardPost key={issue.id} issue={issue} />
      ))}
    </CatalogContainer>
  )
}
