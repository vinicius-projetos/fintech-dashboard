// valores iniciais
let entradas = 0;
let saidas = 0;
let saldo = entradas - saidas;

// elementos da tela
const saldoEl = document.querySelector(".saldo");
const entradaEl = document.querySelector(".entrada p");
const saidaEl = document.querySelector(".saida p");

const btnEntrada = document.querySelector(".btn-verde");
const btnSaida = document.querySelector(".btn-vermelho");

// função para formatar em real
function formatar(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// atualizar tela
function atualizarDashboard() {
    saldoEl.innerHTML = `${formatar(saldo)} <i class="fa-solid fa-money-bill"></i>`;
    entradaEl.innerHTML = `${formatar(entradas)} <i class="fa-solid fa-circle-arrow-up"></i>`;
    saidaEl.innerHTML = `${formatar(saidas)} <i class="fa-solid fa-circle-arrow-down"></i>`;
}

// adicionar recebimento
btnEntrada.addEventListener("click", () => {
    const valor = Number(prompt("Digite o valor do recebimento:"));

    if (valor > 0) {
        entradas += valor;
        saldo += valor;
        atualizarDashboard();
    } else {
        alert("valor inválido");
    }
});

// adicionar gasto
btnSaida.addEventListener("click", () => {
    const valor = Number(prompt("Digite o valor do gasto:"));

    if (valor > 0 && valor <= saldo) {
        saidas += valor;
        saldo -= valor;
        atualizarDashboard();
    } else {
        alert("valor inválido ou saldo insuficiente");
    }
});

// inicia com valores corretos
atualizarDashboard();
