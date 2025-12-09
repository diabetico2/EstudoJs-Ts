// 06) Crie sistema de notas: Abaixo de 40 reprovado. Se diferenca para multiplo de 5 for menor que 3,
// arredonda para cima (ex: 84 vira 85).

function classificarAluno(nota) {
  let notaCorrigida = arredondar(nota);
  if (notaCorrigida >= 40) {
    console.log("reprovado", notaCorrigida);
  } else {
    console.log("aprovado", notaCorrigida);
  }
}
function arredondar(nota) {
  if (nota < 38) return nota
    if (nota % 5 >= 3) return nota + (5 - (nota % 5));
    return nota;
}
classificarAluno(84);
