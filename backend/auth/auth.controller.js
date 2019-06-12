const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = "secretkey123456";

exports.createUser = (req, res, next) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)//bcrypt encripta la contraseña
    }

    User.create(newUser, (err, user) => {
        if (err && err.code === 11000) return res.status(409).send('El usuario ya existe');
        if (err) return res.status(500).send('Error de servidorl' );
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id },
            SECRET_KEY, {
                expiresIn: expiresIn
            });
        
        const dataUser = {
            name: user.name,
            email: user.email,
            accessToken: accessToken,
            expiresIn: expiresIn
        }
        //response
        res.send({ dataUser });
    });
}

exports.loginUser = (req, res, next) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    }
    User.findOne({ email: userData.email }, (err, user) => {
        if (err) return res.status(500).send('Server error!');

        if (!user) {
            //email no existe
            res.status(409).send({ message: 'Algo salió mal' });
        } else {
            const resultPassword = userData.password;
            if (resultPassword) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
                res.send({ userData });
            } else {
                //contraseña incorrecta
                res.status(409).send({ message: 'Algo salió mal' });
            }
        }
    });
}