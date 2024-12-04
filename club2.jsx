import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css'; // Import the CSS file / ~'./club2.css'

function ClubPage() {
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
                        <button onClick={() => handleNavigate('/homepage')} className="logo">
                            <img
                                src="https://klas.kw.ac.kr/assets/modules/std/images/footerlogo-4eaf0dd804ab2275bca4c72abc229356.png"
                                alt="Logo"
                            />
                        </button>

                        {/* Search Bar */}
                        <div className="search-bar">
                            <input type="text" placeholder="검색어를 입력하세요" />
                            <button>검색</button>
                        </div>
                    </header>

                    {/* Content */}
                    <section>
                        <header className="main">
                            <h1>중앙동아리</h1>
                        </header>
                        <span className="image main">
                            <img
                                src="assets/images/중앙동아리복지관.png"
                                alt="Club Image"
                            />
                        </span>
                        <p>광운대학교 중앙동아리 안내를 위한 페이지입니다.</p>
                        <hr className="major" />

                        <h2>
                            <span className="section-icon1"></span>세부 동아리 소개
                        </h2>
                        <p>세부 동아리를 선택하면 동아리 상세 페이지로 이동합니다.</p>
                        <ul className="lnb-list">
                            {/* 공연예술분과 */}
                            <li>
                                <button className="accordion">공연예술분과</button>
                                <div className="panel">
                                    <ul>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    handleNavigate('/14fret')
                                                }
                                            >
                                                14Fret(14프렛)
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    handleNavigate('/kwDrama')
                                                }
                                            >
                                                광운극예술연구회
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                        <hr className="major" />

                        <h2>
                            <span className="section-icon1"></span>복지관 동아리실 안내
                        </h2>

                        <div className="contents-block-in">
                            <div className="club-icon-map">
                                <span className="section-icon3"></span>공연예술분과&nbsp;&nbsp;&nbsp;
                                <span className="section-icon4"></span>문화분과&nbsp;&nbsp;&nbsp;
                                <span className="section-icon5"></span>종교봉사분과&nbsp;&nbsp;&nbsp;
                                <span className="section-icon6"></span>체육1분과&nbsp;&nbsp;&nbsp;
                                <span className="section-icon7"></span>체육2분과&nbsp;&nbsp;&nbsp;
                                <span className="section-icon8"></span>학술분과
                            </div>
                            <div className="club-map-list">
                                {/* 복지관 안내 */}
                                <div className="row">
                                    <div className="thumb border">
                                        <button
                                            onClick={() =>
                                                handleNavigate('/club-basement')
                                            }
                                        >
                                            <img
                                                src="assets/images/복지관1.png"
                                                alt="복지관 지하 1층"
                                            />
                                            <p>
                                                <strong>복지관 지하 1층</strong>
                                            </p>
                                        </button>
                                    </div>
                                    <div className="thumb border">
                                        <button
                                            onClick={() =>
                                                handleNavigate('/club-firstfloor')
                                            }
                                        >
                                            <img
                                                src="assets/images/복지관2.png"
                                                alt="복지관 1층"
                                            />
                                            <p>
                                                <strong>복지관 1층</strong>
                                            </p>
                                        </button>
                                    </div>
                                    <div className="thumb border">
                                        <button
                                            onClick={() =>
                                                handleNavigate('/club-secondfloor')
                                            }
                                        >
                                            <img
                                                src="assets/images/복지관3.png"
                                                alt="복지관 2층"
                                            />
                                            <p>
                                                <strong>복지관 2층</strong>
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ClubPage;
