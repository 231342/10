import React from "react";
import "./user_login.css"; // CSS 파일을 임포트

const UserLogin = () => {
    return (
        <div className="container">
            <h1>일반회원 로그인</h1>
            <form>
                <input type="email" placeholder="Email" required className="input" />
                <input type="password" placeholder="Password" required className="input" />
                <button type="submit" className="button">
                    로그인
                </button>
            </form>
            <p className="text">
                계정이 없습니까? <a href="user_signup.html" className="link">회원가입</a>
            </p>
            <p className="text">
                비밀번호를 잃어버렸습니까? <a href="reset_password.html" className="link">비밀번호 재설정</a>
            </p>
        </div>
    );
};

export default UserLogin;
