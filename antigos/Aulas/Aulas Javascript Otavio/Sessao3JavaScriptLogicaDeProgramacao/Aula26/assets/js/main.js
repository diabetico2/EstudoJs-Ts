function formulario() {
  const form = document.querySelector("#formulario");
  const resultado = document.querySelector("#resultado");
  const info = [];
  let IMC = 0;
  function recebeEvento(evento) {
    evento.preventDefault();
    const peso = form.querySelector("#peso");
    const altura = form.querySelector("#altura");
    info.push({
      peso: Number(peso.value),
    });
    info.push({
      altura: Number(altura.value),
    });
    if (peso.value < 10 || peso.value === null) {
      resultado.innerHTML = `peso invalida, corrija o valor`;
    } else if (altura.value < 0.9 || peso.value === null) {
      resultado.innerHTML = `altura valor invalido, corrija o valor`;
    } else {
      IMC = peso.value / (altura.value * altura.value);
      if (IMC < 18.5) {
        resultado.innerHTML = `<p>${IMC.toFixed(2)} Abaixo do peso</p>`;
        console.log("Abaixo do peso");
      } else if (IMC > 18.5 && IMC < 24.9) {
        resultado.innerHTML = `<p>${IMC.toFixed(2)} Normal</p>`;
        console.log("Normal");
      } else if (IMC > 25.0 && IMC < 29.9) {
        resultado.innerHTML = `<p>${IMC.toFixed(2)} sobrepeso</p>`;
        console.log("sobrepeso");
      } else if (IMC >= 30.0 && IMC < 39.9) {
        resultado.innerHTML = `<p>${IMC.toFixed(2)} obesidade</p>`;
        console.log("obesidade");
      } else if (IMC >= 40.0) {
        resultado.innerHTML = `<p>${IMC.toFixed(2)} obesidade grave</p>`;
        console.log("obesidade grave");
      }
    }
  }
  form.addEventListener("submit", recebeEvento);
}

formulario();
