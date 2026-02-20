// const pessoa = {
//    nome : 'luiz',
//    sobrenome: 'otavio'
//}
//const chave = 'nome' 
//console.log(pessoa.nome, pessoa.sobrenome)
//console.log(pessoa['nome'], pessoa['sobrenome'])
//console.log(pessoa[chave])

const pessoa1 = new Object()
pessoa1.nome = 'allan'
pessoa1.sobrenome = 'Jose'
pessoa1.idade = 30

//delete pessoa1.nome
pessoa1.falarNome = function(){
    return(`${this.nome} está falando`)
}
pessoa1.getDataNasc = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
for (let chave in pessoa1){
    console.log(pessoa1[chave])
}
