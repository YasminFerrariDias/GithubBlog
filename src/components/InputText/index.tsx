import { InputTextContainer } from "./styles";

interface InputTextProps {
  placeholder: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export function InputText({ placeholder, onChange, value }: InputTextProps) {
  return (
    <InputTextContainer 
      placeholder={placeholder} 
      onChange={onChange}
      value={value}
    />
  )
}