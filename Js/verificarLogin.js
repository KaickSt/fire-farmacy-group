
function verificarLogin(event) {

    const usuarioLogado = localStorage.getItem('usuario_logado');
    

    if (!usuarioLogado) {
        event.preventDefault();
        alert("Você precisa estar logado para ver os detalhes do produto.");
        window.location.href = "/html's/login.html";
    }
}


window.onload = function() {
    const botoesVerDetalhes = document.querySelectorAll('.btn-ver-detalhes');
    botoesVerDetalhes.forEach(botao => {
        botao.addEventListener('click', verificarLogin);
    });
};
''