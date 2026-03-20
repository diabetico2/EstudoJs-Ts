📄 Resumo: Parâmetros da Função e Argumentos
Nesta aula, aprendemos que o JavaScript é muito flexível com os parâmetros (o que a função pede) e argumentos (o que enviamos).

1. O objeto arguments (Jeito Clássico)

Disponível apenas em funções declaradas com function.

É uma variável "mágica" que guarda todos os valores enviados para a função, mesmo que você não tenha criado parâmetros para recebê-los.

Nota: Ele parece um array (tem índice e tamanho), mas não é um array de verdade.

Limitação: Não existe em Arrow Functions.

2. O Rest Operator ... (Jeito Moderno)

Usado para pegar "o resto" dos argumentos.

Sintaxe: três pontinhos antes do nome (...numeros).

Ele deve ser sempre o último parâmetro da lista.

Diferente do arguments, ele cria um Array verdadeiro, permitindo usar métodos como .map, .filter, etc.

3. Desestruturação nos Parâmetros

Podemos enviar um Objeto ou Array inteiro para a função, e "desmontá-lo" direto na declaração dos parâmetros.

Exemplo: function({ nome }) extrai apenas a propriedade nome do objeto enviado.