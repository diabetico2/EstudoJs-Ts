// instanciaUnica.js exporta um OBJETO já pronto.
// O Node faz cache de módulos: na primeira vez que você dá require, ele executa o arquivo.
// Nas vezes seguintes, ele entrega a mesma referência que está na memória.
const contadora = require("./instanciaUnica");
const contadorb = require("./instanciaUnica"); 

// instanciaNova.js exporta uma FUNÇÃO (Factory).
// O require traz a função, mas os parênteses () no final a executam IMEDIATAMENTE.
// Como chamamos a função duas vezes separadas, criamos dois objetos novos na memória.
const contadorc = require("./instanciaNova")(); 
const contadord = require("./instanciaNova")();

// --- TESTE A e B ---
contadora.inc(); // valor vira 2
contadora.inc(); // valor vira 3
// Como 'contadora' e 'contadorb' apontam para o MESMO objeto no cache do Node,
// o que você faz em um, o outro "sente" na hora.
console.log("contador a: ", contadora.valor, "contador b: ", contadorb.valor);

// --- TESTE C e D ---
contadorc.inc(); // valor vira 2 (apenas no objeto C)
contadorc.inc(); // valor vira 3 (apenas no objeto C)
// Como 'contadorc' e 'contadord' são instâncias diferentes criadas pela Factory,
// elas são independentes. Alterar o C não afeta o D.
console.log("contador c: ", contadorc.valor, "contador d: ", contadord.valor);