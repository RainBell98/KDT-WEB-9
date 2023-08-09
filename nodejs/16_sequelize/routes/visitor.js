const express = require('express')
const router = express.Router()
const controller = require('../controller/Cvisitor')

//GET /visitor: 방명록 전체 보이기
router.get('/',controller.getVisitors)

//GET / visitor/get : 방명록 하나 조회
router.get('/get',controller.getVisitor)

// //POST / visitor/write: 방명록 하나 추가
router.post('/write',controller.postVisitor)

// //PATCH/visitor/ edit : 방명록 수정
router.patch('/edit',controller.editVisitor)

// //DELETE/visitor/delete
router.delete('/delete',controller.deleteVisitor)
module.exports = router