// Exercicio extraido do PDF de Fundamentos de Programacao 
function removerVogais(frase) { 
  const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"] 
   
  vogais.forEach( vogal => frase = frase.replace(vogal, '') ) 
 
  return frase 
}
console.log(removerVogais('coder'))