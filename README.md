<div align="center">

# 🏘️ Community Platform

**A full-stack community platform built with Spring Boot & React**

![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![H2](https://img.shields.io/badge/H2_Database-004088?style=for-the-badge&logo=h2&logoColor=white)

<br/>

> A full-stack community platform featuring post CRUD, comment functionality, and a decoupled React frontend.

</div>

---

## ✨ Features

- 📝 **Post CRUD** — Create, read, update, and delete posts
- 💬 **Comments** — Write, edit, and delete comments on each post
- 🔗 **REST API** — RESTful API design
- 🗄️ **H2 In-Memory DB** — Embedded database for development
- ⚛️ **React SPA** — Decoupled frontend with React

---

## 🛠️ Tech Stack

| Category | Technology |
|:---:|:---|
| **Frontend** | React, Bootstrap 5, Google Fonts |
| **Backend** | Spring Boot, Spring MVC, Spring Data JPA |
| **Database** | H2 (In-Memory), Hibernate |
| **Build** | Gradle |
| **Language** | Java |

---

## 🗂️ Project Structure

```text
community-platform/
├── backend/
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/jinahub/
│           │       ├── controller/   # MVC Controllers & REST API
│           │       ├── dto/          # Data Transfer Objects
│           │       ├── entity/       # JPA Entities (Article, Comment)
│           │       ├── repository/   # Spring Data JPA Repositories
│           │       └── service/      # Business Logic
│           └── resources/
│               ├── templates/        # Mustache Templates
│               ├── application.properties
│               └── data.sql
└── frontend/
    └── src/
        ├── components/
        │   ├── articles/             # Article components
        │   ├── comments/             # Comment components
        │   ├── layout/               # Navbar, Footer
        │   └── common/               # Shared components
        └── styles/                   # CSS files
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Jin-A-Park/community-platform.git
cd community-platform
```

### 2. Run the Backend

```bash
cd backend
./gradlew bootRun
```

### 3. Run the Frontend

```bash
cd frontend
npm install
npm start
```

### 4. Open in Browser
Frontend:  http://localhost:3000

Backend:   http://localhost:8080/articles

H2 Console: http://localhost:8080/h2-console

---

## 📡 API Endpoints

| Method | URL | Description |
|:---:|:---|:---|
| `GET` | `/articles` | Get all posts |
| `GET` | `/articles/{id}` | Get a single post |
| `POST` | `/articles` | Create a post |
| `PATCH` | `/articles/{id}` | Update a post |
| `DELETE` | `/articles/{id}` | Delete a post |
| `GET` | `/api/articles/{id}/comments` | Get comments for a post |
| `POST` | `/api/articles/{id}/comments` | Create a comment |
| `PATCH` | `/api/comments/{id}` | Update a comment |
| `DELETE` | `/api/comments/{id}` | Delete a comment |

---

## 🗃️ Database ERD

```text
┌─────────────┐       ┌──────────────┐
│   article   │       │   comment    │
├─────────────┤       ├──────────────┤
│ id (PK)     │◄──┐   │ id (PK)      │
│ title       │   └───│ article_id   │
│ content     │       │ nickname     │
└─────────────┘       │ body         │
                      └──────────────┘
```

---

## 📚 What I Learned

- [x] Spring Boot project structure & MVC pattern
- [x] CRUD operations with Spring Data JPA
- [x] REST API design and implementation
- [x] Entity relationship mapping (1:N)
- [x] JSX conversion from Mustache templates
- [x] React component architecture
- [x] State management with useState
- [x] Fetch API for async communication (POST, PATCH, DELETE)
- [ ] React Router
- [ ] JWT Authentication
- [ ] Spring Security

---

<div align="center">

Made with ☕ & ⚛️

</div>