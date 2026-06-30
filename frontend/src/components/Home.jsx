import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <h1 className="home-title">Community Platform</h1>
      <p className="home-subtitle">
        자유롭게 글을 쓰고 소통하는 공간입니다.
      </p>
      <div className="home-buttons">
        <button className="home-btn home-btn-primary" onClick={() => navigate('/login')}>로그인</button>
        <button className="home-btn home-btn-secondary" onClick={() => navigate('/register')}>회원가입</button>
        <button className="home-btn home-btn-ghost" onClick={() => navigate('/articles')}>글 목록 보기</button>
      </div>
    </div>
  );
}

export default Home;