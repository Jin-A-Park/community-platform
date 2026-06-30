import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/auth';
import '../../styles/Auth.css';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    if (username.length < 3) return '아이디는 3자 이상이어야 합니다.';
    if (password.length < 8) return '비밀번호는 8자 이상이어야 합니다.';
    if (!/[A-Za-z]/.test(password)) return '비밀번호에 영문자가 포함되어야 합니다.';
    if (!/[0-9]/.test(password)) return '비밀번호에 숫자가 포함되어야 합니다.';
    if (password !== passwordConfirm) return '비밀번호가 일치하지 않습니다.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validate();
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    try {
      await register(username, password);
      navigate('/login');
    } catch (err) {
      setError('이미 존재하는 아이디입니다.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">회원가입</h2>
        <p className="auth-subtitle">계정을 만들고 커뮤니티에 참여하세요</p>
        {error && <p className="auth-error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label className="auth-label">아이디</label>
            <input className="auth-input" placeholder="3자 이상 입력하세요" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="auth-field">
            <label className="auth-label">비밀번호</label>
            <input className="auth-input" type="password" placeholder="영문+숫자 8자 이상" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="auth-field">
            <label className="auth-label">비밀번호 확인</label>
            <input className="auth-input" type="password" placeholder="비밀번호를 다시 입력하세요" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
          </div>
          <button type="submit" className="auth-btn">회원가입</button>
        </form>
        <p className="auth-footer">
          이미 계정이 있으신가요? <span className="auth-link" onClick={() => navigate('/login')}>로그인</span>
        </p>
      </div>
    </div>
  );
}

export default Register;