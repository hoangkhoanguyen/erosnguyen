import Link from "next/link";
import { mockBlogDetail } from "@/mock/blog";
import { ArrowRight } from "lucide-react";

export default function Blogs() {
  const blogs = mockBlogDetail;

  return (
    <section className="container relative py-16 overflow-hidden">
      <div className="max-w-250 mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Bài viết mới nhất
        </h2>

        {/* Blog list */}
        <div className="space-y-6">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="block group p-6 rounded-xl bg-card dark:bg-card-dark border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Meta */}
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mb-2">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md w-fit">
                  {blog.tags[0]}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(blog.publishedAt).toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                {blog.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {/* View more */}
        <div className="mt-8 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-primary transition-colors"
          >
            Đọc thêm tại Blog
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
