// ============================================================
// CORREÇÃO DO EXERCÍCIO 08 - PESSOA COM GETTERS E SETTERS
// ============================================================

// SOLUÇÃO COMPLETA:
const pessoa = {
  _nome: 'João',
  _idade: 25,
  
  // GETTER: acessar como propriedade
  get idade() {
    return this._idade;
  },
  
  // SETTER: atribuir como propriedade com validação
  set idade(valor) {
    if (valor >= 0 && valor <= 150) {
      this._idade = valor;
    } else {
      console.log("Idade inválida!");
    }
  },
  
  // MÉTODO: função normal com ()
  apresentar() {
    return `Olá, meu nome é ${this._nome} e tenho ${this._idade} anos`;
  }
};

// ============================================================
// USO:
// ============================================================
console.log(pessoa.idade);              // 25 (getter - leitura)
pessoa.idade = 30;                      // setter - escrita
console.log(pessoa.idade);              // 30
pessoa.idade = 200;                     // Invalid! "Idade inválida"
console.log(pessoa.apresentar());       // "Olá, meu nome..."

// ============================================================
// ENTENDENDO GETTERS E SETTERS
// ============================================================
// 
// GETTER (get):
// - Você LEIA como propriedade: objeto.propriedade
// - Retorna um valor
// - Com lógica diferente se necessário
//
// SETTER (set):
// - Você ESCREVE como propriedade: objeto.propriedade = valor
// - Recebe um valor
// - Pode VALIDAR antes de armazenar
//
// MÉTODO:
// - Você CHAMA com parênteses: objeto.metodo()
// - Executa uma ação
// - Pode retornar ou não
//
// ============================================================
// DIFERENÇAS:
// ============================================================
// 
// // Sem getter/setter (propriedade comum):
// const obj1 = { idade: 25 };
// obj1.idade = 200; // Aceita qualquer valor!
//
// // Com getter/setter (mais seguro):
// const obj2 = { 
//   _idade: 25,
//   set idade(v) { if (v <= 150) this._idade = v; }
// };
// obj2.idade = 200; // Rejeita!
//
// ============================================================
// POR QUE _idade (com underscore)?
// ============================================================
// 
// A convenção _propriedade significa "privada" em JavaScript
// Tecnicamente, ainda é pública (não há privacy real)
// Mas é um sinal: "não acesse diretamente!"
//
// ✅ USE: pessoa.idade (através do getter)
// ❌ NÃO USE: pessoa._idade (diretamente)
//
// ============================================================
// VERSÃO MAIS ROBUSTA:
// ============================================================

const pessoaMelhor = {
  _nome: '',
  _idade: 0,
  
  constructor(nome, idade) {
    this._nome = nome;
    this._idade = idade;
  },
  
  get nome() {
    return this._nome;
  },
  
  set nome(valor) {
    if (typeof valor === 'string' && valor.length > 0) {
      this._nome = valor;
    } else {
      console.log("Nome inválido!");
    }
  },
  
  get idade() {
    return this._idade;
  },
  
  set idade(valor) {
    if (typeof valor === 'number' && valor >= 0 && valor <= 150) {
      this._idade = valor;
    } else {
      console.log("Idade deve ser número entre 0 e 150!");
    }
  },
  
  apresentar() {
    return `${this._nome} tem ${this._idade} anos`;
  },
  
  fazerAniversario() {
    this._idade++;
    console.log(`${this._nome} fez aniversário! Agora tem ${this._idade} anos`);
  }
};

// ============================================================
// COMPARAR: Getter vs Método
// ============================================================
// 
// // Opção 1: Getter
// const obj1 = {
//   _data: new Date(),
//   get ano() { return this._data.getFullYear(); }
// };
// console.log(obj1.ano);  // 2026 (parece propriedade)
//
// // Opção 2: Método
// const obj2 = {
//   _data: new Date(),
//   obterAno() { return this._data.getFullYear(); }
// };
// console.log(obj2.obterAno());  // 2026 (parece ação)
//
// Getter é melhor quando é simples leitura!
// Método é melhor quando é computação pesada ou ação complexa!
//
// ============================================================
// PARABÉNS! Você aprendeu:
// ✅ Getters (get) - leitura com validação
// ✅ Setters (set) - escrita com validação
// ✅ Diferença entre getter/setter e método
// ✅ A convenção _propriedade (privada)
// ✅ Usar 'this' para acessar propriedades do objeto
// ============================================================
