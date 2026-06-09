const express = require("express");
const app = express();
const porta = 3000

app.use(express.json())

// Nosso banco de dados fake
let usuarios = [
    { id: 1, nome: "Allan", cargo: "Dev" },
    { id: 2, nome: "Linus", cargo: "Senior" }
];

// -------------------------------------------------------------
// ROTA 1: Buscar o total de usuários cadastrados usando reduce
// -------------------------------------------------------------
app.get("/usuarios/total", (req, res) => {
    // Queremos apenas somar a quantidade total de usuários usando reduce
    const total = usuarios.reduce((acumulador, atual) => {
        return acumulador + 1
    }, 0);

    res.json({ total_usuarios: total });
});

// -------------------------------------------------------------
// ROTA 2: Cadastrar um novo usuário
// -------------------------------------------------------------
app.post("/usuarios", (req, res) => {
    // Pegando os dados enviados pelo cliente
    const nomeRecebido = req.body.nome;
    const cargoRecebido = req.body.cargo;

    const novoUsuario = {
        id: usuarios.length + 1,
        nome: nomeRecebido,
        cargo: cargoRecebido
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

app.listen(3000, () => {
    console.log(`server na porta ${porta}`);
});