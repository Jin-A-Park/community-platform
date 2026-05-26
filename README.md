<div align="center">

# 📋 Board Project

**A bulletin board web application built with Spring Boot**

![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![H2](https://img.shields.io/badge/H2_Database-004088?style=for-the-badge&logo=h2&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

<br/>

> A full-stack board project featuring post creation, viewing, editing, deletion, and comment functionality.

</div>

---

## 📸 Screenshots

| Board List |
|:---:|
| <img width="1204" height="817" alt="image" src="https://github.com/user-attachments/assets/59c19bea-2c3f-4477-a34c-122f9e18052c" /> |

> Available at `localhost:8080/articles`

---

## ✨ Features

- 📝 **Post CRUD** — Create, read, update, and delete posts
- 💬 **Comments** — Write and view comments on each post
- 🔗 **REST API** — RESTful API design
- 🗄️ **H2 In-Memory DB** — Embedded database for development
- 🌐 **Thymeleaf Templates** — Server-side rendering

---

## 🛠️ Tech Stack

| Category | Technology |
|:---:|:---|
| **Backend** | Spring Boot, Spring MVC, Spring Data JPA |
| **Database** | H2 (In-Memory), Hibernate |
| **Frontend** | Thymeleaf, Bootstrap 5 |
| **Build** | Gradle |
| **Language** | Java 20 |

---

## 🗂️ Project Structure

```text
first-project/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/firstproject/
│       │       ├── controller/       # MVC Controllers & REST API
│       │       ├── dto/              # Data Transfer Objects
│       │       ├── entity/           # JPA Entities (Article, Comment)
│       │       ├── repository/       # Spring Data JPA Repositories
│       │       └── service/          # Business Logic
│       └── resources/
│           ├── templates/            # Thymeleaf HTML Templates
│           ├── static/               # CSS, JS, Images
│           ├── application.properties
│           └── data.sql              # Initial Data
└── build.gradle
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/{username}/first-project.git
cd first-project
```

### 2. Run the Application

```bash
./gradlew bootRun
```

### 3. Open in Browser

http://localhost:8080/articles
> H2 Console: `http://localhost:8080/h2-console`  
> JDBC URL: `jdbc:h2:mem:testdb`

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

Concepts covered through this project:

- [x] Understanding Spring Boot project structure
- [x] Applying the MVC pattern
- [x] CRUD operations with Spring Data JPA
- [x] REST API design and implementation
- [x] Entity relationship mapping (1:N)
- [x] View rendering with Thymeleaf
- [ ] Exception Handling
- [ ] Transaction Management

---

<div align="center">

Made with ☕ & 🌱 Spring Boot

</div>
