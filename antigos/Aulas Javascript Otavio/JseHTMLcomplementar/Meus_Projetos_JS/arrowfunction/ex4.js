// Modo Antigo
function verificarClima(temperatura) {
    if (temperatura > 25) {
        return "Calor";
    } else {
        return "Frio";
    }
}

// Sua vez (Tente fazer em 1 linha!):
const verificarClimaNew = (temp) => temp > 25 ? 'calor' :  'frio' 
console.log(verificarClimaNew(10))