function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("executnado resolve");
      resolve();
    }, tempo);
  });
}

function retonarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function executar() {
  let valor = await retonarValor();
  await esperarPor(2000);
  console.log("asyc/await", valor);
  await esperarPor(2000);
  console.log("asyc/await", valor + 1);
  await esperarPor(2000);
  console.log("asyc/await", valor + 2);
}
async function execVerde() {
  const resposta = await executar()
}
execVerde()
