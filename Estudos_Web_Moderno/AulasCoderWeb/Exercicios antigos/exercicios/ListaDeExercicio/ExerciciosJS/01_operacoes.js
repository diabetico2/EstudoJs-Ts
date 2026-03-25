// 01) Crie uma funcao que dado dois valores mostre no console a soma, subtracao, multiplicacao e divisao. 
import promptSync from 'prompt-sync';
const prompt = promptSync();

let valor1 = Number(prompt('Digite o primeiro valor: '))
let valor2 = Number(prompt('Digite o segundo valor: '))
function soma(){
    console.log(valor1, valor2)
    console.log(Number(valor1) + Number(valor2))
    console.log(Number(valor1) / Number(valor2))
    console.log(Number(valor1) * Number(valor2))
    console.log(Number(valor1) - Number(valor2))
    console.log(Number(valor1) % Number(valor2))
}
soma()