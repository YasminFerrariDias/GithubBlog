import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export function FormatMarkdownToReact({ children }: { children: string }) {
  return <ReactMarkdown rehypePlugins={[rehypeRaw]}>
    {children}
  </ReactMarkdown>;
}