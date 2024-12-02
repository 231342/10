import React from "react";
import { useNavigate } from "react-router-dom"; // React Router Hook
import "./user_signup.css"; // CSS 파일을 임포트

const UserSignup = () => {
    const navigate = useNavigate(); // 페이지 이동을 위한 Hook

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
                로그인 하시겠습니까?{" "}
                <span
                    className="link"
                    onClick={() => navigate("/login1")} // 로그인 페이지로 이동
                >
                    로그인
                </span>
            </p>
            <p className="text">
                비밀번호를 잃어버렸습니까?{" "}
                <span
                    className="link"
                    onClick={() => navigate("/reset_password")} // 비밀번호 재설정 페이지로 이동
                >
                    비밀번호 재설정
                </span>
            </p>
        </div>
    );
};

export default UserSignup;
