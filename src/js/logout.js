function onLogout(){
    const auth = localStorage.getItem('authLogin');

    if (auth) {
        // Remove the LocalStorage..
        localStorage.removeItem('authLogin');
        alert('Logged Out');
        
        // Redirect to Login page..
        window.location.href = '/src/public/login.html';
    }
}

const logoutBtn = document.getElementById('logout-link');
const auth = localStorage.getItem('authLogin');

if (!auth) {
    logoutBtn.style.display = 'none';
}