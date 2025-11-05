document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // For demo purposes, we'll just do a simple check
    // In a real application, this would involve proper authentication
    if (email && password) {
        // Redirect to events page
        window.location.href = 'events.html';
    } else {
        alert('Please fill in all fields');
    }
});