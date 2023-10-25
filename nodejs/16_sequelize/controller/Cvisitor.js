// const Visitor = require('../model/Mvisitor')
const models = require('../models');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  //res.render('visitor',{data: Visitor.getVisitors()})
  // Visitor.getVisitors((rows)=>{
  //     res.render('visitor',{data:rows})
  // })
  models.Visitor.findAll().then((result) => {
    console.log('findAll', result);
    // res.render('visitor',{data:result})
    res.send({ data: result });
  });
};

exports.getVisitor = (req, res) => {
  // Visitor.getVisitor(req.query.id, (rows)=>{
  //     res.render('visitor',{data:rows})
  // })
  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    res.render('visitor', { data: [result] });
  });
};

exports.postVisitor = (req, res) => {
  // Visitor.postVisitor(req.body,(rows)=>{
  //     res.send({id: rows.insertId ,name:req.body.name, comment: req.body.comment})
  // })
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log(result);
    res.send({ id: result.dataValues.id, name: req.body.name, comment: req.body.comment });
  });
};

exports.editVisitor = (req, res) => {
  // Visitor.editVisitor(req.body,()=>{
  //     res.send({result:true})
  // })
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => {
    res.send({ result: true });
  });
};

exports.deleteVisitor = (req, res) => {
  // Visitor.deleteVisitor(req.body,()=>{
  //     res.send({result:true})
  // })
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log(result);
    res.send({ result: true });
  });
};
