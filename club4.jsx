import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './assets/css/club4.css';
import './main.css'; // Import the CSS file / ~'./club2.css'

const Club4 = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div id="wrapper">
            {/* Main */}
            <div id="main">
                <div className="inner">
                    {/* Header */}
                    <header id="header">
                        <button
                            onClick={() => handleNavigate('/homepage')}
                            className="logo"
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <img
                                src="https://klas.kw.ac.kr/assets/modules/std/images/footerlogo-4eaf0dd804ab2275bca4c72abc229356.png"
                                alt="로고"
                                style={{ width: '150px' }}
                            />
                        </button>

                        {/* 검색창 */}
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <input
                                type="text"
                                placeholder="검색어를 입력하세요"
                                style={{
                                    padding: '5px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    width: '200px',
                                }}
                            />
                            <button
                                style={{
                                    marginLeft: '5px',
                                    padding: '5px 10px',
                                    backgroundColor: 'white',
                                    color: 'black',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                            >
                                검색
                            </button>
                        </div>
                    </header>

                    {/* Content */}
                    <section>
                        <header className="main">
                            <h1>비마응원단</h1>
                        </header>
                        <span className="image main">
                            <img src="assets/images/비마응원단.png" alt="비마응원단" style={{ width: '70%', height: '300px' }} />
                        </span>

                        <h2>
                            <span className="section-icon1"></span>비마응원단
                        </h2>

                        <div className="icon-list">
                            <p>
                                광운대학교의 No.1 홍보기관인 우리 응원단은 응원을 통해 광운인의 애교심을 고취시키며, 또한
                                광운대학교 월계축전의 꽃인 [광운대 응원’YY]을 통해 광운인과 모든 사람들의 화합의 장을 마련하고,
                                순수 대학 응원문화와 올바른 응원 문화를 보급, 전파합니다.
                            </p>

                            <p>
                                <strong>비마응원단 단원 상시모집</strong>
                            </p>

                            <p>
                                <strong>문의처</strong>: 02-940-5389
                            </p>

                            <p>
                                <strong>업무시간</strong>: 평일 09:00~17:30, 토/공휴일 휴무
                            </p>

                            <p>
                                <strong>네이버 카페</strong>:{' '}
                                <a href="http://www.cheerleaders.co.kr" target="_blank" rel="noopener noreferrer">
                                    http://www.cheerleaders.co.kr
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
                                    onClick={() => handleNavigate('/homepage')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                    }}
                                >
                                    홈페이지
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigate('/generic')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
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
                            &copy; Untitled. All rights reserved. Demo Images:{' '}
                            <a href="https://unsplash.com">Unsplash</a>. Design:{' '}
                            <a href="https://html5up.net">HTML5 UP</a>.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Club4;
