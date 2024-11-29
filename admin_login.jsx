import React from "react";
import "./admin_login.css"; // CSS 파일 링크

const AdminLogin = () => {
    return (
        <div className="container">
            <h1>관리자용 로그인</h1>
            <form action="#">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">로그인</button>
            </form>
            <p>
                계정이 없습니까? <a href="admin_signup.html">회원가입</a>
            </p>
            <p>
                비밀번호를 잃어버렸습니까?{" "}
                <a href="reset_password.html">비밀번호 재설정</a>
            </p>
        </div>
    );
};

export default AdminLogin;
