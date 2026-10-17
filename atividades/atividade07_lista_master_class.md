# Lista de Exercícios 07 — Programação Web

## Conteúdos
HTML, CSS, Flexbox/Grid, Bootstrap, JavaScript, variáveis, condicionais, laços, funções, arrays, objetos, JSON, DOM e eventos.

---

## 1. Estrutura HTML
Crie uma página contendo `<!DOCTYPE html>`, `html`, `head`, `meta`, `title` e `body`. Explique a função de `head` e `body`.

## 2. Tags HTML
Crie uma página com título, dois subtítulos, três parágrafos, imagem, link, lista ordenada e lista não ordenada. Utilize `h1`, `h2`, `p`, `img`, `a`, `ul`, `ol` e `li`.

## 3. Página de perfil
Crie uma página de apresentação com foto, nome, descrição, tecnologias conhecidas e links para redes sociais. Utilize elementos semânticos quando possível.

## 4. Formulário
Crie um formulário com nome, e-mail, senha, curso, observações e botão de cadastro. Utilize `form`, `label`, `input`, `select`, `option`, `textarea` e `button`.

## 5. CSS externo
Explique o funcionamento de:
```html
<link rel="stylesheet" href="style.css">
```
Explique também por que HTML e CSS normalmente são separados.

## 6. Classe e ID
Considere:
```html
<h1 id="titulo">Programação Web</h1>
<p class="destaque">HTML</p>
<p class="destaque">CSS</p>
```
Crie o CSS para centralizar o título e destacar os parágrafos. Explique a diferença entre `#titulo` e `.destaque`.

## 7. Card
Crie um card de produto com imagem, nome, descrição, preço e botão. Utilize `width`, `padding`, `margin`, `border`, `border-radius` e `text-align`.

## 8. Hover
No card anterior, faça o botão mudar de aparência quando o mouse passar sobre ele. Utilize `:hover`, `background-color`, `color`, `cursor` e, como desafio, `transition`.

## 9. Centralização
Centralize uma `div` horizontal e verticalmente utilizando:
```css
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
```
Explique a função de cada propriedade.

## 10. Flexbox
Crie três caixas lado a lado. Utilize `display: flex`, `justify-content`, `align-items` e `gap`.

## 11. Menu
Crie um menu horizontal com Início, Sobre, Serviços e Contato. Adicione `border-radius` e `hover`.

## 12. CSS Grid
Reproduza:
```text
1 2 3
4 5 6
7 8 9
```
utilizando:
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 8px;
```
Explique `repeat(3, 1fr)`.

## 13. Bootstrap
Explique a finalidade do Bootstrap e a função das classes `container`, `row`, `col`, `btn`, `btn-primary` e `card`.

## 14. Bootstrap responsivo
Crie três cards que apareçam lado a lado em telas grandes e empilhados em telas pequenas usando o Grid do Bootstrap.

---

# JavaScript

## 15. Variáveis
Considere:
```javascript
let nome = "Carlos";
let idade = 20;
let aprovado = true;
```
Identifique os tipos das variáveis. Depois crie variáveis para nome, preço, quantidade e disponibilidade de um produto.

## 16. Operadores
Com:
```javascript
let nota1 = 7;
let nota2 = 9;
```
calcule e mostre a média utilizando `console.log()`.

## 17. Condicional
Crie um programa que receba uma média e mostre `APROVADO` para média >= 7 e `REPROVADO` nos demais casos.

## 18. IF / ELSE IF / ELSE
Classifique uma nota:
- >= 9: Excelente
- >= 7: Aprovado
- >= 5: Recuperação
- abaixo de 5: Reprovado.

## 19. FOR
Utilizando `for`, mostre no console os números de 1 a 10.

## 20. Números pares
Utilizando `for`, mostre todos os números pares entre 0 e 20.

---

# Arrays

## 21. Índices
Considere:
```javascript
let notas = [7, 5, 9, 8, 6];
```
Responda:
1. `notas[0]`?
2. `notas[2]`?
3. O que significa `notas.length`?
4. Como alterar a posição 1 para 10?

## 22. Percorrendo um array
Considere:
```javascript
let nomes = ["Ana", "Carlos", "Maria", "João"];
```
Utilize um `for` para exibir todos os nomes.

## 23. Selection Sort
Ordene:
```javascript
let numeros = [7, 3, 9, 2, 5];
```
utilizando Selection Sort. Explique o papel de `i`, `j`, `indiceMenor` e da variável usada para realizar a troca.

---

# Funções

## 24. Função
Implemente:
```javascript
function somar(a, b) {
    // complete
}
```
A função deve retornar a soma.

## 25. Função com condicional
Implemente `verificarIdade(idade)` retornando `"Maior de idade"` ou `"Menor de idade"`.

---

# DOM e eventos

## 28. DOM
HTML:
```html
<h1 id="titulo">Programação Web</h1>
<button id="botao">Alterar</button>
```
Utilize `document.getElementById()` e `textContent` para alterar o título para `JavaScript funcionando!`.

## 29. Eventos — Lâmpada
Crie uma página com uma lâmpada e botões ACENDER e APAGAR. Utilize:
```javascript
addEventListener("click", ...)
```
para trocar a imagem.

Explique o fluxo:
```text
USUÁRIO → CLIQUE → EVENTO → FUNÇÃO → ALTERAÇÃO NO DOM
```

---