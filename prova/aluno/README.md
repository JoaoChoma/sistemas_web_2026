# Avaliação prática — Programação Web

**Horário:** 21h20 às 23h00 (100 minutos). **Valor:** 10,0 pontos. **Modalidade:** individual.

## Situação-problema

Implemente um **Cadastro de Produtos** com HTML, CSS e JavaScript. A aplicação deverá permitir cadastrar produtos, listá-los e apresentar a quantidade de produtos distintos e o valor total do estoque. **Não é necessário remover produtos, gerar IDs individuais ou armazenar dados após recarregar a página.**

Cada produto é um objeto com `nome`, `preco` e `quantidade`. Os objetos devem ser guardados em um vetor.

## Entrega e restrições

- Entregue `index.html`, `style.css` e `script.js`. Não altere a pasta do professor. 
- Utilize `getElementById()`, `addEventListener()` e `for`. 
- Consultar seu próprio Github.

## Requisitos e pontuação

| Código | Requisito | Pontos |
|---|---|---:|
| R1 | HTML semântico: título, formulário, três campos com labels, botão, lista e totais | 1,5 |
| R2 | CSS: layout centralizado com Flexbox, `gap`, borda arredondada e `hover` | 1,0 |
| R3 | Criar objeto com `nome`, `preco`, `quantidade`; validar entradas | 2,0 |
| R4 | Armazenar objetos em vetor e listar com `for` e DOM | 2,0 |
| R5 | Calcular número de produtos e valor total do estoque | 1,5 |
| R6 | Registrar evento com `addEventListener` e atualizar a interface | 2,0 |
| **Total** | | **10,0** |

## Regras de negócio

1. `nome` não pode estar vazio nem conter apenas espaços.
2. `preco` deve ser número finito, maior que zero.
3. `quantidade` deve ser inteiro, maior ou igual a zero.
4. Um cadastro inválido não pode modificar o vetor.
5. `totalProdutos` é o número de objetos cadastrados, **não** a soma das quantidades.
6. `valorEstoque` é a soma de `preco * quantidade` para todos os produtos.

## Contrato técnico para correção automática

Mantenha o trecho `window.App` fornecido em `script.js`. O corretor chamará as funções diretamente:

```javascript
window.App = {
  adicionarProduto,  // (nome, preco, quantidade) => boolean
  listarProdutos,    // () => array de objetos
  obterResumo,       // () => { totalProdutos, valorEstoque }
  atualizarInterface // () => void
};
```

- `adicionarProduto` retorna `true` para dados válidos e `false` para inválidos.
- `listarProdutos` retorna o vetor de objetos (ou cópia).
- `obterResumo` retorna o objeto `{ totalProdutos, valorEstoque }`.
- `atualizarInterface` apresenta os produtos em `#listaProdutos` e atualiza `#totalProdutos` e `#valorEstoque`.
- O clique no botão `#btnAdicionar` deve ler os campos e cadastrar o produto; cadastros inválidos devem exibir mensagem em `#mensagem`.

**IDs obrigatórios no HTML:** `nome`, `preco`, `quantidade`, `btnAdicionar`, `listaProdutos`, `totalProdutos`, `valorEstoque`, `mensagem`.

## Testes manuais

1. Cadastre `Mouse`, preço `80`, quantidade `3`: total = 1; estoque = R$ 240,00.
2. Cadastre `Teclado`, preço `150`, quantidade `2`: total = 2; estoque = R$ 540,00.
3. Tente cadastrar preço negativo: a lista e os totais não devem mudar.
4. Cadastre um produto com quantidade zero: o cadastro deve ser aceito, sem aumentar o valor do estoque.
5. Recarregar a página **pode apagar os dados**: persistência não faz parte da avaliação.

**Prazo final:** 23h00.
