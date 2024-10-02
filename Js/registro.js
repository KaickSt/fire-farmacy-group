
document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const novoUsuario = { email, senha };
    
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuário registrado com sucesso!');
    window.location.href = 'login.html'; 
});
