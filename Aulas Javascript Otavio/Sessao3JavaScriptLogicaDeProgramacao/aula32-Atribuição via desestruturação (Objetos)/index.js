const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 28,
    endereco: {
        rua: 'Rua das Flores',
        numero: 123,
        cidade: 'São Paulo',
        estado: 'SP'
    }
}
// const nome = pessoa.nome;
// const sobrenome = pessoa.sobrenome;
// const idade = pessoa.idade;
// console.log(nome, sobrenome, idade);

const {nome, sobrenome, idade, endereco: {cidade, estado}} = pessoa;


console.log(nome, sobrenome, idade);
console.log(cidade, estado);

const {nome: n, sobrenome: s, idade: i} = pessoa;
console.log(n, s, i);