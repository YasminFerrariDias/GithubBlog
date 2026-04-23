import { useEffect, useState } from "react";
import { searchPost } from "../services/api-core/searchPost";

export function useLoadPost(number: number) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function LoadPost() {
      setLoading(true)
      const data = await searchPost('WhiskeySockets', 'Baileys', number);
      setPost(data);
      setLoading(false)
    }

    if (number) {
      LoadPost()
    }
  }, [number])

  return { post, loading };
}