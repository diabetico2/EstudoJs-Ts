// try {
//   console.log("abri um arquivo");
//   console.log("erro");

//   try {
//     console.log(b);
//   } catch (e) {
//     console.log("erro");
//   } finally {
//     console.log("eu sempre sou executado");
//   }
// } catch (e) {
//   console.log("tratar erro");
// } finally {
//   console.log("eu sempre sou executado");
// }
function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("esperando instancia de date ");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}
const data = new Date
const hora = retornaHora(data);
console.log(hora);

