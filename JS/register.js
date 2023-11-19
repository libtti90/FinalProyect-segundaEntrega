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
            swal({
                title: "It looks like you already have an account with us",
                text: "Please Login",
                icon: "error",
                buttons: ["login", true],
            });
        } else {
            const id = crypto.randomUUID();

            let newUser = {
                idUser: id,
                name: inputName.value,
                email: inputEmail.value,
                password: firstPassword.value,
                dateOfBirth: inputDateOfBirth.value,
                state: inputState.value,
               
            };

            users.push(newUser);
            
            localStorage.setItem('Users', JSON.stringify(users));

           

console.log('Nuevo usuario añadido:', newUser);
        }
    } else {
        swal({
            title: "Passwords don't match",
            text: "Try again",
            icon: "error",
        });
    }
});
