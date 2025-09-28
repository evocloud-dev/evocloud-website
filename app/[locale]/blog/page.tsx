import Hero from "@/components/specific/blog/Hero";
import Blogs from "@/components/specific/blog/Blogs";
import { MAX_PAGE_SIZE, DEFAULT_PAGE_NUMBER } from "@/lib/constants/ui";
import { ArticlesResponse } from "@/types/strapi";
import axios from "axios";

export async function fetchArticles(
  page = 1,
  pageSize = 5
): Promise<ArticlesResponse> {
  const res = await axios.get<ArticlesResponse>(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles`,
    {
      params: {
        populate: "*",
        "pagination[page]": page,
        "pagination[pageSize]": pageSize,
      },
    }
  );

  return res.data;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params?.page) || DEFAULT_PAGE_NUMBER;
  const pageSize = MAX_PAGE_SIZE;

  const { data: articles, meta } = await fetchArticles(page, pageSize);

  return (
    <div className="max-w-full overflow-x-hidden bg-white">
      <Hero />
      <Blogs articles={articles} pagination={meta.pagination} />
    </div>
  );
}
