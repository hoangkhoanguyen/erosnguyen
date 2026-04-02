# Tài liệu trang chủ (Homepage)

Tài liệu mô tả **cấu trúc đầy đủ** trang chủ: khung layout toàn cục và từng section trong `main`, kèm file nguồn, dữ liệu, và hành vi chính.

---

## 1. Điểm vào và thứ tự render

- **Route:** `/` — file `src/app/page.tsx`.
- **Thứ tự trong `<main>`:**

  1. `HeroSection`
  2. `StoryAndValues`
  3. `Projects`
  4. `TechStackSection`
  5. `Blogs`

---

## 2. Khung layout (ngoài `page.tsx`)

Trang chủ được bọc bởi `RootLayout` (`src/app/layout.tsx`):

| Thành phần | Mô tả ngắn |
|------------|------------|
| **ThemeInitializer** | Khởi tạo theme trước khi paint. |
| **ThemeProvider** | Cung cấp context theme (sáng/tối). |
| **Header** | Thanh điều hướng trên cùng (logo, menu, có thể kèm mobile menu). |
| **`{children}`** | Nội dung trang — với route `/` chính là các section ở mục 3. |
| **Footer** | Chân trang. |
| **FloatingActions** | Các nút/hành động nổi (ví dụ theme, liên hệ — tùy implementation). |

Font: Geist Sans + Geist Mono, biến CSS `--font-geist-sans` / `--font-geist-mono`.

---

## 3. Các section trong `main` (chi tiết)

### 3.1 Hero (`HeroSection`)

- **File:** `src/components/features/home-page/HeroSection.tsx`
- **Vai trò:** Giới thiệu ngắn, tạo ấn tượng đầu trang — vai trò, headline, mô tả cá nhân, CTA.
- **Bố cục:** Lưới 2 cột trên desktop (`lg:grid-cols-2`): text bên trái, khối “thẻ” minh họa bên phải.
- **Nội dung chính (text):**
  - Badge: *Full-Stack Developer*
  - H1: *Turn ideas into* + đoạn gradient *digital reality.*
  - Đoạn giới thiệu: Anh Nguyen, full-stack, kết nối doanh nghiệp và người dùng.
- **CTA:**
  - *View my work* → `webRoutes.projects()`
  - *About me* → `webRoutes.myStory()`
- **Khối minh họa (glass-card, animation float):**
  - **Performance:** High-Performance, thanh tiến trình ~94%, “94/100 Lighthouse Score”
  - **Architecture:** Scalable Systems + icon Cloud / Layers / Braces
  - **UX / UI:** User-Centric Design, avatar giả lập, “+12k Users Engaged”
  - **Full Cycle:** Full-Stack Delivery, pipeline Idea → Live, “End-to-End Solutions”
- **Hiệu ứng / style:** Blur blob nền, `animate-fade-in-up`, `glass-card`, gradient primary.

---

### 3.2 Story & Values (`StoryAndValues`)

- **File:** `src/components/features/home-page/StoryAndValues.tsx`
- **Vai trò:** Trình bày hành trình và triết lý làm sản phẩm số (3 thẻ).
- **Nền:** `bg-surface`, viền dưới `border-stroke`.
- **Tiêu đề section:**
  - Eyebrow: *Story & Values*
  - H2: *Journey & philosophy* (chữ *philosophy* có gạch nền)
  - Mô tả: *More than writing code—... people who use them.*
- **Ba thẻ (`Card`, dữ liệu mảng `SAVs`):**

  | # | Icon (Lucide Dynamic) | Tiêu đề | Ý chính |
  |---|------------------------|---------|---------|
  | 1 | `lightbulb` | Curiosity as a compass | Sản phẩm theo mindset user-first, shaping experiences |
  | 2 | `sparkles` | "Invisible" technology | Từ tò mò về web → code thành sản phẩm cụ thể |
  | 3 | `gem` | Refinement in simplicity | Code sạch, bền vững; simplicity là craft |

- **Tương tác:** Hover: border primary nhạt, shadow, `-translate-y`, icon xoay nhẹ xen kẽ.

---

### 3.3 Featured projects (`Projects`)

- **File:** `src/components/features/home-page/Projects.tsx`
- **Vai trò:** Hiển thị **hai dự án nổi bật** và link tới danh sách đầy đủ.
- **Nền:** `bg-background`, viền dưới `border-stroke`.
- **Tiêu đề:** *Featured projects* — phụ đề *Work I'm most proud of*
- **Link phụ:** *View all* (ẩn trên màn nhỏ hơn `sm`) → `webRoutes.projects()`.
- **Dữ liệu:** `mockProjectDetail`, `mockProject2Details` từ `src/mock/projects.ts`.
- **UI từng item:** `ProjectCard` (`src/components/features/projects/ProjectCard.tsx`): ảnh, title, mô tả rút gọn, tech tags, link chi tiết `webRoutes.projectDetail({ slug })`.

---

### 3.4 Tech & skills (`TechStackSection`)

- **File:** `src/components/features/home-page/TechStackSection.tsx`
- **Vai trò:** Bảng công nghệ theo nhóm (icon category Lucide + icon công nghệ Iconify).
- **Nền:** `bg-surface`, viền dưới `border-stroke`.
- **Tiêu đề:** *Tech & skills* — mô tả toolkit từ UI tới hạ tầng.
- **Nhóm (`techCategories`, export sẵn trong file):**

  | Nhóm | Icon | Công nghệ (tóm tắt) |
  |------|------|---------------------|
  | Frontend | `panels-top-left` | React, Next.js, TypeScript, Tailwind CSS, JavaScript |
  | Backend | `server` | Node.js, NestJS, GraphQL, Python |
  | Database | `database` | PostgreSQL, MongoDB, Redis, Firebase |
  | Tools & DevOps | `terminal` | Docker, GitHub, AWS, Figma |

- **UI:** Lưới 1→2→4 cột; mỗi nhóm một card với header + danh sách `ul`.

---

### 3.5 Latest articles (`Blogs`)

- **File:** `src/components/features/home-page/Blogs.tsx`
- **Vai trò:** Liệt kê bài viết mới nhất (từ mock) và link tới blog.
- **Nền:** `bg-background`.
- **Tiêu đề:** *Latest articles* (căn giữa).
- **Dữ liệu:** `mockBlogDetail` từ `src/mock/blog.ts` (mảng bài).
- **Mỗi bài (Link):**
  - Tag đầu tiên (`blog.tags[0]`) dạng badge primary
  - Ngày đăng: `publishedAt`, format `en-US` (day, month long, year)
  - Tiêu đề, excerpt (`line-clamp-2`)
  - `href`: `/blogs/${blog.slug}`
- **Footer section:** *Read more on the blog* → `/blogs`.

---

## 4. Bảng tham chiếu nhanh

| Thứ tự | Component | File chính | Nguồn dữ liệu / ghi chú |
|--------|-----------|------------|-------------------------|
| — | Header / Footer / FloatingActions | `src/components/layout/*` | Không thuộc `page.tsx` nhưng là phần “trang chủ” đầy đủ |
| 1 | HeroSection | `HeroSection.tsx` | Hardcode + `webRoutes` |
| 2 | StoryAndValues | `StoryAndValues.tsx` | Mảng `SAVs` trong file |
| 3 | Projects | `Projects.tsx` | `src/mock/projects.ts` |
| 4 | TechStackSection | `TechStackSection.tsx` | `techCategories` trong file |
| 5 | Blogs | `Blogs.tsx` | `src/mock/blog.ts` |

---

## 5. Component cùng thư mục nhưng không dùng trên `/` hiện tại

Trong `src/components/features/home-page/` còn có **`FeaturedProjects.tsx`** và **`AboutSection.tsx`** — **không** được import trong `src/app/page.tsx`. Nếu cần mở rộng trang chủ, có thể tái sử dụng hoặc gộp sau khi đồng bộ nội dung.

---

## 6. Tài liệu liên quan

- **Inventory setting / admin (khác mục đích với file này):** `docs/settings/homepage-settings.md` — mapping gợi ý key cấu hình cho từng vùng hero/settings.

---

*Tài liệu phản ánh cấu trúc mã tại thời điểm tạo; khi refactor `page.tsx` hoặc đổi copy, nên cập nhật bảng và mục 3 cho khớp.*
