export interface ProjectImage {
  url: string;
  title: string;
  subtitle: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  images: ProjectImage[];
  projectInfo: {
    status: string;
    timeline: string;
    technologies: string[];
  };
  content: string;
  demoUrl?: string;
  sourceUrl?: string;
  tags: string[];
}

export const mockProjectDetail: ProjectDetail = {
  id: "1",
  title: "Tên dự án",
  slug: "ten-du-an",
  description: "Một dòng mô tả ngắn gọn và hấp dẫn về dự án.",
  images: [
    {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      title: "Giao diện chính",
      subtitle: "Thiết kế chính c",
    },
    {
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      title: "Phân tích dữ liệu",
      subtitle: "Màn hình hiển thị thống kê và biểu đồ",
    },
    {
      url: "https://images.unsplash.com/photo-1661288378926-30c78e59560c?w=800&h=600&fit=crop",
      title: "Quản lý người dùng",
      subtitle: "Giao diện quản lý tài khoản và quyền truy cập",
    },
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      title: "Cài đặt hệ thống",
      subtitle: "Màn hình cấu hình và tùy chỉnh",
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      title: "Bảng điều khiển",
      subtitle: "Tổng quan về các hoạt động và trạng thái hệ thống",
    },
  ],
  projectInfo: {
    status: "Fullstack Developer",
    timeline: "Tháng 8, 2023 - Tháng 12, 2023",
    technologies: ["React", "Node.js", "Tailwind CSS", "PostgreSQL", "Docker"],
  },
  tags: ["React", "Node.js", "Tailwind CSS", "PostgreSQL", "Docker"],
  demoUrl: "https://example.com/demo",
  sourceUrl: "https://github.com/example/repo",
  content: `
Đây là một mô tả chi tiết về dự án, mình nói khá năng mà tên tôi sử dụng phong cách phát triển phần mềm dùng kỹ thuật và các công cụ hiện đại liên quan. Dự án có thể cải thiện năng lực để các công cụ sử dụng hiệu quả cùng cấp độ sử dụng.

### Tổng quan Kiến trúc

Hệ thống được thiết kế theo mô hình Microservices, đảm bảo tính linh hoạt và khả năng mở rộng cao.

![Architecture Diagram](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop)

### Frontend Layer

Sử dụng ReactJS kết hợp với Tailwind CSS để tạo giao diện đẹp và responsive.

![Frontend UI](https://images.unsplash.com/photo-1661288378926-30c78e59560c?w=800&h=400&fit=crop)

#### Quản lý State

##### Redux Toolkit

###### Middleware Custom

### Tài liệu tham khảo

Một thông tin chi tiết với API có thể được tìm thấy trong [Tài liệu kỹ thuật](https://example.com). Mã nguồn mở được chia sẻ trên [GitHub Repository](https://github.com/example).

### Trích dẫn

"Mục tiêu của thiết kế phải là dễ dàng cho các nhà phát triển sử dụng. Đó là chìa khóa định cao cấp tư tưởng về"

— Leonardo da Vinci (Phỏng tác)


### Các tính năng nổi bật

- *Real-time Data*: Đồng bộ dữ liệu người dùng theo thời gian thực sử dụng WebSocket.
- *Analytics Dashboard*: Hỗ trợ báo cáo và thống kê tử dùng việc bảo vệ.
- *Third-party Integration*: Tích hợp API thành viên với các bên để.

### Mã nguồn (Code Snippet)

\`\`\`javascript
const jwt = require('jsonwebtoken');
// Middleware xác thực
const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({ message: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send({ message: 'Unauthorized!' });
  }
};
\`\`\`

Quy trình phát triển tập trung vào trải nghiệm người dùng, đảm bảo hiệu suất cao và hỗ trợ đầy đủ. Các quy tắc giúp nhóm nhằng được thiết kế cho phía giám sát các yêu cầu chi tiết, giúp phối hợp tốt hơn trong quá trình phát triển.
images.unsplash.com
`,
};

export const mockProject2Details: ProjectDetail = {
  ...mockProjectDetail,
  id: "2",
  title: "Dự án Thứ hai ba tuwj aml fns lkms lkma;e ;lmv;ls",
  slug: "du-an-thu-hai",
  description:
    "Mô tả ngắn gọn về dự án thứ hai với các tính năng nổi bật và công nghệ sử dụng.",
};
