import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 요청 보내기
    axios
      .post('http://your-api-endpoint/login', { username, password })
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
          <label htmlFor="username">아이디:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;