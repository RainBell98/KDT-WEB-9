const model = require('../model/Mprac1');

const main = (req,res)=>{
    res.render('prac1')
}

const comments = (req,res)=>{
    console.log(model)
    res.render('prac1comments',{lists: model})
}

const add = (req,res)=>{
    console.log(req.body)
    model.push({
        id : model.length+1,
        name:req.body.name,
        major:req.body.major,
        gender:req.body.gender
    })

    res.send("success")
}

const comment = (req,res)=>{
    console.log(req.params)
    //{name:'50'} :name 콜론 뒤에 붙은 변수가 key, 입력한 값이 value
    res.render('prac1comment',{data:model[Number(req.params.name)-1]})
}



module.exports = {
    main:main,
    comm:comments,
    comment : comment,
    add: add

}
//모듈 사용 방법
//방법 1
// module.exports.main = "함수, 변수, 문자열, 숫자"
// exports.main = null // 위의 것의 축약형

//방법 2
// const test = ()=>{}
// module.exports = test