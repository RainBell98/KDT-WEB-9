const model = require('../model/Model');
const {User} = require('../models/index') 
const bcrypt = require('bcrypt')


const bcryptPassword = (password) =>{
    return bcrypt.hashSync(password,10)
}

const comparePassword = (password,dbPassword)=>{
    return bcrypt.compareSync(password,dbPassword)
}
////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });

    //findOne은 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체로 반환
    //where: 객체 형태로 찾을 정보를 입력
    User.findOne({
        where:{ id: req.params.number},
    }).then((result) => {
        console.log(result.dataValues)
        res.render('profile', { data:result.dataValues });
    });
};
const buy = (req, res) => {};

///////////////////////////////
//POST
//회원가입
const post_signup = (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    //create: 데이터 생성
    //실습과제: 비밀번호 암호화
    const {userid, name,pw} = req.body
    User.create({userid,name,pw:bcryptPassword(pw)}).then(()=>{
        res.json({result:true})
    })
};
//로그인
const post_signin = (req, res) => {
    // model.db_signin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.json({ result: true, data: result[0] });
    //     } else {
    //         res.json({ result: false });
    //     }
    // });
    const {userid, pw} = req.body
    User.findOne({
        where:{userid}
    }).then((result)=>{
        if(result){
            const ans = comparePassword(pw, result.pw)
            console.log(ans,result.dataValues)
            res.json({ans,data:result.dataValues,resu:true})
        }else{
            res.json({resu:false})
        }
    })
    //실습과제 - 로그인
    //step1 아이디를 찾아서 사용자 존재 유/무 체크
    //step2 입력된 비밀번호 암호화하여 기존 데이터와 비교

};
/////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    
    //update(수정된 정보를 객체형태로 입력, 수정될 곳 객체 입력)
    const {name,pw,id} = req.body
    User.update({name:name, pw:pw}, {where: {id:id}}).then(()=>{
        res.json({result:true})
    })
};

///////////////////////////
//DELETE
//회원탈퇴 destroy()
const delete_p = (req,res)=>{
    const {id} = req.body
    User.destroy({where:{id}}).then((result)=>{
        res.json({ans:true})
    })
}

module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
    delete_p
};
