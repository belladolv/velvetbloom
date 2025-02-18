// Validação do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos
    const nome = document.querySelector('#form-contato input[type="text"]').value;
    const email = document.querySelector('#form-contato input[type="email"]').value;
    const mensagem = document.querySelector('#form-contato textarea').value;

    // Validação simples
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Mensagem enviada com sucesso!");
        // Aqui você pode adicionar código para enviar os dados do formulário para um servidor
        document.getElementById('form-contato').reset(); // Limpa o formulário
    }
});

// Efeito de scroll suave para links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});