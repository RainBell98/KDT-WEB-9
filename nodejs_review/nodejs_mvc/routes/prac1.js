const express = require('express');
const router = express.Router();
const controller = require('../controller/Cprac1');

router.get('/',controller.main)

//전체목록보기
router.get('/prac1comments',controller.comm)

//상세보기
router.post('/add',controller.add)

router.get('/prac1comment/:name',controller.comment)


module.exports = router;
