const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()
const PORT = 8000

app.set('view engine','ejs')
app.set('views','./views')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//정적파일설정
app.use('/uploads',express.static(__dirname+'/uploads'))
//multer
const upload = multer({
    //dest: 업로드할 파일을 저장할 경로를 지정
    dest:'uploads/'
})

const uploadDetail = multer({
    //storage: 저장할 공간에 대한 정보
    //diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    
    storage:multer.diskStorage({
        
        destination(req,file,done){
            done(null,'uploads/')
            
        },
        filename(req,file,done){
            var id1 = req.body.username
            const ext = path.extname(file.originalname)
            console.log('ext',ext)
            done(null,(id1+ext))
        },
    }),
    limits: {fileSize:5*1024*1024},
})

app.get('/',(req,res)=>{
    res.render('prac1')
})


app.post('/upload',uploadDetail.single('userfile'),(req,res)=>{
    console.log(req.file)
    console.log(req.file.path)
    res.send(`<img src=${req.file.path}>`)
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})