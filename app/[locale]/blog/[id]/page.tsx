// app/post/[id]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiClock, FiTag, FiChevronLeft, FiShare2 } from "react-icons/fi";
import { ArticleResponse, ArticlesResponse } from "@/types/strapi";
import { MAX_RELATED_ARTICLES } from "@/lib/constants/ui";
import MarkdownRenderer from "@/components/general/MarkdownRenderer";
import TableOfContents from "@/components/general/TableOfContents";
import axios from "axios";

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
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <FiChevronLeft className="h-4 w-4" /> Back to all articles
          </Link>

          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            {article.title}
          </h1>
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
          </div>
        )}
      </section>

      <main className="mx-auto grid max-w-5xl gap-2 px-4 py-10 md:grid-cols-[minmax(160px,220px)_1fr] md:items-start">
        {/* Table of Contents (left column on md+, hidden on mobile) */}
        <aside className="hidden md:block sticky top-2 self-start h-fit">
          <div className="max-h-[calc(100vh-6rem)] overflow-auto pr-4">
            <TableOfContents />
          </div>
        </aside>

        {/* Article (right column) */}
        <article className="min-w-0 prose prose-invert max-w-none prose-h2:scroll-mt-24 prose-h3:scroll-mt-24">
          {/* Content */}
          {article.content ? (
            <div className="prose prose-invert max-w-none">
              <MarkdownRenderer content={article.content} />
            </div>
          ) : (
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

          {/* Related */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/70 bg-foreground text-background">
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
        </article>
      </main>

      {/* More from the blog */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        {related.length > 0 && (
          <>
            <h2 className="mb-4 text-xl font-semibold">Keep reading</h2>
            {/* grid of related posts if you re-enable */}
          </>
        )}

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
      </section>
    </div>
  );
}
