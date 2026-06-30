import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <span className="home-badge">✦ Open Community</span>
        <h1 className="home-title">
          The place where<br />
          <span className="home-title-accent">ideas meet.</span>
        </h1>
        <p className="home-subtitle">
          글을 쓰고, 댓글로 소통하고, 생각을 나눠보세요.
        </p>
        <div className="home-buttons">
          <button className="home-btn home-btn-primary" onClick={() => navigate('/register')}>시작하기 →</button>
          <button className="home-btn home-btn-ghost" onClick={() => navigate('/articles')}>글 둘러보기</button>
        </div>
      </div>

      <div className="home-features">
        <div className="home-feature-card">
          <span className="home-feature-icon">📝</span>
          <div className="home-feature-title">Write</div>
          <div className="home-feature-desc">자유롭게 글을 쓰고 공유하세요</div>
        </div>
        <div className="home-feature-card">
          <span className="home-feature-icon">💬</span>
          <div className="home-feature-title">Connect</div>
          <div className="home-feature-desc">댓글로 다양한 의견을 나눠보세요</div>
        </div>
        <div className="home-feature-card">
          <span className="home-feature-icon">🔍</span>
          <div className="home-feature-title">Discover</div>
          <div className="home-feature-desc">원하는 글을 빠르게 찾아보세요</div>
        </div>
      </div>
    </div>
  );
}

export default Home;