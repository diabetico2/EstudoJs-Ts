// No ES6, o uso de 'const' é o padrão para referências que não mudam
const pessoa = { nome: 'Joao' };

// 1. Mutabilidade: O objeto em si pode ser alterado
pessoa.nome = 'Pedro';
console.log('1. Após alteração permitida:', pessoa);

// 2. Congelamento: Torna o objeto imutável
Object.freeze(pessoa);

// 3. Verificação Segura (Padrão ES6+)
// Em vez de tentar mudar e causar erro, verificamos se é possível
if (!Object.isFrozen(pessoa)) {
    pessoa.nome = 'Maria';
} else {
    console.warn('2. Aviso: O objeto está congelado. Alteração de "nome" bloqueada.');
}

// 4. Tentativa direta (comentada para não travar o Node.js)
try {
    // No Strict Mode (ES6 Modules), isso lança o TypeError que você viu
    pessoa.end = 'Rua ABC'; 
} catch (erro) {
    console.error('3. Erro capturado:', erro.message);
}

// Resultado Final
console.log('4. Estado final do objeto:', pessoa);

const pessoaConstante = Object.freeze({ nome: "Joao" });
//* pessoaConstante.nome = 'Ruan' (por pessoaConstante já ser criada congelada, ela não pode ser mudada)
console.log(pessoaConstante)