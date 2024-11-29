
document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    try {
        
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha }) 
        });

        if (response.ok) {
            const data = await response.json(); 

            if (data.success) {
                
                alert("Login bem-sucedido! Redirecionando para a página de compras...");
                
                
                window.location.href = "/html_s/Produtos.html";
            } else {
                
                alert("Credenciais inválidas! Tente novamente.");
            }
        } else {
            
            alert("Erro no servidor. Por favor, tente novamente mais tarde.");
        }
    } catch (error) {
        
        console.error("Erro ao conectar ao servidor:", error);
        alert("Erro ao conectar ao servidor. Verifique sua conexão.");
    }
});
