// app/post/[id]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiClock,
  FiTag,
  FiChevronLeft,
  FiShare2,
  FiArrowUpRight,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { ArticleResponse, ArticlesResponse } from "@/types/strapi";
import { MAX_RELATED_ARTICLES } from "@/lib/constants/ui";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { ComponentProps } from "react";

// Format "2025-09-01" -> "Sep 1, 2025"
function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export async function fetchArticle(id: string | number) {
  try {
    const res = await axios.get<ArticleResponse>(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles/${id}`,
      {
        params: {
          populate: "*",
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error(error);
    return { data: null, meta: null };
  }
}

export async function fetchRelatedArticles(
  primaryTag?: string | null,
  excludeId?: string | number
) {
  try {
    if (!primaryTag) return [];

    const params: Record<string, any> = {
      "pagination[pageSize]": MAX_RELATED_ARTICLES,
      sort: "createdAt:desc",
      populate: "cover",
    };

    if (primaryTag) {
      params["filters[tags][$contains]"] = primaryTag;
    }

    const res = await axios.get<ArticlesResponse>(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles`,
      { params }
    );

    const data = res.data?.data ?? [];

    // filter out the excluded id (if provided)
    const list = data.filter((item: any) => item.documentId != excludeId);

    return list.slice(0, MAX_RELATED_ARTICLES);
  } catch (error) {
    console.error(error);
    return [];
  }
}

// SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: article } = await fetchArticle(id);

  if (!article) return { title: "Article not found" };

  const title = article.title || "Article";
  const desc = article.excerpt || "Read the full story.";
  const image = article?.cover?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.url}`
    : undefined;

  return {
    title,
    description: desc,
    openGraph: { title, description: desc, images: image ? [image] : [] },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description: desc,
      images: image ? [image] : [],
    },
  };
}

// --- Main Page ---
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id, locale } = await params; // 👈 await here

  console.log({ id, locale });
  const { data: article } = await fetchArticle(id);
  console.log({ article });
  if (!article) return notFound();

  const primaryTag =
    Array.isArray(article.tags) && article.tags.length ? article.tags[0] : null;
  const related = await fetchRelatedArticles(primaryTag, id);

  const coverUrl = article?.cover?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.url}`
    : null;

  return (
    <div className="bg-foreground text-background">
      {/* Header / Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[--from] to-[--to] opacity-40"></div>
        <div className="mx-auto max-w-5xl px-4 pt-10 md:pt-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <FiChevronLeft className="h-4 w-4" /> Back to all articles
          </Link>

          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            {article.title}
          </h1>
          {/* <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            {article.title}
          </motion.h1> */}

          <p className="mt-3 max-w-3xl text-[--muted]">{article.excerpt}</p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-tertiary"></span>
              <span>
                {article.author
                  ? `${article.author.firstName ?? ""} ${
                      article.author.lastName ?? ""
                    }`.trim()
                  : "Editorial Team"}
              </span>
            </div>
            <span className="opacity-60">•</span>
            <span>{formatDate(article.createdAt)}</span>
            <span className="opacity-60">•</span>
            <span className="inline-flex items-center gap-1">
              <FiClock className="h-4 w-4" />{" "}
              {article.readingTime ? `${article.readingTime} min` : "5 min"}
            </span>
            {!!(article.tags && article.tags.length) && (
              <>
                <span className="opacity-60">•</span>
                <div className="flex flex-wrap items-center gap-2">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-full bg-[--secondary] px-3 py-1 text-xs text-[--secondary-foreground]"
                    >
                      <FiTag className="h-3.5 w-3.5" /> {t}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {coverUrl && (
          <div className="mx-auto mt-6 max-w-5xl px-4">
            <div className="overflow-hidden rounded-2xl border border-border/40">
              <img
                src={coverUrl}
                alt=""
                className="h-[360px] w-full object-cover md:h-[480px]"
              />
            </div>
            {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-2xl border border-border/40">
              <img src={coverUrl} alt="" className="h-[360px] w-full object-cover md:h-[480px]" />
            </motion.div> */}
          </div>
        )}
      </section>

      {/* Body + Sidebar */}
      <main className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-[1fr,320px]">
        {/* Article */}
        <article className="prose prose-invert max-w-none prose-h2:scroll-mt-24 prose-h3:scroll-mt-24">
          {/* Share row */}
          <div className="mb-6 flex items-center justify-between rounded-xl border border-border/60 bg-[--secondary] p-3 text-sm text-[--secondary-foreground]">
            <span>Enjoying this read? Share it.</span>
            <div className="flex items-center gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  article.title
                )}&url=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.href : ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-border/60 px-3 py-1.5 hover:bg-[--accent] hover:text-[--accent-foreground]"
              >
                <FiShare2 className="h-4 w-4" /> Share
              </a>
            </div>
          </div>

          {/* Content: expecting HTML from Strapi; if markdown, render it there and store as HTML */}
          {article.content ? (
            <div className="prose prose-invert max-w-none">
              <MarkdownRenderer content={article.content} />
            </div>
          ) : (
            // <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
            <p className="text-[--muted]">
              No content available for this article.
            </p>
          )}

          {/* Footer actions */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/60 bg-[--secondary] p-4">
            <div className="text-sm text-[--secondary-foreground]">
              Published on {formatDate(article.createdAt)} •{" "}
              {article.readingTime ? `${article.readingTime} min` : "5 min"}{" "}
              read
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 rounded-xl border border-border/60 bg-[--foreground] px-3 py-2 text-sm text-[--background] hover:opacity-90"
            >
              <FiChevronLeft className="h-4 w-4" /> Back to articles
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Related */}
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-foreground text-background">
            <div className="border-b border-border/60 bg-primary px-4 py-3 text-sm font-semibold text-white">
              Related articles
            </div>
            {related.length ? (
              <ul className="divide-y divide-border/60">
                {related.map((p) => (
                  <li key={p.id} className="flex items-start gap-3 px-4 py-3">
                    {p?.cover?.url ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${p.cover.url}`}
                        alt=""
                        className="h-12 w-16 rounded-md object-cover"
                      />
                    ) : (
                      <div className="h-12 w-16 rounded-md bg-[--secondary]"></div>
                    )}
                    <div className="min-w-0">
                      <Link
                        href={`/post/${p.id}`}
                        className="line-clamp-2 text-sm font-medium text-background hover:underline"
                      >
                        {p.title}
                      </Link>
                      <p className="mt-0.5 text-xs text-muted">
                        {p.readingTime} • {formatDate(p.createdAt)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-6 text-sm text-background/80">
                No related posts yet.
              </div>
            )}
          </div>
        </aside>
      </main>

      {/* More from the blog */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        {related.length > 0 && (
          <>
            <h2 className="mb-4 text-xl font-semibold">Keep reading</h2>
            {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {related.map((post, i) => (
                <motion.article key={post.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.03 }} className="group overflow-hidden rounded-2xl border border-border/40 bg-[--background-gray-light] text-foreground">
                  <div className="relative h-40 w-full overflow-hidden">
                    {post?.cover?.url ? (
                      <img src={`${API_URL}${post.cover.url}`} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="h-full w-full bg-[--secondary]"></div>
                    )}
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="flex flex-wrap gap-2">{(post.tags || []).slice(0, 3).map((t) => <span key={t} className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800">{t}</span>)}</div>
                    <h3 className="text-lg font-semibold leading-snug text-gray-900">{post.title}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
                      <span>{formatDate(post.createdAt)}</span>
                      <span className="inline-flex items-center gap-1"><FiClock className="h-3.5 w-3.5" /> {post.readingTime}</span>
                    </div>
                    <Link href={`/post/${post.id}`} className="mt-1 inline-flex items-center gap-1 text-sm text-accent hover:underline">Read article <FiArrowUpRight className="h-4 w-4" /></Link>
                  </div>
                </motion.article>
              ))}
            </div> */}
          </>
        )}
      </section>
    </div>
  );
}

type MarkdownRendererProps = {
  content: string;
};

type CodeProps = ComponentProps<"code"> & {
  inline?: boolean;
  node?: any;
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ inline, className, children, ...props }: CodeProps) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              // @ts-expect-error Type 'Record<string, string>' is not assignable to type 'Record<string, React.CSSProperties>'.
              style={oneDark as Record<string, React.CSSProperties>}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        h1: ({ children }) => (
          <h1 className="mt-8 text-3xl font-bold tracking-tight">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-6 text-2xl font-semibold text-primary">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="mt-3 leading-7 text-muted-foreground">{children}</p>
        ),
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
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary/50 pl-4 italic text-muted">
            {children}
          </blockquote>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
