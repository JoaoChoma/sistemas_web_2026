# Fundamentos de JavaScript

## Da página estática à aplicação interativa

**HTML + CSS + JavaScript**

---

# Onde estamos?

Até agora trabalhamos principalmente com:

```text
HTML
↓
Estrutura e conteúdo

CSS
↓
Apresentação e aparência

Bootstrap
↓
Componentes e responsividade
```

Mas nossas páginas ainda possuem uma limitação:

> Elas possuem pouca ou nenhuma capacidade de tomar decisões e reagir ao usuário.

---

# O que está faltando?

Imagine uma página contendo:

```html
<h1>Cadastro de Produto</h1>

<input type="number" id="preco">

<button>Calcular desconto</button>
```

Temos:

- um título;
- um campo;
- um botão.

Mas...

**Quem realiza o cálculo?**

---

# JavaScript

JavaScript adiciona **comportamento** às páginas.

Podemos pensar:

```text
HTML
↓
O que existe?

CSS
↓
Como aparece?

JavaScript
↓
O que acontece?
```

---

# Um exemplo

HTML:

```html
<button onclick="mostrarMensagem()">
    Clique aqui
</button>
```

JavaScript:

```javascript
function mostrarMensagem() {
    alert("Olá!");
}
```

Ao clicar:

```text
[ Clique aqui ]
      ↓
    Olá!
```

Agora a página possui **comportamento**.

---

# JavaScript também é uma linguagem de programação

Antes de manipular páginas, precisamos compreender a linguagem.

JavaScript possui conceitos encontrados em diversas linguagens:

- variáveis;
- tipos de dados;
- operadores;
- condicionais;
- laços;
- funções;
- estruturas de dados;
- objetos.

---

# Nosso caminho

```text
Fundamentos
    ↓
Variáveis e tipos
    ↓
Operadores
    ↓
Condicionais
    ↓
Laços
    ↓
Funções
    ↓
Arrays
    ↓
Objetos
    ↓
JSON
    ↓
DOM
    ↓
Eventos
    ↓
localStorage
    ↓
APIs
```

---

# PARTE 1 — Executando JavaScript

Existem diferentes formas de executar JavaScript.

Hoje utilizaremos principalmente:

**NAVEGADOR**

Abra as ferramentas de desenvolvedor:

```text
F12
```

ou:

```text
Botão direito
→ Inspecionar
→ Console
```

Digite:

```javascript
console.log("Olá, JavaScript!");
```

Saída:

```text
Olá, JavaScript!
```

---

# `console.log()`

`console.log()` permite visualizar valores durante a execução.

```javascript
console.log("Sistema iniciado");
console.log(10);
console.log(5 + 3);
```

Saída:

```text
Sistema iniciado
10
8
```

Será uma ferramenta importante durante nosso aprendizado.

---

# JavaScript dentro do HTML

Podemos utilizar:

```html
<script>
    console.log("Olá!");
</script>
```

Mas normalmente separamos os arquivos.

Estrutura:

```text
projeto/
│
├── index.html
├── style.css
└── script.js
```

No HTML:

```html
<script src="script.js"></script>
```

Preferencialmente próximo ao final do `<body>`.

---

# Separação de responsabilidades

```text
index.html
    ↓
estrutura

style.css
    ↓
aparência

script.js
    ↓
comportamento
```

Essa separação facilita:

- organização;
- manutenção;
- evolução do sistema.

---

# PARTE 2 — Variáveis

Programas precisam armazenar informações.

Exemplo:

```text
Nome do produto
Preço
Quantidade
Situação
```

Esses valores precisam existir na memória enquanto o programa está executando.

---

# Criando variáveis

Em JavaScript podemos utilizar:

```javascript
let nome = "Notebook";
let preco = 3500;
let quantidade = 2;
```

Podemos visualizar:

```javascript
console.log(nome);
console.log(preco);
console.log(quantidade);
```

Saída:

```text
Notebook
3500
2
```

---

# `let`

`let` cria uma variável cujo valor pode mudar.

```javascript
let quantidade = 10;

console.log(quantidade);

quantidade = 15;

console.log(quantidade);
```

Saída:

```text
10
15
```

---

# `const`

`const` cria uma referência que não poderá ser reatribuída.

```javascript
const desconto = 0.10;

console.log(desconto);
```

Saída:

```text
0.1
```

Isto não funciona:

```javascript
desconto = 0.20;
```

---

# `let` ou `const`?

Uma boa prática inicial:

```text
O valor/referência não será reatribuído?
        ↓
      const

Precisa receber outro valor?
        ↓
       let
```

---

# Tipos de dados

Alguns tipos fundamentais:

```text
String
Number
Boolean
Undefined
Null
Object
```

Exemplos:

```javascript
const nome = "Maria";
const idade = 20;
const preco = 19.90;
const alunoAtivo = true;
```

---

# Descobrindo o tipo

Podemos utilizar:

```javascript
typeof
```

Exemplo:

```javascript
console.log(typeof "Tiago");
console.log(typeof 10);
console.log(typeof true);
```

Saída:

```text
string
number
boolean
```

---

# String não é Number

Observe:

```javascript
const idade1 = "20";
const idade2 = 20;
```

São diferentes:

```text
"20" → string
20   → number
```

Isso será especialmente importante quando começarmos a ler valores do HTML.

---

# Conversão de dados

Imagine um `<input>` HTML:

```html
<input id="idade">
```

Valores obtidos de campos HTML normalmente chegam como **texto**.

Podemos converter:

```javascript
const texto = "20";
const numero = Number(texto);

console.log(numero + 5);
```

Saída:

```text
25
```

Sem conversão:

```javascript
console.log("20" + 5);
```

Saída:

```text
205
```

---

# PARTE 3 — Operadores

Operações matemáticas:

```javascript
const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
```

Saída:

```text
13
7
30
3.3333333333333335
1
```

---

# Operadores de comparação

```javascript
const idade = 18;

console.log(idade > 18);
console.log(idade >= 18);
console.log(idade < 18);
console.log(idade === 18);
console.log(idade !== 18);
```

Saída:

```text
false
true
false
true
false
```

---

# `==` ou `===`?

Observe:

```javascript
console.log(10 == "10");
console.log(10 === "10");
```

Saída:

```text
true
false
```

`==` pode realizar conversão automática de tipos.

`===` compara:

```text
valor
+
tipo
```

Inicialmente, prefira:

```javascript
===
!==
```

---

# Operadores lógicos

Temos:

```text
&& → E
|| → OU
!  → NÃO
```

Exemplo:

```javascript
const idade = 20;
const possuiIngresso = true;

console.log(idade >= 18 && possuiIngresso);
```

Saída:

```text
true
```

---

# PARTE 4 — Tomada de decisão

Programas precisam tomar decisões.

```text
SE nota >= 60
    aprovado
SENÃO
    reprovado
```

Em JavaScript:

```javascript
const nota = 75;

if (nota >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
```

Saída:

```text
Aprovado
```

---

# Mais de duas possibilidades

```javascript
const nota = 55;

if (nota >= 60) {
    console.log("Aprovado");
} else if (nota >= 40) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
```

Saída:

```text
Recuperação
```

---

# Atividade rápida — Condicional

Crie:

```javascript
const idade = 17;
```

O programa deverá mostrar:

```text
Maior de idade
```

ou:

```text
Menor de idade
```

dependendo do valor.

---

# Atividade — Desconto

Considere:

```javascript
const preco = 100;
const clienteVip = true;
```

Regra:

```text
Cliente VIP
→ 20% de desconto

Cliente comum
→ preço normal
```

Calcule e mostre o valor final.

---

# PARTE 5 — Laços de repetição

Imagine que precisamos mostrar:

```text
Aluno 1
Aluno 2
Aluno 3
Aluno 4
Aluno 5
```

Poderíamos escrever cinco comandos.

Mas e se fossem **500 alunos**?

---

# `for`

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Aluno " + i);
}
```

Saída:

```text
Aluno 1
Aluno 2
Aluno 3
Aluno 4
Aluno 5
```

---

# Entendendo o `for`

```javascript
for (let i = 1; i <= 5; i++)
```

Temos:

```text
let i = 1
↓
inicialização

i <= 5
↓
condição

i++
↓
incremento
```

---

# `while`

Outra possibilidade:

```javascript
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
```

Saída:

```text
1
2
3
4
5
```

De forma simplificada:

```text
FOR
↓
Quando temos uma repetição bem definida

WHILE
↓
Enquanto determinada condição permanecer verdadeira
```

---

# Atividade — Repetição

Utilizando `for`, mostre:

```text
2
4
6
8
10
12
14
16
18
20
```

**Desafio:** calcule a soma:

```text
1 + 2 + 3 + ... + 100
```

Resultado esperado:

```text
5050
```

---

# PARTE 6 — Funções

Funções permitem agrupar comportamentos.

```javascript
function saudacao() {
    console.log("Olá!");
}

saudacao();
```

Saída:

```text
Olá!
```

---

# Funções com parâmetros

```javascript
function saudacao(nome) {
    console.log("Olá, " + nome);
}

saudacao("Ana");
saudacao("Carlos");
```

Saída:

```text
Olá, Ana
Olá, Carlos
```

---

# Retornando valores

```javascript
function somar(a, b) {
    return a + b;
}

const resultado = somar(10, 5);

console.log(resultado);
```

Saída:

```text
15
```

Funções permitem:

- organizar;
- reutilizar;
- separar responsabilidades;
- reduzir repetição;
- facilitar manutenção.

---

# Exemplo — Função para média

```javascript
function calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}

const media = calcularMedia(80, 60);

console.log(media);
```

Saída:

```text
70
```

---

# PARTE 7 — Estruturas de dados

Até agora poderíamos fazer:

```javascript
const aluno1 = "Ana";
const aluno2 = "Carlos";
const aluno3 = "Maria";
```

Funciona.

Mas imagine:

```text
500 alunos
```

Precisamos de estruturas melhores.

---

# Arrays

Um array armazena vários valores:

```javascript
const alunos = [
    "Ana",
    "Carlos",
    "Maria",
    "João"
];

console.log(alunos);
```

---

# Acessando elementos

```javascript
console.log(alunos[0]);
console.log(alunos[1]);
```

Saída:

```text
Ana
Carlos
```

Os índices começam em zero:

```text
Índice     Valor

  0        Ana
  1        Carlos
  2        Maria
  3        João
```

---

# Operações com arrays

Quantidade:

```javascript
console.log(alunos.length);
```

Saída:

```text
4
```

Adicionar:

```javascript
alunos.push("Pedro");

console.log(alunos);
```

---

# Percorrendo um array

```javascript
const alunos = [
    "Ana",
    "Carlos",
    "Maria"
];

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}
```

Saída:

```text
Ana
Carlos
Maria
```

---

# `for...of`

Outra forma:

```javascript
for (const aluno of alunos) {
    console.log(aluno);
}
```

É uma forma simples de percorrer os valores de um array.

---

# PARTE 8 — Objetos

Um aluno não possui apenas um nome.

Ele pode possuir:

```text
nome
idade
curso
nota
situação
```

Como representar tudo isso?

---

# Objeto

```javascript
const aluno = {
    nome: "Ana",
    idade: 19,
    curso: "Sistemas de Informação",
    nota: 85
};
```

Acessando propriedades:

```javascript
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.nota);
```

Saída:

```text
Ana
19
85
```

---

# Alterando propriedades

```javascript
aluno.nota = 90;

console.log(aluno.nota);
```

Saída:

```text
90
```

Mesmo que `aluno` tenha sido declarado com `const`, podemos alterar propriedades do objeto. O que não podemos fazer é reatribuir a constante para outro objeto.

---

# Array + objetos

Podemos representar vários alunos:

```javascript
const alunos = [
    {
        nome: "Ana",
        nota: 80
    },
    {
        nome: "Carlos",
        nota: 55
    },
    {
        nome: "Maria",
        nota: 90
    }
];
```

---

# Percorrendo objetos

```javascript
for (const aluno of alunos) {
    console.log(aluno.nome);
    console.log(aluno.nota);
}
```

Saída:

```text
Ana
80
Carlos
55
Maria
90
```

---

# Combinando conceitos

```javascript
for (const aluno of alunos) {

    if (aluno.nota >= 60) {
        console.log(
            aluno.nome + " está aprovado"
        );
    } else {
        console.log(
            aluno.nome + " está reprovado"
        );
    }
}
```

Saída:

```text
Ana está aprovado
Carlos está reprovado
Maria está aprovado
```

Utilizamos:

```text
Array
+
Objetos
+
Laço
+
Condicional
```

---

# PARTE 9 — JSON

JSON significa:

**JavaScript Object Notation**

É um formato textual muito utilizado para troca de dados.

Especialmente entre:

```text
Aplicação
↔
API
↔
Servidor
```

---

# Objeto JavaScript × JSON

Objeto JavaScript:

```javascript
const aluno = {
    nome: "Ana",
    idade: 19,
    ativo: true
};
```

JSON equivalente:

```json
{
    "nome": "Ana",
    "idade": 19,
    "ativo": true
}
```

JSON é um **formato textual para representação de dados**.

---

# Objeto → JSON

```javascript
const aluno = {
    nome: "Ana",
    idade: 19
};

const json = JSON.stringify(aluno);

console.log(json);
```

Saída:

```text
{"nome":"Ana","idade":19}
```

---

# JSON → Objeto

```javascript
const texto = `
{
    "nome": "Ana",
    "idade": 19
}
`;

const aluno = JSON.parse(texto);

console.log(aluno.nome);
```

Saída:

```text
Ana
```

---

# Por que aprender JSON?

Futuramente veremos:

```text
Nossa página
     ↓
JavaScript
     ↓
requisição
     ↓
API
     ↓
JSON
     ↓
JavaScript
     ↓
HTML
```

Mas antes das APIs precisamos conectar nosso JavaScript ao HTML.

---

# PARTE 10 — DOM

DOM significa:

**Document Object Model**

O navegador transforma nosso HTML em uma estrutura que pode ser acessada pelo JavaScript.

HTML:

```html
<h1 id="titulo">
    Minha página
</h1>
```

JavaScript:

```javascript
const titulo =
    document.getElementById("titulo");

console.log(titulo);
```

---

# Alterando HTML com JavaScript

```javascript
const titulo =
    document.getElementById("titulo");

titulo.innerText =
    "Título alterado pelo JavaScript";
```

Antes:

```text
Minha página
```

Depois:

```text
Título alterado pelo JavaScript
```

---

# JavaScript controlando o HTML

```text
HTML

<h1 id="titulo">
        ↓
        ↓
JavaScript

document.getElementById("titulo")
        ↓
        ↓
Alteração
```

---

# Lendo um `input`

HTML:

```html
<input
    type="text"
    id="nome"
>
```

JavaScript:

```javascript
const campo =
    document.getElementById("nome");

console.log(campo.value);
```

O `.value` representa o valor informado pelo usuário.

---

# Exemplo completo — HTML

```html
<input
    type="text"
    id="nome"
>

<button onclick="mostrarNome()">
    Mostrar
</button>

<p id="resultado"></p>
```

---

# Exemplo completo — JavaScript

```javascript
function mostrarNome() {

    const campo =
        document.getElementById("nome");

    const resultado =
        document.getElementById("resultado");

    resultado.innerText =
        "Olá, " + campo.value;
}
```

Fluxo:

```text
Usuário digita "Ana"
      ↓
[ Mostrar ]
      ↓
JavaScript lê campo.value
      ↓
JavaScript altera resultado.innerText
      ↓
Olá, Ana
```

---

# PARTE 11 — Eventos

Páginas web são orientadas a eventos.

Um evento pode ser:

```text
clique
digitação
envio de formulário
movimento do mouse
carregamento da página
```

---

# Evento de clique

HTML:

```html
<button id="botao">
    Clique
</button>
```

JavaScript:

```javascript
const botao =
    document.getElementById("botao");

botao.addEventListener("click", function() {
    console.log("Botão clicado!");
});
```

---

# `onclick` × `addEventListener`

Podemos fazer:

```html
<button onclick="mostrar()">
```

Funciona.

Mas `addEventListener()` permite separar melhor:

```text
HTML
↓
estrutura

JavaScript
↓
comportamento
```

Exemplo:

```javascript
botao.addEventListener("click", mostrar);
```

---

# Exemplo integrado — HTML

```html
<input
    type="number"
    id="nota"
>

<button id="verificar">
    Verificar
</button>

<p id="resultado"></p>
```

---

# Exemplo integrado — JavaScript

```javascript
const botao =
    document.getElementById("verificar");

botao.addEventListener("click", function() {

    const campo =
        document.getElementById("nota");

    const nota =
        Number(campo.value);

    const resultado =
        document.getElementById("resultado");

    if (nota >= 60) {
        resultado.innerText =
            "Aluno aprovado";
    } else {
        resultado.innerText =
            "Aluno reprovado";
    }
});
```

---

# Conceitos conectados

Neste pequeno programa utilizamos:

```text
HTML
+
JavaScript
+
variável
+
conversão
+
evento
+
DOM
+
if/else
```

Os fundamentos começam a se transformar em uma aplicação web.

---

# PARTE 12 — Memória da aplicação

Considere:

```javascript
let nome = "Ana";
```

Enquanto a página está aberta, conseguimos utilizar o valor.

Mas pressione:

```text
F5
```

O programa começa novamente.

Como guardar informações?

---

# `localStorage`

O navegador possui mecanismos de armazenamento.

Hoje veremos:

```text
localStorage
```

Podemos salvar:

```javascript
localStorage.setItem(
    "nome",
    "Ana"
);
```

Recuperar:

```javascript
const nome =
    localStorage.getItem("nome");

console.log(nome);
```

Saída:

```text
Ana
```

---

# Persistência local

Mesmo atualizando a página com `F5`, o valor pode continuar armazenado no navegador.

Remover um item:

```javascript
localStorage.removeItem("nome");
```

Remover todos os itens daquela origem:

```javascript
localStorage.clear();
```

---

# `localStorage` armazena strings

Considere:

```javascript
const aluno = {
    nome: "Ana",
    nota: 90
};
```

Para armazenar estruturas como objetos e arrays, podemos serializá-las em JSON.

Aqui os conceitos começam a se conectar.

---

# Salvando objetos

```javascript
const aluno = {
    nome: "Ana",
    nota: 90
};

localStorage.setItem(
    "aluno",
    JSON.stringify(aluno)
);
```

---

# Recuperando objetos

```javascript
const texto =
    localStorage.getItem("aluno");

const aluno =
    JSON.parse(texto);

console.log(aluno.nome);
```

Saída:

```text
Ana
```

---

# Fluxo da persistência

Para salvar:

```text
Objeto JavaScript
        ↓
JSON.stringify()
        ↓
Texto JSON
        ↓
localStorage
```

Para recuperar:

```text
localStorage
        ↓
Texto JSON
        ↓
JSON.parse()
        ↓
Objeto JavaScript
```

---

# PARTE 13 — Atividade prática

## Cadastro simples de alunos

Vamos conectar os conceitos vistos hoje.

Crie uma aplicação contendo:

```text
Nome
Nota

[ Adicionar aluno ]

Alunos cadastrados
```

---

# Estrutura HTML inicial

```html
<div class="container mt-4">

    <h1>Cadastro de Alunos</h1>

    <input
        id="nome"
        class="form-control mb-2"
        placeholder="Nome"
    >

    <input
        id="nota"
        type="number"
        class="form-control mb-2"
        placeholder="Nota"
    >

    <button
        id="adicionar"
        class="btn btn-primary"
    >
        Adicionar aluno
    </button>

    <hr>

    <h2>Alunos cadastrados</h2>

    <div id="lista"></div>

</div>
```

Estamos reaproveitando:

```text
HTML
+
Bootstrap
```

---

# Atividade — Etapa 1

Crie um array:

```javascript
const alunos = [];
```

Quando o botão for pressionado:

1. leia o nome;
2. leia a nota;
3. crie um objeto;
4. adicione ao array.

Estrutura esperada:

```javascript
[
    {
        nome: "Ana",
        nota: 80
    },
    {
        nome: "Carlos",
        nota: 55
    }
]
```

---

# Atividade — Etapa 2

Crie uma função:

```javascript
function verificarSituacao(nota) {

    // implemente

}
```

Ela deverá retornar:

```text
Aprovado
```

quando:

```text
nota >= 60
```

Caso contrário:

```text
Reprovado
```

---

# Atividade — Etapa 3

Percorra o array:

```javascript
for (const aluno of alunos) {

    // mostrar aluno

}
```

Apresente:

```text
Ana — Nota: 80 — Aprovado

Carlos — Nota: 55 — Reprovado
```

---

# Atividade — Etapa 4

Agora apresente os dados no HTML.

Utilize:

```javascript
document.getElementById()
```

e altere o conteúdo de:

```html
<div id="lista"></div>
```

A interface deverá ser atualizada sempre que um novo aluno for cadastrado.

---

# Atividade — Etapa 5

Salve o array no navegador:

```javascript
localStorage.setItem(
    "alunos",
    JSON.stringify(alunos)
);
```

---

# Atividade — Etapa 6

Quando a página for carregada, recupere os dados:

```javascript
const dados =
    localStorage.getItem("alunos");
```

Caso existam:

```javascript
JSON.parse(dados);
```

Depois apresente novamente os alunos no HTML.

---

# Teste da persistência

Depois de implementar:

1. cadastre três alunos;
2. atualize a página com `F5`;
3. verifique se os alunos continuam cadastrados.

Se continuarem:

> Sua aplicação já possui persistência local de dados.

---

# Desafio — Excluir aluno

Adicione um botão:

```text
Excluir
```

para cada aluno.

Exemplo:

```text
Ana
Nota: 80
Situação: Aprovado

[ Excluir ]
```

Ao excluir:

```text
Array
↓
remover aluno
↓
localStorage
↓
atualizar
↓
HTML
```

---

# Desafio — Bootstrap

Utilize Bootstrap para apresentar cada aluno como um `card`.

Exemplo:

```text
┌───────────────────────┐
│ Ana                   │
│ Nota: 80              │
│ Situação: Aprovado    │
│                       │
│ [ Excluir ]           │
└───────────────────────┘
```

---

# O que construímos?

Observe a evolução:

```text
HTML
↓
criamos os elementos

Bootstrap/CSS
↓
definimos a aparência

JavaScript
↓
adicionamos comportamento

Array
↓
armazenamos alunos

Objetos
↓
representamos cada aluno

JSON
↓
serializamos os dados

localStorage
↓
persistimos os dados

DOM
↓
atualizamos a interface
```

---

# Isso já é uma aplicação

Temos:

```text
Interface
+
Dados
+
Regras
+
Comportamento
+
Persistência
```

Ainda é simples.

Mas já estamos saindo de:

```text
"página HTML"
```

para:

```text
"aplicação web"
```

---

# Limitação do `localStorage`

O `localStorage` está associado à origem da aplicação no navegador.

Simplificando:

```text
Usuário A
Navegador A
↓
localStorage A


Usuário B
Navegador B
↓
localStorage B
```

Os dados não são automaticamente compartilhados entre usuários e dispositivos.

---

# Como aplicações reais compartilham dados?

Precisamos sair do armazenamento local do navegador:

```text
NAVEGADOR
    ↓
JavaScript
    ↓
Internet
    ↓
Servidor
    ↓
Banco de Dados
```

Mas como nosso JavaScript conversa com outro sistema?

---

# APIs

Uma API permite que sistemas se comuniquem.

```text
Nossa aplicação
      ↓
JavaScript
      ↓
     API
      ↓
Sistema externo
```

Essa será uma evolução natural do que aprendemos hoje.

---

# Um primeiro olhar para `fetch()`

No futuro veremos código semelhante a:

```javascript
fetch("https://api.exemplo.com/alunos")
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados);
    });
```

A API poderá responder:

```json
[
    {
        "id": 1,
        "nome": "Ana",
        "nota": 80
    },
    {
        "id": 2,
        "nome": "Carlos",
        "nota": 55
    }
]
```

---

# Reconheceu alguma coisa?

A API respondeu:

```text
JSON
```

E nosso JavaScript trabalha com esses dados como:

```text
Objetos
+
Arrays
```

Por isso estamos aprendendo esses conceitos antes de trabalhar com APIs.

---

# O caminho que estamos construindo

```text
HTML
   ↓
CSS / Bootstrap
   ↓
JavaScript
   ↓
Fundamentos de programação
   ↓
DOM e Eventos
   ↓
Objetos e Arrays
   ↓
JSON
   ↓
localStorage
   ↓
APIs
   ↓
Aplicações Web
```

---

# Síntese

JavaScript não serve apenas para:

```text
"fazer botão funcionar"
```

JavaScript é uma linguagem de programação.

Com ela podemos:

- armazenar dados;
- realizar cálculos;
- tomar decisões;
- repetir operações;
- criar funções;
- organizar dados;
- representar objetos;
- manipular HTML;
- responder a eventos;
- armazenar dados;
- futuramente consumir APIs.

---

# Para lembrar

```text
HTML
↓
ESTRUTURA

CSS / Bootstrap
↓
APRESENTAÇÃO

JavaScript
↓
LÓGICA + COMPORTAMENTO
```

---

# Próximo passo

Hoje:

```text
JavaScript
+
Navegador
+
localStorage
```

Depois:

```text
JavaScript
+
HTTP
+
fetch()
+
API
+
JSON
```

Então começaremos a construir páginas capazes de **buscar, enviar e atualizar dados em outros sistemas**.
