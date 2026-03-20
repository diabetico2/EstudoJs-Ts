let contagem = 10;
let codigoDaBomba; // Vai guardar o ID

// 1. INICIE A CONTAGEM
// Use setInterval para diminuir a contagem a cada 1000ms.
// Se chegar a 0, mostre "BOOM" e pare o intervalo.
codigoDaBomba = setInterval(function() {
    contagem--
    console.log(contagem)
    if (contagem == 0 ){
        console.log('boom')
    }
}, 1000);


// 2. O DESARMAMENTO (Corte o fio)
// Use um setTimeout para rodar daqui a 5000ms (5 segundos).
// Dentro dele, cancele o intervalo usando o codigoDaBomba e mostre "Bomba desarmada!".
setTimeout(function() {
    clearInterval(codigoDaBomba)
    console.log('desativado')
}, 5500); // 5500ms para garantir que dê tempo de ver o 5 na tela