const numero = Number(prompt("Digite um numero"));

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `  <p>Raiz quadrada ${Math.sqrt(numero)}</p>`; //* ou ${numero ** 0,5}
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arrendondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>arrendodado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>com duas casas decimais: ${numero.toFixed(2)}</p>`;
