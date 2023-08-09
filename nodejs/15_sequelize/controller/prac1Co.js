const ans = require('../model/prac1Mo')

exports.main = (req,res)=>{
    res.render('prac1')
}

exports.Con = (req,res)=>{
    const answer = ans.answer()
    if(req.body.name == answer.answerId && req.body.pw == answer.answerPw){
        res.send({result:"success"})
    }
    else{
        res.send({result:"fail"})
    }
}
