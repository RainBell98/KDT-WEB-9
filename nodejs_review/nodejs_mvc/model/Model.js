const mysql = require('mysql');
const { comm } = require('../controller/Cmain');

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
        userid: 'hello',
        date: '2023-08-23',
        comment: '안녕하세요'
    },
    {
        id: 2,
        userid: 'oooo',
        date: '2023-08-24',
        comment: '하세요'
    },
    {
        id: 3,
        userid: 'll',
        date: '2023-08-25',
        comment: '안'
    },
    {
        id: 4,
        userid: 'ollo',
        date: '2023-08-26',
        comment: '안녕'
    }
]

module.exports = comments
