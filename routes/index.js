var express = require('express');
var router = express.Router();
var cors = require('cors');
const Raspi = require('raspi-io').RaspiIO;
const five = require('johnny-five');
const board = new five.board({
  io: new Raspi()
});
board.on("ready", () => {
  const led = new five.Pin(7);
  led('high');
})
router.use(cors());
/* GET home page. */
router.get('/armenian', function(req, res, next) {
  res.send(true);
});

module.exports = router;
