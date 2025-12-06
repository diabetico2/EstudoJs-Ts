// 04) Desenvolva uma funcao que receba um valor float (ex: 0.30004) e retorne formatado como dinheiro R$ (ex: R$0,30). 
function dinheiro(quantidade){
    console.log('a quantidade atual é: R$:', quantidade)
    console.log('formatado, ele fica: R$', quantidade.toFixed(2).replace('.',',') )
}

dinheiro(0.500000)