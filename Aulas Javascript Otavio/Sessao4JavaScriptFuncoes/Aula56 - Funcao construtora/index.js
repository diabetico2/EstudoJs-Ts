// funcao construtora -> objetos
// funcao fabrica -> objetos
// Construtora -> sempre começar com letra maiuscula ( Pessoa(new))
function Pessoa(nome,sobrenome){
    //privados, não estão disponiveis fora daqui
const ID = 123456

const metodoInterno = function(){

}
    this.nome = nome // atributos/metodos publicos, pode serem chamados fora daqui
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ' sou um metodo')
    }
}
const p1 = new Pessoa('Allan', 'Jose')
console.log(p1.nome, p1.sobrenome)
p1.metodo()