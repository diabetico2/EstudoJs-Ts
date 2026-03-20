const alunos = [{ nome: "joao", nota: 7, bolsista: false },
    { nome: "maria", nota: 8.2, bolsista: true },
    { nome: "pedro", nota: 9, bolsista: false },
    { nome: "kauan", nota: 5.7, bolsista: true }
];
console.log(alunos.map(a => a.nota))
const resul = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)// 0 é um valor inicial nesse caso


console.log(resul)