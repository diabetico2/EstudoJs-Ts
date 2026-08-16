function gerarNumeros(min, max, numerosProi) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator);
    if (numerosProi.includes(aleatorio)) {
      reject("Numero repetido");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMega(qtnum) {
  try {
    const numeros = [];
    for (let _ of Array(10).fill()) {
      numeros.push(await gerarNumeros(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    if (tentativas > 10){
        throw 'não deu certo'
    }
  }
}

gerarMega(15).then(console.log).catch(console.log);
