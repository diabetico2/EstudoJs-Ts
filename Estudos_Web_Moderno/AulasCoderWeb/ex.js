const nomes = ["Ana", "Carlos", "João", "Alexandre", "Bia"];

function nomesGrandes(nomes, tamanho) {
  const filtrar = (nome) => nome.length >= tamanho;
  const mapearUpper = (nome) => nome.toUpperCase()
  const resul = nomes.filter(filtrar).map(mapearUpper);
  return resul;
}
console.log(nomesGrandes(nomes, 5));

