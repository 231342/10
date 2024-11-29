import React from 'react';
import './App.css';

const App = () => {
    return (
        <div id="wrapper">
            <Main />
            <Sidebar />
        </div>
    );
};

const Main = () => {
    return (
        <div id="main">
            <div className="inner">
                <Header />
                <Content />
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <header id="header">
            <a href="homepage.jsx" className="logo">
                <img
                    src="https://klas.kw.ac.kr/assets/modules/std/images/footerlogo-4eaf0dd804ab2275bca4c72abc229356.png"
                    alt="Logo"
                />
            </a>
            <div>
                <input type="text" placeholder="검색어를 입력하세요" />
                <button>검색</button>
            </div>
        </header>
    );
};

const Content = () => {
    const clubs = [
        { id: 1, name: '총동아리연합회', description: '광운대학교 총동아리연합회 바로가기', link: 'club1.jsx' },
        { id: 2, name: '중앙동아리', description: '광운대학교 중앙동아리 바로가기', link: 'club2.jsx' },
        { id: 3, name: '졸업준비위원회', description: '광운대학교 졸업준비위원회 바로가기', link: 'club3.jsx' },
        { id: 4, name: '비마응원단', description: '광운대학교 비마응원단 바로가기', link: 'club4.jsx' },
        { id: 5, name: '홍보대사 비마랑', description: '광운대학교 홍보대사 비마랑 바로가기', link: 'club5.jsx' },
        { id: 6, name: 'ROTC 학군단', description: '광운대학교 ROTC 바로가기', link: 'club6.jsx' },
        { id: 7, name: '로봇게임단 로:빛', description: '광운대학교 로봇게임단 로:빛 바로가기', link: 'club7.jsx' },
    ];

    return (
        <section>
            <header className="main">
                <h1>광운대학교 동아리 안내</h1>
            </header>
            <div className="image main">
                <img src="assets/images/홈페이지.jpg" alt="Homepage" />
            </div>
            <p>광운대학교 동아리 탐색을 위한 페이지입니다.</p>
            <hr className="major" />
            {clubs.map((club) => (
                <Club key={club.id} club={club} />
            ))}
        </section>
    );
};

const Club = ({ club }) => {
    return (
        <div>
            <a href={club.link}>
                <h2>{club.name}</h2>
                <p>{club.description}</p>
            </a>
            <hr className="major" />
        </div>
    );
};

const Sidebar = () => {
    return (
        <div id="sidebar">
            <div className="inner">
                <nav id="menu">
                    <header className="major">
                        <h2>Menu</h2>
                    </header>
                    <ul>
                        <li>
                            <a href="homepage.jsx">홈페이지</a>
                        </li>
                        <li>
                            <a href="generic.jsx">게시판</a>
                        </li>
                    </ul>
                </nav>
                <footer id="footer">
                    <p className="copyright">
                        &copy; Untitled. All rights reserved. Demo Images:{' '}
                        <a href="https://unsplash.com">Unsplash</a>. Design:{' '}
                        <a href="https://html5up.net">HTML5 UP</a>.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default App;
