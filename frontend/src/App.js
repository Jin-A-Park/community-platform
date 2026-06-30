import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import ArticleShow from './components/articles/Show';
import ArticleNew from './components/articles/New';
import ArticleIndex from './components/articles/Index';
import ArticleEdit from './components/articles/Edit';

import Comments from './components/comments/Comments';

import { AuthProvider } from './context/AuthContext';

{
  /*
  const article = {id: 1, title: "제목_1", content: "내용_1"};

  const commentDtos = [
    { id: 1, nickname: "홍길동", body: "첫 번째 댓글입니다!", articleId: 1 },
    { id: 2, nickname: "김철수", body: "두 번째 댓글이에요.", articleId: 1 },
    { id: 3, nickname: "이영희", body: "세 번째 댓글 ㅎㅎ", articleId: 1 }
  ];
  */
}


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/articles" element={<ArticleIndex/>} />
            <Route path="/articles/new" element={<ArticleNew/>} />
            <Route path="/articles/:id" element={<ArticleShow/>} />
            <Route path="/articles/:id/edit" element={<ArticleEdit/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      {/*
        <Show article={article} commentDtos={commentDtos} />
        <New />
        <Index articleList={[article]} />
        <Edit article={article} />
        <Comments articleId={article.id} commentDtos={commentDtos} />
      */}
    </>
  );
}

export default App;
