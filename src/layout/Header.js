import React from 'react';
import './layout.css';

const Header = () => {
  return (
    <header>
        <div>
            <div>
                <div>로고넣기</div>
            </div>

            <div>
                <form>
                    <input type="search" value="" placeholder=""/>
                    <button type="button" class="sch_btn">검색</button>
                    <div class="find_sch rank" id="searchPreviewDiv">
                    </div>
                    <div class="find_sch last_sch">
                    </div>
                </form>
            </div>

            <div>
                <a href="/"><i>채팅내역</i></a>
                <a href="/">
                    <strong>3초 간편 로그인</strong>
                </a>
                <a href="/">탐정 가입</a> | <a href="/">제휴 문의</a>
            </div>

            <div className="container">
                <ul className="menu-list">
                    <li><a href="/">홈</a></li>
                    <li><a href="/">탐정</a></li>
                    <li><a href="/">사건의뢰</a></li>
                    <li><a href="/">상담사례</a></li>
                    <li><a href="/">해결사례</a></li>
                    <li><a href="/">법률가이드</a></li>
                    <li><a href="/">커뮤니티</a></li>
                </ul>
            </div>
        </div>
    </header>
  );
};

export default Header;
