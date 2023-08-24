const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt9',
    password: '1234',
    database: 'kdt',
    port: 3306,
});

//임시데이터
const comments = [
    {
        id: 1,
        name: '우종종',
        gender: 'm',
        major: '체육'
    },
    {
        id: 2,
        name: '이우종종',
        gender: 'w',
        major: '컴공'
    },
    {
        id: 3,
        name: '우종',
        gender: 'm',
        major: '사회복지'
    },
    {
        id: 4,
        name: '이우종',
        gender: 'm',
        major: '경영'
    },
    {
        id: 5,
        name: '이우',
        gender: 'w',
        major: '경제'
    }
]

module.exports = comments
