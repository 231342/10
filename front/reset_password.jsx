import React from "react";

const ResetPassword = () => {
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

    const pStyle = {
        fontSize: "14px",
        marginTop: "20px",
    };

    const linkStyle = {
        color: "#8b0b02",
        textDecoration: "none",
        fontWeight: "bold",
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("재설정 링크가 이메일로 전송되었습니다!");
    };

    return (
        <div style={containerStyle}>
            <h1>비밀번호 재설정</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    style={inputStyle}
                />
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#a40d04")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#8b0b02")}
                >
                    재설정 링크 보내기
                </button>
            </form>
            <p style={pStyle}>
                로그인 화면으로 돌아가시겠습니까?{" "}
                <a href="login1.html" style={linkStyle}>
                    로그인
                </a>
            </p>
        </div>
    );
};

export default ResetPassword;
