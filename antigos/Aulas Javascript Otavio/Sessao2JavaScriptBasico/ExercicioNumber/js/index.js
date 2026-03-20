const numero = Number(prompt("Digite um numero"));

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>a raiz quadrada é ${Math.sqrt(numero)}</p>`
texto.innerHTML += `<p>${numero} é verdadeiro? ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>é um NaN? ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>arredondado para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>arredondado para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`