
document.getElementById('form-registro').addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
    }

    const usuario = {
        nome,
        email,
        senha
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert("Registro bem-sucedido! Redirecionando para a página inicial...");

    window.location.href = '/html\'s/Index.html';
});
