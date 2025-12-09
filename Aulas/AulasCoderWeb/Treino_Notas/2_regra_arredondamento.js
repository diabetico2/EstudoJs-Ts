// EXERCICIO 2: CACA BUGS (CONDICAO ERRADA)
// Regra: So arredonda se a diferenca for MENOR que 3.
// Ex: 38 viraria 40 (diferenca 2). 
// Mas 37 continuaria 37 (diferenca 3, nao arredonda).

const nota = 39; 
const proximoMultiplo = Math.ceil(nota / 5) * 5;
const diferenca = proximoMultiplo - nota;

// ! O BUG ESTA NO IF ABAIXO:
// O codigo esta arredondando o 37 para 40, mas NAO deveria!
// A regra diz: arredonda se a diferenca for MENOR que 3.

if (diferenca <= 2) { 
    console.log("Nota arredondada para: " + proximoMultiplo);
} else {
    console.log("Nota manteve: " + nota);
}
