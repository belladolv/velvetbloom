// Função para adicionar produtos aos favoritos
document.querySelectorAll('.favorito').forEach(icon => {
    icon.addEventListener('click', () => {
        const productId = icon.getAttribute('data-id');
        alert(`Produto ${productId} adicionado aos favoritos!`);
        // Aqui você pode adicionar lógica para salvar no localStorage ou enviar para o backend
    });
});

// Função para adicionar produtos ao carrinho
document.querySelectorAll('.carrinho').forEach(icon => {
    icon.addEventListener('click', () => {
        const productId = icon.getAttribute('data-id');
        alert(`Produto ${productId} adicionado ao carrinho!`);
        // Aqui você pode adicionar lógica para salvar no localStorage ou enviar para o backend
    });
});