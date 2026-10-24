# Aula prática — Cadastro de Produtos com JavaScript

**Conteúdos:** HTML, CSS, vetores (`Array`), índices, `for`, funções, DOM, `addEventListener()` e validação com `if`.

**Objetivo:** criar uma interface que recebe nomes de produtos, armazena-os em um vetor e atualiza uma lista visual. Esta é a **primeira etapa** de um projeto que evoluirá para objetos, JSON e uma API REST.

## 1. Executar o projeto

Abra `index.html` em um navegador. Não é necessário instalar Node.js, npm ou servidor.

```text
lista_produtos_js/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 2. O problema

Uma loja deseja registrar nomes de produtos. Ao digitar um nome e clicar em **Adicionar**, o programa deve guardar o valor e mostrar a lista atualizada. Nesta versão, os dados existem apenas na memória da página: **ao recarregar, os produtos são perdidos**.

```text
[ Nome do produto         ]
[ Adicionar ]

Produtos cadastrados:
• Notebook
• Mouse
• Teclado

Total: 3
```

## 3. Vetores: armazenando vários valores

Uma variável comum guarda um valor; um **array** permite agrupar vários valores em uma sequência ordenada.

```javascript
let produtos = ["Notebook", "Mouse", "Teclado"];
```

```text
Índice:      0           1           2
         ┌──────────┬─────────┬─────────┐
Valor:   │ Notebook │ Mouse   │ Teclado │
         └──────────┴─────────┴─────────┘
```

O primeiro índice é `0`:

```javascript
console.log(produtos[0]); // Notebook
console.log(produtos[2]); // Teclado
console.log(produtos.length); // 3
```

`produtos.length` informa o número de elementos. Para adicionar um elemento ao final:

```javascript
produtos.push("Monitor");
```

No projeto, começamos com `let produtos = []`, ou seja, um vetor vazio. Cada clique válido acrescenta um nome.

## 4. Percorrendo um vetor com `for`

```javascript
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}
```

| Passagem | `i` | `produtos[i]` |
|---|---:|---|
| Primeira | 0 | Notebook |
| Segunda | 1 | Mouse |
| Terceira | 2 | Teclado |

O `for` repete o processamento enquanto `i < produtos.length`. Não precisamos saber previamente quantos produtos existem.

## 5. HTML: estrutura da interface

O `index.html` contém três elementos importantes:

```html
<input id="nomeProduto" type="text">
<button id="btnAdicionar">Adicionar</button>
<ul id="listaProdutos"></ul>
```

- `input`: recebe o texto digitado.
- `button`: dispara a ação.
- `ul`: receberá os elementos `li` criados pelo JavaScript.

A folha `style.css` centraliza o formulário com Flexbox e usa `border-radius`, `padding`, `margin` e `:hover`.

## 6. DOM: relacionando JavaScript e HTML

O **DOM (Document Object Model)** representa os elementos HTML de uma página e permite que o JavaScript os consulte e modifique.

```javascript
const campoProduto = document.getElementById("nomeProduto");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaProdutos = document.getElementById("listaProdutos");
const totalProdutos = document.getElementById("totalProdutos");
```

O argumento de `getElementById()` deve corresponder ao `id` definido no HTML.

## 7. Eventos: `addEventListener()`

```javascript
btnAdicionar.addEventListener("click", adicionarProduto);
```

Interpretação: **quando** ocorrer um `click` no botão, execute a função `adicionarProduto`.

```text
Usuário clica → evento click → adicionarProduto()
```

Observe a diferença:

```javascript
adicionarProduto(); // Executa imediatamente
adicionarProduto;   // Referência à função, sem executar
```

O evento precisa receber uma referência à função. Por isso, no `addEventListener`, escrevemos `adicionarProduto`, sem parênteses.

## 8. Função de cadastro: entrada, validação e vetor

```javascript
function adicionarProduto() {
    let nome = campoProduto.value.trim();

    if (nome === "") {
        alert("Digite o nome do produto!");
        return;
    }

    produtos.push(nome);
    campoProduto.value = "";
    atualizarLista();
}
```

Passo a passo:

1. `.value` lê o conteúdo do campo.
2. `.trim()` remove espaços nas extremidades.
3. `if (nome === "")` impede cadastrar um nome vazio.
4. `return` encerra a função quando a entrada é inválida.
5. `.push(nome)` adiciona o nome ao vetor.
6. `campoProduto.value = ""` limpa o campo.
7. `atualizarLista()` atualiza o que aparece na página.

## 9. Do vetor à interface: `atualizarLista()`

```javascript
function atualizarLista() {
    listaProdutos.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {
        let item = document.createElement("li");
        item.textContent = produtos[i];
        listaProdutos.appendChild(item);
    }

    totalProdutos.textContent = "Total: " + produtos.length;
}
```

- `innerHTML = ""`: remove os itens visuais anteriores, evitando duplicações.
- `document.createElement("li")`: cria um elemento de lista.
- `textContent = produtos[i]`: insere o nome como **texto**, não como HTML.
- `appendChild(item)`: adiciona o elemento criado à lista.
- `produtos.length`: atualiza o contador.

**Distinção importante:** o vetor é a **estrutura de dados**; a lista HTML é a **representação visual**. Alterar o vetor não atualiza a tela automaticamente: é preciso chamar `atualizarLista()`.

```text
Campo HTML
    ↓ value
Função adicionarProduto()
    ↓ push()
Array produtos
    ↓ for
Função atualizarLista()
    ↓ createElement + appendChild
Lista HTML atualizada
```

## 10. Atividades de fixação

Resolva em ordem, sem substituir `for` por `forEach` ou usar `querySelectorAll` nesta etapa.

1. **Inspecionar o vetor:** adicione `console.log(produtos)` após o `push()` e acompanhe as mudanças no console.
2. **Numeração:** exiba `1. Notebook`, `2. Mouse` etc., utilizando `i + 1`.
3. **Contador:** explique por que `produtos.length` representa o total de itens cadastrados.
4. **Pesquisa:** crie um segundo campo e um botão para procurar um produto percorrendo o vetor com `for` e `if`.
5. **Remover último:** crie um botão para remover o último produto usando `pop()` e atualize a lista.
6. **Remover por índice:** pesquise `splice()` e remova um produto pela posição informada.
7. **Limpar tudo:** crie um botão que esvazie o vetor e atualize a interface.
8. **Desafio:** implemente ordenação alfabética e explique como a lista visual é reconstruída.

## 11. Preparando o próximo assunto: objetos

Hoje, o vetor armazena somente nomes:

```javascript
let produtos = ["Notebook", "Mouse"];
```

Mas um produto real possui mais informações: nome, preço, quantidade e identificador. Na próxima etapa, utilizaremos **objetos**:

```javascript
let produto = {
    id: 1,
    nome: "Notebook",
    preco: 3500,
    quantidade: 5
};
```

Depois, um **array de objetos**:

```javascript
let produtos = [
    { id: 1, nome: "Notebook", preco: 3500, quantidade: 5 },
    { id: 2, nome: "Mouse", preco: 80, quantidade: 20 }
];
```

## 12. Evolução planejada até API REST

| Etapa | Conceito | Evolução do projeto |
|---|---|---|
| 1 — Atual | Arrays, `for`, DOM, eventos | Cadastrar e listar nomes |
| 2 | Objetos | Nome, preço e quantidade |
| 3 | Array de objetos | Adicionar, editar e remover produtos |
| 4 | JSON | `JSON.stringify()` e `JSON.parse()` |
| 5 | `localStorage` | Manter dados após recarregar a página |
| 6 | `fetch()` e `async/await` | Consultar API REST |
| 7 | HTTP | GET, POST, PUT e DELETE |
| 8 | Integração | CRUD de produtos conectado à API |

```text
Array de strings
      ↓
Objeto
      ↓
Array de objetos
      ↓
JSON
      ↓
fetch + API REST
      ↓
CRUD completo
```

**Pergunta de fechamento:** se os dados já estão no vetor, por que precisamos do DOM para apresentá-los ao usuário?
