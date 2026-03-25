//*usando a notação literal
const obj1 = {};
console.log(obj1);

//*object em js
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

//* funções construtoras

function produto(nome, preco, desc) {
  ((this.nome = nome),
    (this.getPrecoComDesconto = () => {
      return preco * (1 - desc);
    }));
}

const p1 = new produto("caneta", 7.99, 0.15);
const p2 = new produto("Noteook", 299.9, 0.3);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//* função factory

function criaFuncionario(nome, salarioBase, faltas) {
  return {
    //* abrindo objeto literal
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criaFuncionario("Allan", 7980, 4);
const f2 = criaFuncionario("Jose", 2500, 1);
console.log(f1.getSalario(), f2.getSalario());

//*Object.create

const filha = Object.create(null);
filha.nome = "Allan";
console.log(filha)

//*Um funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "sou um json"}')
console.log(fromJSON.info)