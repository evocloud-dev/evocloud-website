// app/post/[id]/page.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { ComponentProps } from "react";

type MarkdownRendererProps = {
  content: string;
};

type CodeProps = ComponentProps<"code"> & {
  inline?: boolean;
  node?: any;
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // Headings
        h1: ({ children }) => (
          <h1 className="mt-10 mb-4 text-4xl font-bold tracking-tight">
            {children}
          </h1>
        ),
        h2: ({ children }) => {
          const text = String(children);
          const id = text
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");
          return (
            <h2
              id={id}
              className="mt-8 mb-3 text-3xl font-semibold text-primary scroll-mt-24"
            >
              {children}
            </h2>
          );
        },
        h3: ({ children }) => {
          const text = String(children);
          const id = text
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");
          return (
            <h3
              id={id}
              className="mt-6 mb-2 text-2xl font-semibold scroll-mt-24"
            >
              {children}
            </h3>
          );
        },
        h4: ({ children }) => (
          <h4 className="mt-5 mb-2 text-xl font-semibold">{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className="mt-4 mb-2 text-lg font-semibold">{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 className="mt-3 mb-2 text-base font-semibold text-muted-foreground">
            {children}
          </h6>
        ),

        // Text elements
        p: ({ children }) => (
          <p className="mt-3 leading-7 text-muted-foreground">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        del: ({ children }) => <del className="text-muted">{children}</del>,
        // inlineCode: ({ children }) => (
        //   <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
        //     {children}
        //   </code>
        // ),

        // Links
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),

        // Blockquote
        blockquote: ({ children }) => (
          <blockquote className="mt-4 border-l-4 border-primary/50 pl-4 italic text-muted">
            {children}
          </blockquote>
        ),

        // Lists
        ul: ({ children }) => (
          <ul className="mt-3 ml-6 list-disc space-y-1 text-muted-foreground">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-3 ml-6 list-decimal space-y-1 text-muted-foreground">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="leading-7">{children}</li>,

        // Tables
        table: ({ children }) => (
          <div className="my-6 w-full overflow-x-auto">
            <table className="w-full border-collapse border border-border text-sm">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
        th: ({ children }) => (
          <th className="border border-border px-3 py-2 text-left font-semibold">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-border px-3 py-2 align-top">
            {children}
          </td>
        ),

        img: ({ src, alt }) => (
          <Image
            // @ts-expect-error Next.js <Image> requires width/height or fill
            src={src ?? ""}
            alt={alt ?? ""}
            className="my-4 max-h-[480px] w-full rounded-lg object-contain"
            fill={true}
          />
        ),

        // Horizontal rule
        hr: () => <hr className="my-8 border-t border-border" />,

        // Code blocks
        code({ inline, className, children, ...props }: CodeProps) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
            // @ts-expect-error react-syntax-highlighter style typing mismatch
              style={oneDark as { [key: string]: React.CSSProperties }}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
              {...props}
            >
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
