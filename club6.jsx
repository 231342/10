import React from "react";
import { useNavigate } from "react-router-dom";
//import "./club6.css"; // CSS 파일 분리
import './main.css';

const Club6 = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="wrapper">
            {/* Main Content */}
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
                                alt="광운대학교 로고"
                                style={{ width: "150px" }}
                            />
                        </button>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="검색어를 입력하세요"
                                className="search-input"
                            />
                            <button className="search-button">검색</button>
                        </div>
                    </header>

                    {/* Content */}
                    <section>
                        <header className="main">
                            <h1>ROTC 학군단</h1>
                        </header>
                        <div className="images">
                            <img
                                src="assets/images/ROTC1.png"
                                alt="ROTC 이미지 1"
                                className="image"
                            />
                            <img
                                src="assets/images/ROTC2.png"
                                alt="ROTC 이미지 2"
                                className="image"
                            />
                        </div>

                        <h2>
                            <span className="section-icon1"></span>ROTC 학군단
                        </h2>
                        <div className="icon-list">
                            <p>
                                "광운대학교 학군단을 방문해주신 여러분을 진심으로 환영합니다."
                                <br />
                                제142(광운대) 학군단은 1976년 창설되어 47년의 역사와 전통을
                                자랑하며 현재 R.O.T.C 61기를 포함하여 2,515명의 장교를
                                배출하였습니다.
                                <br />
                                <strong>ROTC 홈페이지</strong> :
                                <a
                                    href="https://142rotc.modoo.at/?link=5ubdb2wy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://142rotc.modoo.at/?link=5ubdb2wy
                                </a>
                            </p>
                        </div>
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
                                    className="menu-link"
                                >
                                    홈페이지
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigate("/generic")}
                                    className="menu-link"
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

export default Club6;
