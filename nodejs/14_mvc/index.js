const express = require('express')
const app = express()
const port = 8000

app.set('view engine','ejs')
app.set('views','./views')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//임시 데이터
const comments = [{
    id:1,
    userID:'hello world',
    date:'2023-08-03',
    comment:'안녕'
},
{
    id:2,
    userID:'WORLD',
    date:'2023-08-04',
    comment:'안녕하세요'
},
{
    id:3,
    userID:'HELLOOOOOO',
    date:'2023-08-05',
    comment:'안녕하세'
},
{
    id:4,
    userID:'HELLO',
    date:'2023-08-06',
    comment:'안녕하'
},
]

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/comments',(req,res)=>{
    res.render('comments',{commentInfos:comments})
})

app.get('/comment/:id',(req,res)=>{
    // console.log(req.params)
    // console.log(req.params.id)
    const commentId = req.params.id
    console.log(comments[commentId-1])
    res.render('comment',{commentInfo: comments[commentId-1]})
})

app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})