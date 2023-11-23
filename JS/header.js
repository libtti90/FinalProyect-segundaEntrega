
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
        productLink.classList.add('nav-link');
        productListItem.classList.add('nav-item');
    
        productListItem.appendChild(productLink);
        headerNav.appendChild(productListItem);
     
    }




    const userImage=document.createElement('img')
    const nameAdm=document.createElement('a')
    nameAdm.innerText=loguedUser.fullname;
    nameAdm.classList.add('nav-item');
    userInfoHeader.appendChild(nameAdm);

    userImage.src=loguedUser.image;
    userImage.alt=`${loguedUser.fullname} profile picture`;
    userImage.classList.add('user-picture');

    const userName =document.createElement("a");
    userName.innerText = loguedUser.fullname;
    userInfoHeader.appendChild(userImage)

const cartLink = document.getElementById('cart');
const userLink = document.getElementById('iconUser');
const logo=document.querySelector('.nav-logo')
cartLink.style.display = 'none';
userLink.style.display = 'none';
logo.style.display = 'none';
}
else{
   

}
//CLIENT_ROLE//