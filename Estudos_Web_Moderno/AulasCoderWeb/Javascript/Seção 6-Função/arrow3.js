// CORREÇÃO: Em ES Modules (seu caso atual), o modo estrito ('use strict') é ativado automaticamente.
// Isso muda o comportamento do 'this'.

let comparaComThis = function (param) {
    // Em 'use strict' (padrão do ES Module), o 'this' dentro de uma função comum
    // não aponta para o objeto global, ele fica 'undefined'.
    console.log('Function padrão:', this === param)
}

// Em ES Modules, 'this' não é 'global'. Testamos com global, mas dará false.
comparaComThis(global) // false (pois 'this' é undefined)
comparaComThis(undefined) // true (demonstração do que o 'this' virou)

const obj = {}
// O .bind funciona normalmente em funções padrão, fixando o 'this' no objeto passado.
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj) // true

console.log('--- ARROW FUNCTION ---')

// Arrow Function: O 'this' é léxico (estático). Ele pega o 'this' do local onde foi escrita.
// No Node.js antigo (CommonJS), o 'this' aqui fora seria um objeto vazio (module.exports).
// No Node.js novo (ES Modules), o 'this' no escopo superior é UNDEFINED.
let comparaComThisArrow = param => {
    console.log('Arrow Function:', this === param)
}

// Como estamos em um ES Module, o 'this' léxico aqui fora é 'undefined'.
// global não é igual a undefined.
comparaComThisArrow(global) // false

// Testando se o this capturado é undefined (em ES Modules, sim).
comparaComThisArrow(undefined) // true

// CORREÇÃO DO ERRO: Removido 'module.exports'.
// Em ES Modules, 'module' não existe. O conceito de "this do módulo" como objeto mudou.
// Se você quisesse testar o 'this' léxico, passaria o próprio 'this'.
comparaComThisArrow(this) // true (pois param=undefined e this=undefined)

// O .bind NÃO funciona em Arrow Functions para mudar o 'this'.
// Ela segura o 'this' original (undefined) com força total.
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false (o this continua sendo undefined)
comparaComThisArrow(this) // true