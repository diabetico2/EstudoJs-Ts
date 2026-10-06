# CSS — revisão até Grid

## Seletores, cascata e especificidade

Um seletor escolhe quem recebe a regra. A cascata decide qual declaração vence quando várias regras disputam a mesma propriedade.

```css
p { color: navy; }                 /* elemento */
.aviso { color: orange; }          /* classe */
#principal { color: purple; }      /* ID */
input[type="email"] { width: 100%; } /* atributo */
.menu > a:hover { color: teal; }   /* filho direto + estado */
```

Em regras da mesma origem, importância e camada, compare a especificidade nesta ordem: IDs; classes, atributos e pseudoclasses; elementos e pseudoelementos. Compare as quantidades da esquerda para a direita. Em empate de especificidade e proximidade de escopo, a última declaração vence.

- `#principal` → 1 ID, 0 classes, 0 elementos.
- `.menu a:hover` → 0 IDs, 2 classes/pseudoclasses, 1 elemento.
- Estilo inline normal prevalece sobre seletores normais da folha do autor.
- `!important` muda a prioridade na cascata; não aumenta a especificidade. Evite usá-lo para resolver todo conflito.
- `*` e combinadores como `>`, `+` e espaço não somam especificidade.

## Herança

Propriedades como `color`, `font-family` e `line-height` costumam passar do pai para os filhos. `margin`, `padding`, `border` e `width` não são herdadas por padrão. Uma declaração aplicada diretamente ao filho prevalece sobre o valor herdado.

```css
body { font-family: Arial, sans-serif; color: #243047; }
button { font: inherit; }
.filho { color: inherit; }
```

`inherit` força a herança; `initial` usa o valor inicial da propriedade; `unset` herda nas propriedades herdáveis e usa o valor inicial nas demais.

## Box model — conteúdo, padding, borda e margem

Cada elemento forma uma caixa. De dentro para fora: conteúdo → padding → border → margin.

```css
.caixa {
  width: 200px;
  padding: 20px;
  border: 2px solid #345;
  margin: 16px;
}
```

Com `box-sizing: content-box`, a largura até a borda é 200 + 40 + 4 = 244px. As margens ficam por fora: com 16px de cada lado, a ocupação horizontal total é 276px.

## Margin e padding

`margin` é espaço externo; `padding` é espaço interno. O fundo do elemento cobre o padding, mas não a margem.

```css
.caixa {
  padding: 10px;                  /* todos os lados */
  padding: 10px 20px;             /* vertical | horizontal */
  padding: 10px 20px 30px;        /* topo | lados | base */
  margin: 10px 20px 30px 40px;     /* topo | direita | base | esquerda */
}
.conteudo { max-width: 900px; margin: 0 auto; }
```

Margens verticais de blocos no fluxo normal podem colapsar: duas margens positivas adjacentes podem resultar na maior delas, e não na soma. Margens entre itens flex/grid não colapsam. `padding` não aceita valores negativos; `margin` pode aceitar.

## Box-sizing — controlar o tamanho final

`content-box` deixa padding e borda fora de `width`/`height`. `border-box` inclui os dois nessas medidas; a margem continua fora.

```css
*, *::before, *::after { box-sizing: border-box; }
.card { width: 200px; padding: 20px; border: 2px solid; }
/* largura até a borda: 200px; conteúdo: 156px */
```

Use `max-width: 100%` para limitar uma caixa ao espaço disponível. Alturas em porcentagem dependem de como a altura do bloco de referência foi definida.

## Display — block, inline, inline-block e none

- `block`: no fluxo normal, começa em nova linha e, com largura automática, ocupa o espaço horizontal disponível.
- `inline`: participa da linha de texto; `width` e `height` não dimensionam elementos inline não substituídos como um `span` comum.
- `inline-block`: participa da linha, mas aceita largura, altura e espaçamento como uma caixa.
- `none`: remove o elemento do layout e normalmente da árvore de acessibilidade.
- `flex` e `grid`: definem como os filhos serão organizados.

```css
.etiqueta { display: inline-block; padding: 4px 8px; }
.oculto { display: none; }
.invisivel { visibility: hidden; } /* mantém o espaço */
```

## Overflow — quando o conteúdo não cabe

```css
.painel {
  max-height: 200px;
  overflow: auto;
}
pre { overflow-x: auto; }
```

- `visible`: o conteúdo pode aparecer fora da caixa.
- `hidden`: corta o excedente e não mostra barras; ainda permite rolagem programática em situações comuns.
- `auto`: permite rolagem quando necessária.
- `scroll`: cria uma área de rolagem; a exibição das barras depende também do sistema.
- `clip`: corta sem criar um contêiner de rolagem.

## Cores e transparência

```css
.card {
  color: #223344;
  background-color: rgb(240, 245, 250);
  border-color: hsl(210, 50%, 40%);
}
.camada { background: rgba(0, 0, 0, 0.4); }
.degrade { background: linear-gradient(to right, navy, teal); }
```

`color` afeta o texto; `background-color` afeta o fundo. Hexadecimal pode ser curto (`#fff`) ou completo (`#ffffff`). O alfa controla a transparência de uma cor; `opacity: 0.5` afeta a composição do elemento inteiro, incluindo seus filhos.

## Unidades — px, %, em, rem, vw e vh

- `px`: pixel CSS, não necessariamente um pixel físico da tela.
- `%`: depende da propriedade e do bloco de referência; `width: 50%` geralmente usa a largura do bloco que contém o elemento.
- `em`: em `font-size`, considera a fonte do pai; em propriedades como padding, considera a fonte do próprio elemento.
- `rem`: considera o tamanho da fonte do elemento raiz (`html`).
- `vw` / `vh`: 1% da largura / altura do viewport.
- `dvh`: considera a altura dinâmica do viewport, útil em telas com barras móveis do navegador.
- `fr`: divide o espaço disponível das trilhas de Grid.

```css
html { font-size: 16px; }
.card { font-size: 1.25rem; padding: 1em; max-width: 90vw; }
/* fonte: 20px; padding: 20px */
.pagina { min-height: 100vh; min-height: 100dvh; }
```

## Texto e fontes

```css
p {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  text-align: left;
  overflow-wrap: anywhere;
}
.titulo { font-weight: 700; letter-spacing: 0.02em; }
.destaque { font-style: italic; text-decoration: underline; }
.rotulo { text-transform: uppercase; }
```

`text-align` alinha o conteúdo inline dentro da caixa; não centraliza a caixa em si. `line-height` sem unidade acompanha o tamanho da fonte. `white-space: pre-wrap` preserva espaços e quebras e também permite quebrar linhas longas.

## Position — static, relative, absolute, fixed e sticky

- `static`: posição normal; `top`, `right`, `bottom` e `left` não deslocam o elemento.
- `relative`: permite deslocar visualmente a caixa, preservando seu espaço original.
- `absolute`: sai do fluxo normal; costuma usar como referência o ancestral mais próximo com `position` diferente de `static`.
- `fixed`: sai do fluxo e normalmente se posiciona em relação ao viewport. Certas propriedades de ancestrais, como `transform`, podem mudar essa referência.
- `sticky`: permanece no fluxo e acompanha a rolagem até um limite como `top: 0`, respeitando seu contêiner.

```css
.card { position: relative; }
.selo { position: absolute; top: 8px; right: 8px; }
.menu { position: sticky; top: 0; z-index: 10; }
```

`z-index` controla a sobreposição dentro do contexto de empilhamento; um número alto não ultrapassa automaticamente os contextos dos ancestrais. Para `sticky`, confira o espaço para rolar e o `overflow` dos ancestrais.

## Media query — adaptar à tela

```css
.layout { display: grid; grid-template-columns: 240px 1fr; }
@media (max-width: 700px) {
  .layout { grid-template-columns: 1fr; }
}
```

A regra interna vale quando a condição é satisfeita. `max-width: 700px` inclui larguras até 700px; `min-width: 700px` inclui larguras a partir de 700px. No HTML, inclua:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Flexbox — container e eixos

Flexbox organiza os filhos diretos em um eixo principal (linha ou coluna). No modo de escrita horizontal usual, `row` é horizontal e `column` é vertical.

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
```

- `flex-direction`: `row`, `column`, `row-reverse`, `column-reverse`.
- `justify-content`: alinha/distribui no eixo principal; exemplos: `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`.
- `align-items`: alinha no eixo transversal; exemplos: `stretch`, `center`, `flex-start`, `flex-end`, `baseline`.
- `flex-wrap: wrap`: permite novas linhas quando necessário.
- `flex-flow: row wrap`: atalho de direção e quebra.
- `align-content`: distribui as linhas no eixo transversal em um contêiner com quebra de linha habilitada; o efeito aparece quando há espaço livre nesse eixo.

`space-between` põe o espaço entre itens; `space-around` dá espaço ao redor de cada item; `space-evenly` iguala todos os intervalos, inclusive nas pontas.

## Flexbox — grow, shrink, basis, order e align-self

```css
.item { flex: 1 1 100px; min-width: 0; }
.item:first-child { flex-grow: 2; }
.item:nth-child(3) { order: -1; align-self: center; }
```

- `flex-grow`: proporção de distribuição do espaço positivo que sobra. Com bases iguais e fatores 2, 1 e 1, o primeiro recebe duas partes da sobra. Isso não significa necessariamente o dobro da largura final.
- `flex-shrink`: fator de encolhimento quando falta espaço; o cálculo também considera o tamanho base de cada item e seus limites mínimos.
- `flex-basis`: tamanho base no eixo principal antes da distribuição do espaço. Em `row`, um valor como `100px` é usado como base no lugar de `width`.
- `flex: 3 6 100px`: grow 3, shrink 6, basis 100px.
- `flex: 1`: nos navegadores, equivale a `1 1 0%`; facilita dividir o espaço. Conteúdo e limites mínimos ainda influenciam o resultado.
- `order`: altera a ordem visual, sem alterar o HTML ou a ordem usual de foco. Preserve uma ordem de leitura lógica.
- `align-self`: substitui o `align-items` para um item específico.

`min-width: 0` permite que um item diminua além do tamanho mínimo automático do conteúdo quando isso for desejado. Padrões iniciais: grow 0, shrink 1, basis auto.

## Flexbox — centralizar e montar um menu

```css
.centralizado {
  display: flex;
  min-height: 200px;
  justify-content: center;
  align-items: center;
}
.cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}
```

Com `flex-direction: column`, os eixos trocam: `justify-content` passa a atuar verticalmente no modo de escrita horizontal. Para enxergar o alinhamento vertical, precisa haver espaço disponível na altura.

## Grid — colunas, linhas, fr e gap

Grid organiza filhos diretos em linhas e colunas ao mesmo tempo.

```css
.grade {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: 100px auto;
  gap: 10px;
}
```

- `1fr 1fr 1fr`: três trilhas que compartilham o espaço flexível; mínimos de conteúdo podem interferir.
- `3fr 6fr 3fr`: proporção 1:2:1 do espaço flexível, respeitados os limites de tamanho.
- `200px 20% 1fr`: uma coluna fixa, uma percentual e outra flexível.
- `grid-template-rows`: define as linhas; linhas extras são criadas automaticamente.
- `gap`: espaçamento entre linhas e colunas. `grid-gap` é o nome antigo.
- `minmax(0, 1fr)`: permite que a trilha encolha abaixo do mínimo automático do conteúdo.

## Grid — linhas de grade e span

```css
.destaque {
  grid-column: 2 / span 2;
  grid-row: 1 / 3;
}
```

`grid-column: 2 / span 2` começa na linha de grade 2 e ocupa duas colunas. `grid-row: 1 / 3` vai da linha de grade 1 até a 3, ocupando duas linhas de células. Os números referem-se às linhas que delimitam as trilhas.

```css
.d8 {
  grid-column-start: 2;
  grid-column-end: span 2;
}
.largura-toda { grid-column: 1 / -1; }
```

`-1` aponta para a última linha da grade explícita. Posicionamento manual pode causar sobreposição; confira as áreas ocupadas.

## Grid — template areas e layout responsivo

```html
<div class="pagina">
  <header>CABEÇALHO</header>
  <nav>NAVEGAÇÃO</nav>
  <main>CONTEÚDO</main>
  <footer>RODAPÉ</footer>
</div>
```

```css
.pagina > header { grid-area: cabecalho; }
.pagina > nav { grid-area: navegacao; }
.pagina > main { grid-area: conteudo; }
.pagina > footer { grid-area: rodape; }
.pagina {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 300px minmax(0, 1fr);
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas:
    "cabecalho cabecalho"
    "navegacao conteudo"
    "rodape rodape";
}
@media (max-width: 700px) {
  .pagina {
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr 100px;
    grid-template-areas: "navegacao" "conteudo" "rodape";
  }
  .pagina > header { display: none; }
}
```

O mesmo nome repetido une células numa área retangular. Um ponto (`.`) representa uma célula sem área nomeada. Todas as linhas do desenho precisam ter a mesma quantidade de células.

## Flexbox ou Grid — qual usar?

- Menu, botões, alinhamento de ícone e texto: Flexbox costuma ser direto.
- Layout com regiões e alinhamento entre linhas e colunas: Grid costuma ser direto.
- É comum combinar: página em Grid, menu e conteúdo dos cards em Flexbox.

Checklist ao revisar um layout: quem é o container? Quais são os filhos diretos? Qual o eixo principal? Existe espaço disponível? Padding e borda entram na largura? O conteúdo exige um tamanho mínimo? A regra está sendo sobrescrita?
