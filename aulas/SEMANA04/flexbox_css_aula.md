# Flexbox — Organização de Layouts com CSS

## Objetivo

Compreender o **CSS Flexbox**, sua finalidade e as principais propriedades utilizadas para organizar, alinhar e distribuir elementos em uma página Web.

---

# 1. O problema

Considere três elementos HTML:

```html
<div class="container">
    <div class="item">HTML</div>
    <div class="item">CSS</div>
    <div class="item">Bootstrap</div>
</div>
```

Sem nenhuma configuração especial de layout, as `<div>` são elementos de bloco e normalmente aparecem uma abaixo da outra:

```text
┌─────────────┐
│    HTML     │
└─────────────┘

┌─────────────┐
│     CSS     │
└─────────────┘

┌─────────────┐
│  Bootstrap  │
└─────────────┘
```

Mas e se quisermos organizar os elementos lado a lado?

```text
┌──────────┐  ┌──────────┐  ┌───────────┐
│   HTML   │  │   CSS    │  │ Bootstrap │
└──────────┘  └──────────┘  └───────────┘
```

Uma das principais ferramentas para isso é o **Flexbox**.

---

# 2. O que é Flexbox?

**Flexbox — Flexible Box Layout** é um modelo de layout do CSS criado para facilitar a:

- organização;
- distribuição;
- direção;
- alinhamento;
- espaçamento;

dos elementos dentro de um container.

A ideia central é:

```text
CONTAINER
│
├── ITEM
├── ITEM
└── ITEM
```

Temos dois conceitos fundamentais:

```text
Flex Container
      ↓
elemento que organiza

Flex Items
      ↓
elementos que são organizados
```

---

# 3. Ativando o Flexbox

Para transformar um elemento em um **Flex Container**, utilizamos:

```css
display: flex;
```

Exemplo:

```css
.container {
    display: flex;
}
```

HTML:

```html
<div class="container">

    <div>HTML</div>
    <div>CSS</div>
    <div>Bootstrap</div>

</div>
```

Resultado:

```text
HTML   CSS   Bootstrap
```

Ao aplicar:

```css
display: flex;
```

os elementos filhos passam a ser **Flex Items**.

---

# 4. Container e itens

Considere:

```html
<div class="container">

    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>

</div>
```

Podemos representar:

```text
.container
│
├── .item
├── .item
└── .item
```

O `.container` é o:

> **Flex Container**

Os `.item` são:

> **Flex Items**

---

# 5. Os dois eixos do Flexbox

Para compreender Flexbox, é fundamental entender que ele trabalha com dois eixos:

```text
EIXO PRINCIPAL
Main Axis

EIXO SECUNDÁRIO
Cross Axis
```

Por padrão:

```text
        EIXO PRINCIPAL
        ───────────────►

┌──────────────────────────────┐
│                              │
│  ITEM 1   ITEM 2   ITEM 3    │
│                              │
└──────────────────────────────┘

              │
              │ EIXO SECUNDÁRIO
              ▼
```

O eixo principal depende da propriedade:

```css
flex-direction
```

---

# 6. `flex-direction`

Define a direção na qual os itens serão organizados.

```css
.container {
    display: flex;
    flex-direction: row;
}
```

Principais valores:

```text
row
row-reverse
column
column-reverse
```

---

# 7. `flex-direction: row`

É o comportamento padrão.

```css
.container {
    display: flex;
    flex-direction: row;
}
```

Resultado:

```text
┌─────┐ ┌─────┐ ┌─────┐
│  1  │ │  2  │ │  3  │
└─────┘ └─────┘ └─────┘

────────────────────────►
       eixo principal
```

Os elementos são organizados horizontalmente.

---

# 8. `flex-direction: column`

```css
.container {
    display: flex;
    flex-direction: column;
}
```

Resultado:

```text
┌─────┐
│  1  │
└─────┘
   │
┌─────┐
│  2  │
└─────┘
   │
┌─────┐
│  3  │
└─────┘
   │
   ▼

eixo principal
```

Agora o eixo principal é vertical.

---

# 9. `row-reverse`

Inverte a ordem horizontal.

```css
flex-direction: row-reverse;
```

Resultado:

```text
3    2    1
```

---

# 10. `column-reverse`

Inverte a ordem vertical.

```css
flex-direction: column-reverse;
```

Resultado:

```text
3
2
1
```

---

# 11. `justify-content`

A propriedade:

```css
justify-content
```

controla a distribuição dos elementos no:

> **EIXO PRINCIPAL**

Exemplo:

```css
.container {
    display: flex;
    justify-content: center;
}
```

Valores muito utilizados:

```text
flex-start
center
flex-end
space-between
space-around
space-evenly
```

---

# 12. `justify-content: flex-start`

```css
justify-content: flex-start;
```

Resultado:

```text
┌────────────────────────────────────┐
│ [1] [2] [3]                        │
└────────────────────────────────────┘
```

Os elementos ficam no início.

---

# 13. `justify-content: center`

```css
justify-content: center;
```

Resultado:

```text
┌────────────────────────────────────┐
│             [1] [2] [3]            │
└────────────────────────────────────┘
```

Os elementos ficam centralizados.

---

# 14. `justify-content: flex-end`

```css
justify-content: flex-end;
```

Resultado:

```text
┌────────────────────────────────────┐
│                        [1] [2] [3] │
└────────────────────────────────────┘
```

---

# 15. `justify-content: space-between`

```css
justify-content: space-between;
```

Resultado:

```text
┌────────────────────────────────────┐
│ [1]             [2]            [3] │
└────────────────────────────────────┘
```

O primeiro elemento fica no início e o último no final.

O espaço restante é distribuído **entre os itens**.

---

# 16. `justify-content: space-around`

```css
justify-content: space-around;
```

Resultado aproximado:

```text
┌────────────────────────────────────┐
│   [1]        [2]        [3]        │
└────────────────────────────────────┘
```

Cada elemento recebe espaço ao seu redor.

---

# 17. `justify-content: space-evenly`

```css
justify-content: space-evenly;
```

Resultado:

```text
┌────────────────────────────────────┐
│    [1]       [2]       [3]         │
└────────────────────────────────────┘
```

Os espaços são distribuídos de maneira uniforme.

---

# 18. `align-items`

A propriedade:

```css
align-items
```

controla o alinhamento no:

> **EIXO SECUNDÁRIO**

Exemplo:

```css
.container {
    display: flex;
    align-items: center;
}
```

Valores comuns:

```text
stretch
flex-start
center
flex-end
baseline
```

---

# 19. Entendendo `justify-content` e `align-items`

Uma forma simples de lembrar:

```text
flex-direction: row

               justify-content
             ◄────────────────►

              [1] [2] [3]

                    ▲
                    │
                    │ align-items
                    │
                    ▼
```

Portanto, quando:

```css
flex-direction: row;
```

temos normalmente:

```text
justify-content → horizontal

align-items → vertical
```

---

# 20. Centralização com Flexbox

Uma utilização extremamente comum do Flexbox é centralizar um elemento.

HTML:

```html
<div class="container">

    <div class="caixa">
        Olá!
    </div>

</div>
```

CSS:

```css
.container {

    display: flex;

    justify-content: center;

    align-items: center;

    height: 500px;

}
```

Resultado:

```text
┌────────────────────────────────────┐
│                                    │
│                                    │
│              ┌──────┐              │
│              │ Olá! │              │
│              └──────┘              │
│                                    │
│                                    │
└────────────────────────────────────┘
```

---

# 21. `gap`

Define o espaço entre os Flex Items.

```css
.container {

    display: flex;

    gap: 20px;

}
```

Resultado:

```text
┌─────┐    ┌─────┐    ┌─────┐
│  1  │    │  2  │    │  3  │
└─────┘    └─────┘    └─────┘
       20px       20px
```

É geralmente mais conveniente que adicionar margens individuais apenas para separar os itens.

---

# 22. `flex-wrap`

Por padrão, Flexbox tenta manter todos os elementos na mesma linha.

```css
flex-wrap: nowrap;
```

Imagine vários cards:

```text
[1] [2] [3] [4] [5] [6]
```

Em uma tela pequena isso pode gerar problemas.

Podemos utilizar:

```css
flex-wrap: wrap;
```

---

# 23. Quebra automática

```css
.container {

    display: flex;

    flex-wrap: wrap;

}
```

Em uma tela grande:

```text
[1] [2] [3] [4] [5] [6]
```

Em uma tela menor:

```text
[1] [2] [3]

[4] [5] [6]
```

Em uma tela ainda menor:

```text
[1] [2]

[3] [4]

[5] [6]
```

Isso ajuda na construção de layouts responsivos.

---

# 24. `flex-flow`

É uma forma resumida de definir:

```text
flex-direction
+
flex-wrap
```

Em vez de:

```css
.container {

    flex-direction: row;

    flex-wrap: wrap;

}
```

podemos utilizar:

```css
.container {

    flex-flow: row wrap;

}
```

---

# 25. Propriedades do Container

As principais propriedades aplicadas ao **Flex Container** são:

```css
.container {

    display: flex;

    flex-direction: row;

    justify-content: center;

    align-items: center;

    flex-wrap: wrap;

    gap: 20px;

}
```

Mapa:

```text
FLEX CONTAINER
│
├── display
│
├── flex-direction
│
├── justify-content
│
├── align-items
│
├── flex-wrap
│
├── flex-flow
│
├── align-content
│
└── gap
```

---

# 26. Propriedades dos Flex Items

Também existem propriedades aplicadas diretamente aos itens:

```text
FLEX ITEM
│
├── flex-grow
├── flex-shrink
├── flex-basis
├── flex
├── align-self
└── order
```

---

# 27. `flex-grow`

Define quanto um elemento pode **crescer** para ocupar o espaço disponível.

HTML:

```html
<div class="container">

    <div class="item">1</div>

    <div class="item">2</div>

    <div class="item">3</div>

</div>
```

CSS:

```css
.item {

    flex-grow: 1;

}
```

Resultado:

```text
┌──────────┬──────────┬──────────┐
│    1     │    2     │    3     │
└──────────┴──────────┴──────────┘
```

Os três elementos dividem o espaço disponível.

---

# 28. Crescimento diferente

```css
.item1 {
    flex-grow: 1;
}

.item2 {
    flex-grow: 2;
}

.item3 {
    flex-grow: 1;
}
```

Representação:

```text
┌───────┬──────────────┬───────┐
│   1   │      2       │   3   │
└───────┴──────────────┴───────┘
```

O segundo item recebe proporcionalmente mais espaço livre.

---

# 29. `flex-shrink`

Define a capacidade de um elemento diminuir quando não existe espaço suficiente.

```css
.item {

    flex-shrink: 1;

}
```

Para impedir que um elemento diminua:

```css
.item {

    flex-shrink: 0;

}
```

---

# 30. `flex-basis`

Define o tamanho inicial de um Flex Item antes da distribuição do espaço.

```css
.item {

    flex-basis: 200px;

}
```

Podemos pensar:

```text
flex-basis
     ↓
tamanho inicial desejado
```

---

# 31. Propriedade `flex`

A propriedade:

```css
flex
```

é uma forma resumida de:

```text
flex-grow
flex-shrink
flex-basis
```

Exemplo:

```css
.item {

    flex: 1;

}
```

É muito utilizada quando queremos que os elementos dividam o espaço disponível.

Exemplo:

```css
.card {

    flex: 1;

}
```

---

# 32. `align-self`

Permite alterar o alinhamento de apenas um item.

Container:

```css
.container {

    display: flex;

    align-items: center;

}
```

Item específico:

```css
.item2 {

    align-self: flex-start;

}
```

Assim, um único elemento pode ter comportamento diferente dos demais.

---

# 33. `order`

Permite alterar visualmente a ordem dos elementos.

HTML:

```html
<div class="item item1">1</div>
<div class="item item2">2</div>
<div class="item item3">3</div>
```

CSS:

```css
.item1 {
    order: 3;
}

.item2 {
    order: 1;
}

.item3 {
    order: 2;
}
```

Visualmente:

```text
2    3    1
```

A ordem visual pode mudar sem alterar a ordem dos elementos no HTML.

> Use `order` com cuidado: alterar apenas a ordem visual pode prejudicar a correspondência entre a apresentação e a ordem de leitura/navegação do documento.

---

# 34. Exemplo — Menu de navegação

HTML:

```html
<nav class="menu">

    <div class="logo">
        TechCursos
    </div>

    <div class="links">

        <a href="#">Início</a>

        <a href="#">Cursos</a>

        <a href="#">Sobre</a>

        <a href="#">Contato</a>

    </div>

</nav>
```

CSS:

```css
.menu {

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 20px;

}
```

Para organizar os links:

```css
.links {

    display: flex;

    gap: 20px;

}
```

Resultado:

```text
TechCursos                Início Cursos Sobre Contato
```

Observe que podemos utilizar Flexbox dentro de outro Flexbox.

---

# 35. Exemplo — Cards

HTML:

```html
<div class="cursos">

    <div class="card">
        <h2>HTML</h2>
        <p>Estrutura das páginas.</p>
    </div>

    <div class="card">
        <h2>CSS</h2>
        <p>Estilização das páginas.</p>
    </div>

    <div class="card">
        <h2>Bootstrap</h2>
        <p>Interfaces responsivas.</p>
    </div>

</div>
```

CSS:

```css
.cursos {

    display: flex;

    gap: 20px;

    justify-content: center;

    flex-wrap: wrap;

}
```

Cards:

```css
.card {

    width: 250px;

    padding: 20px;

    border: 1px solid #ccc;

    border-radius: 10px;

}
```

---

# 36. Flexbox e responsividade

Podemos combinar Flexbox com **Media Queries**.

Desktop:

```text
[ HTML ] [ CSS ] [ Bootstrap ]
```

Celular:

```text
[ HTML ]

[ CSS ]

[ Bootstrap ]
```

CSS:

```css
.cursos {

    display: flex;

    gap: 20px;

}

@media (max-width: 768px) {

    .cursos {

        flex-direction: column;

    }

}
```

---

# 37. Exemplo completo

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

    <title>Flexbox</title>

    <link
        rel="stylesheet"
        href="style.css"
    >

</head>

<body>

    <header class="cabecalho">

        <h1>TechCursos</h1>

        <nav class="menu">

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
                    Aprenda a estruturar páginas.
                </p>

            </div>

            <div class="card">

                <h2>CSS</h2>

                <p>
                    Aprenda a estilizar páginas.
                </p>

            </div>

            <div class="card">

                <h2>Bootstrap</h2>

                <p>
                    Crie interfaces responsivas.
                </p>

            </div>

        </section>

    </main>

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

}

.cabecalho {

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 20px;

    background-color: #222;

    color: white;

}

.menu {

    display: flex;

    gap: 20px;

}

.menu a {

    color: white;

    text-decoration: none;

}

.cursos {

    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 20px;

    padding: 40px;

}

.card {

    flex-basis: 250px;

    padding: 20px;

    border: 1px solid #ccc;

    border-radius: 10px;

}

@media (max-width: 600px) {

    .cabecalho {

        flex-direction: column;

        gap: 15px;

    }

    .cursos {

        flex-direction: column;

    }

}
```

---

# 38. Como pensar em Flexbox

Ao utilizar Flexbox, faça estas perguntas:

### 1. Quem será o container?

```text
Qual elemento contém os elementos que quero organizar?
```

Depois:

```css
display: flex;
```

---

### 2. Qual deve ser a direção?

```text
lado a lado?
```

Use:

```css
flex-direction: row;
```

ou:

```text
um abaixo do outro?
```

Use:

```css
flex-direction: column;
```

---

### 3. Como distribuir no eixo principal?

Utilize:

```css
justify-content
```

---

### 4. Como alinhar no eixo secundário?

Utilize:

```css
align-items
```

---

### 5. Preciso de espaço entre os elementos?

Utilize:

```css
gap
```

---

### 6. Os elementos podem quebrar para outra linha?

Utilize:

```css
flex-wrap: wrap;
```

---

# 39. Mapa mental do Flexbox

```text
FLEXBOX
│
├── FLEX CONTAINER
│   │
│   ├── display: flex
│   │
│   ├── flex-direction
│   │   ├── row
│   │   └── column
│   │
│   ├── justify-content
│   │   └── eixo principal
│   │
│   ├── align-items
│   │   └── eixo secundário
│   │
│   ├── flex-wrap
│   │
│   ├── align-content
│   │
│   └── gap
│
└── FLEX ITEMS
    │
    ├── flex-grow
    ├── flex-shrink
    ├── flex-basis
    ├── flex
    ├── align-self
    └── order
```

---

# 40. Resumo das principais propriedades

| Propriedade | Aplicada em | Função |
|---|---|---|
| `display: flex` | Container | Ativa Flexbox |
| `flex-direction` | Container | Define a direção |
| `justify-content` | Container | Distribui no eixo principal |
| `align-items` | Container | Alinha no eixo secundário |
| `flex-wrap` | Container | Permite quebra de linha |
| `gap` | Container | Espaçamento entre itens |
| `align-content` | Container | Distribui múltiplas linhas no eixo secundário |
| `flex-grow` | Item | Define quanto pode crescer |
| `flex-shrink` | Item | Define quanto pode diminuir |
| `flex-basis` | Item | Define tamanho inicial |
| `flex` | Item | Atalho para grow/shrink/basis |
| `align-self` | Item | Alinha individualmente |
| `order` | Item | Altera a ordem visual |

---

# 41. Regra prática

Para a maior parte dos primeiros layouts com Flexbox, estas propriedades resolvem grande parte dos problemas:

```css
.container {

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 20px;

    flex-wrap: wrap;

}
```

Mas não é necessário utilizar todas em todos os containers.

A pergunta deve ser:

> **Como quero organizar os elementos deste container?**

---

# 42. HTML + CSS + Flexbox + Bootstrap

Até este ponto, podemos organizar os conhecimentos da seguinte forma:

```text
HTML
│
└── O que existe na página?
        ↓
    ESTRUTURA


CSS
│
└── Como a página aparece?
        ↓
    ESTILIZAÇÃO


FLEXBOX
│
└── Como os elementos são organizados?
        ↓
    LAYOUT


BOOTSTRAP
│
└── Como utilizar soluções prontas?
        ↓
    COMPONENTES + GRID + UTILITÁRIOS
```

---

# 43. Relação com Bootstrap

Bootstrap utiliza extensivamente conceitos de Flexbox.

Por exemplo, no CSS:

```css
.container {

    display: flex;

    justify-content: center;

    align-items: center;

}
```

No Bootstrap podemos encontrar classes utilitárias equivalentes:

```html
<div class="d-flex justify-content-center align-items-center">

    Conteúdo

</div>
```

Portanto, compreender **Flexbox antes de utilizar as classes do Bootstrap** ajuda a entender o que o framework está fazendo.

---

# 44. Atividade rápida

Crie uma página contendo quatro cards:

```text
┌─────────┐
│  HTML   │
└─────────┘

┌─────────┐
│   CSS   │
└─────────┘

┌───────────┐
│ Bootstrap │
└───────────┘

┌────────────┐
│ JavaScript │
└────────────┘
```

Utilizando Flexbox, faça com que no desktop eles apareçam:

```text
[ HTML ] [ CSS ] [ Bootstrap ] [ JavaScript ]
```

Em telas menores, permita que os cards sejam reorganizados em novas linhas.

Utilize obrigatoriamente:

```css
display: flex;

justify-content: center;

gap: 20px;

flex-wrap: wrap;
```

Depois experimente modificar:

```css
justify-content
```

para:

```text
flex-start
center
flex-end
space-between
space-around
space-evenly
```

e observe o resultado.

---

# 45. Questão para fixação

Observe:

```css
.container {

    display: flex;

    justify-content: center;

    align-items: center;

}
```

Explique:

1. O que `display: flex` faz?
2. Qual é o eixo principal?
3. O que `justify-content: center` faz?
4. O que `align-items: center` faz?
5. O que mudaria se adicionássemos:

```css
flex-direction: column;
```

A ideia fundamental é perceber que:

> **`justify-content` e `align-items` não significam simplesmente "horizontal" e "vertical". Eles dependem da direção e dos eixos definidos pelo Flexbox.**
