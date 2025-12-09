const notasAlunos = [38, 29, 84, 57];

function arredonda() {
  for (let i = 0; i < notasAlunos.length; i++) {
    // Guardei numa variável pra facilitar a leitura
    let notaOriginal = notasAlunos[i];

    // Lógica Matemática
    const proximoMultiplo = Math.ceil(notaOriginal / 5) * 5;
    const diferenca = proximoMultiplo - notaOriginal;

    if (notaOriginal < 38) {
      console.log("reprovado " + notasAlunos[i]);
    } else if (diferenca < 3) {
      console.log(
        `nota original: ${notaOriginal} aprovação com arrendodamento: ${proximoMultiplo}`
      );
    } else {
      console.log("aprovado sem arrendodamento", notaOriginal);
    }
  }
}

arredonda();
