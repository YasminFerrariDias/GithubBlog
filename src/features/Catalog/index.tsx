import { Issues } from "../../hooks/useLoadIssues";
import { CardPost } from "../CardPost";
import { CatalogContainer } from "./styles";

export function Catalog({ issues }: { issues: Issues[] }) {
  return (
    <CatalogContainer>
      {issues.map(issue => (
        <CardPost key={issue.id} issue={issue} />
      ))}
    </CatalogContainer>
  )
}
