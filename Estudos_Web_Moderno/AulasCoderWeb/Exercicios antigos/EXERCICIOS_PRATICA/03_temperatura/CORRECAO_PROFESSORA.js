// ============================================================
// CORREÇÃO DO EXERCÍCIO 03 - CONVERTER TEMPERATURA
// ============================================================

// SOLUÇÃO SIMPLES:
function converterCelsiusParaFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit.toFixed(2);
}

// OU RETORNANDO COMO NÚMERO:
function converterCelsiusParaFahrenheit_v2(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return parseFloat(fahrenheit.toFixed(2));
}

// OU UMA LINHA (muito conciso):
const converter_v3 = (c) => parseFloat(((c * 9/5) + 32).toFixed(2));

// ============================================================
// TESTE:
// ============================================================
console.log(converterCelsiusParaFahrenheit(0));    // "32.00"
console.log(converterCelsiusParaFahrenheit(25));   // "77.00"
console.log(converterCelsiusParaFahrenheit(100));  // "212.00"
console.log(converterCelsiusParaFahrenheit_v2(25)); // 77 (número, não string)

// ============================================================
// IMPORTANTE: .toFixed() retorna STRING!
// ============================================================
// 
// console.log(typeof (77).toFixed(2));  // "string"
// console.log(typeof parseFloat("77.00")); // "number"
//
// Isso é importante para operações futuras:
// "77.00" + 1 = "77.001" (concatenação!)
// 77 + 1 = 78 (adição!)
//
// ============================================================
// VERSÃO MAIS ROBUSTA (com validação):
// ============================================================

function converterTemperaturaSegura(celsius) {
  // Validação 1: É número?
  if (typeof celsius !== 'number') {
    return "Erro: entrada deve ser um número!";
  }
  
  // Validação 2: Valores físicos razoáveis?
  // (opcional, mas bom para dados do mundo real)
  if (celsius < -273.15) {
    return "Erro: temperatura abaixo do zero absoluto!";
  }
  
  const fahrenheit = (celsius * 9/5) + 32;
  return parseFloat(fahrenheit.toFixed(2));
}

// ============================================================
// ALTERNATIVAS INTERESSANTES:
// ============================================================
// 
// Se quisesse suportar MÚLTIPLAS conversões:
//
function converterTemperatura(valor, de, para) {
  let celsius = valor;
  
  // Converter para Celsius como intermediário
  if (de === 'F') {
    celsius = (valor - 32) * 5/9;
  } else if (de === 'K') {
    celsius = valor - 273.15;
  }
  
  // Converter de Celsius para destino
  if (para === 'C') return parseFloat(celsius.toFixed(2));
  if (para === 'F') return parseFloat(((celsius * 9/5) + 32).toFixed(2));
  if (para === 'K') return parseFloat((celsius + 273.15).toFixed(2));
}

console.log(converterTemperatura(0, 'C', 'F'));    // 32
console.log(converterTemperatura(32, 'F', 'C'));   // 0
console.log(converterTemperatura(25, 'C', 'K'));   // 298.15

// ============================================================
// PARABÉNS! Você aprendeu:
// ✅ Conversão de unidades com fórmulas
// ✅ Number.toFixed() para arredondar
// ✅ parseFloat() para converter de novo pra número
// ============================================================
