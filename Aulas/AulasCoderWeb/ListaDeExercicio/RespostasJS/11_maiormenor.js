function maiorMenor(vetor) {
    let maior = vetor[0], menor = vetor[0];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) maior = vetor[i];
        if (vetor[i] < menor) menor = vetor[i];
    }
    console.log(maior, menor);
}
maiorMenor([10, 5, 7, 3, 1, 30]);
