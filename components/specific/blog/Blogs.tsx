// app/blog/page.jsx
"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiTag,
  FiClock,
  FiChevronRight,
  FiChevronLeft,
  FiArrowUpRight,
  FiFilter,
} from "react-icons/fi";
import { FaFireFlameSimple } from "react-icons/fa6";
import { Article, Pagination } from "@/types/strapi";
import Link from "next/link";

export default function Blogs({
  articles = [],
  pagination = {
    page: 0,
    pageSize: 0,
    pageCount: 0,
    total: 0,
  },
}: {
  articles: Article[];
  pagination: Pagination;
}) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(articles.flatMap((p) => p.tags)))],
    [articles]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((p) => {
      const matchesQuery = q
        ? p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
        : true;
      const matchesTag =
        activeTag === "All" ? true : p.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag, articles]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  // With this explicit handler:
  const onSelectTag = (t: string) => {
    setPage(1);
    setActiveTag(t);
  };

  return (
    <div className="bg-[--background] text-[--foreground]">
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[--from] to-[--to] opacity-40"></div>
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            Insights, tutorials, and stories for builders
          </motion.h1>
          <p className="mt-3 max-w-2xl text-muted">
            Deep dives on Next.js, Tailwind v4, and real-world engineering
            patterns. Fresh every week.
          </p>

          {/* Search & Filters */}
          <div className="mt-6 grid gap-3 md:grid-cols-[1fr,auto]">
            <div className="relative">
              <FiSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(e) => {
                  setPage(1);
                  setQuery(e.target.value);
                }}
                placeholder="Search articles"
                className="w-full rounded-xl border border-border/70 bg-[--input] px-9 py-3 text-sm outline-none ring-0 placeholder:text-muted focus:border-[--accent]"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-[--secondary] px-3 py-2 text-sm text-[--secondary-foreground] hover:border-[--accent] hover:bg-[--accent] hover:text-[--accent-foreground]">
                <FiFilter className="h-4 w-4" /> Filters
              </button>
              <select className="rounded-xl border border-border/70 bg-[--secondary] px-3 py-2 text-sm text-[--secondary-foreground] hover:border-[--accent] focus:border-[--accent]">
                <option>Newest</option>
                <option>Oldest</option>
                <option>Reading time</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => {
              const isActive = activeTag === t;
              return (
                <button
                  key={t}
                  onClick={() => onSelectTag(t)}
                  value={t}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition cursor-pointer
          ${
            isActive
              ? "border-blue-500 bg-blue-500/20 text-blue-500"
              : "border-gray-300 bg-transparent text-gray-400 hover:border-gray-400 hover:bg-gray-100/10"
          }`}
                >
                  <FiTag className="h-3.5 w-3.5" />
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 md:grid-cols-[1fr,320px]">
        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageData.map((post, i) => {
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="group overflow-hidden rounded-2xl border border-border/40 bg-[--background-gray-light] text-foreground shadow-sm"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post?.cover?.url}`}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {post.featured && (
                      <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-background">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-900">
                      {post.title}
                    </h3>

                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-tertiary"></span>
                        <span>
                          {post.author?.firstName} {post.author?.lastName}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>
                          {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <FiClock className="h-3.5 w-3.5" />
                          {post.readingTime || 0} min
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.documentId}`}
                      className="mt-1 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      Read article <FiArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="inline-flex items-center gap-1 rounded-xl border border-border bg-foreground px-3 py-2 text-sm text-background disabled:opacity-40"
            >
              <FiChevronLeft className="h-4 w-4" /> Prev
            </button>

            <span className="rounded-xl bg-primary px-3 py-2 text-sm font-medium text-white">
              Page {page} / {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="inline-flex items-center gap-1 rounded-xl border border-border bg-foreground px-3 py-2 text-sm text-background disabled:opacity-40"
            >
              Next <FiChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-foreground text-background">
            <div className="flex items-center gap-2 border-b border-border/60 bg-primary px-4 py-3 text-sm font-semibold text-white">
              <FaFireFlameSimple className="h-4 w-4 text-[--tertiary]" />{" "}
              Trending
            </div>
            <ul className="divide-y divide-border/60">
              {pageData.slice(0, 7).map((post) => (
                <li key={post.id} className="flex items-start gap-3 px-4 py-3">
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post?.cover?.url}`}
                    alt=""
                    className="h-12 w-16 rounded-md object-cover"
                  />
                  <div className="min-w-0">
                    <Link
                      href={`/blog/${post.documentId}`}
                      className="line-clamp-2 text-sm font-medium hover:underline text-background"
                    >
                      {post.title}
                    </Link>
                    <p className="mt-0.5 text-xs text-muted">
                      {post.readingTime} min •{" "}
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
