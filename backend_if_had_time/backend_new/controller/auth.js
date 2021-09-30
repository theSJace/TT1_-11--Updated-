const bcrypt = require('bcryptjs');
const User = require('../users');

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(password);
    console.log(email);
    bcrypt
        .hash(password, 12)
        .then(hashedPw => {
            const user = new User({
                email: email,
                password: hashedPw,
            });
            return user.save();
        })
        .then(result => {
            res.status(201).json({ message: 'User created!', userId: result._id });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            console.log(err);
        });
};

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                const error = new Error('A user with this email could not be found.');
                error.statusCode = 401;
                console.log(error);
            }
            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Wrong password!');
                error.statusCode = 401;
                console.log(error);
                res.status(200).json({ verified: false, userId: null });
            }
            else {
                res.status(200).json({ verified: true, email: loadedUser._id.toString() });
            }

        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            console.log(err);
        });
};