document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event){
        event.preventDefault()

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        if(username.length < 3){
            isValid = false;
            messages.push('username must have more than 3 charachters')
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            isValid = false;
            messages.push('email must contain "@" and "." charachters')
        }
        if(password.length < 8){
            isValid = false;
            messages.push('password must have 8 or more charachters')
        }
    
        feedbackDiv.style.display = "block";

        if(isValid){
            feedbackDiv.textContent = "Registration successful!"
        }
        if(!isValid){
            const joinMessages = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"
            feedbackDiv.innerHTML = joinMessages;
        }

        })



    
})