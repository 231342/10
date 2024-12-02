import React from "react";
import "./AdminLogin.css"; // CSS를 별도 파일로 관리

const AdminLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직을 추가하세요.
    console.log("로그인 요청");
  };

  return (
    <div className="container">
      <h1>관리자용 로그인</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">로그인</button>
      </form>
      <p>
        계정이 없습니까? <a href="/admin_signup">회원가입</a>
      </p>
      <p>
        비밀번호를 잃어버렸습니까? <a href="/reset_password">비밀번호 재설정</a>
      </p>
    </div>
  );
};

export default AdminLogin;
