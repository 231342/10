import React from "react";
import "./resetPassword.css"; // CSS 파일을 임포트

const ResetPassword = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("재설정 링크가 이메일로 전송되었습니다!");
    };

    return (
        <div className="container">
            <h1>비밀번호 재설정</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    className="input"
                />
                <button type="submit" className="button">
                    재설정 링크 보내기
                </button>
            </form>
            <p className="p">
                로그인 화면으로 돌아가시겠습니까?{" "}
                <a href="login1.jsx" className="link">
                    로그인
                </a>
            </p>
        </div>
    );
};

export default ResetPassword;
