document.addEventListener('DOMContentLoaded', () => {
    const resumoPedido = document.getElementById('resumo-pedido');
    const totalElement = document.getElementById('total');
    const checkoutForm = document.getElementById('checkoutForm');

    const itens = [
        { nome: 'Dipirona 500mg', preco: 15.00, quantidade: 2 },
        { nome: 'Paracetamol 750mg', preco: 10.00, quantidade: 1 },
    ];

    let total = 0;
    itens.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$${item.preco.toFixed(2)} (Quantidade: ${item.quantidade})`;
        resumoPedido.appendChild(li);
        total += item.preco * item.quantidade;
    });

    totalElement.textContent = total.toFixed(2);

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const pagamento = document.querySelector('input[name="pagamento"]:checked').value;

        if (pagamento === 'cartao') {
            alert('Pagamento com cartão processado.');
        } else if (pagamento === 'pix') {
            alert('Código Pix gerado. Conclua o pagamento.');
        }

        window.location.href = 'confirmacao.html';
    });
});
