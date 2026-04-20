import { IconTextContainer } from "./style";
import { Text } from "../Text";
import { IconType } from "react-icons";
import { ComponentProps } from "react";

type TextProps = ComponentProps<typeof Text>

interface IconTextProps extends TextProps {
  icon: IconType
  text: string
}

export function IconText({ icon, text, variantSize, variantWeight, variantColor }: IconTextProps) {
  const Icon = icon;
  return (
    <IconTextContainer $icon={icon} > 
    
    <Icon />
      <Text variantSize={variantSize} variantWeight={variantWeight} variantColor={variantColor}>
        {text}
      </Text>
    </IconTextContainer>
  )
}