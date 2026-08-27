const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 5 },
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 4 },
];
function melhorAprovado(alunos) {
  const maior = vari => vari.nota >= 7;
  const soAprovado = alunos.filter(maior);

  let melhorAluno = soAprovado

  for (const aluno of soAprovado) {
    if (aluno.nota > melhorAluno.nota) {
      melhorAluno = aluno
    }
  }

  return melhorAluno;
}