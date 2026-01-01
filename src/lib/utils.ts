import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { marked } from "marked";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Chuyển đổi chuỗi markdown sang HTML string
 * @param markdown - Chuỗi markdown
 * @returns HTML string
 */
export function markdownToHtml(markdown: string): Promise<string> | string {
  return marked.parse(markdown);
}

// Table of Content function 
export interface TocItem {
  level: number;
  text: string;
}

export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,6})\s+(.*)$/gm;
  const toc: TocItem[] = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    toc.push({
      level: match[1].length,
      text: match[2],
    });
  }

  return toc;
}