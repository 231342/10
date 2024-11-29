import React from "react";
import "./signup.css"; // CSS 파일을 임포트

const Signup = () => {
    const handleRedirect = (url) => {
        window.location.href = url;
    };

    return (
        <div className="container">
            <h1>회원가입</h1>
            <div className="option-container">
                {/* 관리자용 회원가입 옵션 */}
                <div
                    className="option"
                    onClick={() => handleRedirect("admin_signup.jsx")}
                >
                    <i className="fas fa-user-tie"></i>
                    <span>관리자용</span>
                </div>
                {/* 일반회원용 회원가입 옵션 */}
                <div
                    className="option"
                    onClick={() => handleRedirect("user_signup.jsx")}
                >
                    <i className="fas fa-user"></i>
                    <span>일반회원</span>
                </div>
            </div>
            <p>
                로그인 하시겠습니까?{" "}
                <a href="login1.jsx" className="link">
                    로그인
                </a>
            </p>
            <p>
                비밀번호를 잃어버렸습니까?{" "}
                <a href="reset_password.jsx" className="link">
                    비밀번호 재설정
                </a>
            </p>
        </div>
    );
};

export default Signup;
