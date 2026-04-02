# Homepage Settings Inventory

Tài liệu này tổng hợp các **setting items** có thể “đưa lên admin” hoặc cấu hình qua JSON/DB để render UI.

Quy ước nhóm:
- **Đa ngôn ngữ (i18n)**: mọi setting “show text cho người dùng xem” (title, subtitle, button label, description, alt, badge text, v.v.).
- **Không i18n**: dữ liệu kỹ thuật (ids/slugs để query), URL/src image, limit/sort, v.v.

## Section 01 — Home Hero (`src/components/features/home-page/HeroSection.tsx`)

Nguồn hiện tại: text/asset đang **hardcode** trong component.

### 1) Content (text)

| Setting key | Type | i18n | Ví dụ value hiện tại | Ghi chú |
|---|---|---|---|---|
| `home.hero.roleBadge.text` | string | Yes | `Full-Stack Developer` | Text pill phía trên tiêu đề |
| `home.hero.headline.prefix` | string | Yes | `Biến ý tưởng thành` | Phần đầu của H1 |
| `home.hero.headline.highlight` | string | Yes | `hiện thực số.` | Phần được highlight gradient trong H1 |
| `home.hero.description` | string | Yes | `Chào bạn, tôi là Anh Nguyễn...` | Đoạn mô tả dưới H1 |

### 2) Primary/Secondary CTA

| Setting key | Type | i18n | Ví dụ value hiện tại | Ghi chú |
|---|---|---|---|---|
| `home.hero.cta.primary.label` | string | Yes | `Về tôi` | Nhãn nút CTA chính |
| `home.hero.cta.secondary.label` | string | Yes | `CV của tôi` | Nhãn nút CTA phụ |

### 3) Avatar block

| Setting key | Type | i18n | Ví dụ value hiện tại | Ghi chú |
|---|---|---|---|---|
| `home.hero.avatar.src` | string | No | `/avatar.png` | Asset trong `public/` hoặc URL |
| `home.hero.avatar.alt` | string | Yes | `Avatar Anh Nguyen` | Alt text cho SEO/a11y |

### 4) Experience badge

| Setting key | Type | i18n | Ví dụ value hiện tại | Ghi chú |
|---|---|---|---|---|
| `home.hero.experienceBadge.label` | string | Yes | `Kinh nghiệm` | Label nhỏ trên badge |
| `home.hero.experienceBadge.value` | string | Yes | `5+ Năm` | Value lớn trên badge |

## Section 02 — Story & Values (`src/components/features/home-page/StoryAndValues.tsx`)

Nguồn hiện tại: text + list cards đang **hardcode** trong component (mảng `SAVs`).

### 1) Section header (text)

| Setting key | Type | i18n | Ví dụ value hiện tại | Ghi chú |
|---|---|---|---|---|
| `home.storyAndValues.kicker` | string | Yes | `Story & Values` | Dòng label nhỏ phía trên title |
| `home.storyAndValues.title.prefix` | string | Yes | `Hành trình &` | Phần đầu của H2 |
| `home.storyAndValues.title.highlight` | string | Yes | `Triết lý` | Phần được nhấn/underline |
| `home.storyAndValues.description` | string | Yes | `Không chỉ là viết code...` | Mô tả dưới title |

### 2) Cards (list)

| Setting key | Type | i18n | Ví dụ value hiện tại | Ghi chú |
|---|---|---|---|---|
| `home.storyAndValues.items` | array | No | `[ ... ]` | Danh sách card hiển thị |
| `home.storyAndValues.items[].icon` | string | No | `lightbulb` | Icon name (lucide dynamic) |
| `home.storyAndValues.items[].title` | string | Yes | `Sự tò mò dẫn lối` | Title card |
| `home.storyAndValues.items[].description` | string | Yes | `Không chỉ là viết code...` | Description card |

## Section 03 — Featured Projects (`src/components/features/home-page/Projects.tsx`)

Nguồn hiện tại: title/subtitle hardcode; list dự án đang hardcode (lấy từ `src/mock/projects.ts` rồi tạo mảng `[mockProjectDetail, mockProject2Details]`).

### 1) Section header (text)

| Setting key | Type | i18n | Ví dụ value hiện tại | Ghi chú |
|---|---|---|---|---|
| `home.projects.title` | string | Yes | `Dự án nổi bật` | H2 |
| `home.projects.subtitle` | string | Yes | `Những sản phẩm tôi tâm đắc nhất` | Subtitle dưới H2 |
| `home.projects.viewAllLabel` | string | Yes | `Xem tất cả` | Label link “xem tất cả” |

### 2) Data source for list (danh sách slug)

| Setting key | Type | i18n | Ví dụ | Ghi chú |
|---|---|---|---|---|
| `home.projects.featuredProjectSlugs` | string[] | No | `["ten-du-an","du-an-thu-hai"]` | Danh sách **slug** project sẽ show trên home (admin quản lý thứ tự) |
| `home.projects.featuredLimit` | number | No | `6` | Nếu muốn giới hạn số lượng (tùy chọn) |

## Section 04 — Tech Stack (`src/components/features/home-page/TechStackSection.tsx`)

Nguồn hiện tại: header text + `techCategories` đang hardcode.

### 1) Section header (text)

| Setting key | Type | i18n | Ví dụ value hiện tại | Ghi chú |
|---|---|---|---|---|
| `home.techStack.title` | string | Yes | `Công nghệ & Kỹ năng` | H2 |
| `home.techStack.description` | string | Yes | `Bộ công cụ tôi sử dụng...` | Mô tả dưới H2 |

### 2) Categories (list)

| Setting key | Type | i18n | Ví dụ value hiện tại | Ghi chú |
|---|---|---|---|---|
| `home.techStack.categories` | array | No | `[ ... ]` | Danh sách category hiển thị |
| `home.techStack.categories[].title` | string | Yes | `Frontend` | Title category |
| `home.techStack.categories[].icon` | string | No | `panels-top-left` | Icon name (lucide dynamic) |
| `home.techStack.categories[].technologies` | array | No | `[ ... ]` | List tech trong category |
| `home.techStack.categories[].technologies[].name` | string | Yes | `React` | Text hiển thị |
| `home.techStack.categories[].technologies[].icon` | string | No | `logos:react` | Iconify icon key |

## Section 05 — Latest Blogs (`src/components/features/home-page/Blogs.tsx`)

Nguồn hiện tại: title + “đọc thêm” hardcode; list bài viết lấy từ `src/mock/blog.ts` (mảng `mockBlogDetail`) và render toàn bộ.

### 1) Section header + footer (text)

| Setting key | Type | i18n | Ví dụ value hiện tại | Ghi chú |
|---|---|---|---|---|
| `home.blogs.title` | string | Yes | `Bài viết mới nhất` | H2 |
| `home.blogs.viewMoreLabel` | string | Yes | `Đọc thêm tại Blog` | Label link ở cuối section |

### 2) Data source for list (danh sách slug)

| Setting key | Type | i18n | Ví dụ | Ghi chú |
|---|---|---|---|---|
| `home.blogs.latestBlogSlugs` | string[] | No | `["react-hooks-guide","hieu-nhanh-useeffect"]` | Danh sách slug bài viết show trên home (admin quản lý thứ tự) |
| `home.blogs.latestLimit` | number | No | `5` | Nếu muốn “lấy N bài mới nhất” thay vì chỉ định ids |

### 3) Per-item display notes (không phải setting, để map data)

- `blog.tags[0]`: đang show như badge ở đầu card (text => i18n theo data bài viết).
- `blog.publishedAt`: format theo `vi-VN` (khuyến nghị coi như format UI, không đưa lên settings trừ khi cần).
- `blog.title`, `blog.excerpt`: text => i18n theo data bài viết.

## Notes — Unused components in Home

Các file sau tồn tại nhưng **không được import** trong `src/app/page.tsx` (tính đến hiện tại), nên chưa đưa vào inventory của trang chủ:
- `src/components/features/home-page/AboutSection.tsx`
- `src/components/features/home-page/FeaturedProjects.tsx`

