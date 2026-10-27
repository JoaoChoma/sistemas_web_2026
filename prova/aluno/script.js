// Avaliação: complete as funções abaixo. Não modifique o objeto window.App.
let produtos = [];

function adicionarProduto(nome, preco, quantidade) {
  // TODO R3: validar dados e adicionar um objeto ao vetor produtos.
  return false;
}

function listarProdutos() {
  // TODO R4: retornar o vetor de produtos (ou uma cópia).
  return [];
}

function obterResumo() {
  // TODO R5: calcular quantidade de produtos e valor total do estoque.
  return { totalProdutos: 0, valorEstoque: 0 };
}

function atualizarInterface() {
  // TODO R4/R5: criar os elementos da lista e atualizar os totais no DOM.
}

// TODO R6: registrar evento com addEventListener no botão #btnAdicionar.
// O evento deverá ler os campos, chamar adicionarProduto e atualizar a interface.

// Interface usada exclusivamente pelo corretor automático.
window.App = {
  adicionarProduto,
  listarProdutos,
  obterResumo,
  atualizarInterface
};
