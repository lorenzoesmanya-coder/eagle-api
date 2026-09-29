const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        ok: true,
        mensaje: "Eagle API funcionando"
    });
});

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

app.listen(3000, () => {
    console.log("🦅 Eagle API funcionando en puerto 3000");
});