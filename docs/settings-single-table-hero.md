# Cấu hình settings: một bảng, hero section (cố định + đa ngôn ngữ)

> **Chuẩn hiện tại:** [`admin/docs/SETTINGS-DATA-MODEL.md`](../../admin/docs/SETTINGS-DATA-MODEL.md). File này giữ làm ví dụ domain hero.

Tài liệu mô tả cách dùng **một bảng `settings`** với cột **JSON/JSONB** để admin cấu hình vừa **URL và dữ liệu không đổi theo ngôn ngữ**, vừa **nội dung text theo từng locale** — ví dụ áp dụng cho hero portfolio.

## Mục tiêu

- **Một bảng** duy nhất cho khối cấu hình (ví dụ `key = 'hero'`).
- **Cố định**: URL ảnh đại diện, link/file CV, đường dẫn trang About, v.v.
- **Đa ngôn ngữ**: badge, headline (có đoạn nhấn mạnh màu), mô tả, nhãn nút, nhãn/thời gian kinh nghiệm.

## Hình dạng dữ liệu

Mỗi “section” là **một dòng** (một `key`, ví dụ `site.home.hero`), cột `value` kiểu JSON chứa:

| Nhóm trong JSON | Mục đích |
|-----------------|----------|
| `version` | Phiên bản cấu trúc |
| `cardMeta` | Tiêu đề / mô tả card trên admin (tuỳ chọn hiển thị) |
| `nonLocalized` (hoặc tên tương đương như `assets` + `links` gộp) | URL, đường dẫn, file không phụ thuộc locale |
| `locales` | Object keyed theo mã ngôn ngữ — nội dung hiển thị |

Ứng dụng đọc một row → merge `nonLocalized` + `locales[currentLocale]` để render.

### Phiên bản schema JSON

Dùng field `version` (số nguyên) để sau này migrate cấu trúc JSON có lộ trình rõ ràng.

## Ví dụ đầy đủ: `value` cho hero

Giả sử `key = 'site.home.hero'`, cột `value` lưu (minh họa — có thể gộp `assets`/`links` vào `nonLocalized`):

```json
{
  "version": 1,
  "cardMeta": {
    "title": "Hero trang chủ",
    "description": "Ảnh, CV, nội dung đa ngôn ngữ."
  },
  "assets": {
    "profileImageUrl": "https://ik.imagekit.io/your-id/portrait.png",
    "profileImageAlt": "Anh Nguyen"
  },
  "links": {
    "aboutPath": "/about",
    "cvFileUrl": "https://cdn.example.com/cv/anh-nguyen-cv.pdf"
  },
  "locales": {
    "vi": {
      "badge": "FULL-STACK DEVELOPER",
      "headline": {
        "parts": [
          { "text": "Biến ý tưởng thành ", "emphasis": false },
          { "text": "hiện thực số", "emphasis": true },
          { "text": ".", "emphasis": false }
        ]
      },
      "description": "Chào bạn, tôi là Anh Nguyễn. Tôi không chỉ viết code, tôi xây dựng các giải pháp giúp doanh nghiệp và người dùng kết nối hiệu quả hơn trong thế giới kỹ thuật số.",
      "primaryCtaLabel": "Về tôi",
      "secondaryCtaLabel": "CV của tôi",
      "experienceLabel": "Kinh nghiệm",
      "experienceValue": "5+ Năm"
    },
    "en": {
      "badge": "FULL-STACK DEVELOPER",
      "headline": {
        "parts": [
          { "text": "Turn ideas into ", "emphasis": false },
          { "text": "digital reality", "emphasis": true },
          { "text": ".", "emphasis": false }
        ]
      },
      "description": "Hi, I'm Anh Nguyen. I don't just write code — I build solutions that help businesses and users connect more effectively in the digital world.",
      "primaryCtaLabel": "About me",
      "secondaryCtaLabel": "My CV",
      "experienceLabel": "Experience",
      "experienceValue": "5+ Years"
    }
  }
}
```

### Ghi chú thiết kế headline

- Dùng mảng `parts` với cờ `emphasis` để khớp layout highlight **mà không phụ thuộc** placeholder kiểu `{highlight}` (tránh vỡ câu khi thứ tự từ hoặc dấu câu khác nhau giữa các ngôn ngữ).
- Nếu muốn đơn giản hơn có thể thay bằng ba field: `headlineBefore`, `headlineHighlight`, `headlineAfter`.

### `experienceValue` và bản địa hóa

- Chuỗi kiểu `"5+ Năm"` / `"5+ Years"` nên nằm trong `locales` vì đơn vị/ngữ cảnh thay đổi theo ngôn ngữ.
- Tuỳ chọn: tách `experienceYears: 5` ở root hoặc `links` và format chuỗi trong app — chỉ cần thống nhất một quy ước.

## So sánh nhanh với mô hình hai bảng

| Tiêu chí | Một bảng + JSON lớn | Hai bảng (`settings` + bản dịch theo `language_code`) |
|----------|---------------------|--------------------------------------------------------|
| Số bảng | Một | Hai |
| Join | Không cần join cho hero | Join theo key + language |
| FK tới bảng `languages` | Khó enforce ở DB; validate ở app (Zod) | Dễ FK + unique `(setting_key, language_code)` |
| Export/import một section | Một blob tiện | Gom nhiều row |
| Query “tất cả bản dịch tiếng Việt” | Cần toán tử JSONB | SQL thuần trên bảng dịch |

## Gợi ý triển khai

1. **Validate** `value` bằng schema (ví dụ Zod) trước khi lưu và khi đọc API public.
2. **Form admin**: một tab hoặc accordion cho “URL & file”, một bộ field lặp theo từng ngôn ngữ cho text.
3. **Fallback locale**: nếu thiếu `locales[locale]`, fallback sang default (ví dụ `vi` hoặc `en`).

## Liên quan repo hiện tại

Phía admin (Drizzle) hiện có tách `settings` và `setting_translations` với `value` jsonb trên bảng dịch. Nếu chuyển sang mô hình một bảng một document cho hero, cần migration + cập nhật service và form; tài liệu này chỉ mô tả **giải pháp mục tiêu** và **ví dụ payload**, không thay thế quyết định migration cụ thể.
