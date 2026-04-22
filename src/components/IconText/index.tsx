import { IconTextContainer } from "./style";
import { Text } from "../Text";
import { IconType } from "react-icons";
import { ComponentProps } from "react";
import { colors } from "../../styles/colors";

type TextProps = ComponentProps<typeof Text>

interface IconTextProps extends TextProps {
  icon: IconType
  colorIcon?: keyof typeof colors
  DirectionIcon: 'left' | 'right'
}

export function IconText({ icon, text, variantSize, variantWeight, variantColor, colorIcon, DirectionIcon }: IconTextProps) {
  const Icon = icon;

  if (DirectionIcon === 'left') {
    return (
      <IconTextContainer $icon={icon} $colorIcon={colorIcon} >
        <Icon />
        <Text variantSize={variantSize} variantWeight={variantWeight} variantColor={variantColor} text={text} />
      </IconTextContainer>
    )
  } else {
    return (
      <IconTextContainer $icon={icon} $colorIcon={colorIcon} >
        <Text variantSize={variantSize} variantWeight={variantWeight} variantColor={variantColor} text={text} />
        <Icon size={12}/>
      </IconTextContainer>
    )
  }
}