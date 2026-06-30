import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../styles/Layout.css';

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <span className="navbar-brand" onClick={() => navigate('/')}>
        Community Platform
      </span>
      <div className="navbar-menu">
        {isLoggedIn ? (
          <>
            <button className="nav-btn nav-btn-ghost" onClick={() => navigate('/articles')}>글 목록</button>
            <button className="nav-btn nav-btn-ghost" onClick={() => navigate('/articles/new')}>글쓰기</button>
            <button className="nav-btn nav-btn-primary" onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <>
            <button className="nav-btn nav-btn-ghost" onClick={() => navigate('/login')}>로그인</button>
            <button className="nav-btn nav-btn-primary" onClick={() => navigate('/register')}>회원가입</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;