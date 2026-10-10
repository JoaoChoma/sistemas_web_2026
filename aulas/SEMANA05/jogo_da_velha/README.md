# Jogo da Velha — HTML, CSS e JavaScript

Projeto didático para praticar variáveis, condicionais, funções, eventos e principalmente arrays.

## Relação entre interface e array

```text
0 | 1 | 2
--+---+--
3 | 4 | 5
--+---+--
6 | 7 | 8
```

```javascript
let tabuleiro = [
    "", "", "",
    "", "", "",
    "", "", ""
];
```

## Como executar

Abra `index.html` no navegador.

## Sequência sugerida para a aula

1. Mostrar HTML/CSS e o tabuleiro.
2. Explicar índices do array.
3. Implementar `jogar(posicao)`.
4. Impedir jogadas em posições ocupadas.
5. Alternar X e O.
6. Verificar uma linha vencedora.
7. Completar as oito possibilidades de vitória.
8. Verificar empate.
9. Implementar reinício.

## Features para os alunos

- Placar de vitórias de X, O e empates.
- Destacar visualmente as células vencedoras.
- Representar as combinações de vitória com uma estrutura de dados.
- Posteriormente, reduzir a repetição dos eventos usando seleção múltipla e iteração.
