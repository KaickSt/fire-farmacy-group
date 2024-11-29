
document.getElementById('form-adicionar').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const imagem = document.getElementById('imagem').value;

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const novoProduto = {
        id: produtos.length + 1,
        nome: nome,
        preco: parseFloat(preco),
        imagem: imagem
    };

    produtos.push(novoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtos));

    alert('Produto adicionado com sucesso!');
    window.location.href = 'produtos.html';
});