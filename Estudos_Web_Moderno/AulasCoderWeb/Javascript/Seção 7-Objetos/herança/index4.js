function MeuObjeto() {} // Construtor: o 'new' atrela o protótipo da instância a MeuObjeto.prototype

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

const proto1 = Object.getPrototypeOf(obj1);
const proto2 = Object.getPrototypeOf(obj2);

console.log(proto1 === proto2); // true: instâncias do mesmo construtor compartilham o protótipo
console.log(MeuObjeto.prototype === proto2); // true: o protótipo da instância é o .prototype do construtor

// Adicionando propriedades/métodos ao protótipo ("Pai")
MeuObjeto.prototype.nome = "Anon";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia, meu nome é ${this.nome}`);
};

// HERANÇA: obj1 não tem 'nome' nem 'falar' próprios, então busca e usa os do protótipo.
obj1.falar(); // Saída: "Bom dia, meu nome é Anon"

// SOBRESCRITA (Shadowing): obj2 tem 'nome' próprio, que tem prioridade sobre o do protótipo.
obj2.nome = "Rafael";
obj2.falar(); // Saída: "Bom dia, meu nome é Rafael"

const obj3 = {}; // Nasce como objeto literal (protótipo padrão: Object.prototype)

// Mudar o protótipo de um objeto já criado:
Object.setPrototypeOf(obj3, MeuObjeto.prototype);
obj3.nome = "Objeto 3";

// Agora o obj3 herda de MeuObjeto.prototype e também sabe falar.
obj3.falar(); // Saída: "Bom dia, meu nome é Objeto 3"

//resumo

// 1. A instância aponta para o .prototype da função que a criou.
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype); // true

// 2. MeuObjeto é uma FUNÇÃO. Logo, o protótipo dele aponta para o construtor de funções do JS.
// É por isso que toda função no JS já nasce com métodos embutidos como .call(), .bind() e .apply().
console.log(MeuObjeto.__proto__ === Function.prototype); // true

// 3. Function.prototype é um OBJETO. Logo, o protótipo dele aponta para o "Pai de Todos" os objetos do JS.
// (Se você testar Object.prototype.__proto__, o resultado será 'null', que é o topo absoluto da cadeia).
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__);
