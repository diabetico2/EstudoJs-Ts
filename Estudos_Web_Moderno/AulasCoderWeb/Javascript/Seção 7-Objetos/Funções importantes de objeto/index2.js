// ============================================================
// FUNÇÕES IMPORTANTES DE OBJETO - PARTE 2
// ============================================================

// ============================================================
// 1️⃣ Object.assign() = COPIAR propriedades entre objetos
// ============================================================
// Para quê: Mesclar objetos, copiar dados, estender configurações

console.log('--- Object.assign() ---\n');

const dest = { a: 1 };        // Objeto DESTINO (será modificado!)
const o1 = { b: 2 };          // Objeto 1
const o2 = { c: 3, a: 4 };    // Objeto 2 (tem 'a' também!)

console.log('Antes:');
console.log('dest:', dest);

// Object.assign(PARA ONDE, DE ONDE 1, DE ONDE 2, ...)
// Copia todas as propriedades de o1 e o2 para dest
const obj = Object.assign(dest, o1, o2);

console.log('\nDepois:');
console.log('obj:', obj);
// Output: { a: 4, b: 2, c: 3 }
// ⚠️ Nota: a: 4 porque o2 sobrescreveu o a: 1 do dest

console.log('\nObs: assign() MODIFICA o objeto destino!');
console.log('dest agora é:', dest); // dest foi alterado!

// ============================================================
// USO PRÁTICO: Clonar um objeto
// ============================================================
console.log('\n--- CLONAGEM DE OBJETO ---');

const original = { x: 10, y: 20 };
const copia = Object.assign({}, original); // cria novo {} e copia tudo para ele

console.log('Original:', original);
console.log('Cópia:', copia);

// Modificando a cópia não afeta o original
copia.x = 999;
console.log('\nDepois de mudar a cópia:');
console.log('Original.x:', original.x);  // Still 10 ✅
console.log('Cópia.x:', copia.x);         // Agora 999

// ============================================================
// 2️⃣ Object.freeze() = CONGELAR objeto (não pode mudar!)
// ============================================================
// Para quê: Proteger dados importantes que não podem mudar

console.log('\n--- Object.freeze() ---\n');

const config = {
    apiUrl: 'https://api.exemplo.com',
    timeout: 5000,
    versao: '1.0',
};

console.log('Config ANTES de congelar:');
config.versao = '2.0';
console.log('config.versao:', config.versao); // 2.0 (conseguiu mudar)

// Congelando o objeto
Object.freeze(config);
console.log('\nConfig CONGELADA com Object.freeze()');

// Tentando modificar (NÃO vai funcionar!)
config.versao = '3.0';
console.log('Tentei mudar para 3.0, mas ficou:', config.versao); // Continua 2.0

// Tentando adicionar propriedade (NÃO vai funcionar!)
config.novaPropriedade = 'teste';
console.log('Propriedades:', Object.keys(config)); // Não tem a nova

// ============================================================
// 🎯 RESUMO - QUANDO USAR:
// ============================================================
// Object.assign()  → Preciso COPIAR dados de um objeto para outro
//                    ou CLONAR um objeto
//
// Object.freeze()  → Preciso PROTEGER um objeto para que NINGUÉM
//                    possa mudar suas propriedades
