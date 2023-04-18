var express = require('express');
const passport = require('passport');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/oauth2/redirect/google', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
  // res.end('Logged in!');
})

router.get('/login',async(req,res) => {
  // res.status(200).json({"message":"please login again"});
  res.render('login');
})

module.exports = router;
