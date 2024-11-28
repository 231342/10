import React from "react";

const Signup = () => {
    const containerStyle = {
        borderRadius: "10px",
        boxShadow: "-5px -5px 10px #fff, 5px 5px 10px #babebc",
        background: "#fff",
        width: "400px",
        padding: "40px",
        textAlign: "center",
    };

    const optionStyle = {
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        background: "#eee",
        boxShadow: "-5px -5px 10px #fff, 5px 5px 10px #babebc",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontSize: "32px",
        flexDirection: "column",
    };

    const optionHoverStyle = {
        boxShadow: "-8px -8px 16px #fff, 8px 8px 16px #babebc",
    };

    const spanStyle = {
        marginTop: "8px",
        fontSize: "14px",
        color: "#333",
    };

    const linkStyle = {
        color: "#8b0b02",
        textDecoration: "none",
        fontWeight: "bold",
    };

    const handleHover = (e, isHovering) => {
        e.currentTarget.style.boxShadow = isHovering
            ? "-8px -8px 16px #fff, 8px 8px 16px #babebc"
            : "-5px -5px 10px #fff, 5px 5px 10px #babebc";
    };

    return (
        <div style={containerStyle}>
            <h1>회원가입</h1>
            <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "30px" }}>
                <div
                    style={optionStyle}
                    onClick={() => (window.location.href = "admin_signup.html")}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                >
                    <i className="fas fa-user-tie" style={{ color: "#8b0b02" }}></i>
                    <span style={spanStyle}>관리자용</span>
                </div>
                <div
                    style={optionStyle}
                    onClick={() => (window.location.href = "user_signup.html")}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                >
                    <i className="fas fa-user" style={{ color: "#8b0b02" }}></i>
                    <span style={spanStyle}>일반회원</span>
                </div>
            </div>
            <p>
                로그인 하시겠습니까? <a href="login1.html" style={linkStyle}>로그인</a>
            </p>
            <p>
                비밀번호를 잃어버렸습니까? <a href="reset_password.html" style={linkStyle}>비밀번호 재설정</a>
            </p>
        </div>
    );
};

export default Signup;
