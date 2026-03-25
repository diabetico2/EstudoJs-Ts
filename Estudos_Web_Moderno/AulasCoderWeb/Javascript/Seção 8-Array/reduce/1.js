const alunos = [
    { nome: "joao", nota: 7, bolsista: false },
    { nome: "maria", nota: 8.2, bolsista: true },
    { nome: "pedro", nota: 9, bolsista: false },
    { nome: "kauan", nota: 5.7, bolsista: true }
];

// O .map() percorre o array de objetos e extrai apenas a propriedade 'nota'.
// Ele transforma um array de [objetos] em um array de [números]: [7, 8.2, 9, 5.7]
console.log(alunos.map(a => a.nota));

const resul = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    /* O .reduce() "achata" o array em um único valor (a soma).
       - acumulador: guarda o resultado parcial da soma até agora.
       - atual: é a nota que o JavaScript está lendo no momento.
    */
    console.log(acumulador, atual);
    return acumulador + atual;
}, 0); 
// O '0' acima é o valor inicial do acumulador. Se não colocar, 
// o reduce começa usando o primeiro item do array como acumulador.

console.log(resul); // Resultado final da soma: 29.9