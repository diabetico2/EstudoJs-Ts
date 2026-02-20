function criaPessoa(nome,sobrenome){// factory
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}: factory`
        }
    }
}

const p1 = criaPessoa('allan', 'jose')
console.log(p1.nomeCompleto)

function Pessoa(nome,sobrenome){ // constructor
    this.nome = nome,
    this.sobrenome = sobrenome
}
const p2 = new Pessoa('jose', 'allan',)
console.log(p2)