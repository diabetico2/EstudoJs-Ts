# Exercício IMC - Aprendizado Completo

## 📚 Arquivos Criados

Aqui você encontra 3 arquivos diferentes para aprender progressivamente:

### 1. **main.js** (Arquivo Original com Comentários)
Este é o arquivo original com comentários detalhados adicionados.
- ✅ Leia os comentários para entender como o código funciona
- ✅ Estude cada função separadamente
- ✅ Entenda a lógica do cálculo de IMC

**O que aprender aqui:**
- Como capturar eventos de formulário
- Como validar dados do usuário
- Como manipular o DOM (adicionar e remover elementos)
- Como usar classes CSS dinamicamente

---

### 2. **exercicio_guiado.js** (Faça Comigo!)
Este arquivo é uma **versão simplificada e explicada passo a passo**.
- 📖 Leia o código linha por linha
- 🎓 Cada passo tem explicações detalhadas
- 💡 Ideal para aprender a lógica básica sem complicações

**Como usar:**
1. Abra este arquivo em seu editor
2. Leia cada comentário
3. Tente entender por que cada linha existe
4. Copie o conceito para seus próprios projetos

**Conceitos importantes abordados:**
- Seleção de elementos do DOM
- Eventos de formulário
- Conversão de tipos (String → Number)
- Validação de dados
- Cálculos matemáticos
- Criação e adição de elementos ao DOM

---

### 3. **exercicio_para_fazer.js** (Faça Sozinho!)
Este arquivo é um **desafio para você** com dicas práticas.
- 🚀 Tente fazer sem copiar do arquivo anterior
- 💡 Há dicas (TODO) mostrando o que fazer
- 🎯 Use a função `mostrarResultado()` que já está pronta

**Como usar:**
1. Abra este arquivo
2. Leia as dicas cuidadosamente
3. Escreva o código nos locais indicados por "TODO"
4. Teste no navegador para ver se funciona
5. Se tiver dúvida, consulte o `exercicio_guiado.js`

**Desafio:** Calcular o consumo de combustível (km/l)
- Você recebe: Distância percorrida e Litros gastos
- Você calcula: Consumo = Distância / Litros
- Você mostra: O resultado na página

---

## 🔧 Como Testar os Arquivos

Para testar cada arquivo, você precisa:

1. **Ter um arquivo HTML** com a estrutura correta
2. **Vincular o arquivo JavaScript** correto
3. **Abrir no navegador** e preencher o formulário

### Exemplo de HTML para o `exercicio_para_fazer.js`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Consumo de Combustível</title>
    <style>
        .paragrafo-resultado { color: green; font-weight: bold; }
        .bad { color: red; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Calculadora de Consumo de Combustível</h1>
    
    <form id="formulario-combustivel">
        <label>Distância (km): <input type="number" id="distancia" step="0.01"></label>
        <label>Litros (L): <input type="number" id="litros" step="0.01"></label>
        <button type="submit">Calcular</button>
    </form>
    
    <div id="resultado-combustivel"></div>
    
    <script src="exercicio_para_fazer.js"></script>
</body>
</html>
```

---

## 📝 Dicas de Estudo

### Para aprender melhor:

1. **Comece pelo `main.js`**: Leia os comentários e entenda o código original
2. **Depois vá para `exercicio_guiado.js`**: Estude a versão simplificada
3. **Por último, faça `exercicio_para_fazer.js`**: Teste seus conhecimentos
4. **Se tiver dúvida**: Volte ao `exercicio_guiado.js` e compare seu código

### Dicas importantes:

- 🔍 Use o `console.log()` para verificar valores intermediários
- 📱 Sempre teste no navegador (F12 para abrir o console)
- 🎯 Não tenha medo de errar - erros são oportunidades de aprender
- 📚 Leia os comentários múltiplas vezes até entender

---

## ✅ Checklist de Aprendizado

Marque o que você já aprendeu:

- [ ] Selecionei elementos do HTML com `querySelector()`
- [ ] Entendi como `addEventListener()` funciona
- [ ] Usei `e.preventDefault()` em um formulário
- [ ] Converti strings para números com `Number()`
- [ ] Validei dados do usuário
- [ ] Fiz cálculos matemáticos com JavaScript
- [ ] Usei `toFixed()` para arredondar números
- [ ] Criei elementos HTML com `createElement()`
- [ ] Adicionei classes CSS com `classList.add()`
- [ ] Adicionei elementos à página com `appendChild()`
- [ ] Usei template literals (crase) com `${}`

---

## 🎉 Parabéns!

Ao completar esses exercícios, você terá aprendido:
- ✅ Manipulação do DOM
- ✅ Tratamento de eventos
- ✅ Validação de dados
- ✅ Lógica de programação
- ✅ Boas práticas em JavaScript

Continue praticando! 🚀
