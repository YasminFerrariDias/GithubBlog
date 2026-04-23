import { Issues } from "../../hooks/useLoadIssues";
import { CardPost } from "../CardPost";
import { CatalogContainer } from "./styles";

export function Catalog({ issues }: { issues: Issues[] }) {
  if (issues.length === 0) {
    return <p>Nenhuma issues encontrada.</p>;
  }

  return (
      <CatalogContainer>
        {issues.map(issue => (
          <CardPost key={issue.number} issue={issue} />
        ))}
      </CatalogContainer>
  )
}
