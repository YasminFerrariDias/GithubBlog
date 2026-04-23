import { InputText } from "../../components/InputText";
import { Input } from "./styles";

interface SearchText {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchTerm: string
}

export function SearchText({onChange, searchTerm}: SearchText) {

  return (
    <div>
      <Input>
        <InputText placeholder="Buscar Conteúdo" value={searchTerm} onChange={onChange} />
      </Input>
    </div>
  )
}