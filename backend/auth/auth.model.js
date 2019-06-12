const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true //quita espacios
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true //correo unico
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
        timestamps: true //guarda en nuestra coleccion la fecha creacion y actualizacion
    });

module.exports = userSchema;