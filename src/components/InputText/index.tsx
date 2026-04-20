import { InputTextContainer } from "./styles";

interface InputTextProps {
  placeholder: string
}

export function InputText({ placeholder }: InputTextProps) {
  return (
    <InputTextContainer placeholder={placeholder} />
  )
}