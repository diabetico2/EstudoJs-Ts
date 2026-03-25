Array.prototype.filter2 = function(callback) {
    const newArray = []
      for (let i = 0; i < this.length; i++){
         if(callback(this[i], i, this)){
            //this representa o Array, I o indice, this[i] representa o array do indice (tipo produtos[0].nome = notebook)
            newArray.push(this[i])
         }
      }
    return newArray
}

// TESTE PARA RODAR:
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Plástico', preco: 12.49, fragil: false }
]

// Filtre apenas os produtos frágeis usando o SEU filter2
const frageis = produtos.filter2(p => p.fragil)

console.log(frageis) 
// Deve retornar apenas o Notebook e o iPad
console.log('teste', produtos[0].nome)