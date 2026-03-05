/**
 * ENTENDENDO __proto__ - CADEIA DE HERANÇA
 * Mostra como JavaScript conecta objetos através da cadeia
 */

const ferrari = { modelo: 'f40', velMax: 324 };
const volvo = { modelo: 'v40', velMax: 220 };

// __proto__ é adicionado AUTOMATICAMENTE a todo objeto
// Aponta para Object.prototype por padrão
console.log(ferrari.__proto__);
// { toString, hasOwnProperty, ... Object.prototype }

// Todos os objetos literais herdam de Object.prototype
console.log(ferrari.__proto__ === Object.prototype);  // true
console.log(volvo.__proto__ === Object.prototype);    // true

// Topo da cadeia - fim sempre é null
console.log(Object.prototype.__proto__);  // null

/**
 * CADEIA DE HERANÇA:
 * ferrari → Object.prototype → null
 * 
 * LOOKUP (busca de propriedades):
 * ferrari.velMax:
 *   1. Procura em ferrari → ENCONTRA 324 ✓
 *   2. Retorna e para
 * 
 * ferrari.toString:
 *   1. Procura em ferrari → NÃO encontra
 *   2. Procura em Object.prototype → ENCONTRA ✓
 * 
 * ferrari.propriedadeMorta:
 *   1. Procura em ferrari → NÃO encontra
 *   2. Procura em Object.prototype → NÃO encontra
 *   3. Chega em null → RETORNA undefined
 */

// Funções têm .prototype (diferente de __proto__)
function MeuObjeto() {}

console.log(typeof MeuObjeto);          // "function"
console.log(typeof Object);             // "function"

/**
 * .prototype: usado para definir herança via 'new'
 * Quando você faz: new MeuObjeto()
 * O novo objeto terá __proto__ = MeuObjeto.prototype
 */
console.log(MeuObjeto.prototype);       // { constructor: MeuObjeto }
console.log(Object.prototype);          // Raiz de tudo