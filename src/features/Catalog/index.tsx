import { Issues, useLoadIssues } from "../../hooks/useLoadIssues";
import { CardPost } from "../CardPost";
import { CatalogContainer } from "./styles";

export function Catalog({ issues }: { issues: Issues[] }) {
  const {loading} = useLoadIssues();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
      <CatalogContainer>
        {issues.map(issue => (
          <CardPost key={issue.number} issue={issue} />
        ))}
      </CatalogContainer>
  )
}
