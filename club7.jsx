import React from "react";
import "./club7.css"; // 스타일 연결

const club7 = () => {
  return (
    <div id="wrapper">
      {/* Main Content */}
      <div id="main">
        <div className="inner">
          {/* Header */}
          <header id="header">
            <a href="homepage.html" className="logo">
              <img
                src="https://klas.kw.ac.kr/assets/modules/std/images/footerlogo-4eaf0dd804ab2275bca4c72abc229356.png"
                alt="광운대학교 로고"
                style={{ width: "150px" }}
              />
            </a>
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
              <h1>로봇게임단 로:빛</h1>
            </header>

            {/* Images */}
            <div className="image-container">
              <div className="image-row">
                <img src="assets/images/로빛1.png" alt="로빛 이미지 1" />
                <img src="assets/images/로빛2.png" alt="로빛 이미지 2" />
                <img src="assets/images/로빛3.png" alt="로빛 이미지 3" />
              </div>
              <div className="image-row">
                <img src="assets/images/로빛4.png" alt="로빛 이미지 4" />
                <img src="assets/images/로빛5.png" alt="로빛 이미지 5" />
                <img src="assets/images/로빛6.png" alt="로빛 이미지 6" />
              </div>
            </div>

            {/* Introduction */}
            <h2>
              <span className="section-icon1"></span>로봇게임단 로:빛
            </h2>
            <div className="icon-list">
              <p>
                국내 최초 로봇 스포츠 게임단인 로:빛[RO:BIT]은 로봇의 ‘ROBOT’,
                광운의 ‘IT’, 참빛의 ‘빛’을 합성하여 탄생하였습니다."
                <br />
                2006년 창단된 로:빛[RO:BIT]은 지금까지 매년 20~30명의 연구원들이
                휴머노이드로봇, 지능형로봇 개발에 참여하고 있으며, 국내외 각종
                대회에 출전하여 대통령상, 국무총리상, 육군참모총장상 수상 등의
                수많은 실적을 자랑하고 있습니다.
                <br />
                또한, 로봇의 대중화를 위해 행복서울 청소년 로봇캠프, 로보월드,
                K로봇대회with로빛 등의 다양한 대외활동에 꾸준히 참가하여 많은
                학생들의 참여를 유도하고, 과거 KBS, EBS, YTN 등 방송에도 다수
                출연하여 대중의 많은 관심을 끌었습니다.
              </p>
              <p>
                <strong>목표</strong> : 로:빛[RO:BIT]은 사회봉사와 발전, 참된 지식
                전파, 개인의 발전과 학교 홍보, 즐거운 로봇 스포츠 문화
                선도라는 4가지의 목표로 열심히 활동하고 있습니다.
              </p>
              <p>
                <strong>모집</strong> : 로:빛[RO:BIT]의 선발 대상은 로봇에 뜨거운
                열정을 가지고 관련 분야에 흥미가 있는 1학년 2학기 재학 예정인
                광운대학교 학생입니다. 학과 제한 없이 누구나 지원 가능합니다.
                서류 및 면접 전형을 거쳐 선발된 학생은 하계방학부터 인턴 과정을
                시작합니다. 이곳에서 다양한 분야의 교육 및 실습이 이루어지며,
                평가 기준에 의하여 정단원이 선발됩니다.
              </p>
              <img src="assets/images/로빛7.png" alt="로빛 로고" className="logo-img" />
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
                <a href="homepage.html">홈페이지</a>
              </li>
              <li>
                <a href="generic.html">게시판</a>
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

export default club7;
