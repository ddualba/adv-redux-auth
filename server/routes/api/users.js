const express = require('express');
const router = express.Router();

const Authentication = require('../../controllers/authentication');
const passportService = require('../../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.get('/', requireAuth, async (req, res) => {
  res.send({ hi: 'there' });
});

router.post('/signin', requireSignin, Authentication.signin);

router.post('/signup', Authentication.signup);

module.exports = router;
