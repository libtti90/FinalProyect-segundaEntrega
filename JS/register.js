const registerForm = document.getElementById('formRegister');
const users=JSON.parse(localStorage.getItem('Users'));




const firstPassword = document.getElementById('inputContrasena');
const secondPassword = document.getElementById('inputRcontrasena');
const NewEmail = document.getElementById('inputEmail');
const inputName = document.getElementById('inputName'); 
const inputEmail = document.getElementById('inputEmail'); 
const inputDateOfBirth = document.getElementById('inputDateOfBirth'); 
const inputState = document.getElementById('inputState');
const observation = document.getElementById('observation');


registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (firstPassword.value === secondPassword.value) {
        const existentUser = users.find((element) => {
            return element.email === NewEmail.value;
        });

        if (existentUser) {
            
            Swal.fire({
                title: 'It looks like you already have an account with us',
                icon: 'Please Login',
                showCancelButton: true,
                confirmButtonText: 'Login',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
        
                if (result.isConfirmed) {
                    
                    window.location.href = '/pages/login/login.html';
                }
            });
        } else {
            const id = crypto.randomUUID();

            let newUser = {
                idUser: id,
                fullname: inputName.value,
                email: inputEmail.value,
                password: firstPassword.value,
                dateOfBirth: inputDateOfBirth.value,
                state: inputState.value,
               
            };

            users.push(newUser);
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            localStorage.setItem('Users', JSON.stringify(users));
            window.location.href = '/index.html';
            

           


        }
    } else {
        Swal.fire({
            title: 'Passwords does not match',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Try again',
            cancelButtonText: 'Cancelar',
        })
        registerForm.reset();
    }
});
