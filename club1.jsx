import React from 'react';
import './ClubUnionPage.css'; // Import the CSS file

const ClubUnionPage = () => {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <header id="header">
                        <a href="homepage.html" className="logo">
                            <img src="https://klas.kw.ac.kr/assets/modules/std/images/footerlogo-4eaf0dd804ab2275bca4c72abc229356.png" alt="Logo" />
                        </a>
                        <ul className="icons">
                        </ul>

                        <div className="search-bar">
                            <input type="text" placeholder="검색어를 입력하세요" />
                            <button>검색</button>
                        </div>
                    </header>

                    <section>
                        <header className="main">
                            <h1>총동아리연합회 <span>｜ 학생자치기구</span></h1>
                        </header>

                        <span className="image main">
                            <img src="assets/images/총동연.jpg" alt="" />
                        </span>

                        <p>안녕하세요! 대학자치문화의 산실, 중앙동아리들의 대표 기구인 광운대학교 제41대 총동아리연합회 ‘청명:淸明’입니다. ...</p>

                        <div className="icon-list">
                            <p><strong>문의처</strong> : 02-940-5680</p>
                            <p><strong>업무시간</strong> : 평일 10:30~18:00, 토/공휴일 휴무</p>
                            <p><strong>노션 페이지</strong> : <a href="https://www.notion.so/d9bbee2fc36843b5ae46514d4c3e0887?pvs=4" target="_blank" rel="noopener noreferrer">노션</a></p>
                            <p><strong>홈페이지</strong> : <a href="https://cafe.naver.com/kwucdy" target="_blank" rel="noopener noreferrer">홈페이지</a></p>
                            <p><strong>인스타그램</strong> : <a href="https://www.instagram.com/kw_club_union" target="_blank" rel="noopener noreferrer">인스타그램</a></p>
                            <p><strong>메일주소</strong> : <a href="mailto:kw41cm@gmail.com" target="_blank" rel="noopener noreferrer">kw41cm@gmail.com</a></p>
                        </div>

                        <hr className="major" />

                        <h2><span className="section-icon1"></span>분과소개</h2>

                        <div>
                            <h3><span className="section-icon2"></span>공연예술분과</h3>
                            <p>넘치는 끼와 에너지를 공연과 예술을 통해 표현해 내는 동아리들이 모인 분과</p>
                        </div>

                        <hr className="major" />

                        <h2><span className="section-icon1"></span>복지관 동아리실 안내</h2>

                        <div className="club-map-list">
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
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ClubUnionPage;
