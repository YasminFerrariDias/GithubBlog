import { useEffect, useState } from "react";
import { searchIssues } from "../services/api-core/searchIssues";

export function useSearchIssues(searchTerm: string) {
  const [results, setResults] = useState([]);
  const [loadingIssues, setLoadingIssues] = useState(false);

  useEffect(() => {
    async function SearchIssues() {
      setLoadingIssues(true);
      const data = await searchIssues('mdn', 'translated-content', searchTerm);
      setResults(data.items);
      setLoadingIssues(false)
    }

    if (searchTerm) {
      SearchIssues()
    }
  }, [searchTerm]);

  return { results, loadingIssues }
}