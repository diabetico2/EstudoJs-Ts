// ============================================================
// EXERCÍCIO 23 - NÍVEL 3: CARRINHO DE COMPRAS
// ============================================================
// Objetivo: Crie um objeto "carrinho" que:
// - Tenha array _itens (lista de produtos)
// - Método adicionarItem(nome, preco, quantidade)
// - Método removerItem(nome) - remove o item inteiro
// - Getter total que retorna o valor total das compras
// - Getter quantidadeItens que retorna quantidade total de produtos
// - Método listar() que mostra todos os itens
//
// Dicas:
// - Um item poderia ser: { nome, preco, quantidade }
// - Para total, multiplique preco por quantidade
// - Para quantidade, some todas as quantidades
// ============================================================

const carrinho = {
  _itens: [],
  
  // Seu código aqui
};

// Teste seu código:
// carrinho.adicionarItem("Mouse", 50, 2);
// carrinho.adicionarItem("Teclado", 150, 1);
// console.log(carrinho.total);         // 250
// console.log(carrinho.quantidadeItens);  // 3
