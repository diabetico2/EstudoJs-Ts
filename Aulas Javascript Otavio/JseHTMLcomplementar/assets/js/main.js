const fomeAnimal = document.querySelector("#bicho-fome");
const nomeAnimal = document.querySelector("#bicho-nome");
const felicidaAnimal = document.querySelector("#bicho-felicidade");
const btnComer = document.querySelector("#btn-alimentar");
const btnBrincar = document.querySelector("#btn-brincar");
const foto = document.querySelector("#foto-bicho");

let cachorro = {
  nome: "Rex",
  fome: 10,
  energia: 50,
  felicidade: 0,
};

cachorro.fome = 80;
cachorro.felicidade = 20;

nomeAnimal.innerText = cachorro.nome;
fomeAnimal.innerText = cachorro.fome;
felicidaAnimal.innerText = cachorro.felicidade;

btnComer.addEventListener("click", function () {
  if (cachorro.fome > 0) {
    cachorro.fome = cachorro.fome - 20;
    fomeAnimal.innerText = cachorro.fome;
    atualizaHumor();
  } else {
    alert("calma lá, o cachorro ta cheio já");
  }
});

btnBrincar.addEventListener("click", function () {
  if (cachorro.felicidade < 100) {
    cachorro.felicidade = cachorro.felicidade + 10;
    felicidaAnimal.innerText = cachorro.felicidade;
    atualizaHumor();
  } else {
    alert("ele já está feliz pra caramba");
  }
});

function atualizaHumor() {
  if (cachorro.felicidade >= 80) {
    foto.src =
      "https://media.istockphoto.com/id/1041987488/pt/foto/cute-dog-put-his-face-on-his-knees-to-the-man-and-smiling-from-the-hands-scratching-her-ear.jpg?s=612x612&w=0&k=20&c=wukm2w7ns6lPJpX-DW3jIeWzuFNO7ZfDVrhyXCBNJIw=";
  } else if (cachorro.fome > 70) {
    foto.src =
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsiOeMBPlowvc1LYED96hrvGez9nZ9-9EOq1KTuZ-uetRAEpAK";
  } else {
    foto.src =
      "https://img.freepik.com/fotos-gratis/retrato-de-solo-adoravel-cachorro-beagle_53876-64817.jpg?semt=ais_hybrid&w=740&q=80";
  }
  // --- PARTE 2: CORES (O Alerta Visual) ---

  if (cachorro.fome > 70) {
    fomeAnimal.style.color = "red";
  } else {
    fomeAnimal.style.color = "black";
  }
  if (cachorro.felicidade < 30) {
    felicidaAnimal.style.color = "red";
  } else {
    felicidaAnimal.style.color = "black";
  }
}

atualizaHumor();
setInterval(function () {
  if (cachorro.fome < 100) {
    cachorro.fome++;
    fomeAnimal.innerText = cachorro.fome;

    atualizaHumor();
  }

  if (cachorro.felicidade > 0) {
    cachorro.felicidade--;
    felicidaAnimal.innerText = cachorro.felicidade;
    atualizaHumor();
  }
}, 1000);
