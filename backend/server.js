// server.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../front')))     

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', 
    database: 'myapp' 
});

//메인 페이지
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../front/index.html'));
})

app.get('/login/user', function(req, res){
    res.sendFile(path.join(__dirname, '../front/login.html'));
})

// 일반 사용자 회원가입
app.post('/register/user', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username과 password는 필수입니다.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await db.promise().execute(
            'INSERT INTO users (username, password, is_admin) VALUES (?, ?, ?)',
            [username, hashedPassword, false]
        );

        res.status(201).json({ message: '일반 사용자가 성공적으로 등록되었습니다.' });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ message: '이미 존재하는 사용자 이름입니다.' });
        } else {
            console.error(error);
            res.status(500).json({ message: '서버 에러가 발생했습니다.' });
        }
    }
});

// 관리자 회원가입
app.post('/register/admin', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username과 password는 필수입니다.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await db.promise().execute(
            'INSERT INTO users (username, password, is_admin) VALUES (?, ?, ?)',
            [username, hashedPassword, true]
        );

        res.status(201).json({ message: '관리자가 성공적으로 등록되었습니다.' });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ message: '이미 존재하는 사용자 이름입니다.' });
        } else {
            console.error(error);
            res.status(500).json({ message: '서버 에러가 발생했습니다.' });
        }
    }
});

// 일반 사용자 로그인
app.post('/login/user', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username과 password는 필수입니다.' });
    }

    try {
        const [rows] = await db.promise().execute( 
            'SELECT * FROM users WHERE username = ? AND is_admin = ?',
            [username, false]
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
            { id: user.id, username: user.username, is_admin: user.is_admin },
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
app.post('/login/admin', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username과 password는 필수입니다.' });
    }

    try {
        const [rows] = await db.promise().execute(
            'SELECT * FROM users WHERE username = ? AND is_admin = ?',
            [username, true]
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
            { id: user.id, username: user.username, is_admin: user.is_admin },
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

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});


