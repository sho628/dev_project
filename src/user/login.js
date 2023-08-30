import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [user_login_id, setUsername] = useState('');
  const [user_password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 요청 보내기
    axios
      .post('http://43.200.212.12:5000/auth/token', { user_login_id, user_password })
      .then((response) => {
        console.log('로그인 성공:', response.data);
        // 로그인 성공 시, 토큰 저장 등의 처리를 하시면 됩니다.
      })
      .catch((error) => {
        console.error('로그인 실패:', error.response.data);
        // 로그인 실패 시, 오류 처리를 하시면 됩니다.
      });
  };

  return (
    <div>
      <h2>Login 페이지</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="user_login_id">아이디:</label>
          <input
            type="text"
            id="user_login_id"
            value={user_login_id}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="user_password">비밀번호:</label>
          <input
            type="password"
            id="user_password"
            value={user_password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;