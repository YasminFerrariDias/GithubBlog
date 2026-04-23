import { useEffect, useState } from "react";
import { listIssues } from "../services/api-core/listIssues";

export interface Issues {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  state: string;
  locked: boolean;
  assignees: any[];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null;
  assignee: null;
  author_association: string;
  active_lock_reason: null;
  body: string;
  closed_by: null;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
  pinned_comment: null;
}

export function useLoadIssues() {
  const [issues, setIssues] = useState<Issues[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function LoadIssues() {
      try {
        const data = await listIssues('mdn', 'translated-content');
        setIssues(data)
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error)
      } finally {
        setLoading(false)
      }
    }

    LoadIssues();
  }, []);

  return { issues, loading }
}