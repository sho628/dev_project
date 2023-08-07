import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [user_name, setUserName] = useState('');
  const [user_login_id, setUserLoginId] = useState('');
  const [user_password, setUserPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    setError(null); // 이전 오류 초기화

    // 회원가입 요청 보내기
    axios
      .post('http://15.164.253.191:3000/auth', { user_name, user_login_id, user_password })
      .then((response) => {
        console.log('회원가입 성공:', response.data);
        // 회원가입 성공 시, 처리를 하시면 됩니다.
      })
      .catch((error) => {
        console.error('회원가입 실패:', error);
        setError(error.response.data.message); // 오류 메시지 저장
      });
  };

  return (
    <div>
      <h2>회원가입</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>} {/* 오류 메시지 출력 */}
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="user_name">이름:</label>
          <input
            type="text"
            id="user_name"
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="user_login_id">아이디:</label>
          <input
            type="text"
            id="user_login_id"
            value={user_login_id}
            onChange={(e) => setUserLoginId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="user_password">비밀번호:</label>
          <input
            type="password"
            id="user_password"
            value={user_password}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};
export default SignUp;