import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [user_login_id, setUsername] = useState('');
  const [user_password, setPassword] = useState('');

  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 요청 보내기
    axios
      .post('http://43.200.212.12:5000/auth/token', { user_login_id, user_password })
      .then((response) => {
        document.location.href = '/'
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          if (error.response.data.code === 1000) {
            setError('회원정보가 없습니다.');
          } else if (error.response.data.code === 1001) {
            setError('잘못된 이메일 형식입니다.');
          } else if (error.response.data.code === 1002) {
            setError('잘못된 비밀번호 형식입니다.');
          }
        } else {
          // 오류 객체에 response 속성이 없는 경우에 대한 처리
          console.error('서버 응답 오류:', error);
          setError('서버 응답 오류가 발생했습니다.');
        }
      });
  };

  return (
    <div>
      <form class="login-form" onSubmit={handleLogin}>
        <h2>
          <span class="entypo-login">
            <i class="fa fa-sign-in"></i>
          </span>로그인
        </h2>
        <button class="login-button">
          <span class="entypo-lock">
            <i class="fa fa-lock"></i>
          </span>
        </button>
        <span class="entypo-user inputUserIcon">
          <i class="fa fa-user"></i>
        </span>
        <input class="login-input"
          type="text"
          id="user_login_id"
          value={user_login_id}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="이메일 입력하세요"
        />
        <span class="entypo-key inputPassIcon">
          <i class="fa fa-key"></i>
        </span>
        <input class="login-input"
          type="password"
          id="user_password"
          value={user_password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
        <a class="signup-button" href="./signup">회원가입</a>
        {error && <div class="error" style={{ color: 'red' }}>{error}</div>}
      </form>
    </div >
  );
};

export default Login;