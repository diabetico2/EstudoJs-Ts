Array.prototype.filter2 = function (callback) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      novoArray.push(this[i]);
    }
  }
  return novoArray;
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.49, fragil: false },
];

const eCaro = (p) => p.preco >= 500;
const eFragil = (p) => p.fragil;

const resul = produtos.filter2(eFragil).filter2(eCaro);
console.log(resul);
