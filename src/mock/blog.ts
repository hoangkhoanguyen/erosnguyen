export interface BlogDetail {
  id: string;
  title: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const mockBlogDetail: BlogDetail[] = [
  {
    id: "1",
    title: "React Hooks have completely revolutionized how we write components",
    slug: "react-hooks-guide",
    author: {
      name: "React Team",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    publishedAt: "2025-12-10",
    readingTime: "7 min read",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Hooks", "JavaScript"],
    excerpt:
      "React Hooks have completely revolutionized how we write components. Gone are the days of complex class components and confusing lifecycle methods.",
    content: `React Hooks have completely revolutionized how we write components. Gone are the days of complex class components and confusing lifecycle methods. In 2024, mastering hooks is not just an option—it's a necessity for any serious frontend developer looking to build scalable applications.

In this article, we will explore the different types of hooks, when to use them, and how they can simplify your code structure significantly.

![React Hooks Overview](https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop)

## 1. The Fundamentals (Heading 2)

At its core, React provides a few built-in hooks that cover 90% of use cases. The most common one is \`useState\`. You can read more in the [official documentation link](https://react.dev/reference/react/useState).

![useState Example](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop)

\`\`\`jsx
import React, { useState } from 'react';
function Counter() {
  // Declare a new state variable named "count"
  const [count, setCount] = useState(0);
  return (
    <div className="p-4">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

> Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share hooks among many components or with the community.
>
> — React Team

## Why Use Hooks? (Heading 3)

Classes confuse both people and machines. Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.

### Custom Hooks (Heading 4)

Building your own hooks lets you extract component logic into reusable functions.

#### PERFORMANCE TIPS (HEADING 5)

Don't forget to use useMemo and useCallback when passing functions to child components to avoid unnecessary re-renders.

##### FINAL THOUGHTS (HEADING 6)

Start gradually adopting hooks in your new components. There is no need to rewrite existing code immediately.
`,

  },
  {
    id: "2",
    title: "Hiểu nhanh về useEffect",
    slug: "hieu-nhanh-useeffect",
    author: {
      name: "Frontend Dev",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop",
    },
    publishedAt: "2025-12-11",
    readingTime: "3 min read",
    coverImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    tags: ["React"],

    excerpt: "Giải thích ngắn gọn về useEffect.",

    content: "Short content...",
  },
  {
    id: "3",
    title: "Building a design system that actually scales across teams",
    slug: "scalable-design-system",
    author: {
      name: "Eros Nguyen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    publishedAt: "2025-12-15",
    readingTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tags: ["Design Systems", "React", "Tailwind"],
    excerpt:
      "Lessons learned from building and maintaining a component library used by multiple product teams in production.",
    content: "Full content here...",
  },
]

