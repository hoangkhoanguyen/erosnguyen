# 🎯 AI Coding Guidelines - Portfolio Eros

Tài liệu này chứa các rule, điểm cần chú ý, và best practices khi code cho project portfolio. AI agent phải tuân thủ các hướng dẫn này.

---

## 📐 Layout & Section

### Section Component

- **Section luôn full width**, không có `px` hoặc `w-` constraint
- Section là container wrapper chính, occupies 100% viewport width
- Nếu nội dung bên trong section cần giới hạn chiều ngang → sử dụng `container`

### Container

- Dùng `container` class cho nội dung cần giới hạn chiều ngang
- **Không cần** thêm `mx-auto`, `px-4`, hay spacing thêm
- `container` đã được config trong `globals.css` với padding và margin hợp lý
- Container tự động center và responsive

### Ví dụ đúng:

```tsx
export default function MySection() {
  return (
    <section className="bg-background py-16">
      <div className="container">
        {/* Nội dung ở đây, đã auto center & responsive */}
      </div>
    </section>
  );
}
```

### Ví dụ sai ❌:

```tsx
// SAI: Thêm px trực tiếp
<section className="px-4 py-16">

// SAI: Không dùng container
<section className="max-w-7xl mx-auto py-16">

// SAI: Thêm margin container
<div className="container mx-auto px-6">
```

---

## 🎨 Color Palette Rules

### Semantic Color Naming

Dự án sử dụng semantic color tokens. **Không hard-code hex colors** trong components.

| Trường hợp                    | Class/Token         | Ví dụ                                  |
| ----------------------------- | ------------------- | -------------------------------------- |
| Text tương phản cao với theme | `-foreground`       | `text-foreground`, `bg-foreground`     |
| Text màu nhạt/secondary       | `-muted-foreground` | `text-muted-foreground`                |
| Border mặc định               | `-stroke`           | `border-stroke`, `border` (với config) |
| Background chính              | `-background`       | `bg-background`                        |
| Accent/Highlight              | `-accent`           | `text-accent`, `bg-accent`             |
| Destructive (red)             | `-destructive`      | `bg-destructive`, `text-destructive`   |

### Ví dụ:

```tsx
// ✅ ĐÚNG
<h2 className="text-foreground">Heading</h2>
<p className="text-muted-foreground">Description</p>
<div className="border-stroke border-2">Content</div>

// ❌ SAI
<h2 className="text-[#1a1a1a]">Heading</h2>
<p className="text-[#888888]">Description</p>
```

### Màu đặc biệt (Hex colors)

Nếu **cần dùng màu hex cụ thể** (vd: màu gradient, highlight cụ thể):

- Thêm màu vào `interface` của data
- Lưu trong mockdata với giá trị hex
- Render động từ data

```tsx
interface SkillItem {
  name: string;
  color: string; // hex color: "#FF5733"
}

const skills: SkillItem[] = [{ name: "React", color: "#61DAFB" }];
```

---

## 🖼️ Image Handling

### Bắt buộc dùng Next.js Image

- **Luôn import từ `next/image`**, không dùng `<img />` tag
- Image được auto-optimize bởi Next.js

```tsx
import Image from "next/image";

<Image
  src="/images/project-preview.jpg"
  alt="Project preview"
  width={800}
  height={600}
  priority={false}
/>;
```

### Image trong Section

- Nếu image full width section: `fill` + `sizes` prop
- Nếu image fixed size: `width` + `height` cụ thể
- Luôn có `alt` text mô tả

```tsx
// Full width image
<Image
  src="/banner.jpg"
  alt="Banner"
  fill
  className="object-cover"
  sizes="100vw"
/>

// Fixed size
<Image
  src="/avatar.jpg"
  alt="Avatar"
  width={120}
  height={120}
  className="rounded-full"
/>
```

---

## 🎯 Icon Management

### Dùng Lucide React Icons

- **Bắt buộc dùng `lucide-react`** cho tất cả icons
- Không dùng Material Symbols hoặc font-based icons
- Import từ `lucide-react`, không hardcode SVG

```tsx
import { Mail, ArrowRight, Star, Sparkles } from 'lucide-react';

// Sử dụng
<Mail className="w-4 h-4 text-accent" />
<ArrowRight className="w-4 h-4" />
<Star className="w-5 h-5 fill-accent text-accent" />
```

### Icon Size Convention

```tsx
// Small (labels, badges)
className="w-4 h-4"

// Medium (buttons, cards)
className="w-5 h-5" or "w-6 h-6"

// Large (heroes, headers)
className="w-8 h-8", "w-12 h-12", "w-16 h-16"
```

### Dynamic Icons từ List Data

Nếu icon render động từ list data:

```tsx
interface Tool {
  id: string;
  name: string;
  iconName: string; // "Mail", "Star", "Code" etc
}

// Dùng DynamicIcon component (nếu có) hoặc object mapping:
const iconMap = {
  Mail,
  Star,
  Code,
  Database,
  Cloud,
  // ...
};

function ToolCard({ tool }: { tool: Tool }) {
  const IconComponent = iconMap[tool.iconName as keyof typeof iconMap];

  return (
    <div>
      <IconComponent className="w-6 h-6 text-accent" />
      <span>{tool.name}</span>
    </div>
  );
}
```

**Nếu dự án có DynamicIcon helper:**

```tsx
import { DynamicIcon } from "@/components/ui/dynamic-icon"; // hoặc đường dẫn tương ứng

<DynamicIcon name={tool.iconName} className="w-6 h-6" />;
```

### Color với Icons

- Dùng semantic colors: `text-accent`, `text-foreground`, `text-muted-foreground`
- Nếu icon cần fill (solid): `fill-accent text-accent`
- Dùng `w-X h-X` cho size, không dùng `text-{size}`

```tsx
// ✅ ĐÚNG
<Star className="w-5 h-5 fill-accent text-accent" />

// ❌ SAI
<Star className="text-2xl text-accent" />
<Star size={20} />
```

---

## 🔄 Component Structure & Reusable Content

### Khi có phần tử lặp lại (Repetitive Elements)

**Option 1: Tạo component con trong cùng file**

```tsx
// Inside CorePhilosophySection.tsx
function PhilosophyCard({ philosophy }: { philosophy: Philosophy }) {
  return <div className="philosophy-card">{/* Card content */}</div>;
}

export default function CorePhilosophySection() {
  return (
    <section>
      {philosophies.map((p) => (
        <PhilosophyCard key={p.id} philosophy={p} />
      ))}
    </section>
  );
}
```

**Option 2: Tạo hàm render helper**

```tsx
export default function MySection() {
  const renderItems = (items: Item[]) =>
    items.map((item) => (
      <div key={item.id} className="item">
        {/* Render logic */}
      </div>
    ));

  return <section>{renderItems(data)}</section>;
}
```

**Option 3: Tạo component riêng (nếu dùng ở nhiều nơi)**

```
components/
  features/
    my-story/
      CorePhilosophySection.tsx
      PhilosophyCard.tsx  ← component con riêng
```

### Data Structure cho Repetitive Content

**Bước 1: Tạo Interface**

```tsx
// constants/my-story.ts hoặc trong component
interface Philosophy {
  id: string;
  title: string;
  description: string;
  icon?: string; // optional
}
```

**Bước 2: Tạo Mock Data**

```tsx
const philosophies: Philosophy[] = [
  {
    id: "growth",
    title: "Continuous Growth",
    description: "Always learning and improving",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "Working together creates better outcomes",
  },
];
```

### Nếu items có màu sắc khác nhau

Thêm field `color` trong interface:

```tsx
interface Milestone {
  id: string;
  year: number;
  title: string;
  color: string; // hex: "#FF6B6B"
}

const milestones: Milestone[] = [
  {
    id: "2020",
    year: 2020,
    title: "Started Learning",
    color: "#FF6B6B",
  },
  {
    id: "2023",
    year: 2023,
    title: "First Project",
    color: "#4ECDC4",
  },
];

// Render - Dùng inline style cho dynamic colors từ data
{
  milestones.map((m) => (
    <div key={m.id} style={{ borderColor: m.color }} className="border-2">
      {m.title}
    </div>
  ));
}
```

**⚠️ Quan trọng:** Khi render item có màu từ interface (data có màu hex):

- **Luôn dùng inline `style`** để apply màu động
- Ví dụ: `style={{ color: item.color, backgroundColor: item.bgColor }}`
- Tailwind classes không thể nhận dynamic values, chỉ có inline style được
- Ưu tiên dùng CSS properties: `color`, `backgroundColor`, `borderColor`, `fill`, `stroke`

---

## 🔤 HTML Entities

Sử dụng HTML entities cho các ký tự đặc biệt:

| Ký tự  | Entity     | Mục đích           |
| ------ | ---------- | ------------------ |
| &nbsp; | `&nbsp;`   | Non-breaking space |
| ©      | `&copy;`   | Copyright symbol   |
| ™      | `&trade;`  | Trademark          |
| →      | `&rarr;`   | Right arrow        |
| ←      | `&larr;`   | Left arrow         |
| ↑      | `&uarr;`   | Up arrow           |
| •      | `&bull;`   | Bullet point       |
| …      | `&hellip;` | Ellipsis           |
| "      | `&quot;`   | Double quote       |
| '      | `&apos;`   | Single quote       |

### Ví dụ:

```tsx
<p>Specialized in React &amp; Next.js</p>
<span>&copy; 2024 All rights reserved</span>
<p>Ready to collaborate&nbsp;&rarr;</p>
<ul>
  <li>&bull; Skill 1</li>
  <li>&bull; Skill 2</li>
</ul>
```

---

## 📋 Type Safety

### Luôn định nghĩa Interface

- Không dùng `any` type
- Mỗi data structure phải có interface tương ứng
- Đặt interface trong `constants/` hoặc gần nơi dùng

```tsx
// ✅ ĐÚNG
interface ProjectCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

// ❌ SAI
const projects: any[] = [...]
```

### Generic Types

```tsx
interface BaseContent {
  id: string;
  title: string;
}

interface ProjectContent extends BaseContent {
  technologies: string[];
}

interface BlogContent extends BaseContent {
  author: string;
  date: string;
}
```

---

## 📁 File Organization

### Component Structure

```
components/
  features/
    [feature-name]/
      MainComponent.tsx          # Component chính
      SubComponent1.tsx          # Nếu là component con riêng
      SubComponent2.tsx          # Nếu là component con riêng
      types.ts                   # Interfaces dùng riêng
```

### Constants & Mock Data

```
constants/
  route.ts                       # Routes
  my-story.ts                    # Interfaces & mock cho my-story
  projects.ts                    # Interfaces & mock cho projects
```

### Styles

- Ưu tiên dùng **Tailwind classes** trong `className`
- Nếu cần CSS custom → `globals.css` hoặc `module.css`
- Không dùng inline `style` ngoại trừ dynamic values

---

## 🔍 Code Quality & Validation

### TypeScript Checking

Trước khi submit component, **phải kiểm tra TypeScript**:

```bash
# Kiểm tra type errors
npx tsc --noEmit

# Hoặc trong VS Code: Cmd/Ctrl + Shift + B → TypeScript: Run TypeScript Compiler
```

**Không được có:**

- ❌ Type errors (TS2322, TS2345, etc.)
- ❌ Implicit `any` types
- ❌ Unused variables
- ❌ Missing return types trên functions public

### ESLint Checking

Kiểm tra lỗi linting:

```bash
# Check lỗi eslint
npx eslint src/components/features/[component].tsx

# Tự động fix một số lỗi
npx eslint src/components/features/[component].tsx --fix
```

**Lỗi phổ biến cần fix:**

- Unused imports
- Unused variables
- Missing dependencies trong dependency arrays
- Incorrect prop types
- Missing keys trong lists

### Fix Strategy

1. **TypeScript errors** → Fix trước (type issues)
2. **ESLint warnings** → Fix thứ hai (code quality)
3. **Unused code** → Remove
4. **Import order** → Auto-fix với eslint --fix

### Ví dụ fix:

```tsx
// ❌ TRƯỚC (lỗi)
import { useState, useCallback } from "react"; // useCallback unused
import Image from "next/image";
import { useRouter } from "next/router"; // unused

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const unused = "this is not used"; // unused variable

  return <div>{count}</div>;
}

// ✅ SAU (fixed)
import { useState } from "react";
import Image from "next/image";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  return <div>{count}</div>;
}
```

---

## ✅ Checklist Before Submitting Code

Trước khi submit component:

- [ ] **TypeScript** - Chạy `npx tsc --noEmit` → Không có error
- [ ] **ESLint** - Chạy `npx eslint [file].tsx` → Fix với `--fix` flag
- [ ] Tất cả sections full width (không có `px` top level)
- [ ] Nội dung trong section có `container` wrapper
- [ ] Dùng semantic colors (`-foreground`, `-muted-foreground`, `-stroke`)
- [ ] Không hard-code hex colors (trừ trong data interface)
- [ ] Image dùng `next/image` với `alt` text
- [ ] Lặp lại → component con hoặc hàm render
- [ ] Data có interface + mock list
- [ ] HTML entities cho ký tự đặc biệt
- [ ] Không dùng `any` type
- [ ] Component clean, logic rõ ràng
- [ ] Mobile responsive (kiểm tra trên các breakpoints)

---

## 🎯 Common Patterns

### Pattern 1: Section with Hero + Content

```tsx
export default function MySection() {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">Title</h2>
          <p className="text-muted-foreground mt-4">Subtitle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Content */}
        </div>
      </div>
    </section>
  );
}
```

### Pattern 2: Card Grid with List Data

```tsx
interface CardItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

function ItemCard({ item }: { item: CardItem }) {
  return (
    <div className="rounded-lg border border-stroke p-6">
      <h3 className="text-foreground font-semibold">{item.title}</h3>
      <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
    </div>
  );
}

export default function ItemsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 🔗 References

- **Tailwind CSS**: Dùng để styling
- **Next.js Image**: Auto-optimization
- **TypeScript**: Type safety
- **globals.css**: Container, base styles

---

**Last Updated**: January 2, 2026  
**Version**: 1.0
