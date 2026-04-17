import React from "react";
import { mockBlogDetail } from "@/mock/blog";
import BlogPostCard from "@/components/features/blogs/BlogPostCard";
import { PaginationWrapper } from "@/components/features/blogs/BlogPagination";

const PAGE_SIZE = 6;

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const params = await searchParams;
  const page = parseInt(params?.page ?? "1", 10);
  const totalBlogs = mockBlogDetail.length;
  const pageCount = Math.ceil(totalBlogs / PAGE_SIZE);

  return (
    <div className="container mx-auto mt-20 p-5">
      <h1 className="text-4xl font-bold text-center pt-5 pb-3">Blog</h1>
      <p className="text-lg text-center pb-10">
        Notes on web development, tooling, and building a career in software.
      </p>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {mockBlogDetail.map((blog) => (
          <BlogPostCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10">
        <PaginationWrapper page={page} pageCount={pageCount} />
      </div>
    </div>
  );
}
