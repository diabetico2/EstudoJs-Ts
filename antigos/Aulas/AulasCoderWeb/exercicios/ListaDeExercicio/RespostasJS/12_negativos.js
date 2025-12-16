function contarNegativos(vetor) {
    let qtd = 0;
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) qtd++;
    }
    return qtd;
}
console.log(contarNegativos([10, -5, 7, -3, 1, -30]));
