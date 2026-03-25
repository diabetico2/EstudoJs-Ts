// Exercicio extraido do PDF de Fundamentos de Programacao 
const procurar = function(palavraProcurada, frases){
    return frases.filter((oq) => oq.includes(palavraProcurada))
}
console.log(procurar('m', ['Java', 'JS', 'Mobile', 'Etc']))