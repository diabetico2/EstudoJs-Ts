// try {
//   // executa quando não há erro
//   console.log("Abri um arquivo");
//   console.log("Manipulei e gerou erro");
//   console.log("fechei o arquivo");
//   try {
//     console.log(b);
//   } catch (e) {
//     console.log("deu erro");
//   } finally{
//     console.log('tambem sou finally')
//   }
// } catch (e) {
//   // é executado quando há erro
//   console.log("Tratando o erro");
// } finally {
//   //sempre
//   console.log("Eu sempre sou executado");
// }

function retonaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retonaHora();
  console.log(hora);
} catch(e) {
  // Tratar erro
  // console.log(e);
} finally {
  console.log('Tenha um bom dia.');
}
