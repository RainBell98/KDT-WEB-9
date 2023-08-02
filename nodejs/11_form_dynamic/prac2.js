
const express = require('express')
const app = express()
const PORT = 8000



app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine','ejs')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('prac2')
})


app.post('/axios',(req,res)=>{
    console.log('back',req.body)
    if(req.body.name == "alal" && req.body.pw == 1234){
        res.send({result:"success"})
    }
    else{
        res.send({result:"fail"})
    }
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})