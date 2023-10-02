const models = require('../models');

const get_todo = (req, res) => {
  models.Todo.findAll().then((result) => {
    console.log('All', result);
    res.send({ data: result });
  });
};
const post_todo = (req, res) => {
  models.Todo.create({
    title: req.body.title,
    done: req.body.done,
  });
};
const patch_done = (req, res) => {
  let key = 0;
  if (req.body.done == 1) {
    key = 0;
  } else {
    key = 1;
  }
  models.Todo.update(
    {
      // title: req.body.title,
      done: key,
    },
    {
      where: { id: req.body.id },
    }
  );
};

const patch_todo = (req, res) => {
  models.Todo.update(
    {
      title: req.body.title,
      // done: key,
    },
    {
      where: { id: req.body.id },
    }
  );
};
const delete_todo = (req, res) => {
  models.Todo.destroy({
    where: { id: req.body.id },
  });
};

module.exports = { get_todo, post_todo, patch_done, patch_todo, delete_todo };
