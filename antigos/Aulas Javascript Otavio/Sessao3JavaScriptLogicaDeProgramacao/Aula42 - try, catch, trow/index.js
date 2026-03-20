// try {
// console.log(NaoExisto)
// } catch(error){
//     console.log('naoExisto não existe')
//     console.log(error)
// }

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new error ("x e y precisam ser numeros")
  }

  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (error) {
  console.log(error);
  console.log('algo amigavel')
}
