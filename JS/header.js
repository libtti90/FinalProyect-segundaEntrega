
const headerNav = document.getElementById('header-nav');
const userInfoHeader = document.getElementById('user-menu');


const loguedUser=JSON.parse(localStorage.getItem('currentUser'));

if(loguedUser){


    if(loguedUser.role==='ADMIN_ROLE'){

        const listItem = document.createElement('li');
        const adminUserLink =document.createElement("a");
        adminUserLink.href='/pages/users/users.html';
        adminUserLink.innerText='User admin';
        adminUserLink.classList.add('nav-link');
        listItem.classList.add('nav-item');
        

        headerNav.appendChild(adminUserLink)
        listItem.appendChild(adminUserLink);
        headerNav.appendChild(listItem);

        const productListItem = document.createElement('li');
        const productLink = document.createElement('a');
        productLink.href = '/pages/product-adm/product-adm.html';
        productLink.innerText = 'Product admin';
        productListItem.classList.add('nav-item');
       
    
        productListItem.appendChild(productLink);
        headerNav.appendChild(productListItem);
     
    }



    const logoutBtn=document.createElement('button');
    logoutBtn.classList.add('nav-item', 'nav-list');
    logoutBtn.classList.add('logout-btn');

    logoutBtn.innerText='Logout';
    userInfoHeader.appendChild(logoutBtn);
    logoutBtn.onclick=function(){
        localStorage.removeItem("currentUser");
        
        window.location.href = '/index.html';
    }

//Img Adm
    const userImage=document.createElement('img')
    const nameAdm=document.createElement('a')
    nameAdm.innerText=loguedUser.fullname;
    nameAdm.classList.add('nav-item', 'nav-list');
    
    userInfoHeader.appendChild(nameAdm);
    userImage.src=loguedUser.image;
    userImage.alt=`${loguedUser.fullname} profile picture`;
    userImage.classList.add('user-picture');
//name Adm
const userName =document.createElement("a");
    userName.innerText = loguedUser.fullname;
    userInfoHeader.appendChild(userImage);






}
else{

    //user no legued in, user menu
    const userAction = userInfoHeader.querySelector('#loginLink');
   
    const Login =document.createElement("a");
    Login.innerText ="Login";
    Login.href = '/pages/login/login.html';
    Login.classList.add('nav-item', 'nav-list');
    userAction.appendChild(Login);


    //header nav - user no logued in
    const registerList = document.createElement('li');
        const registerLink =document.createElement("a");
        registerLink.href='/pages/register/register.html';
        registerLink.innerText='Register';
        registerLink.classList.add('nav-link');
        registerList.classList.add('nav-item');

        headerNav.appendChild(registerList);
        registerList.appendChild(registerLink)



}
//CLIENT_ROLE//