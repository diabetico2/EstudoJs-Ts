# COLA DE PROGRAMAÇÃO — JavaScript, Node, ESNext e HTML

> Atualizada até **HTML — Formulário #03** do Curso Web Moderno (Cod3r).
> Feita para consulta rápida. Use **Ctrl + F** e pesquise o nome exato do recurso.

## COMO USAR ESTA COLA

- Procure primeiro pelo tema: JavaScript, HTML, DOM, Node, Express ou CSS.
- Use os blocos curtos para revisão rápida antes de praticar.
- Quando algo virar dúvida, pesquise por termos específicos como `reduce`, `for...of`, `fetch`, `Promise`, `constructor` ou `formaction`.
- Para memorizar, foque nos conceitos com estrela: ⭐

## 🔎 ÍNDICE RÁPIDO PARA CTRL + F

### JavaScript essencial
`if` · `else if` · `switch` · `ternário` · `for` · `for...of` · `for...in` · `forEach` · `while` · `do...while` · `break` · `continue` · `return` · `arrow function` · `callback` · `closure` · `this` · `bind` · `call` · `apply` · `factory` · `constructor` · `class` · `extends` · `super` · `getter` · `setter` · `destructuring` · `rest` · `spread` · `length` · `push` · `pop` · `shift` · `unshift` · `slice` · `splice` · `map()` · `filter()` · `reduce()` · `concat()` · `flatMap()` · `find()` · `some()` · `every()` · `Promise` · `async` · `await` · `try` · `catch` · `throw` · `Set` · `fetch` · `template string` · `Math` · `null` · `undefined` · `hoisting`

### Node / ESNext
`require` · `module.exports` · `exports` · `package.json` · `fs.readFile` · `fs.writeFile` · `global` · `middleware` · `process.stdin` · `process.stdout` · `Map` · `Set` · `Tagged Template` · `Promise` · `async/await`

### DOM / HTML + JS
`querySelector` · `querySelectorAll` · `getElementById` · `onclick` · `preventDefault` · `nextElementSibling` · `style.display` · `innerHTML` · `textContent` · `getAttribute` · `wm-folder` · `wm-nav`

### HTML
`h1` · `p` · `br` · `hr` · `strong` · `em` · `blockquote` · `q` · `abbr` · `cite` · `dfn` · `address` · `del` · `ins` · `s` · `ul` · `ol` · `li` · `dl` · `dt` · `dd` · `a href` · `mailto` · `target="_blank"` · `table` · `caption` · `thead` · `tbody` · `tfoot` · `tr` · `th` · `td` · `colspan` · `rowspan` · `form` · `action` · `method` · `GET` · `POST` · `input` · `name` · `value` · `placeholder` · `password` · `hidden` · `radio` · `checkbox` · `textarea` · `select` · `option` · `multiple` · `formaction`

### JavaScript / DOM / Interações
`Array.from()` · `indexOf()` · `setTimeout()` · `setInterval()` · `window.innerWidth` · `clientWidth` · `style.left` · `style.width` · `oncontextmenu` · `ontimeupdate` · `currentTime` · `duration` · `play()` · `pause()` · `Math.round()` · `Math.floor()` · `toFixed()`

### HTML + mídia / CSS
`img` · `src` · `alt` · `title` · `width` · `height` · `picture` · `source` · `srcset` · `media` · `video` · `controls` · `controlsList` · `wm-slider` · `wm-play` · `wm-pause` · `wm-progresso` · `background-image` · `background-position` · `background-repeat` · `background-size` · `position: absolute`

### Express / servidor
`express` · `app` · `app.use` · `express.urlencoded` · `express.json` · `app.get` · `app.post` · `req` · `res` · `req.body` · `req.params` · `res.send` · `app.listen`

## RESUMO EM 1 MINUTO

- `for...of` → percorre valores de arrays
- `for...in` → percorre propriedades/chaves
- `map()` → transforma
- `filter()` → seleciona
- `reduce()` → acumula
- `Promise` → representa operação assíncrona
- `async/await` → forma mais legível de trabalhar com Promise
- `querySelector()` → seleciona um elemento
- `querySelectorAll()` → seleciona vários
- `fetch()` → busca dados
- `app.get()` / `app.post()` → rotas do servidor
- `req.body` → dados enviados no formulário

---

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


# COMPLEMENTOS DE JAVASCRIPT QUE ESTAVAM FALTANDO

## A. `break` e `continue`

### `break`

Encerra o laço imediatamente.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break
    console.log(i)
}
```

### `continue`

Pula apenas a volta atual e continua o laço.

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue
    console.log(i)
}
```

Resumo:

```text
break    → encerra o laço
continue → pula uma repetição
```

---

## B. Function Declaration x Function Expression

### Declaration

```javascript
function soma(a, b) {
    return a + b
}
```

### Expression

```javascript
const soma = function(a, b) {
    return a + b
}
```

Nos dois casos a função pode ser chamada normalmente:

```javascript
soma(2, 3)
```

---

## C. `arguments`

Em uma função tradicional, `arguments` permite acessar os argumentos enviados, mesmo que eles não tenham sido declarados como parâmetros.

```javascript
function mostrar() {
    console.log(arguments)
}

mostrar(10, 20, 30)
```

⚠️ Arrow Functions não possuem seu próprio `arguments`.

Hoje, quando possível, costuma ser mais claro usar Rest:

```javascript
function mostrar(...valores) {
    console.log(valores)
}
```

---

## D. IIFE

IIFE é uma função criada e executada imediatamente.

```javascript
(function() {
    console.log("Executou")
})()
```

Pense:

```text
cria a função → executa na mesma hora
```

Foi muito usada para criar um escopo isolado e evitar variáveis globais.

---

## E. `slice()` x `splice()` ⭐

### `slice()`

Copia uma parte do array e **não altera o array original**.

```javascript
const numeros = [10, 20, 30, 40]
const parte = numeros.slice(1, 3)
```

Resultado:

```javascript
[20, 30]
```

### `splice()`

Remove, substitui ou adiciona elementos e **altera o array original**.

```javascript
const numeros = [10, 20, 30, 40]
numeros.splice(1, 2)
```

Agora `numeros` fica:

```javascript
[10, 40]
```

Resumo:

```text
slice  → copia, não altera o original
splice → modifica o array original
```

---

## F. Imperativo x Declarativo

### Imperativo

Você descreve passo a passo **como** fazer.

```javascript
let soma = 0

for (const numero of numeros) {
    soma += numero
}
```

### Declarativo

Você descreve mais diretamente **o que** deseja obter.

```javascript
const soma = numeros.reduce((acc, numero) => acc + numero, 0)
```

`map`, `filter` e `reduce` são muito usados em código declarativo.

---

## G. Encadeamento de `filter`, `map` e `reduce` ⭐⭐⭐

Sempre pergunte:

> **O que o método anterior está entregando para o próximo?**

```text
filter → retorna ARRAY
map    → retorna ARRAY
reduce → retorna o valor que foi acumulado
```

Exemplo com objetos:

```javascript
const produtos = [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 }
]
```

Filtrar e pegar nomes:

```javascript
produtos
    .filter(produto => produto.preco <= 100)
    .map(produto => produto.nome)
```

Fluxo:

```text
objetos
↓ filter
objetos filtrados
↓ map
strings com os nomes
```

Somar preços:

```javascript
produtos
    .map(produto => produto.preco)
    .reduce((acc, preco) => acc + preco, 0)
```

Fluxo:

```text
objetos
↓ map
números
↓ reduce
um número final
```

⚠️ Se um `map()` transformar objetos em nomes, o próximo método não poderá mais usar `produto.preco`.

---

## H. `return` dentro de laços ⭐

`return` encerra **a função inteira**, não apenas o `if` ou a volta do `for`.

```javascript
function maiorNumero(numeros) {
    let maior = numeros[0]

    for (const numero of numeros) {
        if (numero > maior) {
            maior = numero
        }
    }

    return maior
}
```

Para cálculos que precisam percorrer o array inteiro, normalmente o `return` fica depois do laço.

---

## I. Variável acumuladora / melhor valor ⭐

Quando uma variável precisa mudar durante um laço, ela precisa poder ser reatribuída.

```javascript
let maior = numeros[0]
```

Depois:

```javascript
if (numero > maior) {
    maior = numero
}
```

Se fosse `const maior`, tentar fazer `maior = numero` causaria:

```text
TypeError: Assignment to constant variable
```

---


# COMPLEMENTOS IMPORTANTES PARA CTRL + F

## `else if`

Use quando existem mais de dois caminhos:

```javascript
if (nota >= 7) {
  console.log("Aprovado")
} else if (nota >= 5) {
  console.log("Recuperação")
} else {
  console.log("Reprovado")
}
```

---

## Operadores lógicos — `&&`, `||`, `!`

```javascript
idade >= 18 && temCarteira   // E: os dois precisam ser true
idade >= 18 || autorizado    // OU: pelo menos um precisa ser true
!ativo                       // NÃO: inverte true/false
```

Resumo:

```text
&& → E
|| → OU
!  → NÃO
```

---

## Operadores aritméticos — `%`, `**`, `++`, `--`

```javascript
10 % 2   // resto da divisão → 0
2 ** 3   // potência → 8
contador++
contador--
```

Muito útil para par/ímpar:

```javascript
numero % 2 === 0
```

---

## Template String — crase e `${}`

Use crase para inserir valores dentro de texto:

```javascript
const nome = "Ana"
const idade = 20

console.log(`Nome: ${nome}, idade: ${idade}`)
```

```text
`texto ${variavel}`
```

---

## `Math`

Alguns recursos úteis:

```javascript
Math.PI
Math.round(4.6) // 5
Math.floor(4.9) // 4
Math.ceil(4.1)  // 5
Math.max(2, 8, 4) // 8
Math.min(2, 8, 4) // 2
Math.random()     // número entre 0 e 1
```

---

## `null` x `undefined`

```text
undefined → existe uma variável/propriedade, mas ainda não recebeu valor
null      → valor vazio colocado intencionalmente
```

```javascript
let nome              // undefined
const usuario = null  // vazio intencional
```

---

## Hoisting

O JavaScript eleva algumas declarações para o início do escopo durante a interpretação.

Com `var`, a declaração é elevada, mas o valor não:

```javascript
console.log(nome) // undefined
var nome = "Ana"
```

Não use hoisting como técnica. É mais importante saber que ele existe para entender comportamentos estranhos.

---

## `throw`

Use para lançar um erro manualmente:

```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Não pode dividir por zero")
  }

  return a / b
}
```

Normalmente aparece com `try/catch`.

---

# NODE — COMPLEMENTOS

## `require()`

Importa um módulo no padrão CommonJS:

```javascript
const modulo = require('./modulo')
```

Para módulos instalados:

```javascript
const _ = require('lodash')
```

---

## `module.exports` e `exports`

Exportar algo de um arquivo:

```javascript
const soma = (a, b) => a + b

module.exports = { soma }
```

Importar em outro:

```javascript
const calculadora = require('./calculadora')
console.log(calculadora.soma(2, 3))
```

Também pode aparecer:

```javascript
exports.nome = 'valor'
```

---

## `fs.readFile` / `fs.readFileSync`

`fs` é o módulo de arquivos do Node.

```javascript
const fs = require('fs')

const texto = fs.readFileSync('arquivo.txt', 'utf8')
console.log(texto)
```

Assíncrono:

```javascript
fs.readFile('arquivo.txt', 'utf8', (erro, dados) => {
  if (erro) return console.log(erro)
  console.log(dados)
})
```

---

## `fs.writeFile` / `fs.writeFileSync`

Escrever arquivo:

```javascript
const fs = require('fs')

fs.writeFileSync('saida.txt', 'Olá')
```

Com JSON:

```javascript
fs.writeFileSync('dados.json', JSON.stringify(objeto))
```

---

## `global` no Node

`global` é o objeto global do Node, parecido com o `window` do navegador.

```javascript
global.minhaApp = {
  nome: 'Sistema'
}
```

Evite colocar tudo no `global`; use módulos sempre que possível.

---

## Middleware

Middleware é uma função que fica no caminho de uma requisição e pode processá-la antes da próxima etapa.

Formato comum:

```javascript
const middleware = (req, res, next) => {
  // faz alguma coisa
  next()
}
```

```text
requisição → middleware → middleware → resposta
```

`next()` manda seguir para a próxima função.

---

## `process.stdin` / `process.stdout`

Entrada e saída pelo terminal:

```javascript
process.stdout.write('Digite algo: ')

process.stdin.on('data', dado => {
  console.log(dado.toString())
})
```

```text
stdin  → entrada
stdout → saída
```

---

# ESNEXT — COMPLEMENTOS

## `Map` (estrutura) — NÃO confundir com `.map()` de Array

`Map` guarda pares chave/valor.

```javascript
const tecnologias = new Map()

tecnologias.set('js', 'JavaScript')
tecnologias.set('py', 'Python')

console.log(tecnologias.get('js'))
console.log(tecnologias.has('py'))
```

Principais:

```javascript
map.set(chave, valor)
map.get(chave)
map.has(chave)
map.delete(chave)
map.size
```

```text
Array.map() → transforma um array
new Map()   → estrutura de chave/valor
```

---

## Tagged Template

É uma função que recebe as partes de uma Template String antes de gerar o texto final.

```javascript
function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
}

const nome = 'Ana'
tag`Olá ${nome}!`
```

Use quando quiser controlar/formatar valores de uma template string.

---


# ANOTAÇÕES DE HTML — ATUALIZADO ATÉ FORMULÁRIO #03

## Estrutura básica — `<!doctype html>`, `<html>`, `<head>`, `<body>`

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título da página</title>
  </head>

  <body>
    Conteúdo visível
  </body>
</html>
```

```text
<!doctype html> → informa HTML5
<html>          → documento inteiro
<head>          → configurações/metadados
<title>         → título da aba
<body>          → conteúdo visível
```

Comentário HTML:

```html
<!-- comentário -->
```

---

## Cabeçalhos — `<h1>` até `<h6>`

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Nível 3</h3>
```

`h1` é o nível mais importante e `h6` o menos importante.

---

## Texto — `<p>`, `<b>`, `<i>`, `<strong>`, `<em>`

```html
<p>Parágrafo</p>
<b>Negrito visual</b>
<i>Itálico visual</i>
<strong>Texto importante</strong>
<em>Texto com ênfase</em>
```

```text
b/ i       → efeito visual
strong/em  → possuem significado semântico
```

---

## Quebra de linha — `<br>` e `<hr>`

```html
Texto 1<br />Texto 2
<hr />
```

```text
<br> → quebra de linha
<hr> → separação temática/linha horizontal
```

---

## Sobrescrito e subscrito — `<sup>` / `<sub>`

```html
2<sup>2</sup>
H<sub>2</sub>O
```

---

## Citações — `<blockquote>` / `<q>`

Citação longa:

```html
<blockquote cite="https://exemplo.com">
  <p>Texto citado...</p>
</blockquote>
```

Citação curta:

```html
<q>Texto citado</q>
```

---

## Outras tags de texto — `<abbr>`, `<cite>`, `<dfn>`, `<address>`, `<del>`, `<ins>`, `<s>`

```html
<abbr title="Professor">Prof</abbr>
<cite>Título da obra</cite>
<dfn>Termo sendo definido</dfn>
<address>Rua Exemplo, 123</address>
<del>texto removido</del>
<ins>texto inserido</ins>
<s>preço antigo</s>
```

```text
abbr    → abreviação com explicação
cite    → título/nome de obra
DFN     → termo sendo definido
address → informação de contato/endereço
DEL     → conteúdo removido
INS     → conteúdo inserido
S       → conteúdo que não é mais válido (ex.: preço antigo)
```

---

## Listas — `<ul>`, `<ol>`, `<li>`

Lista não ordenada:

```html
<ul>
  <li>Mouse</li>
  <li>Teclado</li>
</ul>
```

Lista ordenada:

```html
<ol>
  <li>Primeiro</li>
  <li>Segundo</li>
</ol>
```

```text
ul → sem numeração
ol → numerada
li → item
```

---

## Lista de definição — `<dl>`, `<dt>`, `<dd>`

```html
<dl>
  <dt>SaaS</dt>
  <dd>Software como Serviço</dd>

  <dt>IaaS</dt>
  <dd>Infraestrutura como Serviço</dd>
</dl>
```

```text
dl → lista de definições
DT → termo
DD → descrição/definição
```

---

## Listas aninhadas

Se uma lista pertence a um item, a lista interna fica **dentro do `<li>`**, antes de fechar `</li>`.

```html
<ul>
  <li>
    Backend
    <ul>
      <li>app.js</li>
      <li>server.js</li>
    </ul>
  </li>
</ul>
```

Regra:

```text
Se pertence ao <li>, fica antes do </li>.
```

---

## `<span>`

Serve para envolver uma pequena parte do conteúdo e facilitar CSS/JavaScript.

```html
<span>Backend</span>
```

Com evento:

```html
<span onclick="mostrarEsconder(this)">Backend</span>
```

`this` representa o elemento que foi clicado.

---

## `id`, `class` e atributo personalizado

```html
<div id="conteudo"></div>
<ul class="tree"></ul>
<span wm-folder>Backend</span>
```

```text
id    → normalmente identifica um elemento específico
class → pode ser usada por vários elementos
wm-*  → atributo personalizado usado nos exercícios do curso
```

Selecionar atributo personalizado:

```javascript
document.querySelectorAll('[wm-folder]')
```

---

# LINKS E URL

## Link — `<a href>`

```html
<a href="pagina.html">Abrir página</a>
```

---

## URL absoluta

```html
<a href="https://www.google.com.br">Google</a>
```

Abrir em outra aba:

```html
<a href="https://www.google.com.br" target="_blank">Google</a>
```

---

## URL relativa — `pagina.html`, `/pagina.html`, `../pagina.html`

```html
<a href="index.html">Mesmo diretório</a>
<a href="/index.html">A partir da raiz do servidor</a>
<a href="../index.html">Volta uma pasta</a>
```

---

## E-mail — `mailto:`

```html
<a href="mailto:email@empresa.com.br">Enviar e-mail</a>
```

---

## Âncora na mesma página — `#id`

```html
<h1 id="topo">Topo</h1>
<a href="#topo">Voltar para o topo</a>
```

---

## Parâmetros de URL — `?`, `=`, `&`

```text
produto.html?id=10&categoria=hardware
```

```text
? → começa os parâmetros
= → separa nome e valor
& → separa parâmetros diferentes
```

Evite colocar informações sensíveis em URL, principalmente senha.

---

# TABELAS

## Tabela — `<table>`, `<tr>`, `<th>`, `<td>`

```html
<table>
  <tr>
    <th>Produto</th>
    <th>Preço</th>
  </tr>

  <tr>
    <td>Mouse</td>
    <td>80</td>
  </tr>
</table>
```

```text
table → tabela inteira
tr    → linha
th    → célula de cabeçalho
td    → célula de dados
```

---

## Título da tabela — `<caption>`

```html
<table>
  <caption>Produtos</caption>
  ...
</table>
```

`caption` é o título/legenda da tabela.

---

## `<thead>`, `<tbody>`, `<tfoot>`

```html
<table>
  <thead>
    <tr>
      <th>Produto</th>
      <th>Preço</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Mouse</td>
      <td>80</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>Total</td>
      <td>80</td>
    </tr>
  </tfoot>
</table>
```

```text
thead → cabeçalho
tbody → dados principais
tfoot → rodapé/total
```

---

## `colspan`

Faz uma célula ocupar várias **colunas**:

```html
<td colspan="3">Total</td>
```

```text
colspan="3" → ocupa 3 colunas
```

---

## `rowspan`

Faz uma célula ocupar várias **linhas**:

```html
<tr>
  <td rowspan="2">Hardware</td>
  <td>Mouse</td>
</tr>
<tr>
  <td>Teclado</td>
</tr>
```

```text
rowspan="2" → ocupa 2 linhas
```

---

## CSS útil para enxergar tabela

```css
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 5px;
}
```

---

# FORMULÁRIOS

## `<form>`

Agrupa campos que serão enviados.

```html
<form action="/usuarios" method="post">
  ...
</form>
```

```text
action → destino
method → método de envio
```

---

## `GET` x `POST`

```html
<form method="get">
```

`GET` envia os dados pela URL:

```text
?nome=Ana&idade=20
```

```html
<form method="post">
```

`POST` envia os dados no corpo da requisição.

```text
GET  → dados aparecem na URL
POST → dados vão no corpo da requisição
```

`POST` sozinho não significa que os dados estão criptografados; em aplicações reais a conexão deve usar HTTPS.

---

## `<input>`

Campo de entrada:

```html
<input type="text" name="nome" placeholder="Nome" />
```

---

## `name`

É o nome usado para identificar o dado enviado.

```html
<input type="text" name="nome" />
```

Se o usuário digitar `Ana`:

```text
nome=Ana
```

---

## `value`

É o valor associado ao campo/opção.

```html
<input type="radio" name="tipo" value="admin" /> Admin
```

Ao selecionar:

```text
tipo=admin
```

---

## `placeholder`

Dica visual dentro do campo:

```html
<input type="text" placeholder="Digite seu nome" />
```

Não confundir com `id`.

---

## `input type="text"`

```html
<input type="text" name="nome" placeholder="Nome" />
```

Texto de uma linha.

---

## `input type="email"`

```html
<input type="email" name="email" placeholder="E-mail" />
```

O navegador faz uma validação básica de formato de e-mail.

---

## `input type="number"`

```html
<input type="number" name="preco" placeholder="Preço" />
```

Campo numérico.

---

## `input type="password"`

```html
<input type="password" name="senha" />
```

Esconde os caracteres visualmente, mas isso **não criptografa** a senha.

---

## `input type="hidden"`

Campo enviado sem aparecer na tela:

```html
<input type="hidden" name="id" value="3" />
```

Útil para IDs e outras informações que o usuário não precisa digitar.

---

## `<textarea>`

Campo para textos maiores:

```html
<textarea name="bio" cols="30" rows="10"></textarea>
```

```text
cols → largura aproximada
rows → linhas visíveis
```

---

## `input type="radio"`

Escolha **uma opção** de um grupo.

```html
<input type="radio" name="tipo" value="admin" /> Admin
<input type="radio" name="tipo" value="regular" /> Regular
<input type="radio" name="tipo" value="professor" /> Professor
```

Regra principal:

```text
Mesmo name + values diferentes → fazem parte do mesmo grupo.
```

---

## `input type="checkbox"`

Opção de marcar/desmarcar:

```html
<input type="checkbox" name="ativo" /> Ativo
```

```text
radio    → escolhe uma opção do grupo
checkbox → marca/desmarca uma opção
```

---

## `<select>` e `<option>`

```html
<select name="estado">
  <option value="pr">Paraná</option>
  <option value="sp">São Paulo</option>
</select>
```

```text
select → caixa/lista de seleção
option → cada opção
value  → dado enviado
```

---

## `multiple` e `size`

Permite selecionar várias opções:

```html
<select name="interesses" multiple size="5">
  <option value="js">JavaScript</option>
  <option value="java">Java</option>
  <option value="python">Python</option>
</select>
```

```text
multiple → permite várias escolhas
size     → quantas opções ficam visíveis
```

---

## Botão de envio — `<button type="submit">`

```html
<button type="submit">Enviar</button>
```

Dentro de um formulário, o botão envia os campos.

---

## `formaction`

Permite que **cada botão** defina um destino diferente.

```html
<form method="post">
  <input type="hidden" name="id" value="3" />

  <button formaction="http://localhost:3003/usuarios">Incluir</button>
  <button formaction="http://localhost:3003/usuarios/3">Alterar</button>
</form>
```

```text
form action → destino padrão do formulário
formaction  → destino específico daquele botão
```

---

## CSS usado no formulário do curso — `input[type="radio"]`

```css
input,
textarea,
select {
  display: block;
  margin-bottom: 10px;
}

input[type="radio"],
input[type="checkbox"] {
  display: inline;
}
```

O seletor:

```css
input[type="radio"]
```

seleciona apenas inputs cujo atributo `type` seja `radio`.

---

## Formulário #03 — o que é a pasta `form/`

A terceira etapa não precisa de outro HTML separado. O exercício usa o mesmo `form.html` e adiciona uma pequena aplicação Node/Express para **receber de verdade os dados enviados pelo POST**.

Estrutura:

```text
form/
├── form.html       → formulário
├── server.js       → recebe os POSTs
├── package.json    → dependências/scripts
└── package-lock.json
```

No `form.html`:

```text
Incluir → POST /usuarios
Alterar → POST /usuarios/3
```

No `server.js`, o servidor recebe esses caminhos. Para a parte de HTML, o importante é entender `method="POST"`, `hidden`, `name`, `value` e `formaction`.

---

# HTML — RESUMO CTRL + F

```text
p          → parágrafo
br         → quebra de linha
hr         → separação temática
strong     → importância
em         → ênfase
sup/sub    → sobrescrito/subscrito
ul/ol/li   → listas
dl/dt/dd   → lista de definição
a href     → link
mailto     → link para e-mail
#id        → âncora interna
span       → pequeno trecho manipulável
caption    → título da tabela
thead      → cabeçalho da tabela
tbody      → corpo da tabela
tfoot      → rodapé da tabela
tr         → linha
th         → célula de cabeçalho
td         → célula de dados
colspan    → ocupa colunas
rowspan    → ocupa linhas
form       → formulário
action     → destino padrão
method     → GET/POST
name       → nome do dado
value      → valor enviado
placeholder→ dica visual
hidden     → campo invisível enviado
radio      → uma escolha por grupo
checkbox   → marcar/desmarcar
textarea   → texto grande
select     → lista de opções
option     → opção
multiple   → várias escolhas
formaction → destino específico do botão
```

---

# ERROS COMUNS / LEMBRETES


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
---

# HTML — IMAGENS

## `<img>` — imagem

Estrutura:

```html
<img
  src="imagem.jpg"
  alt="Descrição da imagem"
  width="500"
  height="300"
  title="Texto ao passar o mouse"
/>
```

```text
src    → caminho/endereço da imagem
alt    → descrição alternativa/acessibilidade
width  → largura
height → altura
title  → texto ao passar o mouse
```

Exemplo com URL:

```html
<img
  src="http://files.cod3r.com.br/curso-web/imagem1.jpg"
  alt="Muro da Cidade"
  width="513"
  height="342"
/>
```

---

## `<picture>` / `<source>` / `srcset` / `media`

Permite usar imagens diferentes dependendo do tamanho da tela.

```html
<picture>
  <source
    media="(min-width: 700px)"
    srcset="imagem-grande.jpg"
  />

  <img
    src="imagem-pequena.jpg"
    alt="Exemplo"
  />
</picture>
```

```text
picture → agrupa alternativas de imagem
source  → define uma alternativa
media   → condição
srcset  → imagem usada naquela condição
img     → fallback / imagem padrão
```

Exemplo:

```text
tela >= 700px → imagem grande
tela < 700px  → imagem padrão
```

---

# CSS — IMAGEM DE FUNDO

## `background-image`

```css
.fundo {
  width: 500px;
  height: 300px;

  background-image: url("imagem.jpg");
  background-position: center;
  background-repeat: no-repeat;
}
```

```text
background-image    → imagem de fundo
background-position → posição da imagem
background-repeat   → repetição
background-size     → tamanho
```

Exemplo:

```css
background-size: 200%;
```

aumenta a imagem de fundo.

⚠️ Medidas normalmente precisam de unidade:

```css
width: 500;    /* ERRADO */
width: 500px;  /* CERTO */
```

---

# SLIDER — JAVASCRIPT + DOM

## `wm-slider`

Nos exercícios:

```html
<div wm-slider>
  <p>Slide 1</p>
  <p>Slide 2</p>
</div>
```

Selecionar:

```javascript
const elementos =
  document.querySelectorAll("[wm-slider] > p")
```

---

## `querySelectorAll()` + `Array.from()`

`querySelectorAll()` devolve vários elementos.

```javascript
const elementos =
  document.querySelectorAll("[wm-slider] > p")
```

Transformar em Array:

```javascript
const slides = Array.from(elementos)
```

```text
querySelectorAll → NodeList
Array.from       → Array
```

---

## `style.left`

Move horizontalmente um elemento posicionado.

```javascript
slide.style.left = "500px"
```

Normalmente usado com:

```css
position: absolute;
```

---

## `window.innerWidth`

Largura atual da janela do navegador.

```javascript
const inicio = window.innerWidth
```

Pode servir para começar o slide fora da tela, pela direita.

---

## `clientWidth`

Largura do elemento.

```javascript
const largura = slide.clientWidth
```

Para fazer o slide sair completamente pela esquerda:

```javascript
const fim = -slide.clientWidth
```

Exemplo:

```text
slide tem 513px

fim = -513
```

---

## Função `mover()`

Exemplo usado no slider:

```javascript
function mover(elem, inicio, fim, passo, callback) {
  const novoInicio = inicio - passo

  if (novoInicio >= fim) {
    elem.style.left = novoInicio + "px"

    setTimeout(() => {
      mover(elem, novoInicio, fim, passo, callback)
    }, 7)
  } else {
    callback()
  }
}
```

### Lógica

```text
inicio
↓
subtrai passo
↓
ainda não chegou no fim?
↓
SIM → move e chama mover() novamente
NÃO → callback()
```

---

## `passo`

Determina quantos pixels o elemento anda por execução.

```javascript
passo = 5
```

```text
passo pequeno → movimento mais suave
passo grande  → movimento maior por atualização
```

---

## `setTimeout()`

No slider:

```javascript
setTimeout(() => {
  mover(...)
}, 7)
```

Significa:

> espera alguns milissegundos e executa novamente.

O tempo e o passo influenciam a velocidade.

---

## Callback no slider

```javascript
mover(slide, inicio, fim, 5, () => {
  console.log("Terminou")
})
```

A função:

```javascript
() => {
  console.log("Terminou")
}
```

é passada como callback.

Dentro de `mover`:

```javascript
callback()
```

executa essa função quando o movimento terminar.

### Resumo

```text
callback  → função guardada
callback() → executa a função
```

---

## Recursão no slider

A função chama ela mesma:

```javascript
mover(elem, novoInicio, fim, passo, callback)
```

Isso é recursão.

É necessário existir uma condição de parada:

```javascript
if (novoInicio >= fim)
```

Sem condição de parada, a função continuaria indefinidamente.

---

## `indexOf()`

Descobre a posição de um item dentro de um Array.

```javascript
const frutas = ["maçã", "banana", "uva"]

frutas.indexOf("banana")
```

Resultado:

```text
1
```

No slider:

```javascript
const i = lista.indexOf(atual) + 1
```

descobre onde está o atual e tenta pegar o seguinte.

---

## `getProximo()`

```javascript
function getProximo(lista, atual) {
  const i = lista.indexOf(atual) + 1

  return i < lista.length
    ? lista[i]
    : lista[0]
}
```

Lógica:

```text
acha posição do atual
↓
+ 1
↓
posição existe?
↓
SIM → próximo
NÃO → volta ao primeiro
```

---

## `exibirSlide()`

Responsável por coordenar o ciclo do slider.

```javascript
function exibirSlide(slides, slide) {
  slide.style.display = "block"

  const inicio = window.innerWidth
  const fim = -slide.clientWidth

  slide.style.left = `${inicio}px`

  mover(slide, inicio, fim, 5, () => {
    slide.style.display = "none"

    const proximo = getProximo(slides, slide)

    exibirSlide(slides, proximo)
  })
}
```

### Responsabilidades

```text
mostrar slide
↓
calcular início
↓
calcular fim
↓
mover
↓
terminou
↓
esconder atual
↓
descobrir próximo
↓
exibir próximo
```

---

## Slider — resumo mental ⭐⭐⭐

```text
mover()
→ anima

getProximo()
→ escolhe o próximo

exibirSlide()
→ coordena tudo
```

---

# HTML — VÍDEO

## `<video>`

```html
<video
  id="meuVideo"
  width="800"
  height="450"
  controls
>
  <source src="video.mp4" type="video/mp4" />
</video>
```

```text
video    → elemento de vídeo
source   → arquivo de vídeo
controls → controles nativos
```

---

## `controls`

```html
<video controls>
```

Mostra controles nativos:

```text
play
pause
volume
barra de progresso
tela cheia
```

---

## `controlsList="nodownload"`

```html
<video controls controlsList="nodownload">
```

Pede ao navegador para não mostrar a opção padrão de download nos controles.

⚠️ Isso não é uma proteção absoluta contra baixar o arquivo.

---

# CONTROLAR VÍDEO COM JAVASCRIPT

## `video.play()`

Inicia/reproduz:

```javascript
video.play()
```

---

## `video.pause()`

Pausa:

```javascript
video.pause()
```

---

## `play` x `play()`

```javascript
video.play   // referência à função

video.play() // EXECUTA a função
```

O mesmo vale para:

```javascript
video.pause()
```

---

## `onclick`

```javascript
botao.onclick = () => video.play()
```

⚠️ Não fazer:

```javascript
botao.onclick = video.play()
```

porque isso executa imediatamente.

---

# ATRIBUTOS PERSONALIZADOS NO VÍDEO

HTML:

```html
<button wm-play="meuVideo">Play</button>
<button wm-pause="meuVideo">Pause</button>
```

Selecionar pelo valor:

```javascript
const id = "meuVideo"

document.querySelector(
  `[wm-play="${id}"]`
)
```

---

## Seletor de atributo com valor ⭐

HTML:

```html
<button wm-play="meuVideo">
```

JavaScript:

```javascript
document.querySelector('[wm-play="meuVideo"]')
```

Com template string:

```javascript
document.querySelector(`[wm-play="${id}"]`)
```

⚠️ Não confundir:

```javascript
[wm-play${id}]
```

Isso geraria algo como:

```text
[wm-playmeuVideo]
```

e procuraria um atributo com esse nome.

---

# BARRA DE PROGRESSO DO VÍDEO

HTML:

```html
<div wm-progresso="meuVideo" class="progresso">
  <div></div>
</div>
```

Selecionar a barra interna:

```javascript
const barra =
  document.querySelector(
    `[wm-progresso="${id}"] > div`
  )
```

---

## `currentTime`

Tempo atual do vídeo em segundos.

```javascript
video.currentTime
```

---

## `duration`

Duração total do vídeo em segundos.

```javascript
video.duration
```

⚠️ Não existe:

```javascript
video.durationTime
```

Use:

```javascript
video.duration
```

---

## Calcular porcentagem

```javascript
const percentual =
  (video.currentTime / video.duration) * 100
```

Exemplo:

```text
tempo atual = 25
duração = 100

25 / 100 * 100 = 25%
```

---

## Atualizar largura

```javascript
barra.style.width = `${percentual}%`
```

Assim:

```text
0%   → barra vazia
50%  → metade
100% → cheia
```

---

## `ontimeupdate`

Evento disparado conforme o tempo do vídeo muda.

```javascript
video.ontimeupdate = () => {
  const percentual =
    (video.currentTime / video.duration) * 100

  barra.style.width = `${percentual}%`
}
```

---

## `setInterval()` no vídeo

Outra forma usada no curso:

```javascript
setInterval(() => {
  const percentual =
    (video.currentTime / video.duration) * 100
}, 500)
```

Executa a atualização a cada:

```text
500ms = meio segundo
```

---

## Mostrar porcentagem

Com uma casa decimal:

```javascript
barra.textContent =
  `${percentual.toFixed(1)}%`
```

Exemplo:

```text
56.5%
91.2%
```

---

## `Math.round()`

Arredonda para o inteiro mais próximo:

```javascript
Math.round(56.6)
```

Resultado:

```text
57
```

Uso:

```javascript
barra.textContent =
  `${Math.round(percentual)}%`
```

---

## `Math.floor()`

Sempre arredonda para baixo:

```javascript
Math.floor(99.9)
```

Resultado:

```text
99
```

Pode ser útil para não mostrar `100%` antes do fim real.

```javascript
barra.textContent =
  `${Math.floor(percentual)}%`
```

---

## `toFixed()`

Controla casas decimais:

```javascript
percentual.toFixed(1)
```

Exemplo:

```text
91.2345
↓
91.2
```

⚠️ `toFixed()` devolve uma string.

---

# CONFIGURAR VÍDEO — MODELO COMPLETO

```javascript
function configurarVideo(id) {
  const video = document.getElementById(id)

  video.oncontextmenu = () => false

  document.querySelector(
    `[wm-play="${id}"]`
  ).onclick = () => video.play()

  document.querySelector(
    `[wm-pause="${id}"]`
  ).onclick = () => video.pause()

  const barra =
    document.querySelector(
      `[wm-progresso="${id}"] > div`
    )

  video.ontimeupdate = () => {
    const percentual =
      (video.currentTime / video.duration) * 100

    barra.style.width = `${percentual}%`

    barra.textContent =
      `${Math.floor(percentual)}%`
  }
}

configurarVideo("meuVideo")
```

---

# EXPRESS — SERVIDOR BÁSICO

## `require("express")`

Importa Express:

```javascript
const express = require("express")
```

---

## `express()`

Cria a aplicação:

```javascript
const app = express()
```

Fluxo básico:

```text
require express
↓
cria app
↓
configura
↓
cria rotas
↓
listen
```

---

## `express.urlencoded()`

Permite receber dados enviados por formulário.

```javascript
app.use(
  express.urlencoded({ extended: true })
)
```

Muito usado quando temos:

```html
<form method="post">
```

---

## `express.json()`

Permite interpretar JSON recebido:

```javascript
app.use(express.json())
```

---

## `app.get()`

Rota GET:

```javascript
app.get("/usuarios", (req, res) => {
  res.send("Usuários")
})
```

---

## `app.post()`

Rota POST:

```javascript
app.post("/usuarios", (req, res) => {
  console.log(req.body)

  res.send("Usuário recebido")
})
```

```text
app.post → responde a POST
req      → requisição
res      → resposta
```

---

## `req.body`

Dados enviados no corpo:

```javascript
console.log(req.body)
```

Exemplo:

```text
formulário POST
↓
req.body
```

---

## `req.params`

Parâmetros da rota.

Exemplo:

```javascript
app.post("/usuarios/:id", (req, res) => {
  console.log(req.params.id)
})
```

Se acessar:

```text
/usuarios/3
```

então:

```javascript
req.params.id
```

vale:

```text
3
```

---

## `res.send()`

Envia resposta:

```javascript
res.send("Funcionou")
```

---

## `app.listen()`

Inicia o servidor:

```javascript
app.listen(3003)
```

Servidor:

```text
http://localhost:3003
```

---

## Express — modelo curto para Ctrl + F ⭐⭐⭐

```javascript
const express = require("express")

const app = express()

app.use(
  express.urlencoded({ extended: true })
)

app.use(express.json())

app.get("/rota", (req, res) => {
  res.send("GET")
})

app.post("/rota", (req, res) => {
  console.log(req.body)

  res.send("POST")
})

app.listen(3003)
```

Pense:

```text
require
↓
express()
↓
app.use
↓
app.get / app.post
↓
req / res
↓
app.listen
```

---

# ERROS COMUNS — NOVOS ⭐⭐⭐

## `innerWidth`

```text
innerWidth ✅
inerrwidht ❌
```

---

## `clientWidth`

```text
clientWidth ✅
clientwidht ❌
```

---

## `length`

```text
length ✅
lenght ❌
```

---

## `duration`

```text
video.duration ✅
video.durationTime ❌
```

---

## Chamar função

```javascript
video.play() // executa
video.play   // só referencia
```

---

## Seletor de atributo com valor

```javascript
`[wm-play="${id}"]` ✅

`[wm-play${id}]`    ❌
```

---

## Variável precisa existir

Errado:

```javascript
document.getElementById(id)
```

sem ter criado:

```javascript
const id = "meuVideo"
```

Correto:

```javascript
const id = "meuVideo"

const video =
  document.getElementById(id)
```

---

# RESUMO — QUANDO USAR ⭐⭐⭐

```text
quero encontrar 1 elemento
→ querySelector

quero encontrar vários
→ querySelectorAll

quero transformar NodeList em Array
→ Array.from

quero descobrir posição em Array
→ indexOf

quero fazer algo depois de terminar
→ callback

quero executar depois de um tempo
→ setTimeout

quero executar repetidamente
→ setInterval

quero largura da janela
→ window.innerWidth

quero largura do elemento
→ elemento.clientWidth

quero tocar vídeo
→ video.play()

quero pausar vídeo
→ video.pause()

quero saber tempo atual
→ video.currentTime

quero saber duração
→ video.duration

quero porcentagem
→ atual / total * 100

quero arredondar normalmente
→ Math.round

quero arredondar para baixo
→ Math.floor

quero definir casas decimais
→ toFixed
```