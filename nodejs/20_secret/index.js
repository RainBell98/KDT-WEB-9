const express = require('express')
require('dotenv').config()
// const crypto = require('crypto')
const app = express()
const port = 8000
let hash = ''
// let pass = ''
// const salt = crypto.randomBytes(16).toString('hex') //salt 생성
// const leng = 1000 // 반복 횟수
// const key = 64 // 생성할 키의 길이
// const algo = 'sha512'
// let result = false
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// app.post('/login',(req,res)=>{
//     const {pw} = req.body
//     //createHash: 지정한 알고리즘을 이용하여 해시 생성
//     // const pass = crypto.createHash("sha512").update(pw).digest('base64')
//     //pdkdf2(sync) : (sync가 붙으면 동기 != 비동기)  : 비밀번호 기반 키 도출 함수
//     pass = crypto.pbkdf2Sync(pw, salt , leng , key ,algo).toString('base64')
//     res.send(pass)
// })

// app.post('/verify',(req,res)=>{
//     const {pw} = req.body
//     const compare = crypto.pbkdf2Sync(pw, salt, leng,key,algo).toString('base64')
//     console.log('compare',compare)
//     //timingSageEqual : 두개의 버퍼를 상수시간으로 비교하는 함수
//     // const result = crypto.timingSafeEqual(compare,Buffer.from(pass,'base64'))
//     if (compare === pass){
//         result = true
//     }else{
//         result = false
//     }
//     res.send(result)
// })

app.get('/',(req,res)=>{
    console.log(process.env.NAME)
    console.log(process.env.NODE_ENV)
    res.render('index')
})

app.post('/hash',(req,res)=>{
    const {pw} = req.body
    // const hash = createHashedPassword(pw)
    // hash = createPbkdf(pw)
    hash = bcryptPassword(pw)
    res.json({hash})

})

app.post('/verify',(req,res)=>{
    const {pw} = req.body
    // const result = verifyPassword(pw,salt,hash)
    const result = comparePassword(pw,hash)
    res.json({result})
})

app.post('/cipher',(req,res)=>{
    const {data} = req.body
    const encrypt = cipherEncrypt(data)
    console.log("encrypt",encrypt)
    const decrypt = decipher(encrypt)
    res.json({decrypt})
})



app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

/////암호화
/////단방향
const crypto = require('crypto')

//해시함수
const createHashedPassword = (password)=>{
    //createHash(알고리즘).update(암호화할값).digest(인코딩방식)
    return crypto.createHash('sha512').update(password).digest('base64')
}

//pbkdf2함수
const salt = crypto.randomBytes(16).toString('base64') //솔트 생성
const iterations = 100 //반복 횟수
const keylen = 64 //생성할 키의 길이
const digest = 'sha512' //해시 알고리즘

//단방향 암호화 생성
const createPbkdf = (password)=>{
    //pbkdf2함수(비밀번호,솔트,반복횟수,키의 길이,알고리즘)으로 생성이 되고
    //반환되는 값은 Buffer값
    const hash = crypto.pbkdf2Sync(password,salt,iterations,keylen,digest)
    // console.log(hash) 
    return hash.toString('base64')
}

//암호비교 
const verifyPassword = (password,salt,dbPassword) =>{
    const compare = crypto.pbkdf2Sync(password,salt,iterations,keylen,digest).toString('base64')
    if( compare === dbPassword){
        return true
    }
    else{
        return false
    }
}

//양방향

const algorithm = 'aes-256-cbc' // 256비트 키를 사용, 블록크기는 128비트(블록크기는 키가 몇 비트든 크기가 같음)
const key = crypto.randomBytes(32) 
const iv = crypto.randomBytes(16) // 초기화 벡터, 데이터 블록을 암호화할때 보안성을 높이기 위해 사용

//암호화 
const cipherEncrypt = (word)=>{
    const cipeher = crypto.createCipheriv(algorithm,key, iv) // 암호화 객체 생성
    let encryptedData = cipeher.update(word,'utf-8','base64') // 암호화 할 데이터처리
    encryptedData += cipeher.final('base64') // 최종결과 생성
    return encryptedData 
}

//복호화
const decipher = (encryptedData) =>{
    const decipher = crypto.createDecipheriv(algorithm,key,iv)//복호화 객체 생성
    let decryptedData = decipher.update(encryptedData,'base64','utf-8')
    decryptedData += decipher.final('utf-8')
    return decryptedData
}

//bcrypt(단방향)

const bcrypt = require('bcrypt')
const saltNum = 10

//암호화
const bcryptPassword = (password) =>{
    return bcrypt.hashSync(password,saltNum)
}

//비교
const comparePassword = (password,dbPassword) =>{
    return bcrypt.compareSync(password,dbPassword)
}