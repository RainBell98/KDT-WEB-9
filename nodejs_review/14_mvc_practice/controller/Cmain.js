const model = require('../model/Model');

////////////////
////GET
const main = (req, res) => {
    res.render('index');
};

const signup = (req,res)=>{
    res.render('signup')
}

const signin = (req,res)=>{
    res.render('signin')
}


const info = (req,res)=>{
    model.db_info(req.params,(result)=>{
        res.render('profile',{data: result[0]})
    })
}

const buy = (req,res)=>{

}

////////////////
//POST
const post_signup = (req,res)=>{
    model.db_signup(req.body,()=>{
        res.json({result:true})
    })
}

const post_signin = (req,res)=>{
    model.db_signin(req.body,(result)=>{
        if(result.length>0){
            res.json({result:true, data: result[0]})
        }else{
            res.json({result:false})
        }
    })
}


////////////////
//PATCH

const edit_profile= (req,res)=>{
    model.db_edit(req.body,(result)=>{
        res.json({result:true})
    })
}


module.exports = {
    main,
    signup,
    signin,
    info,
    buy,
    post_signup,
    post_signin,
    edit_profile
}