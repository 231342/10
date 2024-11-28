import React from "react";

const Login1 = () => {
    const containerStyle = {
        borderRadius: "10px",
        boxShadow: "-5px -5px 10px #fff, 5px 5px 10px #babebc",
        background: "#fff",
        width: "400px",
        padding: "40px",
        textAlign: "center",
    };

    const loginOptionsStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        marginBottom: "30px",
    };

    const loginOptionStyle = {
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

    const iconStyle = {
        color: "#8b0b02",
    };

    const textStyle = {
        marginTop: "8px",
        fontSize: "14px",
        color: "#333",
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

    const handleRedirect = (url) => {
        window.location.href = url;
    };

    return (
        <div style={containerStyle}>
            <h1>로그인</h1>
            <div style={loginOptionsStyle}>
                {/* 관리자 로그인 버튼 */}
                <div
                    style={loginOptionStyle}
                    onClick={() => handleRedirect("admin_login.html")}
                    onMouseOver={(e) => {
                        e.target.style.boxShadow =
                            "-8px -8px 16px #fff, 8px 8px 16px #babebc";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.boxShadow =
                            "-5px -5px 10px #fff, 5px 5px 10px #babebc";
                    }}
                >
                    <i className="fas fa-user-tie" style={iconStyle}></i>
                    <span style={textStyle}>관리자용</span>
                </div>
                {/* 일반회원 로그인 버튼 */}
                <div
                    style={loginOptionStyle}
                    onClick={() => handleRedirect("user_login.html")}
                    onMouseOver={(e) => {
                        e.target.style.boxShadow =
                            "-8px -8px 16px #fff, 8px 8px 16px #babebc";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.boxShadow =
                            "-5px -5px 10px #fff, 5px 5px 10px #babebc";
                    }}
                >
                    <i className="fas fa-user" style={iconStyle}></i>
                    <span style={textStyle}>일반회원</span>
                </div>
            </div>
            <p style={pStyle}>
                계정이 없습니까?{" "}
                <a href="signup1.html" style={linkStyle}>
                    회원가입
                </a>
            </p>
            <p style={pStyle}>
                비밀번호를 잃어버렸습니까?{" "}
                <a href="reset_password.html" style={linkStyle}>
                    비밀번호 재설정
                </a>
            </p>
        </div>
    );
};

export default Login1;
