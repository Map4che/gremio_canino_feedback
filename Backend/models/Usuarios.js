const mongoose = require ("mongoose");

const UsuariosSchema = mongoose.Schema({
    nombre: {type: String, required: true, trim: true},
    nombreColegio:{type: String, required: true, trim: true},
    email:{type: String, required: true, trim: true, unique: true},
    pasword:{type: String, required: true, trim: true},
    refiere:{type: String, required: true, trim: true},
    registro:{type: Date, default: Date.now()}
});

module.exports = mongoose.model("Usuarios", UsuariosSchema);