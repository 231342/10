import React from "react";

const UserLogin = () => {
    const containerStyle = {
        borderRadius: "10px",
        boxShadow: "-5px -5px 10px #fff, 5px 5px 10px #babebc",
        background: "#fff",
        width: "400px",
        padding: "40px",
        textAlign: "center",
    };

    const inputStyle = {
        background: "#eee",
        padding: "16px",
        margin: "8px 0",
        width: "85%",
        border: "0",
        outline: "none",
        borderRadius: "20px",
        boxShadow: "inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff",
    };

    const buttonStyle = {
        borderRadius: "20px",
        border: "none",
        outline: "none",
        fontSize: "12px",
        fontWeight: "bold",
        padding: "15px 45px",
        margin: "14px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "transform 80ms ease-in",
        backgroundColor: "#8b0b02",
        color: "white",
    };

    const buttonHoverStyle = {
        backgroundColor: "#a40d04",
    };

    const linkStyle = {
        color: "#8b0b02",
        textDecoration: "none",
        fontWeight: "bold",
    };

    const handleButtonHover = (e, isHovering) => {
        e.currentTarget.style.backgroundColor = isHovering ? "#a40d04" : "#8b0b02";
    };

    return (
        <div style={containerStyle}>
            <h1>일반회원 로그인</h1>
            <form>
                <input type="email" placeholder="Email" required style={inputStyle} />
                <input type="password" placeholder="Password" required style={inputStyle} />
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={(e) => handleButtonHover(e, true)}
                    onMouseLeave={(e) => handleButtonHover(e, false)}
                >
                    로그인
                </button>
            </form>
            <p>
                계정이 없습니까? <a href="user_signup.html" style={linkStyle}>회원가입</a>
            </p>
            <p>
                비밀번호를 잃어버렸습니까? <a href="reset_password.html" style={linkStyle}>비밀번호 재설정</a>
            </p>
        </div>
    );
};

export default UserLogin;
