import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  //초기값
  const [user_name, setUserName] = useState('');
  const [user_login_id, setUserLoginId] = useState('');
  const [user_password, setUserPassword] = useState('');

  //오류 메시지
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 이메일 유효성 검사 함수
  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  // 비밀번호 유효성 검사 함수
  const isPasswordValid = (password) => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordPattern.test(password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // 이메일 빈 값 체크
    if (user_name.trim() === '') {
      setNameError('이름을 입력하세요.');
      return;
    } else {
      setNameError(''); // 이메일 오류가 해결된 경우 오류 메시지를 비웁니다.
    }

    if (user_login_id.trim() === '') {
      setEmailError('이메일 입력하세요.');
      return;
    } else {
      setEmailError(''); // 이메일 오류가 해결된 경우 오류 메시지를 비웁니다.
    }
    // 이메일 유효성 검사
    if (!isEmailValid(user_login_id)) {
      setEmailError('올바른 이메일 주소를 입력하세요.');
      return;
    } else {
      setEmailError(''); // 이메일 오류가 해결된 경우 오류 메시지를 비웁니다.
    }

    if (user_password.trim() === '') {
      setPasswordError('비밀번호를 입력하세요.');
      return;
    } else {
      setPasswordError(''); // 이메일 오류가 해결된 경우 오류 메시지를 비웁니다.
    }
    // 비밀번호 유효성 검사
    if (!isPasswordValid(user_password)) {
      setPasswordError('비밀번호는 최소 6자 이상, 영문, 숫자, 특수문자를 포함해야 합니다.');
      return;
    } else {
      setPasswordError(''); // 비밀번호 오류가 해결된 경우 오류 메시지를 비웁니다.
    }

    if (nameError || emailError || passwordError) {
      return;
    }

    axios
      .post('http://43.200.212.12:5000/auth/signup', {
        user_name,
        user_login_id,
        user_password,
      })
      .then((response) => {
        console.log('회원가입 성공:', response.data);
        document.location.href = '/'
      })
      .catch((error) => {
        console.error('회원가입 실패:', error.response.data);
      });
  };

  return (
    <div>
      <form class="login-form" onSubmit={handleSignUp}>
        <h2>
          <span class="entypo-login">
            <i class="fa fa-sign-in"></i>
          </span>회원가입
        </h2>
        <input class="login-input"
          type="text"
          id="user_name"
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        {nameError && <div class="error" style={{ color: 'red' }}>{nameError}</div>}
        <input class="login-input"
          type="text"
          id="user_login_id"
          value={user_login_id}
          onChange={(e) => setUserLoginId(e.target.value)}
          placeholder="이메일을 입력하세요"
        />
        {emailError && <div class="error" style={{ color: 'red' }}>{emailError}</div>}
        <input class="login-input"
          type="password"
          id="user_password"
          value={user_password}
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
        {passwordError && <div class="error" style={{ color: 'red' }}>{passwordError}</div>}
        <button class="user-button" type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;