const medidaProduto = "Largura: 2,5m"; // Voltei o "m" para o desafio original

// * Perfeito! Entendeu que o .replace() retorna uma nova string e a salvou.
const medidaCorrigida = medidaProduto.replace(",", ".");

//! Ponto Crítico: O perigo do "Número Mágico" com .substring()
//  O seu uso do .substring(9, 12) funciona PARA ESTE CASO ESPECÍFICO.
//  Mas, e se a string fosse "Largura: 12,5m" ou "Item: 2,5m"? Seu código quebraria, pois os índices mudariam.
//  Usar números "mágicos" como (9, 12) torna o código frágil.

// ? Como fazer de um jeito que não quebra? Usando .split()!
//   O .split() é muito mais poderoso para extrair informações.

// --------------------------------------------------------------------------
// TODO: Versão Mais Robusta (O jeito profissional de resolver)
// --------------------------------------------------------------------------

// 1. Primeiro, vamos quebrar a string no ": " para separar o texto do valor.
const partes = medidaCorrigida.split(': '); // Isso cria um Array: ['Largura', '2.5m']
const valorComUnidade = partes[1]; // Pegamos o segundo elemento: "2.5m"

// 2. Agora, vamos remover a unidade "m" do final.
const valorPuroString = valorComUnidade.replace('m', ''); // Resultado: "2.5"

// 3. E finalmente, convertemos para número.
const raioFinal = Number(valorPuroString);

console.log("Número extraído de forma robusta:", raioFinal);

// * O cálculo da área usando Math.PI e Math.pow está perfeito!
const area = Math.PI * Math.pow(raioFinal, 2);

// ? Dica extra: você pode formatar o resultado final também!
console.log(`A área final do produto é de ${area.toFixed(3)} metros quadrados.`);