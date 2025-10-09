function formulario() {
  const form = document.querySelector("#formulario");
  const resultado = document.querySelector("#resultado"); 
  const info = [];
  let IMC = 0
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
    if (peso.value < 10) {
      resultado.innerHTML = `<p>peso invalido, insira um valor correto</p>`;
    } else if (altura.value <= 0.9) {
      resultado.innerHTML = `<p>altura invalida, por favor insira um valor correto</p>`;
    } else {
      
    }
    IMC = (peso.value / (altura.value * altura.value))
    if (IMC < 18.5){
      resultado.innerHTML = `<p>${IMC.toFixed(2)} Tá magro chefe</p>`
    }
    
    else if (IMC > 18.5 && IMC < 24.9){
      resultado.innerHTML = `<p>${IMC.toFixed(2)} Tá normal</p>`
    }

    
    else if (IMC > 25.0 && IMC < 29.9){
      resultado.innerHTML = `<p>${IMC.toFixed(2)} Ta gordinho ein</p>`
    }

    
    else if (IMC > 30.0 && IMC < 39.0){
      resultado.innerHTML = `<p>${IMC.toFixed(2)} Tá magro chefe</p>`
    }

    
    else if (IMC > 40){
      resultado.innerHTML = `<p>${IMC.toFixed(2)} https://www.youtube.com/watch?v=Zjpgx-nwSGk </p>`
    }
  }
  console.log(info);
  form.addEventListener("submit", recebeEvento);
}

formulario();
