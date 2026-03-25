let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(19.90 * 0.6); //certo mas ineficiente
console.log(preco * 1 - desconto ); // errado
console.log(preco * (1 - desconto)); // certo
console.log(precoComDesconto); // certo e otimizado

let nome = "Caderno";
let categoria = "Papelaria";
console.log ("produto", nome + " " 
    + "da categoria:", categoria
    + ", preço:", preco
    + ", com desconto de", desconto * 100 + "%");