// Função: Converte uma lista de notas numéricas em conceitos (A,B,C,D).
// Parâmetros: nota (Array de Number)
// Retorno: Array de Strings com conceitos correspondentes.
function verificaNota(nota) {
  return nota.map((nota) => {
    if (nota >= 0 && nota <= 4.9) {
      return "D";
    } else if (nota >= 5 && nota <= 6.9) {
      return "C";
    } else if (nota >= 7 && nota <= 8.9) {
      return "B";
    } else {
      return "A";
    }
  });
}

// Exemplo de uso
const notasAlunos = [10, 5.5, 7.2, 3.8];
console.log(verificaNota(notasAlunos)); // [ 'A', 'C', 'B', 'D' ]
