function ItemCarrinho(nome, preco, quantidade) {
    this.nome = nome,
    this.preco  = preco,
    this.quantidade = quantidade
    
    // 2. Crie o método this.total aqui
    this.total = function(){
        return this.quantidade * this.preco
    }
}

// Teste
const mouse = new ItemCarrinho("Mouse", 50, 2);
const teclado = new ItemCarrinho("Teclado", 100, 1);

console.log(mouse.total());   // Deve dar 100
console.log(teclado.total()); // Deve dar 100