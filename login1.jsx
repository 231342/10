import React from "react";
import { useNavigate } from "react-router-dom"; // React Router Hook
import "./login1.css"; // CSS 파일

const Login1 = () => {
    const navigate = useNavigate(); // 페이지 이동을 위한 Hook

    return (
        <div className="container">
            <h1>로그인</h1>
            <div className="login-options">
                {/* 관리자 로그인 버튼 */}
                <div
                    className="login-option"
                    onClick={() => navigate("/admin-login")}
                >
                    <i className="fas fa-user-tie icon"></i>
                    <span className="text">관리자용</span>
                </div>
                {/* 일반회원 로그인 버튼 */}
                <div
                    className="login-option"
                    onClick={() => navigate("/user-login")}
                >
                    <i className="fas fa-user icon"></i>
                    <span className="text">일반회원</span>
                </div>
            </div>
            <p className="p-text">
                계정이 없습니까?{" "}
                <a href="/signup" className="link">
                    회원가입
                </a>
            </p>
            <p className="p-text">
                비밀번호를 잃어버렸습니까?{" "}
                <a href="/reset-password" className="link">
                    비밀번호 재설정
                </a>
            </p>
        </div>
    );
};

export default Login1;
