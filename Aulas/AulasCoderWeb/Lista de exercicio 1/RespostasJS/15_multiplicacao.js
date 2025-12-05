function multiplicarVetor(vetor, numero) {
    return vetor.map(el => el * numero);
}
function multiplicarSeMaiorQue5(vetor, numero) {
    return vetor.map(el => el > 5 ? el * numero : el);
}
console.log(multiplicarSeMaiorQue5([1, 6, 3, 8], 2));
