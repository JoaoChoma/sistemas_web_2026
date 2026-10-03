---
title: "JavaScript na Prática — Calculadora"
author: "Prof. Tiago Piperno Bonetti"
---

# JavaScript na Prática

## Construindo uma calculadora

Nesta aula vamos utilizar o que já conhecemos de:

```text
HTML
+
CSS
+
JavaScript
```

Agora o foco será a **lógica da aplicação**.

---

# Objetivos da aula

Ao final da prática, esperamos compreender:

- variáveis;
- funções;
- condicionais;
- eventos;
- conversão de tipos;
- estado da aplicação;
- manipulação básica do DOM;
- organização das operações de uma aplicação.

---

# O projeto

Construiremos uma calculadora:

```text
┌─────────────────────────┐
│                      25 │
├─────┬─────┬─────┬──────┤
│  7  │  8  │  9  │  +   │
│  4  │  5  │  6  │  -   │
│  1  │  2  │  3  │  *   │
│  C  │  0  │  =  │  /   │
└─────┴─────┴─────┴──────┘
```

O HTML e o CSS constroem a interface.

Vamos trabalhar com elementos individualmente.

Isso permite visualizar claramente:

```text
ELEMENTO
↓
EVENTO
↓
FUNÇÃO
↓
ALTERAÇÃO DO ESTADO
```

---

# Estrutura do projeto

```text
calculadora/
│
├── index.html
├── style.css
└── script.js
```

Responsabilidades:

```text
index.html
↓
estrutura

style.css
↓
aparência

script.js
↓
lógica e comportamento
```

---

# Parte 1 — A interface

No HTML teremos um display:

```html
<input
    type="text"
    id="display"
    value="0"
    readonly
>
```

E os botões:

```html
<button id="btn7">7</button>
<button id="btn8">8</button>
<button id="btn9">9</button>
```

Cada botão possui um `id`.

---

# Por que utilizar ID?

Precisamos encontrar o botão no JavaScript.

HTML:

```html
<button id="btn7">7</button>
```

JavaScript:

```javascript
const btn7 =
    document.getElementById("btn7");
```

Agora temos uma referência para aquele elemento.

---

# Encontrando o display

HTML:

```html
<input id="display">
```

JavaScript:

```javascript
const display =
    document.getElementById("display");
```

Depois podemos modificar:

```javascript
display.value = "25";
```

---

# Parte 2 — Estado da calculadora

Nossa calculadora precisa lembrar algumas informações.

Vamos utilizar:

```javascript
let valorAtual = "";
let valorAnterior = "";
let operacao = null;
```

Essas variáveis representam o **estado da aplicação**.

---

# O que é estado?

Estado é o conjunto de informações que descreve a situação atual da aplicação.

Inicialmente:

```text
valorAtual    = ""
valorAnterior = ""
operacao      = null
```

Usuário pressiona:

```text
2
```

Estado:

```text
valorAtual = "2"
```

---

# Continuando a entrada

Usuário pressiona:

```text
5
```

Não queremos:

```text
2 + 5 = 7
```

Queremos formar:

```text
25
```

Então trabalharemos inicialmente com texto:

```javascript
valorAtual = valorAtual + "5";
```

---

# Exemplo

Inicialmente:

```javascript
let valorAtual = "";
```

Pressiona `2`:

```javascript
valorAtual = valorAtual + "2";
```

Temos:

```text
"2"
```

Pressiona `5`:

```javascript
valorAtual = valorAtual + "5";
```

Temos:

```text
"25"
```

---

# Função para adicionar número

Podemos evitar repetir a lógica:

```javascript
function adicionarNumero(numero) {

    valorAtual =
        valorAtual + numero;

    atualizarDisplay();
}
```

Agora:

```javascript
adicionarNumero("7");
```

---

# Atualizando o display

```javascript
function atualizarDisplay() {

    if (valorAtual === "") {
        display.value = "0";
    } else {
        display.value = valorAtual;
    }
}
```

Aqui já utilizamos:

```text
FUNÇÃO
+
CONDICIONAL
+
DOM
```

---

# Parte 3 — Eventos

O botão existe:

```html
<button id="btn7">7</button>
```

Temos sua referência:

```javascript
const btn7 =
    document.getElementById("btn7");
```

Agora precisamos detectar o clique.

---

# `addEventListener`

```javascript
btn7.addEventListener(
    "click",
    function () {
        adicionarNumero("7");
    }
);
```

Podemos interpretar:

```text
QUANDO
btn7

RECEBER
click

EXECUTE
adicionarNumero("7")
```

---

# Outros números

Faremos explicitamente:

```javascript
btn1.addEventListener("click", function () {
    adicionarNumero("1");
});

btn2.addEventListener("click", function () {
    adicionarNumero("2");
});

btn3.addEventListener("click", function () {
    adicionarNumero("3");
});
```

Sim, existe repetição.

---

# O fluxo até agora

```text
USUÁRIO
↓
clica no botão 7

EVENTO
↓
click

FUNÇÃO
↓
adicionarNumero("7")

ESTADO
↓
valorAtual = "7"

INTERFACE
↓
atualizarDisplay()

RESULTADO
↓
7
```

---

# Parte 4 — Operações

Precisamos tratar:

```text
+
-
*
/
```

Quando o usuário escolhe uma operação, precisamos guardar:

1. o primeiro valor;
2. a operação;
3. preparar a entrada do segundo valor.

---

# Exemplo

Usuário digitou:

```text
25
```

Estado:

```text
valorAtual = "25"
```

Pressiona:

```text
+
```

Queremos:

```text
valorAnterior = "25"
operacao = "+"
valorAtual = ""
```

---

# Função `selecionarOperacao`

```javascript
function selecionarOperacao(
    novaOperacao
) {

    if (valorAtual === "") {
        return;
    }

    valorAnterior = valorAtual;

    operacao = novaOperacao;

    valorAtual = "";
}
```

---

# O `return`

Observe:

```javascript
if (valorAtual === "") {
    return;
}
```

Se não existe número digitado:

```text
valorAtual = ""
```

não faz sentido escolher uma operação.

O `return` encerra a função.

---

# Eventos das operações

```javascript
btnSomar.addEventListener(
    "click",
    function () {
        selecionarOperacao("+");
    }
);
```

Para subtração:

```javascript
btnSubtrair.addEventListener(
    "click",
    function () {
        selecionarOperacao("-");
    }
);
```

---

# Estado depois da operação

Entrada:

```text
25 +
```

Estado:

```text
valorAnterior = "25"
operacao      = "+"
valorAtual    = ""
```

Agora o usuário digita:

```text
10
```

Estado:

```text
valorAnterior = "25"
operacao      = "+"
valorAtual    = "10"
```

---

# Parte 5 — Calculando

Quando o usuário clicar:

```text
=
```

precisamos calcular:

```text
valorAnterior
      +
valorAtual
```

Mas os valores estão armazenados como strings.

---

# Conversão

Temos:

```javascript
valorAnterior = "25";
valorAtual = "10";
```

Precisamos converter:

```javascript
const numeroAnterior =
    Number(valorAnterior);

const numeroAtual =
    Number(valorAtual);
```

Agora:

```text
"25" → 25

"10" → 10
```

---

# Função `calcular`

```javascript
function calcular() {

    if (
        valorAnterior === "" ||
        valorAtual === "" ||
        operacao === null
    ) {
        return;
    }

    const numeroAnterior =
        Number(valorAnterior);

    const numeroAtual =
        Number(valorAtual);

    let resultado;
}
```

---

# Escolhendo a operação

Agora entram as condicionais:

```javascript
if (operacao === "+") {

    resultado =
        numeroAnterior + numeroAtual;

} else if (operacao === "-") {

    resultado =
        numeroAnterior - numeroAtual;

}
```

---

# Multiplicação e divisão

```javascript
else if (operacao === "*") {

    resultado =
        numeroAnterior * numeroAtual;

} else if (operacao === "/") {

    resultado =
        numeroAnterior / numeroAtual;

}
```

Temos:

```text
CONDICIONAL
↓
decide qual operação executar
```

---

# Um problema

O que acontece em:

```text
10 / 0
```

?

Nossa aplicação precisa tratar essa situação.

---

# Divisão por zero

Podemos verificar:

```javascript
if (
    operacao === "/" &&
    numeroAtual === 0
) {

    display.value = "Erro";

    return;
}
```

Temos novamente:

```text
REGRA
↓
CONDICIONAL
↓
COMPORTAMENTO
```

---

# Depois do cálculo

Se:

```text
25 + 10
```

resultado:

```text
35
```

Atualizamos:

```javascript
valorAtual =
    String(resultado);

valorAnterior = "";

operacao = null;

atualizarDisplay();
```

---

# Por que voltar para String?

O display trabalha com uma sequência de entrada.

Depois de:

```text
25 + 10 = 35
```

podemos querer continuar:

```text
35 + 5
```

Por isso mantemos `valorAtual` coerente com a entrada da calculadora.

---

# Parte 6 — Limpar

Precisamos implementar:

```text
C
```

Função:

```javascript
function limpar() {

    valorAtual = "";

    valorAnterior = "";

    operacao = null;

    atualizarDisplay();
}
```

---

# Evento do botão C

```javascript
btnLimpar.addEventListener(
    "click",
    function () {
        limpar();
    }
);
```

Fluxo:

```text
CLICK
↓
limpar()
↓
estado inicial
↓
display = 0
```

---

# A calculadora como um sistema

Observe que temos duas coisas diferentes.

## Interface

```text
display
botões
```

## Estado

```text
valorAtual
valorAnterior
operacao
```

O evento conecta os dois.

---

# Arquitetura simples

```text
┌──────────────┐
│    HTML      │
│   BOTÕES     │
└──────┬───────┘
       │ click
       ↓
┌──────────────┐
│  JAVASCRIPT  │
│   FUNÇÕES    │
└──────┬───────┘
       │ altera
       ↓
┌──────────────┐
│    ESTADO    │
│ valorAtual   │
│ valorAnterior│
│ operacao     │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   DISPLAY    │
└──────────────┘
```

---

# O que utilizamos?

## Variáveis

```javascript
let valorAtual;
let valorAnterior;
let operacao;
```

## Condicionais

```javascript
if
else if
```

## Funções

```javascript
adicionarNumero()
selecionarOperacao()
calcular()
limpar()
atualizarDisplay()
```

---

# Também utilizamos eventos

```javascript
addEventListener()
```

Exemplo:

```javascript
btnIgual.addEventListener(
    "click",
    function () {
        calcular();
    }
);
```

O evento organiza a interação entre:

```text
USUÁRIO
↓
INTERFACE
↓
LÓGICA
```

---

# E os laços de repetição?

Os botões serão associados individualmente.

Isso deixa explícito:

```text
botão
↓
evento
↓
função
```

Em uma próxima evolução poderemos observar a repetição existente no código e procurar uma solução melhor.

---

# E as estruturas de dados?

Nossa primeira estrutura é o próprio estado:

```text
valorAtual
valorAnterior
operacao
```

Um exemplo natural será o:

```text
HISTÓRICO DA CALCULADORA
```

---

# Próxima evolução — Histórico

Imagine:

```text
HISTÓRICO

10 + 20 = 30
50 - 15 = 35
7 * 8 = 56
```

Podemos guardar operações em um array:

```javascript
const historico = [];
```

---

# Uma operação como objeto

No futuro:

```javascript
const calculo = {

    valor1: 10,

    operacao: "+",

    valor2: 20,

    resultado: 30

};
```

E adicionar:

```javascript
historico.push(calculo);
```

Teremos:

```text
ARRAY
↓
contém vários

OBJETOS
↓
cada objeto representa uma operação
```

---

# Atividade

Partindo do projeto fornecido:

## Etapa 1

Faça os botões numéricos funcionarem.

Teste:

```text
1
12
123
1234
```

---

# Atividade

## Etapa 2

Implemente:

```text
+
-
```

Teste:

```text
10 + 5 = 15
20 - 8 = 12
```

---

# Atividade

## Etapa 3

Implemente:

```text
*
/
```

Teste:

```text
5 * 4 = 20
20 / 4 = 5
```

---

# Atividade

## Etapa 4

Implemente o botão:

```text
C
```

Ele deverá retornar a calculadora ao estado inicial.

---

# Atividade

## Etapa 5

Trate:

```text
10 / 0
```

Resultado esperado:

```text
Erro
```

---

# Desafio 1 — Decimal

Adicione:

```text
.
```

para permitir:

```text
10.5 + 2.3
```

Pergunta:

> Como impedir que o usuário digite dois pontos no mesmo número?

Exemplo inválido:

```text
10.5.2
```

---

# Desafio 2 — Porcentagem

Adicione:

```text
%
```

Defina claramente qual comportamento sua calculadora adotará para a porcentagem e implemente a regra.

---

# Desafio 3 — Histórico

Adicione ao HTML:

```text
Histórico
```

Depois armazene os cálculos realizados.

Exemplo:

```text
10 + 5 = 15
8 * 4 = 32
100 / 2 = 50
```

Esse desafio introduzirá:

```text
ARRAYS
+
OBJETOS
```

---

# Síntese

Nossa calculadora permite estudar:

```text
HTML
↓
elementos da interface

CSS
↓
layout e aparência

JavaScript
↓
comportamento
```

E dentro do JavaScript:

```text
VARIÁVEIS
↓
ESTADO

EVENTOS
↓
INTERAÇÃO

FUNÇÕES
↓
ORGANIZAÇÃO

CONDICIONAIS
↓
DECISÕES

CONVERSÃO
↓
STRING ↔ NUMBER
```

---

# O ponto principal

Não estamos apenas construindo:

```text
uma calculadora
```

Estamos utilizando uma aplicação simples para entender:

```text
EVENTO
    ↓
FUNÇÃO
    ↓
LÓGICA
    ↓
ESTADO
    ↓
INTERFACE
```

Essa mesma lógica aparecerá posteriormente em formulários, cadastros e aplicações que consomem APIs.
