const express = require('express')
const app = express()
const port = 8000

app.set('view engine','ejs')
app.set('views','./views')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const router = require('./routes/index')//"./routes <-라고 써도 됨"
app.use('/',router)
//ex)
//const userRouter = require('./rotes/user)
//app.use('/user',userRouter)

//마지막 선언
app.use('*',(req,res)=>{
    res.render('404')
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})