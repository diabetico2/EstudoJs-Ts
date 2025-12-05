function mediaVetor(vetor) {
    let soma = 0;
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i];
    }
    return soma / vetor.length;
}
console.log(mediaVetor([1, 2, 3, 4, 5]));
