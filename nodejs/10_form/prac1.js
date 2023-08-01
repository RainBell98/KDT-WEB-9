const express = require('express')
const app = express()
const PORT = 8000

//body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine","ejs")
app.set("views","./views")

//router
app.get('/',(req,res)=>{
    // console.log(req.body)
    // res.send("hel")
    res.render("prac1",{title:'post으로 정보받기'})
})

// app.get('/getForm',(req,res)=>{
//     console.log(req.query)
//     res.render('prac1_result',{
//         title:"get으로 정보 받기",
//         userInfo:req.query
//     })
// })

app.post('/postForm',(req,res)=>{
    console.log(req.body)
    res.render('prac1_result',{
        title:"POST로 결과받기",
        userInfo:req.body
    })
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
