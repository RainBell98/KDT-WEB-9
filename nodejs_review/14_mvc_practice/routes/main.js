const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

//회원전체 리스트
router.get('/', controller.main);

//회원가입
router.get('/signup',controller.signup)
router.post('/signup',controller.post_signup)

//로그인
router.get('/signin',controller.signin)
router.post('/signin',controller.post_signin)

//회원정보수정 기능
//회원정보 조회 get
// router.post('/profile',controller.userpatch)
router.get('/profile/:id',controller.info)

//회원정보 수정 patch
// router.post('/userInfo',controller.userpatch)
router.patch('/profile/edit',controller.edit_profile)

module.exports = router;
