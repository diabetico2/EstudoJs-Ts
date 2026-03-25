// ============================================================
// FUNÇÕES IMPORTANTES DE OBJETO
// ============================================================

const pessoa = {
    nome: 'Joao',
    idade: 30,
    peso: 88,
}

// ============================================================
// 1️⃣ Object.keys() = Pega SÓ AS CHAVES (propriedades)
// ============================================================
// Para quê: Quando você quer saber QUAIS propriedades existem
console.log('\n--- Object.keys() ---');
console.log(Object.keys(pessoa));
// Output: ['nome', 'idade', 'peso']
// Útil para: loops, validações, saber quantas propriedades tem

// ============================================================
// 2️⃣ Object.values() = Pega SÓ OS VALORES
// ============================================================
// Para quê: Quando você quer trabalhar só com os dados
console.log('\n--- Object.values() ---');
console.log(Object.values(pessoa));
// Output: ['Joao', 30, 88]
// Útil para: somar valores, calcular média, filtrar dados

// ============================================================
// 3️⃣ Object.entries() = Pega PAR [chave, valor]
// ============================================================
// Para quê: Quando você precisa de AMBOS (chave E valor)
console.log('\n--- Object.entries() ---');
console.log(Object.entries(pessoa));
// Output: [['nome', 'Joao'], ['idade', 30], ['peso', 88]]

// Caso de uso real: Iterar sobre chave E valor simultaneamente
console.log('\n--- Usando Object.entries() com forEach ---');
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});
// Output:
// nome: Joao
// idade: 30
// peso: 88

// ============================================================
// 4️⃣ Object.defineProperty() = Define propriedade com CONTROLE
// ============================================================
// Para quê: Criar propriedades com regras especiais
// (nem sempre deixar modificar, controlar visibilidade, etc)

console.log('\n--- Object.defineProperty() ---');

Object.defineProperty(pessoa, 'dataNascimento', {
    value: '01/01/1990',           // valor da propriedade
    writable: false,                // NÃO pode ser modificada
    enumerable: true,               // aparece em Object.keys() e loops
    configurable: false             // não pode ser deletada ou reconfigurada
});

console.log(pessoa.dataNascimento); // ✅ Pode ler: 01/01/1990

// Tentando modificar (não vai funcionar):
pessoa.dataNascimento = '02/02/2000';
console.log(pessoa.dataNascimento); // ❌ Continua: 01/01/1990 (não mudou!)

// ============================================================
// 🎯 RESUMO - QUANDO USAR:
// ============================================================
// Object.keys()       → Preciso saber QUAIS propriedades existem
// Object.values()     → Preciso dos dados (sem os nomes das chaves)
// Object.entries()    → Preciso da TABELA completa (chave + valor)
// Object.defineProperty() → Preciso PROTEGER uma propriedade