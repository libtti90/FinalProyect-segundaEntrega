
const headerNav = document.getElementById('header-nav');
const userInfoHeader = document.getElementById('header-user');


const loguedUser=json.parse(localStorage.getItem('currentUser'))

if(loguedUser){


    if(loguedUser.role==='ADMIN_ROLE'){
        const adminUserLink =document.createElement('a');
        adminUserLink.href='/pages/users/users.html';
        adminUserLink.innerText='user admin';
        adminUserLink.classList.add(header-adm);
     
    }
}
else{
   
}
