// ============================================================
// CORREÇÃO DO EXERCÍCIO 11 - ANÁLISE DE PROFESSOR
// ============================================================
// Seu código estava MUITO BOM! Aqui estão os pontos:
// ============================================================

const calculadora = {
  _historico: [],

  calcular(v1, tipo, v2) {
    let resultado;
    
    // ✅ CORRETO: Você usou switch para escolher a operação
    // Isso é a forma mais legível para múltiplas opções
    switch (tipo) {
      case "+":
        resultado = v1 + v2;
        break;
      case "-":
        resultado = v1 - v2;
        break;
      case "/":
        resultado = v1 / v2;
        break;
      case "*":
        resultado = v1 * v2;
        break;
      // ⚠️ MELHORIA: Você tinha `default: return 'tipo invalido'`
      // Isso interrompe a função sem guardiar no histórico
      // Melhor seria:
      default:
        console.log("Operador inválido!");
        return null;  // Retorna null para indicar erro, mas não por partes
    }
    
    // ✅ EXCELENTE: Você declarou `resultado` antes do switch
    // Isso garante que ele exista quando for usado depois
    
    // ✅ EXCELENTE: Você usou template literal para guardar a String formatada
    // Isso é exatamente o que foi pedido: "5 + 3 = 8"
    this._historico.push(`${v1} ${tipo} ${v2} = ${resultado}`);
    
    // ✅ CORRETO: Retorna o resultado para o chamador
    return resultado;
  },
  
  get historico() {
    // ✅ CORRETO: Getter simplesmente retorna o array completo
    return this._historico;
  },
};

// ============================================================
// ANÁLISE GERAL:
// ============================================================
// ERROS INICIAIS (que você CORRIGIU):
// ❌ Tinha: calcular(v1, tipo, v2, resultado)  - resultado como parâmetro
// ✅ Agora: calcular(v1, tipo, v2)             - certo!
//
// ❌ Tinha: this._historico.push(resultado)     - só o número
// ✅ Agora: this._historico.push(`${v1} ${tipo} ${v2} = ${resultado}`)  - String!
//
// ❌ Tinha: Não retornava nada após break
// ✅ Agora: return resultado;  - certo!
//
// ============================================================
// SUGESTÕES DE MELHORIA (opcionalais):
// ============================================================
// 1. Você poderia adicionar o operador '%' (módulo) também:
//    case "%":
//      resultado = v1 % v2;
//      break;
//
// 2. Para divisão por zero, você poderia validar:
//    case "/":
//      if (v2 === 0) {
//        console.log("Erro: não pode dividir por zero!");
//        return null;
//      }
//      resultado = v1 / v2;
//      break;
//
// 3. Você poderia adicionar um método para LIMPAR o histórico:
//    limparHistorico() {
//      this._historico = [];
//    }
//
// 4. Você poderia contar quantas operações foram feitas:
//    get totalOperacoes() {
//      return this._historico.length;
//    }
//
// ============================================================
// PARABÉNS! Seu código funciona corretamente!
// ============================================================
