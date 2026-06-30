# Community Platform

> 자유롭게 글을 쓰고 소통하는 커뮤니티 플랫폼

<!-- 메인 페이지 스크린샷 -->

---

## 🛠 기술 스택

| 구분 | 기술 |
|---|---|
| **Frontend** | React 19, React Router DOM, Axios |
| **Backend** | Spring Boot 4.0, Spring Security, JWT |
| **Database** | MySQL 8.0, Spring Data JPA |
| **Style** | CSS Variables 기반 디자인 시스템 |

---

## ✨ 주요 기능

| 기능 | 설명 |
|---|---|
| 🔐 인증 | 회원가입 / 로그인 / JWT 기반 인증 |
| 📝 게시글 | 작성 / 수정 / 삭제 (본인 글만) |
| 💬 댓글 | 작성 / 수정 / 삭제 (본인 댓글만) |
| 🔍 검색 | 제목 / 내용으로 글 검색 |
| 📄 페이지네이션 | 글 목록 10개씩 페이지 분리 |

---

## 📸 스크린샷

### 메인 페이지
<!-- 메인 페이지 스크린샷 -->

### 글 목록
<!-- 글 목록 스크린샷 -->

### 글 상세 / 댓글
<!-- 글 상세 스크린샷 -->

### 로그인 / 회원가입
<!-- 로그인 스크린샷 -->

---

## 🚀 시작하기

### 사전 준비

> ✅ Java 17 &nbsp; ✅ Node.js 18+ &nbsp; ✅ MySQL 8.0+

### 1. DB 생성

```sql
CREATE DATABASE community_platform;
```

### 2. 백엔드 설정

`backend/src/main/resources/application.properties` 수정:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/community_platform
spring.datasource.username=root
spring.datasource.password=your_password

jwt.secret=your_jwt_secret_key_must_be_at_least_32_characters
jwt.expiration=86400000
```

### 3. 백엔드 실행

```bash
cd backend
./gradlew bootRun
```

서버가 뜨면 `http://localhost:8080` 에서 확인 가능

### 4. 프론트엔드 실행

```bash
cd frontend
npm install
npm start
```

브라우저에서 `http://localhost:3000` 접속

---

## 📁 프로젝트 구조

    community-platform/

    ├── 📂 backend/
    │   └── src/main/java/com/example/first/project/
    │       ├── 📂 api/          # REST 컨트롤러
    │       ├── 📂 config/       # Security / CORS 설정
    │       ├── 📂 dto/          # 데이터 전송 객체
    │       ├── 📂 entity/       # JPA 엔티티 (Article, Comment, User)
    │       ├── 📂 filter/       # JWT 검증 필터
    │       ├── 📂 repository/   # DB 접근 (Spring Data JPA)
    │       ├── 📂 service/      # 비즈니스 로직
    │       └── 📂 util/         # JWT 유틸
    └── 📂 frontend/
    └── src/
    ├── 📂 api/          # axios 인스턴스 및 API 함수
    ├── 📂 components/   # React 컴포넌트
    │   ├── 📂 articles/ # 글 관련 (Index, Show, New, Edit)
    │   ├── 📂 auth/     # 인증 (Login, Register)
    │   ├── 📂 comments/ # 댓글 (Comments, List, New)
    │   └── 📂 layout/   # 공통 (Navbar, Footer)
    ├── 📂 context/      # 전역 상태 (AuthContext)
    └── 📂 styles/       # CSS 파일

---

## 🔐 인증 흐름

                ┌─────────────┐
                │   클라이언트  │
                └──────┬──────┘
                       │
          ┌────────────┼────────────┐
          │            │            │
    회원가입         로그인        이후 요청
          │            │            │
    POST /api/auth/  POST /api/auth/  Authorization:
    register         login        Bearer <token>
        │            │          │
        │         JWT 발급       │
        │            │      JWT 검증 필터
        └────────────┴──────────┘
                    │
                ┌──────▼──────┐
                │   MySQL DB  │
                └─────────────┘

---

## 🌐 API 엔드포인트

### 인증

| Method | URL | 설명 | 인증 필요 |
|---|---|---|---|
| POST | `/api/auth/register` | 회원가입 | ❌ |
| POST | `/api/auth/login` | 로그인 | ❌ |

### 게시글

| Method | URL | 설명 | 인증 필요 |
|---|---|---|---|
| GET | `/api/articles` | 글 목록 (페이지네이션) | ❌ |
| GET | `/api/articles/{id}` | 글 상세 | ❌ |
| GET | `/api/articles/search?keyword=` | 글 검색 | ❌ |
| POST | `/api/articles` | 글 작성 | ✅ |
| PATCH | `/api/articles/{id}` | 글 수정 | ✅ 본인만 |
| DELETE | `/api/articles/{id}` | 글 삭제 | ✅ 본인만 |

### 댓글

| Method | URL | 설명 | 인증 필요 |
|---|---|---|---|
| GET | `/api/articles/{id}/comments` | 댓글 목록 | ❌ |
| POST | `/api/articles/{id}/comments` | 댓글 작성 | ✅ |
| PATCH | `/api/comments/{id}` | 댓글 수정 | ✅ 본인만 |
| DELETE | `/api/comments/{id}` | 댓글 삭제 | ✅ 본인만 |