function trocarVetores(vetorA, vetorB) {
    if (vetorA.length != vetorB.length) return;
    for(let i = 0; i < vetorA.length; i++) {
        let aux = vetorA[i];
        vetorA[i] = vetorB[i];
        vetorB[i] = aux;
    }
    console.log('Novo A: ' + vetorA);
    console.log('Novo B: ' + vetorB);
}
trocarVetores([1, 2, 3], [4, 5, 6]);
