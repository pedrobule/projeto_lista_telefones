const form = document.getElementById ('form-lista');
const imgCelular = '<img src="./images/celular.png" alt="Imagem de um celular" />';
const imgFixo = '<img src="./images/fixo.jpg" alt="Imagem de telefone fixo" />';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeUsuario = document.getElementById('nome-usuario');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    let linha = '<tr>';
    linha += `<td>${inputNomeUsuario.value}</td>`
    linha += `<td>${inputNumeroTelefone.value}</td>`
    linha += `<td>${inputNumeroTelefone.value > 9999999999 ? imgCelular : imgFixo}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeUsuario.value = '';
    inputNumeroTelefone.value = '';

})
