import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import AppBreadcrumb from "@/components/layout/AppBreadcrumb";
import AuthorInfo from "@/components/features/blogs/AuthorInfo";
import Image from "next/image";

import { mockBlogDetail } from "@/mock/blog";
import { Heart, Share2 } from "lucide-react";
import BlogPostCard from "@/components/features/blogs/BlogPostCard";
const BLOGS = mockBlogDetail;

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetail({ params }: Props) {
  const resolvedParams = await params;
  const blog = BLOGS.find((b) => b.slug === resolvedParams.slug);
  if (!blog) {
    return (
      <div className="container mx-auto mt-20 p-5">Blog not found</div>
    );
  }
  const tags = blog.tags;

  return (
    <div className="container mx-auto mt-20 p-5">
      {/* Breadcrumb */}
      <div className="py-2">
        <AppBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blogs" },
            { label: blog.title },
          ]}
        />
      </div>

      {/* Post Title */}
      <h1 className="py-2 text-4xl md:text-5xl font-bold text-center">
        {blog.title}
      </h1>

      {/* Author Info */}
      <div className="py-10 flex align-center justify-center">
        <AuthorInfo
          name={blog.author.name}
          avatar={blog.author.avatar}
          publishedAt={blog.publishedAt}
          readTime={blog.readingTime}
        />
      </div>

      {/* Cover Image */}
      <div className="relative w-full aspect-video">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      {/* Post Content */}
      <div className="post-content">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {blog.content}
        </ReactMarkdown>

        <div className="my-10 h-0.5 w-full bg-gray-700" />

        <div className="flex justify-between flex-wrap md:flex-nowrap gap-4">
          <div className="flex gap-2 flex-wrap shrink-0 flex-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-light/20 text-primary-light rounded-full text-sm  color-white"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground shrink-0">
            <button
              type="button"
              className="flex items-center gap-2 hover:text-red-500 transition"
            >
              <Heart className="size-5" />
              <span>124</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <Share2 className="size-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      <div className="my-10 h-0.5 w-full bg-gray-700" />

      {/* Related Articles */}
      <h2 className="py-10 text-3xl font-bold">Related Articles</h2>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {mockBlogDetail.map((blog) => (
          <BlogPostCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
