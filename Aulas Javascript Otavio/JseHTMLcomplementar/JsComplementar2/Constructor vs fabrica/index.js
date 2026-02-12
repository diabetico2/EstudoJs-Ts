// --- 1. MODO FACTORY ---
function criaVideo(titulo) {
  return {
    titulo,
    tempo: 0,
    get play() {
      return `Dando play em ${this.titulo}`;
    },

    avancar: function (segundos) {
      this.tempo += segundos;
      console.log(`Avançou para ${this.tempo}s`);
    },
  };
}

// --- 2. MODO CONSTRUCTOR ---
function Video(titulo) {
  this.titulo = titulo;
  this.tempo = 0;
  this.play = () =>{
    return `Dando play em ${this.titulo}`;
  }
  this.avancar = (segundos) =>{
    this.tempo += segundos
    console.log(`Avançou para ${this.tempo}s`)
  }
}

// --- TESTES (Não mexa aqui, eles devem funcionar para os dois) ---

// Teste Factory
const v1 = criaVideo("Javascript Básico");
v1.play;
v1.avancar(20);
console.log(`Factory: ${v1.titulo} está em ${v1.tempo}s`);

console.log("---");

// Teste Constructor
const v2 = new Video("Javascript Avançado"); // Note o NEW aqui
v2.play();
v2.avancar(25);
console.log(`Constructor: ${v2.titulo} está em ${v2.tempo}s`);
