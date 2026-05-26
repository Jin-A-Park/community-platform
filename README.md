<div align="center">

# 📋 게시판 프로젝트

**Spring Boot로 만든 게시판 웹 애플리케이션**

![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![H2](https://img.shields.io/badge/H2_Database-004088?style=for-the-badge&logo=h2&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

<br/>

> 게시글 작성 · 조회 · 수정 · 삭제와 댓글 기능을 갖춘 풀스택 게시판 프로젝트입니다.

</div>

---

## 📸 화면 미리보기

| 게시판 목록 |
|:---:|
| <img width="1204" height="817" alt="image" src="https://github.com/user-attachments/assets/59c19bea-2c3f-4477-a34c-122f9e18052c" /> |

> `localhost:8080/articles` 에서 확인 가능합니다.

---

## ✨ 주요 기능

- 📝 **게시글 CRUD** — 게시글 작성, 조회, 수정, 삭제
- 💬 **댓글 기능** — 각 게시글에 댓글 작성 및 조회
- 🔗 **REST API** — RESTful 방식의 API 설계
- 🗄️ **H2 인메모리 DB** — 개발 환경용 내장 데이터베이스
- 🌐 **Thymeleaf 템플릿** — 서버사이드 렌더링

---

## 🛠️ 기술 스택

| 구분 | 기술 |
|:---:|:---|
| **Backend** | Spring Boot, Spring MVC, Spring Data JPA |
| **Database** | H2 (In-Memory), Hibernate |
| **Frontend** | Thymeleaf, Bootstrap 5 |
| **Build** | Gradle |
| **Language** | Java 20 |

---

## 🗂️ 프로젝트 구조

```
first-project/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/firstproject/
│       │       ├── controller/       # MVC 컨트롤러 & REST API
│       │       ├── dto/              # 데이터 전송 객체
│       │       ├── entity/           # JPA 엔티티 (Article, Comment)
│       │       ├── repository/       # Spring Data JPA 레포지토리
│       │       └── service/          # 비즈니스 로직
│       └── resources/
│           ├── templates/            # Thymeleaf HTML 템플릿
│           ├── static/               # CSS, JS, 이미지
│           ├── application.properties
│           └── data.sql              # 초기 데이터
└── build.gradle
```

---

## ⚙️ 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/{username}/first-project.git
cd first-project
```

### 2. 애플리케이션 실행

```bash
./gradlew bootRun
```

### 3. 브라우저 접속

```
http://localhost:8080/articles
```

> H2 콘솔: `http://localhost:8080/h2-console`
> JDBC URL: `jdbc:h2:mem:testdb`

---

## 📡 API 엔드포인트

| Method | URL | 설명 |
|:---:|:---|:---|
| `GET` | `/articles` | 게시글 목록 조회 |
| `GET` | `/articles/{id}` | 게시글 단건 조회 |
| `POST` | `/articles` | 게시글 생성 |
| `PATCH` | `/articles/{id}` | 게시글 수정 |
| `DELETE` | `/articles/{id}` | 게시글 삭제 |
| `GET` | `/api/articles/{id}/comments` | 댓글 목록 조회 |
| `POST` | `/api/articles/{id}/comments` | 댓글 생성 |
| `DELETE` | `/api/comments/{id}` | 댓글 삭제 |

---

## 🗃️ 데이터베이스 ERD

```
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

## 📚 학습 내용

이 프로젝트를 통해 학습한 개념들입니다.

- [x] Spring Boot 프로젝트 구조 이해
- [x] MVC 패턴 적용
- [x] Spring Data JPA를 이용한 CRUD
- [x] REST API 설계 및 구현
- [x] 엔티티 간 연관관계 매핑 (1:N)
- [x] Thymeleaf를 이용한 뷰 렌더링
- [ ] 예외 처리 (Exception Handling)
- [ ] 트랜잭션 처리

---

<div align="center">

Made with ☕ & 🌱 Spring Boot

</div>
