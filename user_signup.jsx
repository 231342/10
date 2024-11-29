import React from "react";
import "./user_signup.css"; // CSS 파일을 임포트

const UserSignup = () => {
    return (
        <div className="container">
            <h1>일반회원 회원가입</h1>
            <form>
                <input type="email" placeholder="Email" required className="input" />
                <input type="password" placeholder="Password" required className="input" />
                <button type="submit" className="button">
                    회원가입
                </button>
            </form>
            <p className="text">
                로그인 하시겠습니까? <a href="login1.jsx" className="link">로그인</a>
            </p>
            <p className="text">
                비밀번호를 잃어버렸습니까? <a href="reset_password.jsx" className="link">비밀번호 재설정</a>
            </p>
        </div>
    );
};

export default UserSignup;
