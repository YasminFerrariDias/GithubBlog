import { useState } from "react";
import { InputText } from "../../components/InputText";
import { Input } from "./styles";
import { useSearchIssues } from "../../hooks/useSearchIssues";

export function SearchText() {
  const [searchTerm, setSearchTerm] = useState("");
  const { results, loading } = useSearchIssues(searchTerm);

  return (
    <div>
      <Input>
        <InputText placeholder="Buscar Conteúdo" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </Input>

      {loading && <p>Procurando...</p>}

      {!loading && (
        <ul>
          
        </ul>
      )}

    </div>
  )
}