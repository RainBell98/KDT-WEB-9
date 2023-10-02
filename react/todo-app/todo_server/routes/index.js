const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/todos', controller.get_todo);
router.post('/todo', controller.post_todo);
router.patch('/todo', controller.patch_todo);
router.patch('/todos', controller.patch_done);
router.delete('/todo', controller.delete_todo);

module.exports = router;
