import { Text } from "../../components/Text";
import { Issues } from "../../hooks/useLoadIssues";
import { FormatMarkdownToReact } from "../../utils/formatMarkdownToReact";
import { DescriptionPostContainer, Description } from "./styles";

export function DescriptionPost({issue}: {issue: Issues}) {
  return (
    <DescriptionPostContainer>
      <Description>
        <FormatMarkdownToReact>{issue.body}</FormatMarkdownToReact>
      </Description>
    </DescriptionPostContainer>
  )
}