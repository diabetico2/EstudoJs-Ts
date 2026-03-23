// Exercicio extraido do PDF de Fundamentos de Programacao 
const calcularSalarioLiquido = function(horasTrablhada,salarioBase){
    const bruto = horasTrablhada * salarioBase
    const liquido = bruto - bruto * 30/100
    return (`Salario: ${liquido}`)
}

console.log (calcularSalarioLiquido(180, 60)) // retornará "Salário igual a R$ 7560"