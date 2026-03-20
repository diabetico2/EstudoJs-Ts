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
function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}


const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 8000)
setTimeout(function(){
    console.log('Olá mundo')
},3000)