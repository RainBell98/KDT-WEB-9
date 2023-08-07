const mysql = require('mysql')

const conn = mysql.createConnecton({
    host:'localhost',
    user: 'user',
    password: 'wooho9698@',
    databse: 'kdt9'
})

exports.getVisitors = (cb)=>{
    conn.query(`SELECT*FROM visitor`,(err,rows)=>{
        if(err){
            throw err
        }
    })
    console.log('MVisitor.js',rows)
}