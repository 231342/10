// server.js
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');



const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../front')))     

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', 
    database: 'myapp' 
});

//처음 접속 시 로그인 페이지
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../front/login1.html'));
})

//메인 페이지
app.get('/main', function(req, res){
    res.sendFile(path.join(__dirname, '../front/elements.html'));
})

// 회원가입 (일반 or 동아리장) 선택 화면
app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname, '../front/signup1.html'));
})

// 일반 사용자 회원가입
app.post('/register/user', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email과 password는 필수입니다.' });
    }

    try {
        // 비밀번호 암호화
        const hashedPassword = await bcrypt.hash(password, 10);

        // 이메일과 비밀번호를 DB에 삽입
        const [result] = await db.promise().execute(
            'INSERT INTO users (email, password, is_admin) VALUES (?, ?, ?)',
            [email, hashedPassword, false]
        );

        res.status(201).json({ message: '일반 사용자가 성공적으로 등록되었습니다.' });
    } catch (error) {
        // 이메일 중복 처리
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ message: '이미 존재하는 이메일입니다.' });
        } else {
            console.error(error);
            res.status(500).json({ message: '서버 에러가 발생했습니다.' });
        }
    }
});


// 관리자 회원가입
app.get('/register/admin', function(req, res){
    res.sendFile(path.join(__dirname, '../front/admin_login.html'));
})

app.post('/register/admin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email과 password는 필수입니다.' });
    }

    try {
        // 비밀번호 암호화
        const hashedPassword = await bcrypt.hash(password, 10);

        // 관리자 계정 정보 삽입
        const [result] = await db.promise().execute(
            'INSERT INTO users (email, password, is_admin) VALUES (?, ?, ?)',
            [email, hashedPassword, true]
        );

        res.status(201).json({ message: '관리자가 성공적으로 등록되었습니다.' });
    } catch (error) {
        // 이메일 중복 처리
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ message: '이미 존재하는 이메일입니다.' });
        } else {
            console.error(error);
            res.status(500).json({ message: '서버 에러가 발생했습니다.' });
        }
    }
});


// 일반 사용자 로그인
app.get('/login/user', function(req, res){
    res.sendFile(path.join(__dirname, '../front/user_login.html'));
})

app.post('/login/user', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email과 password는 필수입니다.' });
    }

    try {
        const [rows] = await db.promise().execute( 
            'SELECT * FROM users WHERE email = ? AND is_admin = ?',
            [email, false]
        );

        if (rows.length === 0) {
            return res.status(401).json({ message: '유효하지 않은 자격 증명입니다.' });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: '유효하지 않은 자격 증명입니다.' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, is_admin: user.is_admin },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({ message: '로그인 성공!', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
});


// 관리자 로그인
app.get('/login/admin', function(req, res){
    res.sendFile(path.join(__dirname, '../front/admin_signup.html'));
})

app.post('/login/admin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email과 password는 필수입니다.' });
    }

    try {
        const [rows] = await db.promise().execute(
            'SELECT * FROM users WHERE email = ? AND is_admin = ?',
            [email, true]
        );

        if (rows.length === 0) {
            return res.status(401).json({ message: '유효하지 않은 자격 증명입니다.' });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: '유효하지 않은 자격 증명입니다.' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, is_admin: user.is_admin },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({ message: '로그인 성공!', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
});


// JWT 인증 미들웨어
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: '액세스 토큰이 필요합니다.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: '유효하지 않은 토큰입니다.' });
        req.user = user;
        next();
    });
}

// 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 게시물 제목 검색 라우트
app.get('/search', async (req, res) => {
    const searchTerm = req.query.q;

    if (!searchTerm) {
        return res.status(400).send('검색어를 입력해주세요.');
    }

    const query = 'SELECT * FROM posts WHERE title LIKE ?';
    try {
        const [results] = await db.promise().execute(query, [`%${searchTerm}%`]);
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).send('서버 오류');
    }
});
// 새 비밀번호 설정 API
app.get('/reset_password', function(req, res){
    res.sendFile(path.join(__dirname, '../front/reset_password.html'));
})

app.post('/reset_password', async (req, res) => {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).json({ message: '이메일과 새 비밀번호는 필수입니다.' });
    }

    try {
        // 사용자가 존재하는지 확인
        const [rows] = await db.promise().execute('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(404).json({ message: '존재하지 않는 이메일입니다.' });
        }

        // 새 비밀번호 암호화
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // 데이터베이스에 비밀번호 업데이트
        await db.promise().execute(
            'UPDATE users SET password = ? WHERE email = ?',
            [hashedPassword, email]
        );

        res.json({ message: '비밀번호가 성공적으로 변경되었습니다.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
});

app.post('/posts', async (req, res) => {
    const { title, content, author_id, club_id } = req.body;

    try {
        // 동아리장 여부 확인
        const [user] = await db.promise().execute('SELECT is_admin FROM users WHERE id = ?', [author_id]);
        if (user.length === 0 || user[0].is_admin === 0) {
            return res.status(403).json({ message: '게시글 작성 권한이 없습니다.' });
        }

        // 게시글 생성
        const [result] = await db.promise().execute(
            'INSERT INTO posts (title, content, author_id, club_id) VALUES (?, ?, ?, ?)',
            [title, content, author_id, club_id]
        );

        res.status(201).json({ message: '게시글이 성공적으로 생성되었습니다.', post_id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
});

app.put('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content, author_id } = req.body;

    try {
        // 동아리장 여부 확인
        const [user] = await db.promise().execute('SELECT is_admin FROM users WHERE id = ?', [author_id]);
        if (user.length === 0 || user[0].is_admin === 0) {
            return res.status(403).json({ message: '게시글 수정 권한이 없습니다.' });
        }

        // 게시글 수정
        await db.promise().execute('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id]);
        res.json({ message: '게시글이 성공적으로 수정되었습니다.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
});

app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const { author_id } = req.body;

    try {
        // 동아리장 여부 확인
        const [user] = await db.promise().execute('SELECT is_admin FROM users WHERE id = ?', [author_id]);
        if (user.length === 0 || user[0].is_admin === 0) {
            return res.status(403).json({ message: '게시글 삭제 권한이 없습니다.' });
        }

        // 게시글 삭제
        await db.promise().execute('DELETE FROM posts WHERE id = ?', [id]);
        res.json({ message: '게시글이 성공적으로 삭제되었습니다.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
});

// 게시물 목록 조회 API
app.get('/posts', async (req, res) => {
    try {
        const [posts] = await db.promise().execute(`
            SELECT 
                posts.id, 
                posts.title, 
                posts.created_at, 
                posts.updated_at,
                users.email AS author_email,
                clubs.name AS club_name
            FROM posts
            JOIN users ON posts.author_id = users.id
            JOIN clubs ON posts.club_id = clubs.id
        `);
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
});

// 게시물 상세 조회 API
app.get('/posts/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [post] = await db.promise().execute(`
            SELECT 
                posts.id, 
                posts.title, 
                posts.content, 
                posts.created_at, 
                posts.updated_at,
                users.email AS author_email,
                clubs.name AS club_name
            FROM posts
            JOIN users ON posts.author_id = users.id
            JOIN clubs ON posts.club_id = clubs.id
            WHERE posts.id = ?
        `, [id]);

        if (post.length === 0) {
            return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
        }

        res.json(post[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
});


app.post('/comments', async (req, res) => {
    const { content, author_id, post_id } = req.body;

    // 필수 입력값 확인
    if (!content || !author_id || !post_id) {
        return res.status(400).json({ message: 'content, author_id, post_id는 필수입니다.' });
    }

    try {
        // 작성하려는 게시글이 존재하는지 확인
        const [post] = await db.promise().execute('SELECT id FROM posts WHERE id = ?', [post_id]);
        if (post.length === 0) {
            return res.status(404).json({ message: '존재하지 않는 게시글입니다.' });
        }

        // 작성자가 유효한 사용자인지 확인
        const [author] = await db.promise().execute('SELECT id FROM users WHERE id = ?', [author_id]);
        if (author.length === 0) {
            return res.status(404).json({ message: '존재하지 않는 사용자입니다.' });
        }

        // 댓글 작성
        const [result] = await db.promise().execute(
            'INSERT INTO comments (content, author_id, post_id) VALUES (?, ?, ?)',
            [content, author_id, post_id]
        );

        res.status(201).json({ message: '댓글이 성공적으로 작성되었습니다.', comment_id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});



