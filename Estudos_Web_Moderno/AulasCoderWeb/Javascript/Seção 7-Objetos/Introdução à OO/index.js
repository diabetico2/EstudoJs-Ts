/**
 * PARADIGMAS DE PROGRAMAÇÃO
 */

// --- Procedural ---
// O foco são as funções que manipulam dados externos.
// A função é o centro do mundo.
processamento(v1, v2, v3); 

// --- Orientação a Objetos (OO) ---
// O foco passa a ser o OBJETO, que agrupa dados (atributos) 
// e comportamentos (métodos) em uma única unidade.
const objeto = {
  v1,
  v2,
  v3,
  processamento() {
    // Aqui o comportamento pertence ao dono dos dados
    console.log("Processando dados do próprio objeto...");
  },
};

objeto.processamento(); // Invocação: O objeto é o protagonista.

/* ---------------------------------------------------------
  QUATRO PILARES DA POO (Princípios Importantes)
  ---------------------------------------------------------

  1. ABSTRAÇÃO: 
     - Traduzir um objeto do mundo real para o código de forma simplificada.
     - Pegar apenas o que é necessário para o sistema (ex: um Carro para o Detran 
       precisa de Placa; para um Jogo, precisa de Velocidade).

  2. ENCAPSULAMENTO:
     - Esconder detalhes internos (complexidade) e proteger os dados.
     - O objeto expõe apenas o necessário (interface) e mantém o "motor" escondido.
     - Ajuda a diminuir a dependência entre as partes do código (baixo acoplamento).

  3. HERANÇA (Prototype):
     - Capacidade de um objeto "filho" herdar atributos e métodos de um objeto "pai".
     - Baseado na relação "é um" (ex: Um Carro "é um" Veículo).
     - Foco total em REUSO de código.

  4. POLIMORFISMO:
     - "Múltiplas formas". Um mesmo comando pode ter resultados diferentes.
     - Ex: Você chama o método .mover(). Se for um Carro, ele acelera; 
       se for um Peixe, ele nada. A interface é a mesma, o comportamento varia.
*/