# ANOTAÇÕES DE JAVASCRIPT

## 1. Comparações

```javascript
=     // atribui um valor
==    // compara valor
===   // compara valor e tipo

!=    // diferente
!==   // diferente considerando tipo

>     // maior
<     // menor
>=    // maior ou igual
<=    // menor ou igual
```

Prefira normalmente:

```javascript
===
!==
```

Exemplo:

```javascript
idade === 18
```

---

# 2. `if / else`

### Como usar

Quando o programa precisa decidir entre caminhos.

```javascript
if (condicao) {
    // acontece se verdadeiro
} else {
    // acontece se falso
}
```

Exemplo:

```javascript
if (idade >= 18) {
    console.log("Maior")
} else {
    console.log("Menor")
}
```

---

# 3. Ternário ⭐

É uma versão curta de um `if/else` simples.

### Fórmula

```javascript
condicao ? seVerdadeiro : seFalso
```

Exemplo:

```javascript
const resultado = idade >= 18 ? "Maior" : "Menor"
```

Outro exemplo que você usou:

```javascript
ul.style.display =
    ul.style.display === "none" ? "block" : "none"
```

Use quando a decisão for curta. Se começar a ficar grande, prefira `if/else`.

---

# 4. `switch`

Bom quando uma variável pode ter vários valores específicos.

```javascript
switch (opcao) {
    case 1:
        console.log("Cadastrar")
        break

    case 2:
        console.log("Excluir")
        break

    default:
        console.log("Opção inválida")
}
```

⚠️ `break` impede que continue executando os próximos `case`.

---

# 5. `for`

Use quando você precisa controlar quantidade/índice.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i)
}
```

Leitura:

```text
começa i em 0
enquanto i < 5
executa
aumenta i
```

---

# 6. `while`

Repete **enquanto uma condição for verdadeira**.

```javascript
let numero = 0

while (numero < 5) {
    console.log(numero)
    numero++
}
```

Use quando você não necessariamente sabe antecipadamente quantas repetições haverá.

---

# 7. `do...while`

Parecido com `while`, mas executa **pelo menos uma vez**.

```javascript
do {
    // código
} while (condicao)
```

Porque a condição só é testada depois.

---

# 8. `for...of` ⭐

Essa é a que você acabou de usar.

Serve para percorrer os **valores** de algo iterável, principalmente arrays.

### Fórmula

```javascript
for (const item of array) {
    // usa item
}
```

Exemplo simples:

```javascript
const nomes = ["Ana", "João", "Carlos"]

for (const nome of nomes) {
    console.log(nome)
}
```

### Array de objetos

```javascript
const carrinho = [
    { nome: "Cabo USB", preco: 20 },
    { nome: "Mouse", preco: 80 }
]
```

Use:

```javascript
for (const produto of carrinho) {
    console.log(produto.nome)
}
```

Aqui:

```text
produto      → objeto inteiro
produto.nome → propriedade nome
produto.preco → propriedade preco
```

⭐ **O nome `produto` não é obrigatório. É só um nome que escolhemos para representar cada elemento.**

Isto funciona:

```javascript
for (const x of carrinho) {
    console.log(x.nome)
}
```

Mas é muito menos legível.

---

# 9. `for...in`

Não confundir com `for...of`.

`for...in` percorre **chaves/propriedades**.

Exemplo:

```javascript
const pessoa = {
    nome: "Ana",
    idade: 20
}
```

```javascript
for (const chave in pessoa) {
    console.log(chave)
}
```

Resultado:

```text
nome
idade
```

Para pegar os valores:

```javascript
for (const chave in pessoa) {
    console.log(pessoa[chave])
}
```

### Resumo ⭐

```text
for...of → VALORES
for...in → CHAVES
```

Em arrays, normalmente prefira `for...of`.

---

# 10. `forEach`

Percorre cada elemento de um array.

```javascript
array.forEach(item => {
    console.log(item)
})
```

Com objetos:

```javascript
carrinho.forEach(produto => {
    console.log(produto.nome)
})
```

Diferença simples:

```text
for...of → laço
forEach → método do array
```

---

# 11. Função tradicional

```javascript
function soma(a, b) {
    return a + b
}
```

Usando:

```javascript
const resultado = soma(2, 3)
```

---

# 12. `return` x `console.log` ⭐

Você já confundiu isso, então vale deixar destacado.

```javascript
return
```

**devolve um valor** para quem chamou a função.

```javascript
function dobro(n) {
    return n * 2
}

const resultado = dobro(5)
```

Já:

```javascript
console.log()
```

apenas **exibe algo no console**.

```javascript
function dobro(n) {
    console.log(n * 2)
}
```

Resumo:

```text
return      → devolve
console.log → mostra
```

---

# 13. Arrow Function ⭐

Forma menor de escrever funções.

Tradicional:

```javascript
function dobro(n) {
    return n * 2
}
```

Arrow:

```javascript
const dobro = n => n * 2
```

Com vários parâmetros:

```javascript
const soma = (a, b) => a + b
```

Com várias linhas:

```javascript
const soma = (a, b) => {
    const resultado = a + b
    return resultado
}
```

⚠️ Se usar `{}`, normalmente precisa escrever `return` explicitamente.

---

# 14. Parâmetro padrão

Define um valor caso nenhum seja informado.

```javascript
function soma(a = 0, b = 0) {
    return a + b
}
```

Assim:

```javascript
soma()
```

não resulta em `NaN` por causa de argumentos ausentes.

---

# 15. Rest `...`

Permite receber vários argumentos.

```javascript
function soma(...numeros) {
    console.log(numeros)
}
```

Chamando:

```javascript
soma(1, 2, 3, 4)
```

`numeros` será:

```javascript
[1, 2, 3, 4]
```

Pense:

> **Rest junta.**

---

# 16. Spread `...`

Usa os mesmos `...`, mas para **espalhar** valores.

```javascript
const a = [1, 2]
const b = [...a, 3, 4]
```

Resultado:

```javascript
[1, 2, 3, 4]
```

Objeto:

```javascript
const pessoa = { nome: "Ana" }

const novaPessoa = {
    ...pessoa,
    idade: 20
}
```

Resumo ⭐:

```text
Rest   → junta
Spread → espalha
```

---

# 17. Callback ⭐

Callback é **uma função passada para outra função** para ser executada por ela.

Exemplo:

```javascript
function executar(funcao) {
    funcao()
}

executar(() => console.log("Olá"))
```

A Arrow Function:

```javascript
() => console.log("Olá")
```

é a callback.

Você encontra callbacks em:

```javascript
forEach()
map()
filter()
setTimeout()
```

entre vários outros.

---

# 18. Closure ⭐

Closure é quando uma função continua tendo acesso às variáveis do lugar onde foi criada.

```javascript
function criarContador() {
    let numero = 0

    return function() {
        numero++
        return numero
    }
}
```

```javascript
const contador = criarContador()

contador() // 1
contador() // 2
contador() // 3
```

Mesmo depois que `criarContador()` terminou, a função interna continua lembrando de:

```javascript
numero
```

Pense:

> **Closure = função que mantém acesso ao seu ambiente de criação.**

---

# 19. `this` ⭐

`this` representa um contexto/objeto relacionado à execução da função.

Exemplo:

```javascript
const pessoa = {
    nome: "Ana",

    falar() {
        console.log(this.nome)
    }
}
```

Aqui:

```javascript
this.nome
```

significa:

```javascript
pessoa.nome
```

No HTML que você estudou:

```html
<span onclick="teste(this)">Backend</span>
```

o `this` representa **o próprio `<span>` clicado**.

⚠️ Arrow Function não cria seu próprio `this`.

---

# 20. `bind`

Serve para fixar qual objeto será o `this`.

```javascript
function falar() {
    console.log(this.nome)
}

const pessoa = {
    nome: "Ana"
}

const funcao = falar.bind(pessoa)
```

Agora:

```javascript
funcao()
```

usa `pessoa` como `this`.

---

# 21. `call` e `apply`

Também permitem definir o `this`.

### `call`

```javascript
funcao.call(objeto, argumento1, argumento2)
```

### `apply`

```javascript
funcao.apply(objeto, [argumento1, argumento2])
```

Diferença:

```text
call  → argumentos separados
apply → argumentos em array
```

---

# 22. Objeto literal

```javascript
const pessoa = {
    nome: "Ana",
    idade: 20
}
```

Acessar:

```javascript
pessoa.nome
```

ou:

```javascript
pessoa["nome"]
```

O primeiro é o mais comum.

O segundo é útil quando o nome da propriedade está em uma variável:

```javascript
const propriedade = "nome"

console.log(pessoa[propriedade])
```

---

# 23. Factory Function ⭐

Uma Factory é uma função usada para **fabricar objetos**.

```javascript
function criarPessoa(nome, idade) {
    return {
        nome,
        idade
    }
}
```

```javascript
const p1 = criarPessoa("Ana", 20)
const p2 = criarPessoa("Carlos", 25)
```

Cada chamada cria um novo objeto.

---

# 24. Função construtora ⭐

Outra maneira de criar objetos.

```javascript
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}
```

Usando:

```javascript
const pessoa = new Pessoa("Ana", 20)
```

O `new` cria um novo objeto e faz `this` apontar para ele.

---

# 25. Classe

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(this.nome)
    }
}
```

Criando:

```javascript
const pessoa = new Pessoa("Ana", 20)
```

---

# 26. `constructor` ⭐

É um método especial das classes.

Ele é executado automaticamente quando usamos:

```javascript
new Pessoa(...)
```

Exemplo:

```javascript
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}
```

Quando fazemos:

```javascript
new Pessoa("Ana")
```

o JavaScript chama o `constructor("Ana")`.

Use principalmente para **inicializar os dados do objeto**.

---

# 27. Herança ⭐

Permite criar uma classe baseada em outra.

```javascript
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}
```

```javascript
class Aluno extends Pessoa {
    constructor(nome, curso) {
        super(nome)
        this.curso = curso
    }
}
```

### `extends`

```javascript
extends Pessoa
```

significa:

> `Aluno` herda de `Pessoa`.

### `super`

```javascript
super(nome)
```

chama o `constructor` da classe pai.

Resumo:

```text
extends → herdar
super   → acessar/chamar classe pai
```

---

# 28. Getter e Setter

Permitem controlar acesso e alteração de uma propriedade.

```javascript
class Pessoa {
    constructor(nome) {
        this._nome = nome
    }

    get nome() {
        return this._nome
    }

    set nome(valor) {
        this._nome = valor
    }
}
```

Uso:

```javascript
pessoa.nome
```

e:

```javascript
pessoa.nome = "Carlos"
```

Por fora parece propriedade, mas internamente funções são executadas.

---

# 29. Evitar alteração de objetos

Uma forma importante:

```javascript
Object.freeze(objeto)
```

Exemplo:

```javascript
const pessoa = {
    nome: "Ana"
}

Object.freeze(pessoa)
```

Depois disso, alterações no objeto são impedidas.

---

# 30. `Object.keys`, `values` e `entries`

Objeto:

```javascript
const pessoa = {
    nome: "Ana",
    idade: 20
}
```

Chaves:

```javascript
Object.keys(pessoa)
```

```javascript
["nome", "idade"]
```

Valores:

```javascript
Object.values(pessoa)
```

```javascript
["Ana", 20]
```

Pares:

```javascript
Object.entries(pessoa)
```

aproximadamente:

```javascript
[
    ["nome", "Ana"],
    ["idade", 20]
]
```

---

# 31. Destructuring

Serve para retirar propriedades/valores facilmente.

Objeto:

```javascript
const pessoa = {
    nome: "Ana",
    idade: 20
}
```

```javascript
const { nome, idade } = pessoa
```

Agora existem:

```javascript
nome
idade
```

Array:

```javascript
const [primeiro, segundo] = [10, 20]
```

---

# 32. `.length` ⭐

Quantidade de elementos:

```javascript
array.length
```

Strings também:

```javascript
nome.length
```

⚠️ Erro que você já cometeu:

```text
length ✅
lenght ❌
```

---

# 33. Métodos básicos de Array

Adicionar no final:

```javascript
array.push(valor)
```

Remover do final:

```javascript
array.pop()
```

Adicionar no começo:

```javascript
array.unshift(valor)
```

Remover do começo:

```javascript
array.shift()
```

---

# 34. `map()` ⭐

Use quando quiser **transformar cada elemento e criar um novo array**.

```javascript
const numeros = [1, 2, 3]

const dobro = numeros.map(numero => numero * 2)
```

Resultado:

```javascript
[2, 4, 6]
```

Pense:

> `map` → transformar.

---

# 35. `filter()` ⭐

Use para selecionar apenas elementos que atendem uma condição.

```javascript
const numeros = [1, 2, 3, 4]

const pares = numeros.filter(numero => numero % 2 === 0)
```

Resultado:

```javascript
[2, 4]
```

Pense:

> `filter` → selecionar.

---

# 36. `reduce()` ⭐

Usado para pegar vários elementos e produzir um resultado acumulado.

```javascript
const numeros = [10, 20, 30]
```

```javascript
const total = numeros.reduce((acumulador, atual) => {
    return acumulador + atual
}, 0)
```

Resultado:

```text
60
```

Como funciona:

```text
acumulador começa em 0

0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
```

Fórmula:

```javascript
array.reduce((acumulador, atual) => {
    return novoAcumulador
}, valorInicial)
```

Pense:

> `reduce` → acumular/reduzir vários valores para um resultado.

---

# 37. `concat()`

Junta arrays:

```javascript
const a = [1, 2]
const b = [3, 4]

const resultado = a.concat(b)
```

Resultado:

```javascript
[1, 2, 3, 4]
```

---

# 38. `flatMap()`

Faz uma transformação parecida com `map` e depois achata o resultado.

```javascript
const numeros = [1, 2]

const resultado = numeros.flatMap(n => [n, n * 2])
```

Resultado:

```javascript
[1, 2, 2, 4]
```

É mais específico; não precisa decorar agora.

---

# 39. `find()`

Encontra o **primeiro elemento** que passa na condição.

```javascript
const produto = carrinho.find(p => p.preco > 100)
```

Retorna o primeiro produto cujo preço seja maior que 100.

---

# 40. `some()` e `every()`

### `some`

Pergunta se **pelo menos um** atende:

```javascript
numeros.some(n => n > 10)
```

### `every`

Pergunta se **todos** atendem:

```javascript
numeros.every(n => n > 0)
```

---

# 41. JSON ⭐

JSON é muito usado para enviar/guardar dados.

Objeto JavaScript:

```javascript
const pessoa = {
    nome: "Ana"
}
```

Objeto → JSON:

```javascript
JSON.stringify(pessoa)
```

JSON → objeto:

```javascript
JSON.parse(json)
```

Resumo:

```text
stringify → objeto para texto JSON
parse     → JSON para objeto
```

---

# 42. Node — `require`

No padrão CommonJS:

Importar outro arquivo:

```javascript
const modulo = require("./arquivo")
```

Exportar:

```javascript
module.exports = algumaCoisa
```

Exemplo:

```javascript
module.exports = {
    soma,
    subtracao
}
```

Outro arquivo:

```javascript
const calculadora = require("./calculadora")
```

---

# 43. `package.json`

Arquivo de configuração do projeto Node.

Guarda coisas como:

```text
nome
versão
dependências
scripts
```

Exemplo:

```json
"scripts": {
    "start": "node index.js"
}
```

Então pode executar:

```text
npm start
```

---

# 44. `setTimeout`

Executa uma função **uma vez após determinado tempo**.

```javascript
setTimeout(() => {
    console.log("Executou")
}, 1000)
```

`1000 ms = 1 segundo`.

---

# 45. `setInterval`

Executa repetidamente:

```javascript
setInterval(() => {
    console.log("Executou")
}, 1000)
```

Executa a cada segundo.

---

# 46. Promise ⭐⭐⭐

Essa merece explicação.

Uma Promise representa um valor que **ainda não está disponível**, porque alguma operação precisa terminar primeiro.

Por exemplo:

```text
pedir dados na internet
        ↓
precisa esperar
        ↓
dados chegam
```

A Promise pode estar:

```text
pending   → esperando
fulfilled → terminou com sucesso
rejected  → deu erro
```

Criando:

```javascript
const promessa = new Promise((resolve, reject) => {
    resolve("Deu certo")
})
```

Se funcionar:

```javascript
resolve(valor)
```

Se der erro:

```javascript
reject(erro)
```

Para usar:

```javascript
promessa
    .then(resultado => {
        console.log(resultado)
    })
    .catch(erro => {
        console.log(erro)
    })
```

Pense:

```text
Promise
   ↓
espera algo acontecer
   ↓
resolve → .then()
reject  → .catch()
```

---

# 47. Encadeamento de `.then()`

Cada `.then()` pode receber o resultado anterior.

```javascript
buscarDados()
    .then(dados => tratar(dados))
    .then(resultado => console.log(resultado))
    .catch(erro => console.log(erro))
```

Foi exatamente o padrão que você viu:

```javascript
fetch(url)
    .then(resp => resp.text())
    .then(html => conteudo.innerHTML = html)
```

Fluxo:

```text
fetch
 ↓
resposta
 ↓
transforma em texto
 ↓
usa o HTML
```

---

# 48. `async / await` ⭐⭐⭐

É outra maneira de trabalhar com Promises, geralmente mais fácil de ler.

Com `.then()`:

```javascript
fetch(url)
    .then(resp => resp.text())
    .then(texto => console.log(texto))
```

Com `async/await`:

```javascript
async function carregar() {
    const resp = await fetch(url)
    const texto = await resp.text()

    console.log(texto)
}
```

### `async`

Indica que aquela função trabalha de forma assíncrona e retorna uma Promise.

### `await`

Espera uma Promise terminar **antes de seguir para a próxima linha dentro daquela função**.

Pense:

```text
await → espere o resultado chegar aqui
```

---

# 49. `try / catch`

Muito usado com `async/await`.

```javascript
try {
    const resultado = await buscar()
} catch (erro) {
    console.log(erro)
}
```

Pense:

```text
try   → tente executar
catch → se ocorrer erro
```

---

# 50. `Set`

Estrutura parecida com coleção, mas **não aceita valores repetidos**.

```javascript
const numeros = new Set()

numeros.add(1)
numeros.add(1)
numeros.add(2)
```

Fica:

```text
1
2
```

Métodos:

```javascript
set.add(valor)
set.has(valor)
set.delete(valor)
set.size
```

---

# 51. DOM — selecionar elementos ⭐

Um elemento:

```javascript
document.querySelector(".classe")
```

Vários:

```javascript
document.querySelectorAll(".classe")
```

Por atributo:

```javascript
document.querySelectorAll("[wm-folder]")
```

Por ID:

```javascript
document.getElementById("conteudo")
```

Resumo:

```text
querySelector    → primeiro
querySelectorAll → todos
getElementById   → elemento pelo ID
```

---

# 52. Percorrer elementos encontrados

```javascript
document.querySelectorAll("[wm-folder]")
    .forEach(folder => {
        // folder é cada elemento encontrado
    })
```

Aqui novamente:

```javascript
folder
```

é só o **nome que você escolheu para representar cada elemento**.

Poderia ser:

```javascript
.forEach(elemento => {})
```

Mas `folder` deixa o código mais claro.

---

# 53. Eventos

```javascript
elemento.onclick = function(e) {
    // código
}
```

`e` representa o evento que ocorreu.

Também pode aparecer:

```html
<span onclick="teste(this)">Clique</span>
```

Nesse caso:

```text
this → elemento clicado
```

---

# 54. `preventDefault()`

Impede o comportamento padrão.

```javascript
e.preventDefault()
```

Exemplo: um `<a>` normalmente abre outra página.

Com:

```javascript
e.preventDefault()
```

você impede isso e decide via JavaScript o que acontecerá.

---

# 55. `nextElementSibling` ⭐

Pega o próximo elemento HTML que está no mesmo nível.

```html
<span>Backend</span>
<ul>...</ul>
```

```javascript
const lista = span.nextElementSibling
```

`lista` passa a representar a `<ul>`.

---

# 56. Alterar `display`

```javascript
elemento.style.display = "none"
```

esconde.

```javascript
elemento.style.display = "block"
```

mostra.

Alternar:

```javascript
const d = elemento.style.display

elemento.style.display =
    d === "none" ? "block" : "none"
```

---

# 57. `innerHTML` x `textContent`

### `innerHTML`

Pode colocar HTML:

```javascript
elemento.innerHTML = "<strong>Olá</strong>"
```

### `textContent`

Coloca somente texto:

```javascript
elemento.textContent = "Olá"
```

---

# 58. `getAttribute()`

Pega o valor de um atributo.

HTML:

```html
<a wm-nav="home.html">Home</a>
```

JavaScript:

```javascript
link.getAttribute("wm-nav")
```

Resultado:

```text
home.html
```

---

# 59. `fetch()` ⭐⭐⭐

Usado para fazer uma requisição/buscar algum recurso.

```javascript
fetch(url)
    .then(resp => resp.text())
    .then(texto => {
        console.log(texto)
    })
```

Quando esperamos JSON:

```javascript
fetch(url)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
    })
```

Fluxo:

```text
fetch(url)
    ↓
Response
    ↓
.text() ou .json()
    ↓
dados utilizáveis
```

---

# 60. Página de erros comuns ⭐⭐⭐

Eu criaria um arquivo separado chamado algo como:

```text
ERROS_QUE_EU_SEMPRE_COMETO.md
```

E colocaria:

```text
length ✅
lenght ❌
```

```text
=   atribui
=== compara
```

```text
return      → devolve
console.log → exibe
```

```text
for...of → valores
for...in → chaves
```

```text
produto → objeto inteiro
produto.nome → propriedade do objeto
```

```javascript
for (const produto of carrinho) {
    console.log(produto.nome)
}
```

Não confundir com:

```javascript
for (const nome of carrinho) {
    console.log(nome)
}
```

Esse segundo **funciona**, mas `nome` é o objeto inteiro. O nome da variável não escolhe automaticamente uma propriedade.

Outro:

```text
querySelector    → um
querySelectorAll → vários
```

Outro que você já errou:

```javascript
"[wm-folder]" ✅
```

e não:

```javascript
[wm-folder] ❌
```

E:

```text
display = "none"  → esconde
display = "block" → mostra
```

Esse formato no PC provavelmente vai ser até melhor que o caderno, porque você consegue usar **Ctrl + F** e procurar rapidamente coisas como `reduce`, `for of`, `Promise`, `constructor`, etc.
