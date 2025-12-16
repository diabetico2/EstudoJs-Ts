// 03) Crie uma funcao que recebe dividendo e divisor e imprima o resultado e o resto da divisao. 
function dividir (divisor, dividendo){
    console.log (`conta: ${Math.floor((dividendo / divisor))}`)
    console.log(`resto:  ${(dividendo % divisor)}`)
}
dividir(15,2)