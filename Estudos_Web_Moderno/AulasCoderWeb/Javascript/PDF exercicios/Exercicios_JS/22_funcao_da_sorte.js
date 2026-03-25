// Exercicio extraido do PDF de Fundamentos de Programacao 


const sorteio = function(escolha){
    const random = Math.floor(Math.random() * 10) + 1
 return (escolha == random? 'você ganhou': 'você perdeu')
}

console.log(sorteio(7))