import { ReactNode } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  variant: 'profile' | 'post'
  children: ReactNode
}

export function Card({ variant, children }: CardProps) {
  return (
    <CardContainer $variant={variant}>
      {children}
    </CardContainer>
  )
}