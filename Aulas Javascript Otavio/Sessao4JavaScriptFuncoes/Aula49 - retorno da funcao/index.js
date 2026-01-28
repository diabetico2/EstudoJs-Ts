function falafrase(começo) {
  function falaResto(resto) {
    return começo + "" + resto;
  }
  return falaResto;
}
const fala = falafrase("ola");
const resto = fala("mundo");
console.log(resto);
