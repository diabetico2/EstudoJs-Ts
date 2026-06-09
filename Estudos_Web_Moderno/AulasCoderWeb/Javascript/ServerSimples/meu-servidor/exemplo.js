const express = require("express");
const app = express();
const porta = 3000;

// Configuração obrigatória para o Express entender quando enviamos dados em formato JSON (substitui o body-parser)
app.use(express.json());

// Nosso "Banco de Dados" fake (um array na memória do servidor)
let produtos = [
    { id: 1, nome: "Teclado Mecânico", preco: 150 },
    { id: 2, nome: "Mouse Gamer", preco: 80 }
];

// ==========================================
// 📥 ROTA GET: Para BUSCAR informações
// ==========================================
app.get("/produtos", (req, res) => {
    // res.json() envia o array de produtos de volta para quem pediu
    res.json(produtos); 
});

// ==========================================
// 📤 ROTA POST: Para CRIAR novas informações
// ==========================================
app.post("/produtos", (req, res) => {
    // 1. Pegamos os dados que o usuário enviou no corpo (body) da requisição
    const nomeRecebido = req.body.nome;
    const precoRecebido = req.body.preco;

    // 2. Criamos o novo objeto com um ID automático baseado no tamanho do array
    const novoProduto = {
        id: produtos.length + 1,
        nome: nomeRecebido,
        preco: precoRecebido
    };

    // 3. Colocamos o novo produto dentro do nosso "banco de dados" (array)
    produtos.push(novoProduto);

    // 4. Respondemos para o cliente o produto que acabou de ser criado
    res.status(201).json(novoProduto); 
});

// Liga o servidor na porta 3000
app.listen(porta, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${porta}`);
});