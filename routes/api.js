const express = require('express')
const router = express.Router()
router.post('/', function (req, res) {
  console.log(req.body)
  res.send({
    'a': 1,
    'b': 2
  })
})
module.exports = router
