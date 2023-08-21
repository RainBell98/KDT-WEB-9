const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')//폴더와 파일의 경로를 쉽게 조작하도록 제공
const port = 8000

//view engine 
app.set('view engine','ejs')



app.use('/uploads',express.static(__dirname+'/uploads'))
console.log(__dirname)

//multer 설정
//diskStorage: 파일 저장 관련 설정 객체
const storage = multer.diskStorage({
    //destination:저장될 경로를 지정(요청객체, 업로드된 파일 객체, 콜백함수)
    destination: (req,file,cb)=>{
        cb(null, 'uploads/')
    },
    //filename: 파일이름 결정 (요청 객체, 업로드된 파일 객체, 콜백함수)
    filename:(req,file,cb)=>{
        //extname: 확장자를 추출
        const ext = path.extname(file.originalname)

        const name = encodeURIComponent(file.originalname);
        //basename: 파일이름 추출(파일이름,확장자) =>확장자를 제외해서 파일이름이 추출
        const newName = path.basename(name,ext) + Date.now() + ext
        cb(null, newName )
    }
})

//파일 크기 제한
const limits ={
    fileSize : 5*1024*1024 // 5mb
}

//key-value에서 key값과 value의 변수가 동일하면 합칠 수 있음
const upload = multer({storage, limits})

app.post('/prac1',upload.array('dynamicUser',3),(req,res)=>{
    console.log(req.files)
    res.send(req.files)
})

app.get('/',(req,res)=>{
    res.render('prac1')
})

app.use('*',(req,res)=>{
    res.render('404')
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
