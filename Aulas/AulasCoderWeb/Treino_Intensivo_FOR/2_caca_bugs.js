// EXERCICIO 2: CACA BUGS (CORRIGIR ERRO)
// Objetivo: O codigo deveria contar de 10 ate 0 (contagem regressiva).
// MAS... ele nao esta rodando ou esta travando. Descubra o porquê.

console.log("Iniciando contagem regressiva...");

// ! O BUG ESTA DENTRO DOS PARENTESES DO FOR ABAIXO:
for (let i = 10; i > 0; --i) { 
    console.log("Faltam: " + i);
}

console.log("FIM!");

// DICA: Se eu quero DESCER de 10 para 0, eu devo somar (++) ou subtrair (--) o 'i'?
