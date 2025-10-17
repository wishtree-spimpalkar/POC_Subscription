document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Basic password validation (minimum 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Here you would typically send the data to a server
    console.log('Login attempt:', { email });
    
    // For demonstration purposes, show success message
    alert('Login successful!');
    
    // Clear the form
    this.reset();
});