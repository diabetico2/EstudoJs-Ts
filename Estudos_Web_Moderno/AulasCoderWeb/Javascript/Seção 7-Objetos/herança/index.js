// Objeto 1
const ferrari = {
    modelo: 'f40',
    velMax: 324,
}

// Objeto 2
const Volvo = {
    modelo: 'v40',
    velMax: 220,
}

// Mostra o __proto__ (cadeia de herança) do objeto ferrari
console.log(ferrari.__proto__)

// Verifica se o __proto__ é igual a Object.prototype (prototipo pai)
console.log(ferrari.__proto__ === Object.prototype)

// Verifica se Volvo também herda de Object.prototype
console.log(Volvo.__proto__ === Object.prototype)

// Mostra o topo da cadeia de herança (depois de Object.prototype vem null)
console.log(Object.prototype.__proto__) 

function MeuObjeto (){
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)
}
MeuObjeto()