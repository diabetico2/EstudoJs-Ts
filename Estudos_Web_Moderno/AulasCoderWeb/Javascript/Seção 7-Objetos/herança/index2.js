/**
 * HERANÇA AVANÇADA - CADEIAS CUSTOMIZADAS
 * 1. Herança com __proto__
 * 2. Object.setPrototypeOf() - estabelecer herança
 * 3. Shadowing - sobrescrever propriedade do pai
 * 4. super - chamar método do objeto pai
 * 5. this binding - qual objeto é 'this'?
 */

// ===================================================================
// CADEIA MANUAL SIMPLES
// ===================================================================

// Cadeia: filho → pai → avo → Object.prototype → null
Object.prototype.attr0 = "0";

const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B", attr: '3' };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);
// Output: "0 A B C"
// JavaScript procurou cada propriedade em toda a cadeia

// ===================================================================
// EXEMPLO: SISTEMA DE CARROS
// ===================================================================

const carro = {
  velAtual: 0,
  velMax: 200,

  aceleraMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },

  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`;
  }
};

// Ferrari: velMax = 324 (SHADOWING - sobrescreve o 200 de carro)
const ferrari = {
  modelo: 'F40',
  velMax: 324  // ← Isto sobrescreve carro.velMax = 200
};

// Volvo: customiza o método status
const volvo = {
  modelo: 'V40',
  status() {
    // super chama status() de carro, mas adiciona o modelo
    return `${this.modelo}: ${super.status()}`;
  }
};

// ===================================================================
// ESTABELECENDO HERANÇA COM Object.setPrototypeOf()
// ===================================================================

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

/**
 * Cadeias agora:
 * ferrari → carro → Object.prototype → null
 * volvo → carro → Object.prototype → null
 * 
 * Ferrari tem:
 * - Propriedades próprias: modelo, velMax
 * - Propriedades herdadas: velAtual (de carro)
 * - Métodos herdados: aceleraMais(), status() (de carro)
 */

// ===================================================================
// TESTANDO
// ===================================================================

console.log("\n===== VOLVO =====");

// Chamando aceleraMais (HERDADO de carro)
volvo.aceleraMais(100);
// JavaScript procura aceleraMais em volvo → NÃO encontra
// Procura em volvo.__proto__ (carro) → ENCONTRA ✓
// Executa com this = volvo, então this.velAtual = 100

console.log(volvo.status());
// Output: "V40: 100km/h de 200km/h"
// volvo.status() é customizado em volvo
// super.status() chama carro.status()
// Que retorna `${this.velAtual}km/h de ${this.velMax}km/h`
// Com this = volvo (volvo não tem velMax próprio, herda 200 de carro)

console.log("\n===== FERRARI =====");

// Chamando aceleraMais (HERDADO)
ferrari.aceleraMais(300);
// Procura aceleraMais em ferrari → NÃO encontra
// Procura em ferrari.__proto__ (carro) → ENCONTRA ✓
// Executa com this = ferrari
// Compara this.velAtual + 300 <= this.velMax
// this.velMax = 324 (ferrari tem próprio!) não 200

console.log(ferrari.status());
// Output: "300km/h de 324km/h"
// Procura status em ferrari → NÃO encontra
// Procura em carro → ENCONTRA ✓
// Executa carro.status() com this = ferrari
// this.velMax = 324 (SHADOWING - usa ferrari.velMax, não carro.velMax)

/**
 * KEY CONCEPTS:
 * 
 * HERANÇA: ferrari herdou aceleraMais de carro
 * → Não duplicou código
 * → Mudança em carro afeta ferrari automaticamente
 * 
 * SHADOWING: ferrari.velMax = 324 sobrescreve carro.velMax = 200
 * → Cada um usa seu próprio valor quando procura
 * → Lookup: procura em ferrari PRIMEIRO antes de procurar em carro
 * 
 * THIS BINDING: quando executa carro.aceleraMais.call(ferrari)
 * → this = ferrari (o que executou)
 * → this.velAtual = propriedade de ferrari
 * → this.velMax = propriedade de ferrari (shadowing!)
 * 
 * SUPER: volvo.status() usa super.status()
 * → Chama status() do pai sem passar por herança novamente
 * → Estende funcionalidade, não substitui
 */