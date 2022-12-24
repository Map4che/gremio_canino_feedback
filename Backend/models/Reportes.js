const mongoose = require ("mongoose");

const ReportesSchema = mongoose.Schema({
    categoria:{},
    nombre:{type: String, required: true, trim: true},
    direccion:{type: String, required: false, trim: true},
    telefono: { type: Number, required: true, trim:true},
    email:{type:String, required: false, trim: true},
    caracteristicas:{type: String, required: true, trim: true},
    foto:{type:String, required: false, trim: true},
    creado:{type: Date, default: Date.now()}
})

module.exports = mongoose.model("Reportes", ReportesSchema);