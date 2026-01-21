const pessoa = {
    nome: 'luiz',
    sobrenome: 'otavio',
    idade: '20'
}

const chave = 'nome'
// console.log(pessoa.nome);
// console.log(pessoa['nome']);
console.log(pessoa[chave]);
for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}