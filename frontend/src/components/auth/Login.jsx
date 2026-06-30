import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../../api/auth';
import { useAuth } from '../../context/AuthContext';
import '../../styles/Auth.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginApi(username, password);
      login(res.data.token);
      navigate('/articles');
    } catch (err) {
      setError('아이디 또는 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">로그인</h2>
        <p className="auth-subtitle">Community Platform에 오신 걸 환영합니다</p>
        {error && <p className="auth-error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label className="auth-label">아이디</label>
            <input className="auth-input" placeholder="아이디를 입력하세요" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="auth-field">
            <label className="auth-label">비밀번호</label>
            <input className="auth-input" type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="auth-btn">로그인</button>
        </form>
        <p className="auth-footer">
          계정이 없으신가요? <span className="auth-link" onClick={() => navigate('/register')}>회원가입</span>
        </p>
      </div>
    </div>
  );
}

export default Login;