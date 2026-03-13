// Função: Determina o tipo de um triângulo a partir de seus 3 lados.
// Parâmetros: n1, n2, n3 (Number)
// Retorno: String — "Equilatero", "Isósceles" ou "Escaleno"
function triangulo(n1, n2, n3) {
  if (n1 == n2 && n1 == n3) {
    return "Equilatero";
  } else if (n1 !== n2 && n1 !== n3) {
    return "Escaleno";
  } else {
    return "Isósceles";
  }
}

// Exemplos de uso
console.log(triangulo(10, 10, 10)); // Equilatero
console.log(triangulo(10, 14, 8));  // Escaleno
console.log(triangulo(10, 10, 8));  // Isósceles
