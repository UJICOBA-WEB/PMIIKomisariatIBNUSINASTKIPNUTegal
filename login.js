document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    // Dummy users data
    const users = [
        { username: 'admin', password: 'admin12' }
    ];

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'admin.html';
        } else {
            errorMessage.textContent = 'Username atau password salah';
        }
    });
});
