// Objeto responsável por gerar IDs numéricos únicos automaticamente
const sequence = {
  _id: 1, // Variável "privada" que guarda o valor do ID atual
  // O 'get' permite acessar essa função como se fosse uma variável normal, retornando e somando +1
  get id() {
    return this._id++;
  },
};

// Objeto vazio que vai funcionar como o nosso "banco de dados" em memória
const produtos = {};

// Função para criar um novo produto ou atualizar um já existente
function salvarProduto(produto) {
  // Se o produto não tiver um ID, ele ganha um ID novo gerado pelo objeto 'sequence'
  if (!produto.id) produto.id = sequence.id;

  // Salva o produto dentro do objeto 'produtos', usando o número do ID como o nome da "gaveta" (chave)
  produtos[produto.id] = produto;

  // Retorna o produto agora com o ID devidamente preenchido
  return produto;
}

// Função para buscar um produto específico (adicionei o 'id' aqui dentro dos parênteses)
function getProduto(id) {
  // Retorna o produto caso encontre o ID, ou retorna um objeto vazio {} se não achar nada
  return produtos[id] || {};
}

// Função para listar todos os produtos que foram salvos
function getProdutos() {
  // Object.values pega todos os itens guardados no objeto 'produtos' e transforma em um Array
  return Object.values(produtos);
}

function excluirProdutos(id) {
  const produto = produtos[id];
  delete produtos[id];
  return produto;
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProdutos };
