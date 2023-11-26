
const users=JSON.parse(localStorage.getItem("Users"));

const form=document.getElementById('login-form');



form.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const newEmail=form.elements.email.value.toLowerCase();
    const newPassword=form.elements.password.value;
    

    const user = users.find((usr)=>{
        if(usr.email.toLowerCase()===newEmail){
            
            return true
        }

        else{
            return false
        }

    })

if(!user || user.password !== newPassword) {
    

    Swal.fire({
        title: 'User no found',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Register',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        
        if (result.isConfirmed) {
            
            window.location.href = '/pages/register/register.html';
        }
    });
      
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = '/index.html';

    
})
