function Calculadora() {
  
    this.display = document.querySelector(".display"),
    this.btnClear = document.querySelector(".btn-clear"),

this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };
this.pressionaEnter = () => {
      // Mude de this.display para document
      document.addEventListener("keyup", (e) => { 
        if (e.key === 'Enter') {
          this.realizaConta();
        }
      });
    };

    this.clearDisplay = () => {
      this.display.value = "";
    },
    this.apagaUm = () => {
      this.display.value = this.display.value.slice(0, -1);
    },
    this.realizaConta = () => {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          alert("conta invalida");
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert("conta invalida");
        return;
      }
    },

   this.cliqueBotoes = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.btnParaDisplay(el.innerText);
      if (el.classList.contains("btn-clear")) this.clearDisplay();
      if (el.classList.contains("btn-del")) this.apagaUm();
      if (el.classList.contains("btn-eq")) this.realizaConta();
      
      // Dica: focar no display após clicar para o Enter funcionar melhor
      this.display.focus();
    });
  };

  this.btnParaDisplay = (valor) => this.display.value += valor;
}

// Para usar, você PRECISA da palavra 'new'
const calculadora = new Calculadora();
calculadora.inicia();