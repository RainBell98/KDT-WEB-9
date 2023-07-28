const express = require('express')
const app = express()
const PORT = 8000

app.set("view engine","ejs")
app.set('views','./views')

//정적인 파일 불러오기
// app.use('/',express.static('public'))
app.use('/public',express.static('public'))

app.get('/kdt9',(req,res)=>{
    res.render('prac3',{'name':10})
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)//체크용도
})