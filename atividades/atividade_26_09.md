# Atividade --- Algoritmos de Ordenação com JavaScript

## Objetivo

Pesquisar a sintaxe básica da linguagem **JavaScript** e utilizá-la para
implementar algoritmos de ordenação.

A proposta desta atividade é aplicar conhecimentos já adquiridos em
programação utilizando uma nova linguagem.

------------------------------------------------------------------------

## Algoritmos

Implemente em **JavaScript** os seguintes algoritmos de ordenação:

1.  **Bubble Sort**
2.  **Selection Sort**
3.  **Insertion Sort**

------------------------------------------------------------------------

## Vetor para teste

Utilize inicialmente o seguinte vetor:

``` javascript
[8, 3, 5, 1, 9, 6, 2, 7, 4]
```

------------------------------------------------------------------------

## Requisitos

Para **cada algoritmo**, o programa deverá:

1.  Possuir uma **função** responsável pela ordenação.
2.  Receber um **array de números como parâmetro**.
3.  Exibir no console:
    -   o array original;
    -   o array ordenado;
    -   a quantidade de comparações realizadas;
    -   a quantidade de trocas ou movimentações realizadas.
4.  Não utilizar funções prontas de ordenação.

> **Não é permitido utilizar `Array.sort()` para realizar a ordenação.**

------------------------------------------------------------------------

## Exemplo de execução

A saída poderá seguir o seguinte formato:

``` text
Algoritmo: Bubble Sort

Original:
[8, 3, 5, 1, 9, 6, 2, 7, 4]

Ordenado:
[1, 2, 3, 4, 5, 6, 7, 8, 9]

Comparações: 32
Trocas: 17
```

Os valores apresentados acima são apenas um exemplo de formato de saída.
Os resultados devem ser obtidos pela implementação realizada.

------------------------------------------------------------------------

## Comparação dos algoritmos

Após implementar os três algoritmos, execute-os utilizando o mesmo vetor
de entrada e complete a tabela:

  Algoritmo          Comparações   Trocas/Movimentações
  ---------------- ------------- ----------------------
  Bubble Sort                    
  Selection Sort                 
  Insertion Sort                 

------------------------------------------------------------------------

## Questão

Com base na implementação e execução dos três algoritmos, responda:

**Qual foi a principal diferença observada entre as estratégias
utilizadas pelo Bubble Sort, Selection Sort e Insertion Sort para
ordenar os elementos do vetor?**

Explique brevemente com suas próprias palavras.

------------------------------------------------------------------------

## Entrega

Entregue os arquivos contendo as implementações dos três algoritmos em
JavaScript.

Sugestão de organização:

``` text
ordenacao/
├── bubbleSort.js
├── selectionSort.js
└── insertionSort.js
```

ou:

``` text
ordenacao/
└── ordenacao.js
```

O código deverá executar corretamente e apresentar no console os
resultados solicitados.
