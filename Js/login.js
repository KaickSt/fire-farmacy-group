// login.js
document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(user => user.email === email && user.senha === senha);
    
    if (usuario) {
        alert('Login bem-sucedido!');
        // Aqui você pode redirecionar para a página principal ou para o carrinho
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha incorretos.');
    }
});
