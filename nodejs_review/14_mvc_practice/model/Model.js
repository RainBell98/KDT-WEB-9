const mysql = require('mysql')

//createConnection
//단일연결
//요청할 때마다 새로운 연결을 생성
//적은 수의 동시연결이나 단순한 데이터베이스 쿼리일 때 사용
//createPool
//연결 풀을 생성. 풀은 미리 정의된 수의 연결을 생성하고 관리
//요청이 들어오면 연결 풀에서 사용 가능한 연결을 제공. 
//작업 완료 후 해당 연결 반환
//연결이 필요하지 않을 경우 자동으로 반환. 풀의 연결 수를 제한하고 관리를 최적화

const conn = mysql.createConnection({
    host:'localhost',
    user:'news',
    password:'1234',
    database:'kdt9',
    port:3306

})


const db_signup = (data,cb)=>{
    const query = `insert into users (userid, pw, name) values ('${data.userid}','${data.pw}','${data.name}')`
    conn.query(query,(err,rows)=>{
        if (err){
            console.log(err)
            return
        }
        console.log('db_signup',rows)
        //select문의 쿼리문은 배열로 반환
        cb()
    })
}


const db_signin = (data,cb)=>{
    const query = `select * from users where userid = '${data.userid}' and pw = '${data.pw}'`
    conn.query(query,(err,rows)=>{
        if(err){
             console.log(err)
             return
        }
        console.log('db_signin',rows)
        cb(rows)
    })
}

const db_info = (data,cb)=>{
    const query = `select *from users where id = '${data.id}'`
    conn.query(query,(err,rows)=>{
        console.log("data",data)
        if(err){
            console.log(err)
            return
        }
        console.log(rows)
        cb(rows)
        
    })
}

const db_edit = (data,cb)=>{
    const query = `update users set userid = "${data.userid}", pw = "${data.pw}", name = '${data.name}' where  id = '${data.id}'`
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('edit')
        cb()
    })
}

module.exports = {
    db_signin,
    db_signup,
    db_edit,
    db_info
};
