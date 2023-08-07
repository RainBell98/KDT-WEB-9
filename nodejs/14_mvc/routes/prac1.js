const express = require('express')
const router = express.Router()
const controller = require('../controller/prac1Co')

router.post('/', controller.main)
router.post('/axios',controller.Con)

module.exports = router