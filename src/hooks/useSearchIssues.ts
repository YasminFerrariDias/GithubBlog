import { useEffect, useState } from "react";
import { searchIssues } from "../services/api-core/searchIssues";

export function useSearchIssues(searchTerm: string) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function SearchIssues() {
      setLoading(true);
      const data = await searchIssues('xizhibei', 'blog', searchTerm);
      setResults(data);
      setLoading(false)
    }

    if (searchTerm) {
      SearchIssues()
    }
  }, []);

  return { results, loading }
}