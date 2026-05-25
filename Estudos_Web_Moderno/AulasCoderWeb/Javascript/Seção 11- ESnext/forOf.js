for (let letras of "cod3r") {
  console.log(letras);
}

const assustosEcma = ["Map", "Set", "promisse"];

for (let i in assustosEcma) {
  console.log(i);
}

for (let assunto of assustosEcma) {
  console.log(assunto);
}

const assuntosmap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promisse", { abordado: false }],
]);

for (let assunto of assuntosmap) {
  console.log(assunto);
}

for (let assunto of assuntosmap.keys()) {
  console.log(assunto);
}
for (let assunto of assuntosmap.values()) {
  console.log(assunto);
}
for (let [ch, vl] of assuntosmap.entries()) {
  console.log(ch, vl);
}

const s = new Set (['a','b','c'])
for (let letra of s){
    console.log(letra)
}