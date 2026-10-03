// ======================================================
// 1. ELEMENTOS DA INTERFACE
// ======================================================

const display = document.getElementById("display");

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

const btnSomar = document.getElementById("btnSomar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");

const btnIgual = document.getElementById("btnIgual");
const btnLimpar = document.getElementById("btnLimpar");

// ======================================================
// 2. ESTADO DA APLICAÇÃO
// ======================================================

let valorAtual = "";
let valorAnterior = "";
let operacao = null;

// ======================================================
// 3. FUNÇÕES
// ======================================================

function atualizarDisplay() {
    if (valorAtual === "") {
        display.value = "0";
    } else {
        display.value = valorAtual;
    }
}

function adicionarNumero(numero) {
    valorAtual = valorAtual + numero;
    atualizarDisplay();
}

function selecionarOperacao(novaOperacao) {
    if (valorAtual === "") {
        return;
    }

    valorAnterior = valorAtual;
    operacao = novaOperacao;
    valorAtual = "";
}

function calcular() {
    if (
        valorAnterior === "" ||
        valorAtual === "" ||
        operacao === null
    ) {
        return;
    }

    const numeroAnterior = Number(valorAnterior);
    const numeroAtual = Number(valorAtual);

    let resultado;

    if (operacao === "+") {
        resultado = numeroAnterior + numeroAtual;
    } else if (operacao === "-") {
        resultado = numeroAnterior - numeroAtual;
    } else if (operacao === "*") {
        resultado = numeroAnterior * numeroAtual;
    } else if (operacao === "/") {

        if (numeroAtual === 0) {
            display.value = "Erro";

            valorAtual = "";
            valorAnterior = "";
            operacao = null;

            return;
        }

        resultado = numeroAnterior / numeroAtual;
    }

    valorAtual = String(resultado);
    valorAnterior = "";
    operacao = null;

    atualizarDisplay();
}

function limpar() {
    valorAtual = "";
    valorAnterior = "";
    operacao = null;

    atualizarDisplay();
}

// ======================================================
// 4. EVENTOS DOS NÚMEROS
// ======================================================

btn0.addEventListener("click", function () {
    adicionarNumero("0");
});

btn1.addEventListener("click", function () {
    adicionarNumero("1");
});

btn2.addEventListener("click", function () {
    adicionarNumero("2");
});

btn3.addEventListener("click", function () {
    adicionarNumero("3");
});

btn4.addEventListener("click", function () {
    adicionarNumero("4");
});

btn5.addEventListener("click", function () {
    adicionarNumero("5");
});

btn6.addEventListener("click", function () {
    adicionarNumero("6");
});

btn7.addEventListener("click", function () {
    adicionarNumero("7");
});

btn8.addEventListener("click", function () {
    adicionarNumero("8");
});

btn9.addEventListener("click", function () {
    adicionarNumero("9");
});

// ======================================================
// 5. EVENTOS DAS OPERAÇÕES
// ======================================================

btnSomar.addEventListener("click", function () {
    selecionarOperacao("+");
});

btnSubtrair.addEventListener("click", function () {
    selecionarOperacao("-");
});

btnMultiplicar.addEventListener("click", function () {
    selecionarOperacao("*");
});

btnDividir.addEventListener("click", function () {
    selecionarOperacao("/");
});

// ======================================================
// 6. EVENTOS DE CONTROLE
// ======================================================

btnIgual.addEventListener("click", function () {
    calcular();
});

btnLimpar.addEventListener("click", function () {
    limpar();
});

atualizarDisplay();
