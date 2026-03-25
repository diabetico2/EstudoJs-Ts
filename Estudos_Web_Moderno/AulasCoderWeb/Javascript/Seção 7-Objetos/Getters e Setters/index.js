// ============================================================
// ENTENDENDO GETTERS E SETTERS
// ============================================================

// ⚠️ IMPORTANTE: NÃO É SOBRE ORDEM NO CÓDIGO!
// 
// Getter = função que LÊ um valor (mas parece um atributo)
//          Executado quando você LEIA: console.log(obj.valor)
//
// Setter = função que ESCREVE um valor (mas parece uma atribuição)
//          Executado quando você ESCREVE: obj.valor = 100
//
// A ordem no código não importa! O que importa é o que você FAZE COM o atributo!

// ============================================================
// EXEMPLO: ORDEM NÃO IMPORTA!
// ============================================================

// Aqui coloquei SETTER PRIMEIRO e depois GETTER
// e vai funcionar do mesmo jeito!

const produto = {
  _preco: 0,

  // SETTER vem PRIMEIRO neste exemplo
  set preco(value) {
    console.log(`✍️ Tentando definir preço para R$ ${value}`);
    if (value > 0) {
      this._preco = value;
      console.log(`✅ Preço atualizado!`);
    } else {
      console.log(`❌ Preço deve ser maior que 0`);
    }
  },

  // GETTER vem DEPOIS neste exemplo
  get preco() {
    console.log(`📖 Alguém pediu o preço`);
    return this._preco;
  },
};

console.log('\n--- SETTER PRIMEIRO, DEPOIS GETTER ---');
console.log('Preço atual:', produto.preco); // Getter executado
produto.preco = 20; // Setter executado
console.log('Preço agora:', produto.preco); // Getter executado novamente

// ============================================================
// EXEMPLO DO CÓDIGO ORIGINAL COM LÓGICA
// ============================================================

const sequencia = {
  _valor: 1,

  // GET: retorna o valor e DEPOIS incrementa (pós-incremento)
  get valor() {
    console.log(`📖 Lendo: ${this._valor}`);
    return this._valor++; // retorna 1, depois incrementa para 2
  },

  // SET: só aceita valores MAIORES que o atual (validação!)
  set valor(valor) {
    console.log(`✍️ Tentando atribuir: ${valor}`);
    if (valor > this._valor) {
      this._valor = valor;
      console.log(`✅ Aceito! Novo valor: ${this._valor}`);
    } else {
      console.log(`❌ Rejeitado! ${valor} não é maior que ${this._valor}`);
    }
  },
};

console.log('\n--- EXEMPLO COM LÓGICA ---');

// Chamando GET duas vezes
console.log('Resultado:', sequencia.valor, sequencia.valor);
// 📖 Lendo: 1 → retorna 1, incrementa para 2
// 📖 Lendo: 2 → retorna 2, incrementa para 3
// Resultado: 1 2

// Chamando SET com valor válido
console.log('\nAtribuindo 1000...');
sequencia.valor = 1000;
// ✍️ Tentando atribuir: 1000
// ✅ Aceito! Novo valor: 1000

// Chamando GET
console.log('Resultado:', sequencia.valor, sequencia.valor);
// 📖 Lendo: 1000 → retorna 1000, incrementa para 1001
// 📖 Lendo: 1001 → retorna 1001, incrementa para 1002
// Resultado: 1000 1001

// Tentando SET com valor INVÁLIDO
console.log('\nAtribuindo 900 (valor menor)...');
sequencia.valor = 900;
// ✍️ Tentando atribuir: 900
// ❌ Rejeitado! 900 não é maior que 1002

console.log('Resultado:', sequencia.valor, sequencia.valor);
// 📖 Lendo: 1002 → 1002
// 📖 Lendo: 1003 → 1003
// Resultado: 1002 1003
