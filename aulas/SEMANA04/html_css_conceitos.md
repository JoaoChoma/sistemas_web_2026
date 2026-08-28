# HTML e CSS — Conceitos Fundamentais

## Objetivo

Este material apresenta um resumo dos principais conceitos de **HTML** e **CSS**, com foco nas tags HTML mais utilizadas e nas propriedades CSS mais comuns no desenvolvimento de páginas Web.

---

# 1. HTML

## O que é HTML?

**HTML — HyperText Markup Language** é uma linguagem de marcação utilizada para definir a **estrutura e o conteúdo** de uma página Web.

Com HTML podemos representar:

- títulos;
- parágrafos;
- imagens;
- links;
- listas;
- tabelas;
- formulários;
- vídeos;
- seções;
- menus;
- rodapés.

O HTML não é responsável pela aparência visual da página. Essa responsabilidade pertence principalmente ao **CSS**.

---

# 2. Estrutura básica de uma página HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha página</title>
</head>

<body>

    <h1>Minha primeira página</h1>

    <p>Olá, mundo!</p>

</body>

</html>
```

---

# 3. Tags estruturais

## `<!DOCTYPE html>`

Indica ao navegador que o documento utiliza **HTML5**.

```html
<!DOCTYPE html>
```

---

## `<html>`

Representa o elemento principal da página.

```html
<html lang="pt-BR">
</html>
```

O atributo:

```html
lang="pt-BR"
```

informa que o conteúdo está escrito em português do Brasil.

---

## `<head>`

Contém informações sobre a página que normalmente não aparecem diretamente para o usuário.

```html
<head>
    <title>Meu site</title>
</head>
```

---

## `<body>`

Contém tudo aquilo que será apresentado visualmente na página.

```html
<body>

    <h1>Meu site</h1>

</body>
```

---

# 4. Metadados

## `<meta>`

Define informações importantes sobre a página.

### Codificação de caracteres

```html
<meta charset="UTF-8">
```

Permite utilizar corretamente caracteres como:

```text
á
é
í
ó
ú
ç
ã
```

### Responsividade

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Ajuda a página a se adaptar corretamente a celulares e tablets.

---

# 5. Título da página

## `<title>`

Define o título exibido na aba do navegador.

```html
<title>Minha Loja</title>
```

---

# 6. Títulos

HTML possui seis níveis de títulos.

```html
<h1>Título principal</h1>

<h2>Título secundário</h2>

<h3>Subtítulo</h3>

<h4>Título nível 4</h4>

<h5>Título nível 5</h5>

<h6>Título nível 6</h6>
```

Normalmente:

- `<h1>` representa o título principal;
- `<h2>` representa seções;
- `<h3>` representa subseções.

---

# 7. Parágrafos

## `<p>`

Representa um parágrafo.

```html
<p>
    Este é um parágrafo da página.
</p>
```

---

# 8. Quebra de linha

## `<br>`

Insere uma quebra de linha.

```html
Primeira linha<br>
Segunda linha
```

---

# 9. Linha horizontal

## `<hr>`

Cria uma linha horizontal separando conteúdos.

```html
<hr>
```

---

# 10. Destaque de texto

## `<strong>`

Indica um conteúdo importante.

```html
<strong>Atenção!</strong>
```

Normalmente aparece em **negrito**.

---

## `<em>`

Indica ênfase.

```html
<em>Texto importante</em>
```

Normalmente aparece em *itálico*.

---

## `<small>`

Exibe um texto com menor destaque.

```html
<small>Todos os direitos reservados.</small>
```

---

## `<mark>`

Destaca um trecho de texto.

```html
<mark>Conteúdo destacado</mark>
```

---

## `<del>`

Representa conteúdo removido.

```html
<del>R$ 100,00</del>
```

---

## `<ins>`

Representa conteúdo inserido.

```html
<ins>R$ 80,00</ins>
```

---

## `<sub>`

Texto subscrito.

```html
H<sub>2</sub>O
```

Resultado:

```text
H₂O
```

---

## `<sup>`

Texto sobrescrito.

```html
10<sup>2</sup>
```

Resultado:

```text
10²
```

---

# 11. Links

## `<a>`

Cria um hiperlink.

```html
<a href="https://www.google.com">
    Google
</a>
```

Abrindo em uma nova aba:

```html
<a href="https://www.google.com" target="_blank">
    Google
</a>
```

Link interno:

```html
<a href="contato.html">
    Contato
</a>
```

---

# 12. Imagens

## `<img>`

Exibe uma imagem.

```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

Principais atributos:

```text
src → endereço da imagem
alt → descrição alternativa
width → largura
height → altura
```

Exemplo:

```html
<img
    src="produto.jpg"
    alt="Notebook"
    width="300"
>
```

---

# 13. Listas

## Lista não ordenada — `<ul>`

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Bootstrap</li>
</ul>
```

---

## Lista ordenada — `<ol>`

```html
<ol>
    <li>Criar HTML</li>
    <li>Criar CSS</li>
    <li>Testar página</li>
</ol>
```

---

## Item de lista — `<li>`

Cada item da lista é representado por:

```html
<li>Item</li>
```

---

# 14. Divisão de conteúdo

## `<div>`

Cria um bloco genérico de conteúdo.

```html
<div>
    <h2>Produto</h2>
    <p>Descrição do produto.</p>
</div>
```

Muito utilizada em conjunto com **CSS** e **Bootstrap**.

---

# 15. Conteúdo em linha

## `<span>`

Permite selecionar ou estilizar uma pequena parte de um texto.

```html
<p>
    Preço:
    <span>R$ 100,00</span>
</p>
```

---

# 16. Tags semânticas

HTML5 introduziu elementos que indicam melhor a função de cada parte da página.

---

## `<header>`

Cabeçalho da página ou de uma seção.

```html
<header>
    <h1>Minha Loja</h1>
</header>
```

---

## `<nav>`

Área de navegação.

```html
<nav>
    <a href="#">Início</a>
    <a href="#">Produtos</a>
    <a href="#">Contato</a>
</nav>
```

---

## `<main>`

Conteúdo principal da página.

```html
<main>

    <h2>Produtos</h2>

</main>
```

---

## `<section>`

Representa uma seção temática.

```html
<section>

    <h2>Cursos</h2>

</section>
```

---

## `<article>`

Representa conteúdo independente.

```html
<article>

    <h2>Notícia</h2>

    <p>Texto da notícia.</p>

</article>
```

---

## `<aside>`

Representa conteúdo complementar ou lateral.

```html
<aside>

    <h3>Links relacionados</h3>

</aside>
```

---

## `<footer>`

Rodapé.

```html
<footer>

    <p>© 2026 Minha Empresa</p>

</footer>
```

---

# 17. Tabelas

## `<table>`

Cria uma tabela.

```html
<table>

    <tr>
        <th>Produto</th>
        <th>Preço</th>
    </tr>

    <tr>
        <td>Notebook</td>
        <td>R$ 3.000</td>
    </tr>

</table>
```

---

## Tags principais de tabela

| Tag | Função |
|---|---|
| `<table>` | tabela |
| `<tr>` | linha |
| `<th>` | célula de cabeçalho |
| `<td>` | célula de dados |
| `<thead>` | cabeçalho da tabela |
| `<tbody>` | corpo da tabela |
| `<tfoot>` | rodapé da tabela |
| `<caption>` | título da tabela |

---

# 18. Formulários

## `<form>`

Representa um formulário.

```html
<form>

    <label>Nome:</label>

    <input type="text">

    <button>Enviar</button>

</form>
```

---

# 19. Label

## `<label>`

Define o rótulo de um campo.

```html
<label for="nome">Nome:</label>

<input
    type="text"
    id="nome"
>
```

---

# 20. Campo de entrada

## `<input>`

Um dos elementos mais utilizados em formulários.

```html
<input type="text">
```

Principais tipos:

```html
<input type="text">

<input type="number">

<input type="email">

<input type="password">

<input type="date">

<input type="time">

<input type="checkbox">

<input type="radio">

<input type="file">

<input type="color">

<input type="range">

<input type="submit">

<input type="button">
```

---

# 21. Área de texto

## `<textarea>`

Utilizada para textos maiores.

```html
<textarea></textarea>
```

Exemplo:

```html
<textarea
    rows="5"
    cols="40">
</textarea>
```

---

# 22. Lista de seleção

## `<select>`

```html
<select>

    <option>Paraná</option>

    <option>São Paulo</option>

    <option>Santa Catarina</option>

</select>
```

---

## `<option>`

Representa uma opção de uma lista.

```html
<option value="PR">
    Paraná
</option>
```

---

# 23. Botões

## `<button>`

```html
<button>
    Salvar
</button>
```

Também pode receber tipos:

```html
<button type="submit">
    Enviar
</button>

<button type="reset">
    Limpar
</button>
```

---

# 24. Agrupando campos de formulário

## `<fieldset>`

Agrupa campos relacionados.

```html
<fieldset>

    <legend>Dados pessoais</legend>

    <input type="text">

</fieldset>
```

---

## `<legend>`

Define o título do agrupamento.

```html
<legend>Dados pessoais</legend>
```

---

# 25. Multimídia

## `<audio>`

```html
<audio controls>

    <source src="audio.mp3">

</audio>
```

---

## `<video>`

```html
<video controls width="500">

    <source src="video.mp4">

</video>
```

---

## `<iframe>`

Permite incorporar uma página ou conteúdo externo.

```html
<iframe src="pagina.html"></iframe>
```

Também pode ser utilizado para incorporar vídeos e mapas.

---

# 26. Principais atributos HTML

## `id`

Identificador único.

```html
<div id="menu">
</div>
```

---

## `class`

Define uma ou mais classes.

```html
<div class="card destaque">
</div>
```

---

## `style`

Permite aplicar CSS diretamente no elemento.

```html
<p style="color: red;">
    Texto
</p>
```

Embora funcione, normalmente recomenda-se utilizar um arquivo CSS separado.

---

## `title`

Cria uma informação adicional.

```html
<p title="Informação adicional">
    Passe o mouse aqui.
</p>
```

---

# 27. CSS

## O que é CSS?

**CSS — Cascading Style Sheets** é utilizado para controlar a aparência dos elementos HTML.

Com CSS podemos controlar:

- cores;
- tamanhos;
- fontes;
- espaçamentos;
- bordas;
- alinhamento;
- posicionamento;
- layout;
- responsividade;
- animações.

---

# 28. Sintaxe CSS

```css
seletor {

    propriedade: valor;

}
```

Exemplo:

```css
p {

    color: blue;

    font-size: 18px;

}
```

---

# 29. Formas de utilizar CSS

## CSS Inline

```html
<p style="color: red;">
    Texto
</p>
```

---

## CSS Interno

```html
<style>

    p {
        color: blue;
    }

</style>
```

---

## CSS Externo

Arquivo:

```text
style.css
```

HTML:

```html
<link rel="stylesheet" href="style.css">
```

CSS:

```css
p {

    color: green;

}
```

A forma externa é normalmente a mais recomendada.

---

# 30. Seletores CSS

## Seletor por tag

```css
p {

    color: blue;

}
```

Seleciona todos os elementos:

```html
<p>
```

---

## Seletor por classe

```css
.destaque {

    color: red;

}
```

HTML:

```html
<p class="destaque">
    Texto
</p>
```

---

## Seletor por ID

```css
#menu {

    background-color: black;

}
```

HTML:

```html
<div id="menu">
</div>
```

---

## Seletor universal

```css
* {

    margin: 0;

    padding: 0;

}
```

Seleciona todos os elementos.

---

## Múltiplos seletores

```css
h1,
h2,
h3 {

    color: navy;

}
```

---

## Elemento descendente

```css
nav a {

    color: white;

}
```

Seleciona todos os `<a>` existentes dentro de `<nav>`.

---

## Filho direto

```css
div > p {

    color: red;

}
```

---

# 31. Cores

## `color`

Cor do texto.

```css
color: blue;
```

---

## `background-color`

Cor de fundo.

```css
background-color: yellow;
```

---

## Formas de representar cores

### Nome

```css
color: red;
```

### Hexadecimal

```css
color: #ff0000;
```

### RGB

```css
color: rgb(255, 0, 0);
```

### RGBA

```css
color: rgba(255, 0, 0, 0.5);
```

---

# 32. Fontes

## `font-family`

```css
font-family: Arial, sans-serif;
```

---

## `font-size`

```css
font-size: 20px;
```

---

## `font-weight`

```css
font-weight: bold;
```

Também pode utilizar:

```css
font-weight: 400;

font-weight: 700;
```

---

## `font-style`

```css
font-style: italic;
```

---

# 33. Texto

## `text-align`

```css
text-align: center;
```

Valores comuns:

```text
left
center
right
justify
```

---

## `text-decoration`

```css
text-decoration: none;
```

Muito utilizado para remover o sublinhado de links.

---

## `text-transform`

```css
text-transform: uppercase;
```

Valores:

```text
uppercase
lowercase
capitalize
```

---

## `line-height`

Controla a distância entre linhas.

```css
line-height: 1.5;
```

---

## `letter-spacing`

Espaçamento entre letras.

```css
letter-spacing: 2px;
```

---

## `word-spacing`

Espaçamento entre palavras.

```css
word-spacing: 5px;
```

---

# 34. Dimensões

## `width`

Largura.

```css
width: 300px;
```

---

## `height`

Altura.

```css
height: 200px;
```

---

## `max-width`

Largura máxima.

```css
max-width: 1200px;
```

---

## `min-width`

Largura mínima.

```css
min-width: 300px;
```

---

## `max-height`

```css
max-height: 500px;
```

---

## `min-height`

```css
min-height: 100vh;
```

---

# 35. Unidades CSS

Algumas unidades comuns:

```text
px  → pixels
%   → porcentagem
em  → relativo ao elemento pai
rem → relativo ao elemento raiz
vw  → largura da tela
vh  → altura da tela
```

Exemplo:

```css
width: 80%;

font-size: 1.5rem;

height: 100vh;
```

---

# 36. Box Model

Todo elemento HTML pode ser entendido como uma caixa.

```text
+---------------------------+
|          margin           |
|   +-------------------+   |
|   |      border       |   |
|   |  +-------------+  |   |
|   |  |   padding   |  |   |
|   |  | +---------+ |  |   |
|   |  | | conteúdo| |  |   |
|   |  | +---------+ |  |   |
|   |  +-------------+  |   |
|   +-------------------+   |
+---------------------------+
```

---

# 37. Margin

Espaço externo.

```css
margin: 20px;
```

Também:

```css
margin-top: 10px;

margin-right: 20px;

margin-bottom: 10px;

margin-left: 20px;
```

Forma resumida:

```css
margin: 10px 20px;
```

---

# 38. Padding

Espaço interno.

```css
padding: 20px;
```

Também:

```css
padding-top: 10px;

padding-right: 20px;

padding-bottom: 10px;

padding-left: 20px;
```

---

# 39. Bordas

## `border`

```css
border: 1px solid black;
```

---

## `border-radius`

Arredonda os cantos.

```css
border-radius: 10px;
```

Para criar um círculo:

```css
border-radius: 50%;
```

---

# 40. Box sizing

```css
box-sizing: border-box;
```

Muito utilizado para facilitar o cálculo do tamanho dos elementos.

Uma configuração comum é:

```css
* {

    box-sizing: border-box;

}
```

---

# 41. Display

Define como um elemento será apresentado.

```css
display: block;
```

Valores comuns:

```text
block
inline
inline-block
none
flex
grid
```

---

# 42. Ocultar elementos

```css
display: none;
```

ou:

```css
visibility: hidden;
```

Diferença:

```text
display: none
→ elemento deixa de ocupar espaço

visibility: hidden
→ elemento fica invisível, mas continua ocupando espaço
```

---

# 43. Position

Permite controlar o posicionamento.

```css
position: relative;
```

Principais valores:

```text
static
relative
absolute
fixed
sticky
```

Exemplo:

```css
position: absolute;

top: 10px;

right: 20px;
```

---

# 44. Overflow

Controla o que acontece quando o conteúdo ultrapassa o tamanho do elemento.

```css
overflow: hidden;
```

Valores:

```text
visible
hidden
scroll
auto
```

---

# 45. Sombras

## `box-shadow`

```css
box-shadow: 0 4px 10px rgba(0,0,0,0.2);
```

---

## `text-shadow`

```css
text-shadow: 2px 2px 4px gray;
```

---

# 46. Cursor

```css
cursor: pointer;
```

Muito utilizado em botões e elementos clicáveis.

---

# 47. Opacidade

```css
opacity: 0.5;
```

Valores variam normalmente de:

```text
0 até 1
```

---

# 48. Imagens de fundo

```css
background-image: url("imagem.jpg");
```

---

## `background-size`

```css
background-size: cover;
```

---

## `background-position`

```css
background-position: center;
```

---

## `background-repeat`

```css
background-repeat: no-repeat;
```

---

# 49. Flexbox

Flexbox é uma das formas mais utilizadas para organizar elementos na página.

```css
.container {

    display: flex;

}
```

---

## `flex-direction`

```css
flex-direction: row;
```

ou:

```css
flex-direction: column;
```

---

## `justify-content`

Controla o alinhamento no eixo principal.

```css
justify-content: center;
```

Valores comuns:

```text
flex-start
center
flex-end
space-between
space-around
space-evenly
```

---

## `align-items`

Controla o alinhamento no eixo secundário.

```css
align-items: center;
```

---

## `gap`

Define o espaço entre elementos.

```css
gap: 20px;
```

---

## `flex-wrap`

Permite quebrar elementos para uma nova linha.

```css
flex-wrap: wrap;
```

---

# 50. CSS Grid

Outra forma importante de criar layouts.

```css
.container {

    display: grid;

}
```

Exemplo:

```css
.container {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;

}
```

Resultado:

```text
COLUNA 1 | COLUNA 2 | COLUNA 3
```

---

# 51. Pseudoclasses

Permitem aplicar estilos de acordo com o estado de um elemento.

## `:hover`

```css
button:hover {

    background-color: blue;

}
```

Executado quando o mouse passa sobre o elemento.

---

## `:focus`

```css
input:focus {

    border-color: blue;

}
```

---

## `:first-child`

```css
li:first-child {

    color: red;

}
```

---

## `:last-child`

```css
li:last-child {

    color: blue;

}
```

---

## `:nth-child()`

```css
li:nth-child(2) {

    color: green;

}
```

---

# 52. Transições

Permitem criar mudanças suaves.

```css
button {

    transition: 0.3s;

}
```

Exemplo:

```css
button {

    background-color: blue;

    transition: 0.3s;

}

button:hover {

    background-color: darkblue;

}
```

---

# 53. Responsividade

Uma página responsiva se adapta a diferentes tamanhos de tela.

Podemos utilizar:

```css
@media
```

Exemplo:

```css
@media (max-width: 768px) {

    .container {

        flex-direction: column;

    }

}
```

---

# 54. Exemplo completo

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>TechCursos</title>

    <link
        rel="stylesheet"
        href="style.css"
    >

</head>

<body>

    <header>

        <h1>TechCursos</h1>

        <nav>

            <a href="#">Início</a>

            <a href="#">Cursos</a>

            <a href="#">Contato</a>

        </nav>

    </header>

    <main>

        <section class="cursos">

            <div class="card">

                <h2>HTML</h2>

                <p>
                    Aprenda a estruturar páginas Web.
                </p>

                <button>
                    Saiba mais
                </button>

            </div>

            <div class="card">

                <h2>CSS</h2>

                <p>
                    Aprenda a estilizar páginas Web.
                </p>

                <button>
                    Saiba mais
                </button>

            </div>

        </section>

    </main>

    <footer>

        <p>
            © 2026 TechCursos
        </p>

    </footer>

</body>

</html>
```

CSS:

```css
* {

    box-sizing: border-box;

}

body {

    margin: 0;

    font-family: Arial, sans-serif;

    background-color: #f5f5f5;

}

header {

    background-color: #212529;

    color: white;

    padding: 20px;

}

nav {

    display: flex;

    gap: 20px;

}

nav a {

    color: white;

    text-decoration: none;

}

.cursos {

    display: flex;

    justify-content: center;

    gap: 20px;

    padding: 40px;

}

.card {

    width: 300px;

    padding: 20px;

    background-color: white;

    border-radius: 10px;

    box-shadow: 0 4px 10px rgba(0,0,0,0.1);

}

button {

    padding: 10px 20px;

    border: none;

    border-radius: 5px;

    cursor: pointer;

}

button:hover {

    background-color: #212529;

    color: white;

}

footer {

    text-align: center;

    padding: 20px;

}

@media (max-width: 768px) {

    .cursos {

        flex-direction: column;

        align-items: center;

    }

}
```

---

# 55. Resumo

## HTML

HTML responde principalmente à pergunta:

> **O que existe na página?**

Exemplos:

```text
Título
Parágrafo
Imagem
Link
Menu
Tabela
Formulário
Botão
Seção
Rodapé
```

---

## CSS

CSS responde principalmente à pergunta:

> **Como os elementos da página serão apresentados?**

Exemplos:

```text
Cor
Tamanho
Fonte
Espaçamento
Borda
Alinhamento
Layout
Posicionamento
Responsividade
```

---

# 56. Relação entre HTML e CSS

Podemos resumir:

```text
HTML
↓
ESTRUTURA

CSS
↓
APRESENTAÇÃO
```

Exemplo:

```html
<button class="botao">
    Comprar
</button>
```

HTML define:

```text
Existe um botão chamado Comprar.
```

CSS:

```css
.botao {

    background-color: blue;

    color: white;

    padding: 10px 20px;

}
```

CSS define:

```text
Como esse botão será apresentado.
```

---

# 57. Mapa mental

```text
DESENVOLVIMENTO WEB
│
├── HTML
│   │
│   ├── Estrutura
│   ├── Conteúdo
│   ├── Semântica
│   ├── Links
│   ├── Imagens
│   ├── Listas
│   ├── Tabelas
│   └── Formulários
│
└── CSS
    │
    ├── Cores
    ├── Fontes
    ├── Tamanhos
    ├── Espaçamentos
    ├── Bordas
    ├── Box Model
    ├── Flexbox
    ├── Grid
    ├── Posicionamento
    ├── Pseudoclasses
    └── Responsividade
```

---

# 58. Ideia principal

Quando desenvolvemos uma página Web:

```text
HTML
↓
Define a estrutura

CSS
↓
Define a aparência

Bootstrap
↓
Facilita a criação da interface
```

Essa separação é fundamental para compreender o desenvolvimento Web moderno.
