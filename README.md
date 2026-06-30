<div align="center">

# 🏘️ Community Platform

**A full-stack community platform built with Spring Boot & React**

![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

<br/>

> A full-stack community platform featuring JWT-based authentication, post & comment CRUD, search, pagination, and a decoupled React frontend.

<br/>

<img width="1901" height="822" alt="스크린샷 2026-06-30 175848" src="https://github.com/user-attachments/assets/df4a7a69-169e-461f-b739-9d965f0c3c92" />


</div>

---

## ✨ Features

- 🔐 **Authentication** — Sign up / Login with JWT-based auth
- 📝 **Post CRUD** — Create, read, update, and delete posts (author-only edit/delete)
- 💬 **Comments** — Write, edit, and delete comments (author-only edit/delete)
- 🔍 **Search** — Search posts by title or content
- 📄 **Pagination** — Post list paginated 10 items per page
- 🔗 **REST API** — RESTful API design

---

## 📸 Screenshots

<div align="center">

| Post List | Post Detail / Comments | New Post |
|:---:|:---:|:---:|
| <img  width="260" alt="2" src="https://github.com/user-attachments/assets/2380ff7e-1242-4b84-aaa3-7e94e839f721" /> | <img  width="260" alt="3" src="https://github.com/user-attachments/assets/3f00d0b7-5a6e-40b8-9721-cf041bda907b" /> | <img  width="260" alt="4" src="https://github.com/user-attachments/assets/bad5e328-7463-4563-8a88-16c0a3693fd1" /> |

</div>

---

## 🛠️ Tech Stack

| Category | Technology |
|:---:|:---|
| **Frontend** | React 19, React Router DOM, Axios |
| **Backend** | Spring Boot 4.0, Spring Security, JWT |
| **Database** | MySQL 8.0, Spring Data JPA |
| **Style** | CSS Variables-based design system |
| **Build** | Gradle |
| **Language** | Java |

---

## 🗂️ Project Structure

```text
community-platform/
├── backend/
│   └── src/main/java/com/example/first/project/
│       ├── api/          # REST Controllers
│       ├── config/       # Security / CORS config
│       ├── dto/          # Data Transfer Objects
│       ├── entity/       # JPA Entities (Article, Comment, User)
│       ├── filter/       # JWT verification filter
│       ├── repository/   # Spring Data JPA Repositories
│       ├── service/      # Business logic
│       └── util/         # JWT utilities
└── frontend/
    └── src/
        ├── api/          # Axios instance & API functions
        ├── components/
        │   ├── articles/ # Article components (Index, Show, New, Edit)
        │   ├── auth/     # Auth (Login, Register)
        │   ├── comments/ # Comment components (Comments, List, New)
        │   └── layout/   # Navbar, Footer
        ├── context/      # Global state (AuthContext)
        └── styles/       # CSS files
```

---

## ⚙️ Getting Started

### Prerequisites

> ✅ Java 17 &nbsp; ✅ Node.js 18+ &nbsp; ✅ MySQL 8.0+

### 1. Clone the Repository

```bash
git clone https://github.com/Jin-A-Park/community-platform.git
cd community-platform
```

### 2. Create the Database

```sql
CREATE DATABASE community_platform;
```

### 3. Configure the Backend

Edit `backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/community_platform
spring.datasource.username=root
spring.datasource.password=your_password

jwt.secret=your_jwt_secret_key_must_be_at_least_32_characters
jwt.expiration=86400000
```

### 4. Run the Backend

```bash
cd backend
./gradlew bootRun
```

### 5. Run the Frontend

```bash
cd frontend
npm install
npm start
```

### 6. Open in Browser

Frontend: http://localhost:3000

Backend: http://localhost:8080

---

## 🔐 Auth Flow

```text
                    ┌─────────────┐
                    │    Client   │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
          Register        Login    Subsequent
              │            │        requests
    POST /api/auth/  POST /api/auth/  Authorization:
       register         login        Bearer <token>
              │            │            │
              │      JWT issued         │
              │            │      JWT verify filter
              └────────────┴────────────┘
                           │
                    ┌──────▼──────┐
                    │   MySQL DB  │
                    └─────────────┘
```

---

## 📡 API Endpoints

### Auth

| Method | URL | Description | Auth Required |
|:---:|:---|:---|:---:|
| `POST` | `/api/auth/register` | Sign up | ❌ |
| `POST` | `/api/auth/login` | Log in | ❌ |

### Posts

| Method | URL | Description | Auth Required |
|:---:|:---|:---|:---:|
| `GET` | `/api/articles` | Get paginated post list | ❌ |
| `GET` | `/api/articles/{id}` | Get a single post | ❌ |
| `GET` | `/api/articles/search?keyword=` | Search posts | ❌ |
| `POST` | `/api/articles` | Create a post | ✅ |
| `PATCH` | `/api/articles/{id}` | Update a post | ✅ Author only |
| `DELETE` | `/api/articles/{id}` | Delete a post | ✅ Author only |

### Comments

| Method | URL | Description | Auth Required |
|:---:|:---|:---|:---:|
| `GET` | `/api/articles/{id}/comments` | Get comments for a post | ❌ |
| `POST` | `/api/articles/{id}/comments` | Create a comment | ✅ |
| `PATCH` | `/api/comments/{id}` | Update a comment | ✅ Author only |
| `DELETE` | `/api/comments/{id}` | Delete a comment | ✅ Author only |

---

## 📚 What I Learned

- [x] Spring Boot project structure & MVC pattern
- [x] CRUD operations with Spring Data JPA
- [x] REST API design and implementation
- [x] Entity relationship mapping (1:N)
- [x] JWT-based authentication & Spring Security
- [x] React component architecture & React Router
- [x] Global state management with Context API
- [x] Search & pagination implementation
- [x] Axios-based API integration (GET, POST, PATCH, DELETE)
- [ ] OAuth2 social login
- [ ] Refresh token rotation
- [ ] Docker deployment

---

<div align="center">

Made with ☕ & ⚛️

</div>
