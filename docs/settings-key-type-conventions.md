# Quy ước `key` và `version` cho bảng `settings`

> **Chuẩn hiện tại:** [`admin/docs/SETTINGS.md`](../../admin/docs/SETTINGS.md) và [`SETTINGS-KEYS-AND-VERSIONING.md`](../../admin/docs/SETTINGS-KEYS-AND-VERSIONING.md). File này giữ làm tham khảo.

Tài liệu này chốt cách đặt **`key`** (PK, định danh duy nhất từng card/row) và cách quản lý tiến hóa schema bằng **`value.version`**, sao cho:

- Website có **nhiều page**, mỗi page có **nhiều khối cấu hình** khác nhau.
- **Registry trong code** dễ tra cứu, dễ thêm page settings mới.
- Admin **không gom tất cả card vào một màn hình**: mỗi route settings chỉ load **một nhóm** card (theo page hoặc theo chủ đề).

Tham khảo thêm trong cùng thư mục (bản lưu): [settings-one-table-admin-flow.md](./settings-one-table-admin-flow.md), [settings-ui-card-spec.md](./settings-ui-card-spec.md), [settings-admin-groups-navigation.md](./settings-admin-groups-navigation.md).

---

## 1) Vai trò của `key` và `version`

| Cột | Vai trò | Ai quyết định |
|-----|---------|----------------|
| **`key`** | **Instance** duy nhất trong toàn hệ thống: “cấu hình này gắn với page/section nào”. Luôn cố định sau khi ship (đổi key = migration dữ liệu). | Developer định nghĩa trong registry, lưu y nguyên vào DB. |
| **`version`** (trong `value`) | Đánh dấu phiên bản cấu trúc dữ liệu của **chính row đó**. Dùng để migrate/adapt khi thay đổi UI hoặc shape JSON. | Developer kiểm soát bằng schema + migration handler trong code. |

Phân nhóm màn hình admin nằm ở **code** (ví dụ `groupId` + `GROUP_KEYS`), không phụ thuộc DB nếu không cần.

---

## 2) Quy ước `key` (PK)

### 2.1 Định dạng: phân cấp bằng dấu chấm

Dùng **dot-separated**, từ tổng quát đến cụ thể:

```text
{scope}.{pageId}.{sectionId}
```

- **`scope`**: phạm vi sản phẩm (tránh đụng nhau khi sau này có nhiều app). Ví dụ: `site`, `blog`, `adminUi` (hiếm khi cần).
- **`pageId`**: khớp với “page” trên website hoặc nhóm nghiệp vụ cố định. Ví dụ: `home`, `about`, `projects`, `contact`.
- **`sectionId`**: khối cấu hình trên page đó. Ví dụ: `hero`, `footerCta`, `seo`, `featuredProjects`.

**Ví dụ:**

- `site.home.hero`
- `site.about.header`
- `site.projects.list`
- `site.global.footer` — dùng `pageId = global` cho khối dùng chung nhiều page (footer, analytics snippet, v.v.).

### 2.2 Quy tắc kỹ thuật

- Chỉ dùng **`a-z`**, **`0-9`**, dấu **`.`** (và nếu cần tách từ dài: dùng **camelCase** trong segment, không dùng space).
- Độ dài mỗi segment ngắn gọn; tổng chuỗi nên nằm trong giới hạn cột DB (ví dụ ≤ 255).
- **`key` là duy nhất toàn bảng** — không trùng giữa các page.
- **Ổn định**: đổi tên section trên UI không bắt buộc đổi `key`; chỉ đổi `key` khi thật sự tách/ghép logic hoặc đổi chỗ lưu dữ liệu.

### 2.3 Khi nào cần thêm segment?

- Cùng một pattern UI xuất hiện **hai lần** trên một page: thêm suffix rõ nghĩa:

  - `site.home.ctaPrimary`
  - `site.home.ctaSecondary`

- Cấu hình **theo entity động** (ví dụ từng landing riêng): có thể mở rộng (cân nhắc kỹ vì key dài):

  - `site.landing.summer2026.hero`  
  Hoặc tách bảng riêng cho entity động; `settings` chỉ giữ các khối tĩnh.

---

## 3) Quy ước `version` (schema evolution)

### 3.1 Ý nghĩa

`version` trả lời câu hỏi: **“Dữ liệu row này đang theo cấu trúc nào?”**

- Khi đổi UI làm đổi shape JSON, tăng `value.version` và có handler migrate.
- API đọc row cũ phải normalize lên schema hiện tại trước khi trả cho UI.

### 3.2 Quy ước tăng version

- Dùng số nguyên tăng dần: `1`, `2`, `3`, ...
- Version nằm trong `value.version`.
- Chỉ tăng version khi thay đổi cấu trúc dữ liệu (thêm/xóa/đổi nghĩa field), không tăng cho thay đổi text thuần.

### 3.3 Handler migrate trong code

Mỗi `key` có thể có hàm migrate, ví dụ:

- `migrate(value): LatestValue`
- `switch (value.version)` -> transform từng bước lên latest.

---

## 4) Registry trong code: cấu trúc gợi ý

Mỗi entry registry (một card tương ứng một row DB) nên có tối thiểu:

| Field | Mục đích |
|-------|----------|
| `key` | Trùng với PK trong DB. |
| `groupId` | **Nhóm route admin** — cùng giá trị với key trong `GROUP_KEYS` (ví dụ `site:home`). |
| `defaultValue` | Factory / JSON mặc định khi bootstrap (gồm `cardMeta`, `version`, …). |
| `formConfig` | Dynamic form; validation derive từ đây (ví dụ `createDynamicFormSchema`). |
| `migrate` | Hàm nâng dữ liệu từ version cũ lên version mới. |
| `latestVersion` | Phiên bản mới nhất hỗ trợ. |

**Thứ tự card** trên trang nhóm: lấy từ thứ tự phần tử trong **`GROUP_KEYS[groupId]`**, không cần field `order` trong registry row. **Tiêu đề/mô tả card** lưu trong **`value.cardMeta`** (DB), không bắt buộc field riêng trên registry ngoài default trong `defaultValue`.

**Ví dụ phân nhóm:**

- Route `/admin/settings/[groupId]` — `keys = GROUP_KEYS[groupId]`.

### 4.1 Tra cứu nhanh trong code

- Map theo `key`: `registryByKey.get(key)` rồi dùng `migrate` + `formConfig` của entry đó.
- Danh sách key cho trang: `GROUP_KEYS[groupId]` (thứ tự đã định nghĩa sẵn).

---

## 5) Bảng ví dụ

| `key` | `latestVersion` | `groupId` (registry + `GROUP_KEYS`) | Ghi chú |
|-------|------------------|--------------------------------------|---------|
| `site.home.hero` | `2` | `site:home` | Hero trang chủ |
| `site.home.featuredProjects` | `1` | `site:home` | Khối project nổi bật |
| `site.about.hero` | `1` | `site:about` | Hero trang about |
| `site.global.footer` | `3` | `site:global` | Chân trang toàn site |
| `site.global.seoDefaults` | `1` | `site:global` | SEO mặc định |

---

## 6) API và bootstrap (nhắc lại ngắn)

- `GET /admin/settings?keys=...` với keys lấy từ **`GROUP_KEYS[groupId]`** cho trang admin hiện tại.
- Backend `ensureSettingsByKeys(keys)` tạo row thiếu theo default trong registry.
- `PUT /admin/settings/:key` chỉ cập nhật một card; `key` trong URL phải khớp registry.

---

## 7) Checklist khi thêm page settings mới

1. Chọn `groupId` và route `/admin/settings/[groupId]`.
2. Liệt kê từng khối → gán `key` theo `{scope}.{pageId}.{sectionId}`.
3. Thêm `key` vào mảng **`GROUP_KEYS[groupId]`** (thứ tự = thứ tự card).
4. Định nghĩa `defaultValue` (có `cardMeta`, `version`) + `formConfig` + migrate handler trong registry.
5. Không hardcode danh sách key rải rác ngoài `GROUP_KEYS` + registry.

---

## 8) Tóm tắt

- **`key`**: định danh **instance** theo không gian site (page + section), **duy nhất**, **ổn định**, dạng `scope.page.section`.
- **`version`**: quản lý tiến hóa cấu trúc dữ liệu ngay trong `value`, phù hợp khi đổi UI dẫn tới đổi shape JSON.
- **Nhóm màn hình admin** dùng **`groupId` + `GROUP_KEYS`**, không cần thêm cột `type`.

Quy ước này giữ DB gọn một bảng, scale được nhiều page/card, đồng thời tách rõ “đặt chỗ trên site” (`key`) và “phiên bản cấu trúc dữ liệu” (`value.version`).
