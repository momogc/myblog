const express = require('express')
const router = express.Router()

router.post('/', function (req, res) {
  res.send({
    'a': 1,
    'b': 2
  })
})
module.exports = router
