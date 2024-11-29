import React from "react";
import "./admin_signup.css"; // CSS 파일 임포트

const AdminSignUp = () => {
    return (
        <div className="container">
            <h1>관리자 회원가입</h1>
            <form className="form" action="#">
                <input type="email" placeholder="Email" required className="input" />
                <input type="password" placeholder="Password" required className="input" />
                <button type="submit" className="button">
                    회원가입
                </button>
            </form>
            <p className="text">
                로그인 하시겠습니까?{" "}
                <a href="login1.html" className="link">로그인</a>
            </p>
            <p className="text">
                비밀번호를 잃어버렸습니까?{" "}
                <a href="reset_password.html" className="link">비밀번호 재설정</a>
            </p>
        </div>
    );
};

export default AdminSignUp;
