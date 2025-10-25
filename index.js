const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
 res.json({ message: "API rodando dentro do Codespaces!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Servidor rodando na porta ${port}`);
});


// Importa as rotas de usuários
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);