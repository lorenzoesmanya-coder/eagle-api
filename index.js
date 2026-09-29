const express = require("express");

const app = express();

app.use(express.json());


// ===============================
// INICIO
// ===============================

app.get("/", (req, res) => {
    res.json({
        ok: true,
        mensaje: "🦅 Eagle API funcionando"
    });
});


// ===============================
// CREAR SALA
// ===============================

app.post("/crear-sala", (req, res) => {

    res.json({
        ok: true,
        region: "SAC",
        sala: {
            id: "12345678",
            password: "1234"
        }
    });

});


// ===============================
// PUERTO
// ===============================

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🦅 Eagle API funcionando en puerto ${PORT}`);
});