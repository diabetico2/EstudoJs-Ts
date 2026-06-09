function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro");
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao("teste", 0.4)
  .then((v) => console.log(v))
  .then(
    (v) => console.log(v),
    (err) => console.log("Erro Esp.:", err),
  )
  .then(() => console.log("quase fim"))

  .catch((err) => console.log(`${err}`))
  .then(() => console.log("fim"));
