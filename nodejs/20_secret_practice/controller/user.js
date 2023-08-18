const models = require('../models');
const {Op} = require('sequelize')
const bcrypt = require('bcrypt')
const salt = 10
const pass = ''
const crypto = require('crypto')

exports.index = (req, res) => {
    res.render('index');
};
exports.signup = (req, res) => {
    res.render('signup');
};
exports.post_signup = (req, res) => {
    //model
    // User.post_signup(req.body, () => {
    //     res.send({ result: true });
    // });
    models.User.create({
        userid:req.body.userid,
        name:req.body.name,
        pw:bcryptPassword(req.body.pw)
    }).then(result=>{
        res.send({userid:req.body.userid,
            name:req.body.name,
            pw:req.body.pw,result:true})
    })
};

exports.signin = (req, res) => {
    res.render('signin');
};

const bcryptPassword = (password) =>{
    return bcrypt.hashSync(password,10)
}
const comparePassword = (password,dbPassword)=>{
    return bcrypt.compareSync(password,dbPassword)
}

const createHashedPassword = (password)=>{
    //createHash(알고리즘).update(암호화할값).digest(인코딩방식)
    return crypto.createHash('sha512').update(password).digest('base64')
}

const compareHashedPassword = (password,dbPassword)=>{
    //createHash(알고리즘).update(암호화할값).digest(인코딩방식)
    if (dbPassword=== password){
        return true
    }else{
        return false
    }

}



exports.post_signin = (req, res) => {
    // const a = models.User.findOne({userid : req.body.userid , pw: req.body.pw})
    const {pw,userid} = req.body
    models.User.findOne({
        // where: {userid : req.body.userid , pw: createHashedPassword(req.body.pw)},
        where:{userid}
    }).then((result)=>{
        // const sql = `SELECT * users WHERE pw = req.body.pw`;
        // console.log('result',result)
        // console.log(models.User)
        // console.log(result.data)
        // if(compareHashedPassword(createHashedPassword(req.body.pw), result.dataValues.pw)){
        //     res.send({ result: true, data: result });
        // }
        // else{
        //     res.send({ result: false, data: result });
        // }
        console.log("pw",pw)
        console.log("resultPw",result.pw)
        const ans = comparePassword(pw,result.pw)
        console.log(ans)
        res.json({ans})
  
    })
    
};

// exports.post_profile = (req, res) => {
//     // User.post_profile(req.body, (result) => {
//     //     if (result.length > 0) {
//     //         res.render('profile', { data: result[0] });
//     //     }
//     // });
//     models.User.findOne({
//         where:{userid:req.body.userid}
//     }).then(result=>{
//         res.render('profile', { data: result });
//     })
// };

// exports.edit_profile = (req, res) => {
//     // User.edit_profile(req.body, () => {
//     //     res.send({ result: true });
//     // });
//     models.User.update({
//         userid: req.body.userid,
//         name: req.body.name,
//         pw:req.body.pw
//     },{
//         where:{id:req.body.id}
//     }).then(()=>{
//         res.send({ result: true });
//     })
// };

// exports.delete_profile = (req, res) => {
//     // User.delete_profile(req.body.id, () => {
//     //     res.send({ result: true });
//     // });
//     models.User.destroy({where:{id:req.body.id}}).then(result=>{
//         res.send({ result: true });
//     })
// };

// exports.findAll = (req,res)=>{
//     models.User.findAll({
//         //attributes 원하는 컬럼 조회
//         attributes:['name','userid'],
//         //Op.gt(초과) , Op.gte(이상) , Op.lt(미만) , Op.ne(같지 않은) ,
//         //OP.or(또는) , Op.in(배열 요소 중 하나), Op.notIn(배열 요소와 모두 다름)
//         // where : {id: {[Op.gte]:4}}
//         order:[['id','desc']],
//         limit: 1,
//         offset:1

//     }).then((result)=>{
//         console.log('findAll',result)
//         res.send(result)
//     })
// }
