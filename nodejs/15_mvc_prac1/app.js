
const express = require('express')
const app = express()
const PORT = 8000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','ejs')
app.set('views','./views')


const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'localhost',
    user: 'news',
    password: '1234',
    database: 'kdt9',
    // port:3306
})
conn.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('connect')
})

const userRouter = require('./routes/user')

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/signin',(req,res)=>{
    res.render('signin')
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.post('/profile',(req,res)=>{
    res.render('profile', {data:req.body})
})

app.post('/user/signup',(req,res)=>{
    const query = `insert into prac1 (userid,name,pw) values ("${req.body.userid}","${req.body.name}","${req.body.pw}")`
    conn.query(query, (err, rows) => {
        console.log('rows', rows);
        res.send({ userid: req.body.userid, name: req.body.name, pw: req.body.pw });
    });

})

app.post('/user/signin',(req,res)=>{
    const query = `SELECT * FROM prac1`
    const id = req.body.userid
    const pw = req.body.pw
    console.log(req.body.userid)
    conn.query(query,(err,rows)=>{
        console.log(id)
        
        for(let i =0; i<rows.length;i++){
            console.log(rows[i].userid)
            if(rows[i].userid == id){
                if(rows[i].pw == pw){
                    res.send({result:true})
                    return
                }
                else{
                    res.send({result:false})
                    return
                }
            }
            else{
                res.send({result:false})
            }
        }
    })
})

app.patch('/profile',(req,res)=>{
    const query = `update prac1 set userid = '${req.body.change}' where id = '${req.body.id}'`
})



//localhost:8000/
app.use('/user',userRouter)


app.use('*',(req,res)=>{
    res.render('404')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})