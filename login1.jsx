import React from "react";
import "./login1.css"; // CSS 파일을 임포트

const Login1 = () => {
    const handleRedirect = (url) => {
        window.location.href = url;
    };

    return (
        <div className="container">
            <h1>로그인</h1>
            <div className="login-options">
                {/* 관리자 로그인 버튼 */}
                <div
                    className="login-option"
                    onClick={() => handleRedirect("admin_login.html")}
                >
                    <i className="fas fa-user-tie icon"></i>
                    <span className="text">관리자용</span>
                </div>
                {/* 일반회원 로그인 버튼 */}
                <div
                    className="login-option"
                    onClick={() => handleRedirect("user_login.html")}
                >
                    <i className="fas fa-user icon"></i>
                    <span className="text">일반회원</span>
                </div>
            </div>
            <p className="p-text">
                계정이 없습니까?{" "}
                <a href="signup1.html" className="link">
                    회원가입
                </a>
            </p>
            <p className="p-text">
                비밀번호를 잃어버렸습니까?{" "}
                <a href="reset_password.html" className="link">
                    비밀번호 재설정
                </a>
            </p>
        </div>
    );
};

export default Login1;
