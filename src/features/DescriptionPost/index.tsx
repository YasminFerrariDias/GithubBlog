import { Text } from "../../components/Text";
import { DescriptionPostContainer, Description, Code, DescriptionFirst } from "./styles";

export function DescriptionPost() {
  return (
    <DescriptionPostContainer>
      <Description>
        <DescriptionFirst>
          <Text variantSize="md" variantWeight="regular" variantColor="text"><strong>Programming languages all have built-in data structures, but these often differ from one language to another.
          </strong>This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."
          </Text>
        </DescriptionFirst>

        <Text variantSize="md" variantWeight="regular" variantColor="blue">
          "Dynamic Typing" 
        </Text>
        <div>
          <Text variantSize="md" variantWeight="regular" variantColor="text">"JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:"</Text>
        </div>
      </Description>

      <Code>
        <div>
          <div>
            <Text variantSize="md" variantWeight="regular" variantColor="span" text="let" />
            <Text variantSize="md" variantWeight="regular" variantColor="text" text="foo =" />
            <Text variantSize="md" variantWeight="regular" variantColor="blue" text="42" />
          </div>

          <div>
            <Text variantSize="md" variantWeight="regular" variantColor="text" text="foo =" />
            <Text variantSize="md" variantWeight="regular" variantColor="blue" text="'bar'" />
          </div>

          <div>
            <Text variantSize="md" variantWeight="regular" variantColor="text" text="foo =" />
            <Text variantSize="md" variantWeight="regular" variantColor="blue" text="true" />
          </div>
        </div>
        <div>
          <div>
            <Text variantSize="md" variantWeight="regular" variantColor="subtitle" text="// foo is now a number" />
          </div>

          <div>
            <Text variantSize="md" variantWeight="regular" variantColor="subtitle" text="// foo is now a string" />
          </div>

          <div>
            <Text variantSize="md" variantWeight="regular" variantColor="subtitle" text="// foo is now a boolean" />

          </div>
        </div>
      </Code>
    </DescriptionPostContainer>
  )
}