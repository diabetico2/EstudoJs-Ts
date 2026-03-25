// Script: Exemplo de switch para verificação de frutas.
// Variável: `fruta` (String)
// Saída: Mensagem informando disponibilidade ou aviso padrão.
const fruta = "maa";
let temFruta;

switch (fruta) {
  case 'maça':
    temFruta = "Não vendemos esta fruta aqui";
    break;
  case 'kiwi':
    temFruta = "Estamos com escassez de kiwis";
    break;
  case 'melancia':
    temFruta = "Aqui está, são 3 reais o quilo";
    break;
  default:
    console.log("não temos isso");
    break;
}

console.log(temFruta);
