const express = require('express')
const router = express.Router()
const controller = require('../controller/cComment')


router.get('/',controller.main)
//GET/comment/
router.get('/comments',controller.comments)
//GET/comment/:id
router.get('/comment/:id',controller.comment)

module.exports = router
