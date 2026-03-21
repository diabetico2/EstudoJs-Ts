// AGORA SIM: Um Array [ ] contendo Objetos { }
const escola = [
  {
    nome: "turma 1",
    alunos: [
      { nome: "Gustavo", nota: 8.1 },
      { nome: "José", nota: 9.4 },
    ],
  },
  {
    nome: "turma 2",
    alunos: [
      { nome: "Maria", nota: 8.5 },
      { nome: "Joana", nota: 4.4 },
    ],
  },
];

const getNota = (objAluno) => objAluno.nota;
const getNotasDaTurma = (turma) => turma.alunos.map(getNota);

// Agora o .map() funciona porque 'escola' é um Array!
const notasDasTurmas = escola.map(getNotasDaTurma);

console.log(notasDasTurmas); 

Array.prototype.flat = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
// Saída: [ [ 8.1, 9.4 ], [ 8.5, 4.4 ] ]

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)