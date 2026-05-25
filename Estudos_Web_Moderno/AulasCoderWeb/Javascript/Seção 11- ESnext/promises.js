function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}
falarDepoisDe(3, "que legal")
  .then((frase) => frase.concat("?!?")) // 1. Aqui 'frase' é "que legal". O return envia "que legal?!?"
       //    ||       e com isso, ele passa o parametro frase, como se fosse um return
//          \/              e o "outraFrase" fosse o console.log
  .then((outraFrase) => console.log(outraFrase)) // 2. Aqui 'outraFrase' RECEBE "que legal?!?" e exibe no console.
  .catch(e => console.log(e))// para tratar um erro, utilizar catch