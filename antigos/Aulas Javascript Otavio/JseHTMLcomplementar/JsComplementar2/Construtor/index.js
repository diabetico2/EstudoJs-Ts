function Lampada() {
    this.estaLigada = false;

    this.ligar = function() {
        this.estaLigada = true
    };
    
    this.desligar = function(){
        this.estaLigada = false;
    }
}

const minhaLampada = new Lampada(); // Note a palavra NEW
minhaLampada.ligar();
console.log(minhaLampada.estaLigada);
minhaLampada.desligar();
console.log(minhaLampada.estaLigada);