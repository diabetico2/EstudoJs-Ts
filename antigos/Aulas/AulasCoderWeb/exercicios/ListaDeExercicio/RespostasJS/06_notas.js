function classificarAluno(nota) {
    let notaCorrigida = arredondar(nota);
    if (notaCorrigida >= 40) console.log("Aprovado com " + notaCorrigida);
    else console.log("Reprovado com " + notaCorrigida);
}
function arredondar(nota) {
    if (nota < 38) return nota;
    if (nota % 5 >= 3) return nota + (5 - (nota % 5));
    return nota;
}
classificarAluno(84);
