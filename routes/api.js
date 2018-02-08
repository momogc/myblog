const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const BASE_DIR = __dirname
router.post('/', jsonParser, function (req, res) {
  console.log(req.body)
  res.send({
    'a': 1,
    'b': 2
  })
})
router.get('/test', function (req, res) {
  res.sendFile(BASE_DIR + '/todie.html')
})
module.exports = router
