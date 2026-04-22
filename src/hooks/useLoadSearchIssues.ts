import { useEffect, useState } from "react";
import { searchIssues } from "../services/api-core/searchIssues";

export function useLoadSearchIssues() {
  const [ query, setQuery ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function LoadSearchIssues() {
      try {
        const data = await searchIssues('xizhibei', 'blog', `${query}`);
        setQuery(data);
      } catch (error) {
        console.error('Erro ao buscar termo:', error)
      } finally {
        setLoading(false)
      }
    }

    LoadSearchIssues()
  }, []);

  return { query, loading }
}