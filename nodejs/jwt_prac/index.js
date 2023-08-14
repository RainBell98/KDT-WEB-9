const express = require('express');
const session = require('express-session');
const app = express();
const port = 8000;
const secret = "gkvjkj"
const jwt = require('jsonwebtoken')

const userInfo = {id:'kdt9',pw:'1234',name:"Woo"}

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/token',(req,res)=>{
     if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')
        try {
            const result = jwt.verify(token[1],secret)
            if(result.id == userInfo.id){
                res.json({result:true,name:userInfo.name})
            }
        } catch (error) {
            console.log(error)
            res.json({result:false,message:'인증된 회원이 아닙니다.'})
        }
    }else{
        res.redirect('/login')
    }
})

app.post('/login',(req,res)=>{
    try {
        const {id,pw} = req.body
        const {id: uId, pw: uPw} = userInfo
        if(id==uId && pw==uPw){
            const token = jwt.sign({id},secret)
            res.json({result:true,token})
        }else{
            res.json({result:false,message:'로그인 x'})
        }
    } catch (error) {
        console.log(error)
    }
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})