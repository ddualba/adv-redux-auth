const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.jwtSecret);
}

exports.signin = function (req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide email and password' });
  }

  try {
    // See if a user with the given email exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exist, create and save user record
    const newUser = new User({
      email: email,
      password: password
    });

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();

    // Repond to request indicating the user was created
    res.json({ token: tokenForUser(newUser) });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
