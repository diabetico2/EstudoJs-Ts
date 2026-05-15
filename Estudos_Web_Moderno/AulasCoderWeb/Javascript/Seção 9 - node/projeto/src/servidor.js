const porta = 3003; // Define em qual "canal" o servidor vai rodar no computador

const express = require("express"); // Importa o framework Express para gerenciar rotas e servidor
const app = express(); // Inicializa o Express na variável app
const bodyParser = require('body-parser'); // Middleware para converter o corpo da requisição (formulários)
const bancoDeDados = require("./bancoDeDados"); // Importa o arquivo de lógica de dados que você criou

// Configura o body-parser para ler dados enviados via formulário e transformar em objeto (req.body)
app.use(bodyParser.urlencoded({extended: true}));

// Rota GET: Retorna a lista de todos os produtos do "banco"
app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.getProdutos()); // Envia a resposta (por padrão, converte o array para JSON)
});

// Rota GET com parâmetro: O ":id" é uma variável que recebe o que for digitado na URL
app.get("/produtos/:id", (req, res) => {
  res.send(bancoDeDados.getProduto(req.params.id)); // req.params acessa os dados da URL
});

// Rota POST: Usada para criar um novo produto
app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome, // Pega o nome vindo do corpo da requisição
    preco: req.body.preco, // Pega o preço vindo do corpo da requisição
  });
  res.send(produto); // Retorna o produto criado (já com o ID gerado)
});

// Rota PUT: Usada para editar um produto existente através do ID da URL
app.put("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id, // Usa o ID da URL para saber qual produto sobrescrever
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto);
});

// Rota DELETE: Remove um produto do banco usando o ID da URL
app.delete("/produtos/:id", (req, res) => {
  const produto = bancoDeDados.excluirProdutos(req.params.id);
  res.send(produto); // Geralmente retorna o produto que foi deletado
});

// Liga o servidor e deixa ele "ouvindo" as requisições na porta definida
app.listen(porta, () => {
  console.log("escutando na porta: ", porta);
});