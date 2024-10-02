document.addEventListener('DOMContentLoaded', () => {
    const totalElement = document.getElementById('total');
    const itemCarrinhoElements = document.querySelectorAll('.item-carrinho');

    function updateTotal() {
        let total = 0;
        itemCarrinhoElements.forEach(item => {
            const preco = parseFloat(item.dataset.preco);
            const quantidade = parseInt(item.querySelector('.quantidade').value);
            total += preco * quantidade;
        });
        totalElement.textContent = `R$${total.toFixed(2)}`;
    }

    function setupItemCarrinho(item) {
        const quantidadeInput = item.querySelector('.quantidade');
        const removerButton = item.querySelector('.btn-remover');

      
        quantidadeInput.addEventListener('change', updateTotal);

    
        removerButton.addEventListener('click', () => {
            item.remove();
            updateTotal();
        });
    }

    
    itemCarrinhoElements.forEach(setupItemCarrinho);

    
    updateTotal();

   
    document.querySelector('.btn-checkout').addEventListener('click', () => {
        window.location.href = '/html/checkout.html';
    });

  
    const buttons = document.querySelectorAll('.btn-adicionar');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const produtoDiv = e.target.closest('.produto');
            const produtoId = produtoDiv.getAttribute('data-id');
            const nome = produtoDiv.getAttribute('data-nome');
            const preco = produtoDiv.getAttribute('data-preco');

          
            if (!document.querySelector(`.item-carrinho[data-id="${produtoId}"]`)) {
                const itemCarrinho = document.createElement('div');
                itemCarrinho.classList.add('item-carrinho');
                itemCarrinho.setAttribute('data-id', produtoId);
                itemCarrinho.setAttribute('data-preco', preco);
                itemCarrinho.innerHTML = `
                    <img src="/Imagens/Dipirona.webp" alt="${nome}">
                    <div class="detalhes-item">
                        <p>${nome} - <span class="preco">R$${preco}</span></p>
                        <input type="number" value="1" min="1" class="quantidade">
                        <button class="btn-remover">Remover</button>
                    </div>
                `;
                document.querySelector('.total').insertAdjacentElement('beforebegin', itemCarrinho);
                setupItemCarrinho(itemCarrinho);
            } else {
                const quantidadeInput = document.querySelector(`.item-carrinho[data-id="${produtoId}"] .quantidade`);
                quantidadeInput.value = parseInt(quantidadeInput.value) + 1;
                updateTotal();
            }

            updateTotal();
        });
    });
});
