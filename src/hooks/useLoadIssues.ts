import { useEffect, useState } from "react";
import { searchRepository } from "../services/api-core/searchIssues";

export function useLoadIssues() {
  const [ issues, setIssues ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function LoadRepository() {
      try {
        const data = await searchRepository('xizhibei', 'blog');
        setIssues(data)
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error)
      } finally {
        setLoading(false)
      }
    }

    LoadRepository();
  }, []);

  return { issues, loading}
}