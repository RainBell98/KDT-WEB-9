const Visitor = require('../model/Mvisitor')

exports.main = (req,res)=>{
    res.render('index')
}

exports.getVisitors = (req,res)=>{
    //res.render('visitor',{data: Visitor.getVisitors()})
    Visitor.getVisitors((rows)=>{
        res.render('visitor',{data:rows})
    })
}

exports.getVisitor = (req,res)=>{
    Visitor.getVisitor(req.query.id, (rows)=>{
        res.render('visitor',{data:rows})
    })
}

exports.postVisitor = (req,res)=>{
    Visitor.postVisitor(req.body,(rows)=>{
        res.send({id: rows.insertId ,name:req.body.name, comment: req.body.comment})
    })
}

exports.editVisitor = (req,res)=>{
    Visitor.editVisitor(req.body,()=>{
        res.send({result:true})
    })
}

exports.deleteVisitor = (req,res)=>{
    Visitor.deleteVisitor(req.body,()=>{
        res.send({result:true})
    })
}
    
