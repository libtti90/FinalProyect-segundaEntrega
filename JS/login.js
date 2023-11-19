/*tomar el formulario
tomar los datos cargados
ver si existe un email como el que el usuario ingreso 
corrobar que la contrasena sea la misma */
//1 setear en el storage un current user
//2 redireccionar al home
//3 posible caso que tengamos error, no existe email o cintrasena no existe
//4 cargar usuarios del array (localStorage)

const users=JSON.parse(localStorage.getItem('users'))||[];

const form=document.getElementById('login-form');



form.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const newEmail=form.elements.email.value.toLowerCase();
    const newPassword=form.elements.password.value;
    

    const user = users.find((usr)=>{
        if(usr.email===newEmail){
            return true
        }

        else{
            return false
        }

    })

if(!user || user.password !== password) {
    swal({
        title: "The information you entered was not recognized.",
        text: "Please try again or register",
        icon: "success",
        buttons: ["Register", true],
       


      });
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user))

    
})
