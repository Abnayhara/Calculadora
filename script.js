function adicionarNaTela(valor) {
    document.getElementById('tela').value += valor;
}

function limparTela() {
    document.getElementById('tela').value = '';
}

function calcular() {
    var resultado = eval(document.getElementById('tela').value);
    document.getElementById('tela').value = resultado;
}