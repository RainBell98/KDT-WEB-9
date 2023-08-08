const mysql = require('mysql')

//mysql 연결
const conn = mysql.createConnection({
    host:'localhost',
    user: 'news',
    password: '1234',
    database: 'kdt9',
    // port:3306
})
conn.connect((err)=>{
    if(err){
        console.log('error')
        return
    }
    console.log('connect')
})

exports.getVisitors = (callback)=>{
    const query = 'SELECT*FROM visitor'
    conn.query(query,(err,rows)=>{
        console.log(rows)
        callback(rows)
    })   
}

exports.getVisitor = (id, callback)=>{
    const query = `select * from visitor where id=${id}`
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err)
            return
        }
        callback(rows)     
    })
}

exports.postVisitor = (data,callback)=>{
    const query = `insert into visitor(name,comment) values ("${data.name}","${data.comment}")`
    conn.query(query,(err,rows)=>{
        console.log('rows',rows)
        callback(rows)
    })
}

exports.editVisitor = (data,callback)=>{
    const query = `update visitor set name = '${data.name}', comment='${data.comment}' where id = '${data.id}'`
    conn.query(query,(err,rows)=>{
        if (err){
            console.log(err)
            return
        }
        callback()
    })
}

exports.deleteVisitor = (data,callback) =>{
    const query = `delete from visitor where id=${data.id}`
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err)
            return
        }
        callback()
    })
}