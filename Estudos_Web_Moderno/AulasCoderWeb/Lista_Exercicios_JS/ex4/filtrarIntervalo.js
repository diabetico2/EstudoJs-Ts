// Função: Filtra valores passados por parâmetro que estejam no intervalo [10, 20].
// Parâmetros: ...v (números)
// Saída: Log no console com array filtrado.
function valor(...v) {
  const valores = [];
  valores.push(...v);
  const filtrar = valores.filter((valor) => valor >= 10 && valor <= 20);
  console.log(filtrar);
}

// Exemplo de uso
valor(30, 20, 30, 40, 50, 60, 70, 80, 90, 13, 12, 10);
