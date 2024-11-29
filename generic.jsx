import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState({
    club1: [],
    club2: [],
    club3: [],
  });

  const [editMode, setEditMode] = useState(false);
  const [editPostId, setEditPostId] = useState(null);

  // 게시글 추가 함수
  const addPost = (clubId, postText) => {
    if (editMode) {
      const updatedPosts = posts[clubId].map((post) =>
        post.id === editPostId ? { ...post, text: postText } : post
      );
      setPosts((prevPosts) => ({ ...prevPosts, [clubId]: updatedPosts }));
      setEditMode(false);
      setEditPostId(null);
    } else {
      const newPost = { id: Date.now(), text: postText };
      setPosts((prevPosts) => ({ ...prevPosts, [clubId]: [...prevPosts[clubId], newPost] }));
    }
  };

  // 게시글 수정
  const editPost = (clubId, postId) => {
    const post = posts[clubId].find((p) => p.id === postId);
    setEditPostId(postId);
    setEditMode(true);
  };

  // 마지막 게시글 수정
  const editLastPost = (clubId) => {
    const lastPost = posts[clubId][posts[clubId].length - 1];
    if (lastPost) {
      editPost(clubId, lastPost.id);
    }
  };

  // 마지막 게시글 삭제
  const deleteLastPost = (clubId) => {
    const updatedPosts = posts[clubId].slice(0, -1);
    setPosts((prevPosts) => ({ ...prevPosts, [clubId]: updatedPosts }));
  };

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <header id="header">
            <a href="homepage.html" className="logo">
              <img
                src="https://klas.kw.ac.kr/assets/modules/std/images/footerlogo-4eaf0dd804ab2275bca4c72abc229356.png"
                style={{ width: '150px' }}
                alt="logo"
              />
            </a>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                style={{ padding: '5px', border: '1px solid #ddd', borderRadius: '5px', width: '200px' }}
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

          <section>
            <header className="main">
              <h1>광운대학교 동아리 게시판</h1>
            </header>

            <span className="image main">
              <img src="assets/images/홈페이지.jpg" alt="" style={{ width: '100%', height: '300px' }} />
            </span>

            <p>동아리 게시글 작성을 위한 페이지입니다</p>

            <hr className="major" />

            {/* 동아리 1 섹션 */}
            <h2>동아리 1</h2>
            <p>소개글</p>
            <div id="posts-club1">
              <ul id="post-list-club1">
                {posts.club1.map((post) => (
                  <li key={post.id}>
                    <span>{post.text}</span>
                    <button onClick={() => editPost('club1', post.id)}>수정</button>
                  </li>
                ))}
              </ul>
            </div>
            <textarea
              id="input-club1"
              placeholder="게시글을 작성하세요"
              onChange={(e) => setEditPostId(e.target.value)}
            />
            <div className="button-container">
              <button onClick={() => addPost('club1', document.getElementById('input-club1').value)}>
                게시글 추가
              </button>
              <button onClick={() => editLastPost('club1')}>마지막 게시글 수정</button>
              <button onClick={() => deleteLastPost('club1')}>마지막 게시글 삭제</button>
            </div>

            <hr className="major" />

            {/* 동아리 2 섹션 */}
            <h2>동아리 2</h2>
            <p>소개글</p>
            <div id="posts-club2">
              <ul id="post-list-club2">
                {posts.club2.map((post) => (
                  <li key={post.id}>
                    <span>{post.text}</span>
                    <button onClick={() => editPost('club2', post.id)}>수정</button>
                  </li>
                ))}
              </ul>
            </div>
            <textarea id="input-club2" placeholder="게시글을 작성하세요" />
            <div className="button-container">
              <button onClick={() => addPost('club2', document.getElementById('input-club2').value)}>
                게시글 추가
              </button>
              <button onClick={() => editLastPost('club2')}>마지막 게시글 수정</button>
              <button onClick={() => deleteLastPost('club2')}>마지막 게시글 삭제</button>
            </div>

            <hr className="major" />

            {/* 동아리 3 섹션 */}
            <h2>동아리 3</h2>
            <p>소개글</p>
            <div id="posts-club3">
              <ul id="post-list-club3">
                {posts.club3.map((post) => (
                  <li key={post.id}>
                    <span>{post.text}</span>
                    <button onClick={() => editPost('club3', post.id)}>수정</button>
                  </li>
                ))}
              </ul>
            </div>
            <textarea id="input-club3" placeholder="게시글을 작성하세요" />
            <div className="button-container">
              <button onClick={() => addPost('club3', document.getElementById('input-club3').value)}>
                게시글 추가
              </button>
              <button onClick={() => editLastPost('club3')}>마지막 게시글 수정</button>
              <button onClick={() => deleteLastPost('club3')}>마지막 게시글 삭제</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
