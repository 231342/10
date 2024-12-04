import React from "react";
import { useNavigate } from "react-router-dom";
//import "./club5.css"; // CSS 파일 분리
import './main.css'; // Import the CSS file / ~'./club2.css'


const Club5 = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    {/* Header */}
                    <header id="header">
                        <button
                            onClick={() => handleNavigate("/homepage")}
                            className="logo"
                            style={{ background: "none", border: "none", cursor: "pointer" }}
                        >
                            <img
                                src="https://klas.kw.ac.kr/assets/modules/std/images/footerlogo-4eaf0dd804ab2275bca4c72abc229356.png"
                                alt="Logo"
                                style={{ width: "150px" }}
                            />
                        </button>
                        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                            <input
                                type="text"
                                placeholder="검색어를 입력하세요"
                                style={{
                                    padding: "5px",
                                    border: "1px solid #ddd",
                                    borderRadius: "5px",
                                    width: "200px",
                                }}
                            />
                            <button className="search-button">검색</button>
                        </div>
                    </header>

                    {/* Content */}
                    <section>
                        <header className="main">
                            <h1>홍보대사 비마랑</h1>
                        </header>
                        <span className="image main">
                            <img
                                src="assets/images/비마랑1.png"
                                alt="비마랑 이미지1"
                                style={{ width: "70%", height: "476px" }}
                            />
                            <img
                                src="assets/images/비마랑2.png"
                                alt="비마랑 이미지2"
                                style={{ width: "50%", height: "320px" }}
                            />
                        </span>
                        <h2>
                            <span className="section-icon1"></span>홍보대사 비마랑
                        </h2>
                        <div className="icon-list">
                            <p>
                                안녕하십니까? 광운대학교 공식 홍보대사 비마랑입니다.
                                <br />
                                『비마랑』은 학교의 상징인 [비마]와 ‘함께하다’라는 뜻의 [랑]이 합쳐진 말로
                                2000년도 1기부터 시작하여 애교심을 바탕으로 광운대를 대표하는 얼굴로
                                학교를 알리는데 앞장서고 있는 대외국제처 홍보팀 소속 단체입니다.
                                <br />
                                비마랑은 입학식, 졸업식, 입시박람회 등 학교 공식 행사 의전에서도 도우미
                                역할을 하며, 학교 광고 및 각종 인쇄물, 홍보동영상 등에 학생 대표 모델로
                                활동하고, 페이스북이나 블로그와 같은 온라인 홍보활동을 통해서도 학교를
                                알리고 있습니다.
                            </p>
                            <p>
                                <strong>홍보대사활동</strong> : 대학 홍보모델 활동, 학 내외 행사 의전
                            </p>
                            <p>
                                <strong>비마랑 블로그</strong> :{" "}
                                <a href="https://blog.naver.com/kw1934" target="_blank" rel="noreferrer">
                                    https://blog.naver.com/kw1934
                                </a>
                            </p>
                            <p>
                                <strong>비마랑 페이스북</strong> :{" "}
                                <a href="https://www.facebook.com/KW.bimarang" target="_blank" rel="noreferrer">
                                    https://www.facebook.com/KW.bimarang
                                </a>
                            </p>
                        </div>
                        <hr className="major" />
                    </section>
                </div>
            </div>

            {/* Sidebar */}
            <div id="sidebar">
                <div className="inner">
                    {/* Menu */}
                    <nav id="menu">
                        <header className="major">
                            <h2>Menu</h2>
                        </header>
                        <ul>
                            <li>
                                <button
                                    onClick={() => handleNavigate("/homepage")}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        padding: "0",
                                    }}
                                >
                                    홈페이지
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigate("/generic")}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        padding: "0",
                                    }}
                                >
                                    게시판
                                </button>
                            </li>
                        </ul>
                    </nav>

                    {/* Footer */}
                    <footer id="footer">
                        <p className="copyright">
                            &copy; Untitled. All rights reserved. Demo Images:{" "}
                            <a href="https://unsplash.com">Unsplash</a>. Design:{" "}
                            <a href="https://html5up.net">HTML5 UP</a>.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Club5;
