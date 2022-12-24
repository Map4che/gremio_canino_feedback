const express = require('express');
const conectarDB = require ("./config/db");
const usuarioRoutes = require ("./routes/usuarioRoutes");

const app = express();

conectarDB();
app.use(express.json({extended:true}));


//rutas
app.use("/api/usuarios", usuarioRoutes);

app.listen(4000, () =>{
    console.log("servidor corriendo por el puerto 4000")
});