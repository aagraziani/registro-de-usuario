var express = require('express');
var router = express.Router();

const userController = require('../controllers/usersController')
/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.render('users');
});

router.post('/register', userController.registro);



module.exports = router;
