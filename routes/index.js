var express = require('express');
var router = express.Router();
var cors = require('cors');
router.use(cors());
/* GET home page. */
router.get('/armenian', function(req, res, next) {
  res.send(true);
});

module.exports = router;
