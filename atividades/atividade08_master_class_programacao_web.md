# Lista de Exercícios 08 — Master Class de Programação Web

**Conteúdos:** HTML, CSS, Flexbox, Grid, Bootstrap, JavaScript, variáveis, condicionais, laços, funções, vetores (arrays), objetos, JSON, DOM, eventos e `localStorage`.

**Objetivo:** revisar os fundamentos do desenvolvimento Web e aprofundar vetores e objetos JavaScript, preparando os estudantes para aplicações que consumirão APIs REST.

**Orientações:** separe HTML, CSS e JavaScript em arquivos distintos. Priorize `getElementById()`, `addEventListener()` e laços `for` quando apropriado. Resolva os exercícios sem consultar soluções prontas.

---

# Parte 1 — HTML e CSS

## Exercício 1 — Estrutura HTML
Crie uma página contendo `<!DOCTYPE html>`, `html`, `head`, `meta`, `title` e `body`. Explique a função de `head`, `body` e `meta charset="UTF-8"`.

## Exercício 2 — Elementos HTML
Crie uma página de apresentação de um curso contendo título, subtítulos, parágrafos, imagem, lista de conteúdos, link e rodapé. Utilize elementos semânticos sempre que possível.

## Exercício 3 — Formulário de cadastro
Desenvolva um formulário contendo nome, e-mail, idade, curso e botão de cadastro. Explique a diferença entre os atributos `id`, `name`, `type` e `placeholder`.

## Exercício 4 — Seletores CSS
Considere:

```html
<h1 id="titulo">Minha Loja</h1>
<p class="descricao">Produtos disponíveis</p>
<p class="descricao">Ofertas especiais</p>
```

Crie regras CSS para centralizar o título, alterar a cor dos parágrafos e definir uma fonte para toda a página. Explique a diferença entre seletores por elemento, classe e identificador.

## Exercício 5 — Box Model
Crie um card de produto utilizando `width`, `padding`, `margin`, `border` e `border-radius`. Explique como cada propriedade influencia o espaço ocupado pelo elemento.

## Exercício 6 — Flexbox
Crie uma página com três cards organizados horizontalmente. Utilize:

```css
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
```

Explique a função de `gap` e sua diferença em relação a `margin`.

## Exercício 7 — CSS Grid
Crie uma grade com nove elementos distribuídos em três linhas e três colunas. Utilize:

```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
```

Explique o significado de `1fr`.

## Exercício 8 — Bootstrap
Crie uma página com três cards Bootstrap. Os cards deverão aparecer lado a lado em telas maiores e empilhados em telas menores. Explique `container`, `row`, `col-md-4`, `card` e `btn`.

---

# Parte 2 — Fundamentos de JavaScript

## Exercício 9 — Variáveis e tipos
Considere:

```javascript
let nome = "Notebook";
let preco = 3500;
let disponivel = true;
let quantidade = 5;
```

Identifique os tipos e explique a diferença entre `let` e `const`.

## Exercício 10 — Operadores
Calcule o valor total de uma compra e mostre-o no console:

```javascript
let preco = 150;
let quantidade = 3;
```

## Exercício 11 — Condicionais
Crie um programa que verifique a quantidade de um produto: quantidade igual a zero → "Produto indisponível"; entre 1 e 5 → "Estoque baixo"; maior que 5 → "Produto disponível". Utilize `if`, `else if` e `else`.

## Exercício 12 — Laço FOR
Utilizando `for`, apresente os números de 1 a 20. Depois mostre apenas os pares.

## Exercício 13 — Funções
Implemente:

```javascript
function calcularTotal(preco, quantidade) {
    // Complete
}
```

A função deverá retornar o total da compra. Explique a diferença entre `return` e `console.log()`.

---

# Parte 3 — Vetores (Arrays)

## Exercício 14 — Criando um vetor
Considere:

```javascript
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];
```

Responda: quantos elementos existem? Qual elemento está na posição 0? E na posição 2? Qual é o último índice válido? O que retorna `produtos.length`?

## Exercício 15 — Alterando elementos
No vetor anterior, substitua `"Mouse"` por `"Mouse Gamer"` e `"Monitor"` por `"Impressora"`. Mostre o vetor atualizado.

## Exercício 16 — Adicionando elementos
Considere:

```javascript
let produtos = ["Notebook", "Mouse"];
```

Utilize `push()` para adicionar `"Teclado"` e `"Monitor"`. Explique a diferença entre `produtos[2] = "Teclado"` e `produtos.push("Teclado")`.

## Exercício 17 — Removendo elementos
Considere:

```javascript
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];
```

Remova o último produto com `pop()`, remova o primeiro com `shift()` e adicione um produto no início com `unshift()`. Mostre o vetor após cada operação.

## Exercício 18 — Percorrendo um vetor
Considere:

```javascript
let alunos = ["Ana", "Carlos", "Maria", "João"];
```

Utilize `for` para apresentar:

```text
Aluno 1: Ana
Aluno 2: Carlos
Aluno 3: Maria
Aluno 4: João
```

## Exercício 19 — Soma dos elementos
Considere:

```javascript
let notas = [7, 8, 6, 9, 10];
```

Utilizando `for`, calcule a soma e a média das notas. Não utilize funções prontas de agregação.

## Exercício 20 — Maior valor
Considere:

```javascript
let numeros = [12, 5, 27, 8, 19];
```

Percorra o vetor e encontre o maior valor utilizando uma variável `maior`.

## Exercício 21 — Pesquisa em vetor
Considere:

```javascript
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];
let pesquisa = "Teclado";
```

Utilizando `for` e `if`, verifique se o produto existe. Se existir, mostre `Produto encontrado na posição 2.`; caso contrário, informe que não foi encontrado.

## Exercício 22 — Selection Sort
Implemente Selection Sort para ordenar:

```javascript
let numeros = [8, 3, 6, 1, 9, 2];
```

Explique a função das variáveis `i`, `j` e `indiceMenor`.

---

# Parte 4 — Objetos JavaScript

## Exercício 23 — Criando um objeto
Considere:

```javascript
let produto = {
    nome: "Notebook",
    preco: 3500,
    quantidade: 5
};
```

Explique: o que é um objeto? O que são propriedades? Qual a diferença entre variável simples e objeto? Como acessar nome e preço?

## Exercício 24 — Acessando propriedades
Utilizando o objeto anterior, apresente:

```text
Produto: Notebook
Preço: R$ 3500
Quantidade: 5
```

Utilize a notação de ponto.

## Exercício 25 — Alterando propriedades
Considere:

```javascript
let aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "Sistemas de Informação",
    nota: 7
};
```

Altere a nota para 9, a idade para 21, adicione `aprovado: true` e apresente o objeto atualizado.

## Exercício 26 — Objeto com função
Crie um objeto `produto` contendo nome, preço, quantidade e um método `calcularTotal()` que retorne preço × quantidade. Teste `produto.calcularTotal()`. Pesquise o significado de `this` em métodos.

## Exercício 27 — Objetos e condicionais
Considere:

```javascript
let produto = { nome: "Mouse", preco: 80, quantidade: 0 };
```

Crie uma função que receba esse objeto e retorne `"Disponível"` quando a quantidade for maior que zero e `"Indisponível"` quando for zero.

---

# Parte 5 — Vetores de objetos

## Exercício 28 — Criando um vetor de objetos
Considere:

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 5 },
    { nome: "Mouse", preco: 80, quantidade: 20 },
    { nome: "Teclado", preco: 150, quantidade: 10 }
];
```

Responda: quantos objetos existem? O que retorna `produtos[0]`? E `produtos[0].nome`? E `produtos[1].preco`? Como acessar a quantidade do terceiro produto?

## Exercício 29 — Percorrendo objetos
Utilizando o vetor anterior, apresente:

```text
Notebook - R$ 3500
Mouse - R$ 80
Teclado - R$ 150
```

Utilize `for`.

## Exercício 30 — Adicionando objetos
Crie:

```javascript
let novoProduto = { nome: "Monitor", preco: 900, quantidade: 8 };
```

Adicione esse objeto ao vetor com `push()` e apresente todos os produtos.

## Exercício 31 — Pesquisando objetos
Crie:

```javascript
function pesquisarProduto(nome) {
    // Complete
}
```

Percorra o vetor e retorne o objeto com o nome pesquisado. Caso não encontre, retorne `null`.

## Exercício 32 — Calculando o estoque
Considere:

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 2 },
    { nome: "Mouse", preco: 80, quantidade: 10 },
    { nome: "Teclado", preco: 150, quantidade: 5 }
];
```

Calcule o valor total do estoque somando `preco * quantidade` de cada produto. **Resultado esperado: R$ 8.550,00.**

---

# Parte 6 — JSON

## Exercício 33 — Objeto e JSON
Considere:

```javascript
let produto = { nome: "Notebook", preco: 3500, quantidade: 5 };
```

Explique a diferença entre um objeto JavaScript e um texto JSON.

## Exercício 34 — JSON.stringify()
Converta o objeto anterior para JSON com `JSON.stringify()`. Utilize `typeof` para verificar o tipo do resultado.

## Exercício 35 — JSON.parse()
Considere:

```javascript
let textoJSON = '{"nome":"Mouse","preco":80,"quantidade":10}';
```

Converta o texto em objeto com `JSON.parse()` e apresente nome e preço.

## Exercício 36 — Vetor de objetos para JSON
Considere:

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 }
];
```

Converta o vetor para JSON e recupere a estrutura original com `JSON.parse()`.

---

# Parte 7 — DOM e eventos

## Exercício 37 — Manipulação do DOM
Crie:

```html
<h1 id="titulo">Programação Web</h1>
<button id="botao">Alterar título</button>
```

Ao clicar no botão, altere o título usando `textContent`.

## Exercício 38 — addEventListener()
Explique:

```javascript
const botao = document.getElementById("botao");
botao.addEventListener("click", function() {
    console.log("Botão clicado!");
});
```

O que é um evento? Qual a função de `addEventListener()`? O que significa `"click"`? Quando a função é executada?

## Exercício 39 — Cadastro de nomes
Crie uma página com campo de texto e botão. Ao clicar: leia o nome, adicione-o a um vetor, atualize uma lista HTML e mostre a quantidade de nomes. Utilize `getElementById()`, `addEventListener()`, `push()` e `for`.

## Exercício 40 — Cadastro de produtos
Evolua o exercício anterior. Cada produto terá:

```javascript
{ nome: "Notebook", preco: 3500, quantidade: 5 }
```

Crie um formulário com três campos e botão. Ao cadastrar, adicione o objeto a um vetor e apresente os dados na página.

---

# Parte 8 — Armazenamento no navegador

## Exercício 41 — localStorage
Explique a finalidade do `localStorage` e a diferença entre armazenar dados em uma variável JavaScript e armazená-los no navegador.

## Exercício 42 — Salvando informações
Crie uma página para informar o nome de um usuário. Ao clicar em um botão, salve-o com `localStorage.setItem()`. Ao atualizar a página, recupere-o com `localStorage.getItem()`.

## Exercício 43 — Salvando um objeto
Considere:

```javascript
let usuario = {
    nome: "Ana",
    idade: 22,
    curso: "Sistemas de Informação"
};
```

Armazene o objeto no `localStorage` usando `JSON.stringify()` e recupere-o com `JSON.parse()`.

## Exercício 44 — Persistindo produtos
Evolua o exercício 40 para: (1) armazenar produtos em um vetor de objetos; (2) converter o vetor para JSON; (3) salvar no `localStorage`; (4) recuperar ao carregar a página; (5) atualizar a interface com os dados recuperados. Trate o caso em que ainda não existem dados armazenados.

---

# Parte 9 — Desafio integrador

## Exercício 45 — Sistema de Cadastro de Produtos
Desenvolva uma aplicação Web completa para gerenciar produtos.

### Interface de referência

```text
┌─────────────────────────────────────────┐
│          CADASTRO DE PRODUTOS           │
│                                         │
│ Nome:                                   │
│ [____________________________]          │
│                                         │
│ Preço:                                  │
│ [____________]                          │
│                                         │
│ Quantidade:                             │
│ [____________]                          │
│                                         │
│          [ ADICIONAR ]                  │
│                                         │
│ PRODUTOS CADASTRADOS                    │
│                                         │
│ Notebook - R$ 3500 - 5 unidades         │
│ Mouse    - R$   80 - 10 unidades        │
│ Teclado  - R$  150 - 3 unidades         │
│                                         │
│ Total de produtos: 3                    │
│ Valor total do estoque: R$ 18050        │
└─────────────────────────────────────────┘
```

### Requisitos funcionais

- **RF01 — Cadastrar produto:** permitir cadastrar nome, preço e quantidade.
- **RF02 — Validar campos:** impedir campos vazios ou valores inválidos.
- **RF03 — Armazenar produtos:** utilizar um vetor de objetos JavaScript.
- **RF04 — Listar produtos:** apresentar todos os produtos cadastrados.
- **RF05 — Contar produtos:** mostrar a quantidade de produtos diferentes cadastrados.
- **RF06 — Calcular estoque:** apresentar o valor total do estoque (soma de preço × quantidade).
- **RF07 — Persistir dados:** utilizar JSON e `localStorage`.
- **RF08 — Recuperar dados:** carregar automaticamente os produtos ao abrir a página.

### Requisitos técnicos

Utilize HTML e CSS em arquivos separados, Flexbox ou Grid, JavaScript externo, `getElementById()`, `addEventListener()`, funções, condicionais, `for`, vetores, objetos, `push()`, `JSON.stringify()`, `JSON.parse()` e `localStorage`.