// 1. Definição da Função Construtora (Sempre com letra Maiúscula no começo)
function Pizza(sabor, tamanho, preco) {
    
    // O 'this' serve para guardar o valor DENTRO do objeto que será criado.
    this.sabor = sabor;
    
    // TODO: Falta atribuir o tamanho e o preço ao objeto usando 'this'
     this.tamanho = tamanho
     this.preco = preco

    // Métodos (funções dentro do objeto)
    this.descrever = function() {
        // TODO: Complete o return para sair algo como: "Pizza de Calabresa (G) custa R$40"
        return `Pizza de ${sabor} (${tamanho} custa ${preco});`; 
    }

    this.comer = function() {
        console.log(`Nhac! Comendo a pizza de ${this.sabor}...`);
    }
}

// 2. Criação dos Objetos (Instância)
// O 'new' é obrigatório! Ele cria um novo objeto vazio e faz o 'this' apontar para ele.

// TODO: Crie uma pizza chamada 'minhaPizza' com sabor "Quatro Queijos", tamanho "G", preco 50.
const minhaPizza = new Pizza('Calabresa', 'G', '30.99');

const pizzaAmigo = new Pizza("Pepperoni", "M", 35);

// Testando
// console.log(minhaPizza.descrever());
console.log(pizzaAmigo.descrever());
pizzaAmigo.comer();