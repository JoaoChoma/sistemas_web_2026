const mensagem = document.getElementById("mensagem");
const c0 = document.getElementById("c0");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");
const c7 = document.getElementById("c7");
const c8 = document.getElementById("c8");
const btnReiniciar = document.getElementById("btnReiniciar");

// Cada posição representa uma célula:
// 0 | 1 | 2
// 3 | 4 | 5
// 6 | 7 | 8
let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogadorAtual = "X";
let jogoFinalizado = false;

function jogar(posicao) {
    if (jogoFinalizado === true) return;
    if (tabuleiro[posicao] !== "") return;

    tabuleiro[posicao] = jogadorAtual;
    atualizarTabuleiro();

    if (verificarVitoria()) {
        mensagem.textContent = "Jogador " + jogadorAtual + " venceu!";
        jogoFinalizado = true;
        return;
    }

    if (verificarEmpate()) {
        mensagem.textContent = "Empate!";
        jogoFinalizado = true;
        return;
    }

    trocarJogador();
}

function atualizarTabuleiro() {
    c0.textContent = tabuleiro[0];
    c1.textContent = tabuleiro[1];
    c2.textContent = tabuleiro[2];
    c3.textContent = tabuleiro[3];
    c4.textContent = tabuleiro[4];
    c5.textContent = tabuleiro[5];
    c6.textContent = tabuleiro[6];
    c7.textContent = tabuleiro[7];
    c8.textContent = tabuleiro[8];
}

function trocarJogador() {
    if (jogadorAtual === "X") {
        jogadorAtual = "O";
    } else {
        jogadorAtual = "X";
    }
    mensagem.textContent = "Vez do jogador " + jogadorAtual;
}

function verificarVitoria() {
    if (tabuleiro[0] === jogadorAtual && tabuleiro[1] === jogadorAtual && tabuleiro[2] === jogadorAtual) return true;
    if (tabuleiro[3] === jogadorAtual && tabuleiro[4] === jogadorAtual && tabuleiro[5] === jogadorAtual) return true;
    if (tabuleiro[6] === jogadorAtual && tabuleiro[7] === jogadorAtual && tabuleiro[8] === jogadorAtual) return true;

    if (tabuleiro[0] === jogadorAtual && tabuleiro[3] === jogadorAtual && tabuleiro[6] === jogadorAtual) return true;
    if (tabuleiro[1] === jogadorAtual && tabuleiro[4] === jogadorAtual && tabuleiro[7] === jogadorAtual) return true;
    if (tabuleiro[2] === jogadorAtual && tabuleiro[5] === jogadorAtual && tabuleiro[8] === jogadorAtual) return true;

    if (tabuleiro[0] === jogadorAtual && tabuleiro[4] === jogadorAtual && tabuleiro[8] === jogadorAtual) return true;
    if (tabuleiro[2] === jogadorAtual && tabuleiro[4] === jogadorAtual && tabuleiro[6] === jogadorAtual) return true;

    return false;
}

function verificarEmpate() {
    if (
        tabuleiro[0] !== "" && tabuleiro[1] !== "" && tabuleiro[2] !== "" &&
        tabuleiro[3] !== "" && tabuleiro[4] !== "" && tabuleiro[5] !== "" &&
        tabuleiro[6] !== "" && tabuleiro[7] !== "" && tabuleiro[8] !== ""
    ) return true;

    return false;
}

function reiniciarJogo() {
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    jogadorAtual = "X";
    jogoFinalizado = false;
    mensagem.textContent = "Vez do jogador X";
    atualizarTabuleiro();
}

// Eventos individuais: propositalmente explícitos nesta etapa.
c0.addEventListener("click", function () { jogar(0); });
c1.addEventListener("click", function () { jogar(1); });
c2.addEventListener("click", function () { jogar(2); });
c3.addEventListener("click", function () { jogar(3); });
c4.addEventListener("click", function () { jogar(4); });
c5.addEventListener("click", function () { jogar(5); });
c6.addEventListener("click", function () { jogar(6); });
c7.addEventListener("click", function () { jogar(7); });
c8.addEventListener("click", function () { jogar(8); });

btnReiniciar.addEventListener("click", function () {
    reiniciarJogo();
});