import React from "react";
import { useNavigate } from "react-router-dom"; // React Router Hook
import "./signup.css"; // CSS 파일을 임포트

const Signup = () => {
    const navigate = useNavigate(); // 페이지 이동을 위한 Hook

    return (
        <div className="container">
            <h1>회원가입</h1>
            <div className="option-container">
                {/* 관리자용 회원가입 옵션 */}
                <div
                    className="option"
                    onClick={() => navigate("/register/admin")} // React Router 경로로 이동
                >
                    <i className="fas fa-user-tie"></i>
                    <span>관리자용</span>
                </div>
                {/* 일반회원용 회원가입 옵션 */}
                <div
                    className="option"
                    onClick={() => navigate("/register/user")} // React Router 경로로 이동
                >
                    <i className="fas fa-user"></i>
                    <span>일반회원</span>
                </div>
            </div>
            <p>
                로그인 하시겠습니까?{" "}
                <span
                    className="link"
                    onClick={() => navigate("/")} // 로그인 화면으로 이동
                >
                    로그인
                </span>
            </p>
            <p>
                비밀번호를 잃어버렸습니까?{" "}
                <span
                    className="link"
                    onClick={() => navigate("/reset_password")} // 비밀번호 재설정 화면으로 이동
                >
                    비밀번호 재설정
                </span>
            </p>
        </div>
    );
};

export default Signup;
