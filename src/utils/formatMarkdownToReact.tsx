import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export function FormatMarkdownToReact({ children }: { children: string }) {
  const processedContext = prepareMarkdownForRender(children)

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
      {processedContext}
    </ReactMarkdown>
  )
}

function prepareMarkdownForRender(bodyMarkdown: string): string {
  // Transforma URLs "github.com/.../blob/..." em "raw.githubusercontent.com/..."
  const blobRegex = /https:\/\/github\.com\/([^\/]+\/[^\/]+)\/blob\/([^?]+)/g;
  let processedBody = bodyMarkdown.replace(blobRegex, (match, repoPath, filePath) => {
    return `https://raw.githubusercontent.com/${repoPath}/${filePath}`;
  });

  return processedBody;
}