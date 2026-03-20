// eu fiz esse por que o outro está vai ficar bagunçado

//const nomes = ["Allan", "Jose", "Oliveira", "Pereira", "Kekw"];
//const novo = nomes.slice(1, -2);
//console.log(novo);

const nome = 'Allan Jose Pereira'
const nomes = nome.split(' ') // para transformar String em Array, o ' ' é usado para separar as palavras baseado no espaço
console.log(nomes)
//////
const nomes1 = ['Allan', 'Jose', 'Pereira'] 
const nome1 = nomes1.join(' ')// Faz o oposto de Split, ele pega um array e transforma numa string, usando as mesmas regras do split
console.log(nome1)