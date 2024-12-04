import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css'; // Import the CSS file / ~'./club2.css'

const Club3 = () => {
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
                                style={{ width: '150px' }}
                                alt="로고"
                            />
                        </button>

                        {/* 검색창 추가 */}
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
                            <h1>졸업준비위원회</h1>
                        </header>
                        <span className="image main">
                            <img
                                src="assets/images/졸업준비위원회.png"
                                alt="졸업준비위원회"
                                style={{ width: '70%', height: '300px' }}
                            />
                        </span>

                        <h2>
                            <span className="section-icon1"></span>졸업준비위원회
                        </h2>

                        <div className="icon-list">
                            <p>
                                광운대학교 졸업준비위원회는 졸업예정자를 위해 '학사복 대여, 졸업앨범 제작, 졸업 기념품 제작' 등
                                다양한 학생복지사업 진행을 목적으로 합니다.
                            </p>
                            <p>
                                <strong>문의처</strong> : 02-940-5386
                            </p>
                            <p>
                                <strong>카카오 채널</strong> :{' '}
                                <a href="http://pf.kakao.com/_CnFST/chat" target="_blank" rel="noopener noreferrer">
                                    http://pf.kakao.com/_CnFST/chat
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

export default Club3;
