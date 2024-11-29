import React from 'react';
import './ClubPage.css';  // Import the CSS file

function ClubPage() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    {/* Header */}
                    <header id="header">
                        <a href="homepage.html" className="logo">
                            <img
                                src="https://klas.kw.ac.kr/assets/modules/std/images/footerlogo-4eaf0dd804ab2275bca4c72abc229356.png"
                                alt="Logo"
                            />
                        </a>
                        <ul className="icons"></ul>

                        {/* Search Bar */}
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="검색어를 입력하세요"
                            />
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
                        <p>세부 동아리를 선택하면 동아리 노션 페이지로 연결됩니다.</p>
                        <ul className="lnb-list">
                            {/* 공연예술분과 */}
                            <li>
                                <button className="accordion">공연예술분과</button>
                                <div className="panel">
                                    <ul>
                                        <li>
                                            <a href="https://www.notion.so/14Fret-14-6cb952461e1c4b5f98683960583acf34">14Fret(14프렛)</a>
                                        </li>
                                        <li>
                                            <a href="https://www.notion.so/1c2e951a0e004428a555fe5f2e3585b4">광운극예술연구회</a>
                                        </li>
                                        {/* Other list items */}
                                    </ul>
                                </div>
                            </li>

                            {/* Other sections like 문화분과, 종교봉사분과, etc. */}
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
                                {/* First Row */}
                                <div className="row">
                                    <div className="thumb border">
                                        <a href="assets/images/복지관1.png" target="_blank" rel="noopener noreferrer">
                                            <img src="assets/images/복지관1.png" alt="복지관 지하 1층" />
                                        </a>
                                        <p><strong>복지관 지하 1층</strong></p>
                                    </div>
                                    <div className="thumb border">
                                        <a href="assets/images/복지관2.png" target="_blank" rel="noopener noreferrer">
                                            <img src="assets/images/복지관2.png" alt="복지관 1층" />
                                        </a>
                                        <p><strong>복지관 1층</strong></p>
                                    </div>
                                    <div className="thumb border">
                                        <a href="assets/images/복지관3.png" target="_blank" rel="noopener noreferrer">
                                            <img src="assets/images/복지관3.png" alt="복지관 2층" />
                                        </a>
                                        <p><strong>복지관 2층</strong></p>
                                    </div>
                                </div>

                                {/* Second Row */}
                                <div className="row">
                                    <div className="thumb border">
                                        <a href="assets/images/복지관4.png" target="_blank" rel="noopener noreferrer">
                                            <img src="assets/images/복지관4.png" alt="복지관 3층" />
                                        </a>
                                        <p><strong>복지관 3층</strong></p>
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
