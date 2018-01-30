const express = require('express')
const router = express.Router()
const checkNotLogin = require('../middlewares/check').checkNotLogin

router.get('/', checkNotLogin, function (res, req, next) {
  res.send('login page')
})

router.post('/', checkNotLogin, function (res, req, next) {
  res.send('login...')
})

module.exports = router
