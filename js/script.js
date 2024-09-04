document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificação simples (substitua com sua lógica de autenticação)
    if (username === 'admin' && password === 'admin') {
        alert('Login bem-sucedido!');
        // Redirecionar ou realizar outra ação
    } else {
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos.';
    }
});