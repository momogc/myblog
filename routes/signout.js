const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/check').checkLogin

router.get('/', checkLogin, function (res, req, next) {
  res.send('sign out')
})

module.exports = router
