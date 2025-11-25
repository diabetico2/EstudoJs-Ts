
let comparaComThis = function(param){
    // Aqui `this` será o contexto de execução (pode ser `global`, `obj`, `undefined` em strict, etc.)
    console.log(this === param)
}
// Chamada simples: em um arquivo script non-strict fora de módulos em Node, `this` costuma apontar para `global`.
// Em módulos (ou em 'use strict'), `this` no topo pode ser `undefined` ou `module.exports`.
comparaComThis(global)

const obj = {}
// `.bind(obj)` cria uma NOVA função com `this` permanentemente preso (bound) a `obj`.
// Importante: bind retorna uma função diferente; não altera a função original.
comparaComThis = comparaComThis.bind(obj)
// Mesmo passando `obj` como parâmetro, o `this` dentro da função já foi fixado para `obj` pelo bind.
comparaComThis(obj)

// Arrow function: NÃO possui `this` próprio — ela captura (lexicalmente) o `this` do escopo envolvente.
// Por isso, arrow functions ignoram `bind`, `call` e `apply` — você não consegue rebindar o `this`.
let comparaComThisArrow = param => {
    // `this` aqui vem do escopo onde a arrow function foi definida.
    console.log(this === param)
}
// Em um contexto top-level de módulo Node, o `this` léxico NÃO é o objeto global.
// Para verificar o objeto global de forma portátil, prefira `globalThis`.
comparaComThisArrow(global)
comparaComThisArrow(this)