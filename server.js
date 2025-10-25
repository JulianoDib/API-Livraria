// server.js
const express = require("express");
const app = express();
app.use(express.json());

// ======== CLASSES COM HERANÇA ======== //
class Usuario {
  constructor(id, nome, email) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.tipo = "usuario";
  }
}

class Admin extends Usuario {
  constructor(id, nome, email, nivelAcesso) {
    super(id, nome, email);
    this.nivelAcesso = nivelAcesso;
    this.tipo = "admin";
  }
}

// ======== DADOS EM VARIÁVEIS ======== //
let usuarios = [
  new Usuario(1, "João Silva", "joao@email.com"),
  new Usuario(2, "Maria Souza", "maria@email.com"),
];

let admins = [
  new Admin(1, "Carlos Admin", "carlos@empresa.com", "super"),
];

// ======== ROTAS DA API ======== //

// rota raiz
app.get("/", (req, res) => {
  res.send("API com herança e variáveis em memória 🚀");
});

// listar todos usuários
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// listar todos admins
app.get("/admins", (req, res) => {
  res.json(admins);
});

// adicionar usuário
app.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;
  const novo = new Usuario(usuarios.length + 1, nome, email);
  usuarios.push(novo);
  res.status(201).json(novo);
});

// adicionar admin
app.post("/admins", (req, res) => {
  const { nome, email, nivelAcesso } = req.body;
  const novo = new Admin(admins.length + 1, nome, email, nivelAcesso);
  admins.push(novo);
  res.status(201).json(novo);
});

// ======== SERVIDOR ======== //
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
