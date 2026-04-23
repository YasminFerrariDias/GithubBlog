import { Text } from "../../components/Text";
import { Issues } from "../../hooks/useLoadIssues";
import { DescriptionPostContainer, Description, Code, DescriptionFirst, Row, Comment } from "./styles";

export function DescriptionPost({issue}: {issue: Issues}) {
  return (
    <DescriptionPostContainer>
      <Description>
        <DescriptionFirst>
          <Text variantSize="md" variantWeight="regular" variantColor="text"><strong>Programming languages all have built-in data structures, but these often differ from one language to another. 
          </strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."
          </Text>
        </DescriptionFirst>

        <Text variantSize="md" variantWeight="regular" variantColor="blue" children="Dynamic Typing" />
        <div>
          <Text variantSize="md" variantWeight="regular" variantColor="text" children="JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:" />
        </div>
      </Description>

      <Code>
        <div>
          <Row>
            <Text variantSize="md" variantWeight="regular" variantColor="span" children="let" />
            <Text variantSize="md" variantWeight="regular" variantColor="text" children="foo =" />
            <Text variantSize="md" variantWeight="regular" variantColor="blue" children="42" />
          </Row>

          <Row>
            <Text variantSize="md" variantWeight="regular" variantColor="text" children="foo =" />
            <Text variantSize="md" variantWeight="regular" variantColor="blue" children="'bar'" />
          </Row>

          <Row>
            <Text variantSize="md" variantWeight="regular" variantColor="text" children="foo =" />
            <Text variantSize="md" variantWeight="regular" variantColor="blue" children="true" />
          </Row>
        </div>
        <div>
          <Comment>
            <Text variantSize="md" variantWeight="regular" variantColor="subtitle" children="// foo is now a number" />
          </Comment>

          <Comment>
            <Text variantSize="md" variantWeight="regular" variantColor="subtitle" children="// foo is now a string" />
          </Comment>

          <Comment>
            <Text variantSize="md" variantWeight="regular" variantColor="subtitle" children="// foo is now a boolean" />
          </Comment>
        </div>
      </Code>
    </DescriptionPostContainer>
  )
}