/**
 * Object.create() - FORMA ALTERNATIVA DE HERANÇA
 * 
 * Object.create(proto): cria novo objeto COM __proto__ já definido
 * Object.setPrototypeOf(): modifica um objeto EXISTENTE
 * 
 * Ambas criam herança, mas em momentos diferentes do ciclo de vida
 */

const pai = { 
  nome: "pedro",
  cabelo: "preto"
};

// ===================================================================
// FORMA SIMPLES: Object.create()
// ===================================================================

/**
 * Object.create(pai) cria um objeto vazio com:
 * __proto__ = pai
 */

const filha1 = Object.create(pai);
filha1.nome = "ana";  // Adiciona propriedade própria

console.log(filha1.nome);    // "ana" (própria - shadowing)
console.log(filha1.cabelo);  // "preto" (herdada de pai)

// ===================================================================
// COM DESCRITORES: Controlar como a propriedade se comporta
// ===================================================================

/**
 * value: o valor da propriedade
 * writable: pode modificar? (true/false)
 * enumerable: aparece em Object.keys() e for...in? (true/false)
 * configurable: pode deletar ou reconfigurar? (true/false)
 */

const filha2 = Object.create(pai, {
  nome: { 
    value: "bia",
    writable: false,     // ← NÃO pode modificar
    enumerable: true,    // ← Aparece em for...in
    configurable: false  // ← Não pode deletar
  }
});

console.log(filha2.nome);    // "bia"

filha2.nome = "carla";       // TENTA modificar
console.log(filha2.nome);    // "bia" (não mudou - writable: false)

delete filha2.nome;          // TENTA deletar
console.log(filha2.nome);    // "bia" (não deletou - configurable: false)

// ===================================================================
// Object.keys() vs for...in
// ===================================================================

/**
 * Object.keys(obj): retorna APENAS propriedades PRÓPRIAS
 * for...in: itera sobre próprias + herdadas enumeráveis
 */

console.log(Object.keys(filha1));
// ["nome"] - apenas a propriedade própria
// "cabelo" é herdada, não aparece

console.log("\nIterando com for...in:");
for (let key in filha2) {
  if (filha2.hasOwnProperty(key)) {
    console.log(`Própria: ${key}`);
    // "nome" - propriedade própria
  } else {
    console.log(`Herdada: ${key}`);
    // "cabelo" - propriedade herdada (enumerable: true por padrão)
  }
}

/**
 * Se cabelo tivesse enumerable: false, não apareceria aqui
 * Só aparece porque herança com enumerable: true (padrão)
 */

// ===================================================================
// Object.create() vs Object.setPrototypeOf()
// ===================================================================

/**
 * Object.create(): CRIA novo objeto com herança
 * - Começa vazio
 * - Define __proto__ no início
 */

const filha3 = Object.create(pai);
filha3.nome = "carla";

/**
 * Object.setPrototypeOf(): MODIFICA objeto existente
 * - Recebe um objeto já criado
 * - Adiciona __proto__ depois
 */

const filha4 = { nome: "diana" };
Object.setPrototypeOf(filha4, pai);

/**
 * Resultado: IDÊNTICO
 * filha3: filha3 → pai → Object.prototype → null
 * filha4: filha4 → pai → Object.prototype → null
 * 
 * Mas o processo é diferente:
 * - create(): começou vazio
 * - setPrototypeOf(): já tinha propriedades
 */

// ===================================================================
// DESCRITORES NA PRÁTICA: writable true vs false
// ===================================================================

const usuario = Object.create(Object.prototype, {
  // ID: nunca deve mudar
  id: {
    value: 12345,
    writable: false,      // ← Imutável
    configurable: false   // ← Não pode reconfigurar
  },
  // Email: pode mudar
  email: {
    value: "user@email.com",
    writable: true,       // ← Pode modificar
    enumerable: true
  }
});

console.log("\n===== TESTE DE writable =====");
console.log(`ID: ${usuario.id}`);           // 12345

usuario.id = 99999;                         // Tenta mudar
console.log(`ID após tentar: ${usuario.id}`);  // 12345 (não mudou)

usuario.email = "novo@email.com";           // Tenta mudar
console.log(`Email após: ${usuario.email}`);   // "novo@email.com" (mudou!)

// ===================================================================
// POR QUE USAR Object.create()?
// ===================================================================

/**
 * 1. CONTROLE TOTAL DAS PROPRIEDADES
 *    Com descritores, você controla mutabilidade, enumerabilidade, etc.
 * 
 * 2. CRIAÇÃO SEGURA
 *    Propriedades imutáveis (writable: false) para dados críticos
 * 
 * 3. HERANÇA CLARA DESDE O INÍCIO
 *    Já começa com __proto__ definido
 * 
 * 4. DESCRITORES AVANÇADOS
 *    getter/setter (não mostrados aqui, mas possíveis)
 *    Validação automática ao modificar
 * 
 * Vs Object.create(): mais simples, menos controle
 * Vs objeto literal: menos documentação do que é herança
 */
