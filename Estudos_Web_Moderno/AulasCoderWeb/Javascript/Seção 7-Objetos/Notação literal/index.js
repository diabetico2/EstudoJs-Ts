// --- Notação Curta de Propriedade (Shorthand) ---
const a = 1;
const b = 2;
const c = 3;

// Forma antiga: era necessário repetir o nome da chave e da variável
const obj1 = { a: a, b: b, c: c }; 

// ES6: Se a chave e o valor tiverem o mesmo nome, basta colocar uma vez
const obj2 = { a, b, c }; 
console.log('Shorthand:', obj1, obj2);


// --- Propriedades Computadas (Computed Property Names) ---
const nomeAttr = 'nota';
const valorAttr = 7.87;

// Forma antiga: primeiro criava o objeto vazio, depois atribuía com colchetes
const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log('Dinâmico antigo:', obj3);

// ES6: Permite criar a chave dinamicamente direto na declaração do objeto
// O interpretador avalia o conteúdo de [] e o transforma na chave
const obj4 = { [nomeAttr]: valorAttr };
console.log('Dinâmico ES6:', obj4);


// --- Notação Curta para Métodos ---
const obj5 = {
    // Forma tradicional: chave associada a uma função anônima
    funcao1: function() {
        return 'Estilo antigo';
    },
    // ES6: Sintaxe de método mais limpa, eliminando a palavra 'function' e os ':'
    funcao2() {
        return 'Estilo novo';
    }
};

console.log('Métodos:', obj5.funcao1(), '|', obj5.funcao2());