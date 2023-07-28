const express = require('express')
const app = express()
const PORT = 8000

app.set("view engine","ejs")
app.set('views','./views')

//정적인 파일 불러오기
app.use('/public',express.static('public'))

app.get('/',(req,res)=>{
    //res.send("HEllo Express")
    //send() 클라이언트에 응답 데이터를 보낼 때
    res.send(
        {result:true,code:1000,message:"회원가입 성공",data:{name:"WOo",age:26}})
})

// app.get('/kdt9',(req,res)=>{
//     //render() 뷰 엔진 렌더링
//     res.render('test',{name:'WOOOOO'})
//     // res.send("HEllo kdt9")
// })

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)//체크용도
})