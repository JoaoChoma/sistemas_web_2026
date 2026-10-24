// 1. Vetor: estado da aplicação (somente nomes nesta primeira versão)
let produtos = [];

// 2. Referências aos elementos da página (DOM)
const campoProduto = document.getElementById("nomeProduto");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaProdutos = document.getElementById("listaProdutos");
const totalProdutos = document.getElementById("totalProdutos");

// 3. Recebe a entrada e modifica o vetor
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

// 4. Reconstrói a lista HTML com os valores do vetor
function atualizarLista() {
    listaProdutos.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {
        let item = document.createElement("li");
        item.textContent = produtos[i];
        listaProdutos.appendChild(item);
    }

    totalProdutos.textContent = "Total: " + produtos.length;
}

// 5. Evento: chama a função quando o botão for clicado
btnAdicionar.addEventListener("click", adicionarProduto);
