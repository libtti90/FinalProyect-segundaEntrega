
const users=JSON.parse(localStorage.getItem("Users"));

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

if(!user || user.password !== newPassword) {
    swal({
        title: "The information you entered was not recognized.",
        text: "Please try again or register",
        icon: "success",
        buttons: ["Register", true],
       


      });
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = '/index.html';

    
})
