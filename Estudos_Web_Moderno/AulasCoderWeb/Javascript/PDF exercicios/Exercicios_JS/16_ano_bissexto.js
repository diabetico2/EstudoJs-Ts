// Exercicio extraido do PDF de Fundamentos de Programacao 

const bixe = function(ano){
return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !==0)
}
console.log(bixe(2100))
console.log(bixe(2020))