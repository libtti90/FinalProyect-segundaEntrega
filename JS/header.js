//esto deberia estar cargado en todos los sitios

//1_antes de agregar el boton en el header
/* tenemos que obtener el nav y user info
hay que evaluar si tenemos usuario logeado
si tenemos user logeado 
A-evaluar su rol y ver si pintamos en el nav el boton de admin product and admin user
B- userInfo pintar el nombre de el usuario, y el boton log out

si no esta logueado
A-no pintamos los botones adm.
b_no colocamos el name
c_pintamos el boton login
*/ 
//obtenemos las constantes
const headerNav = document.getElementById('header-nav');
const userInfoHeader = document.getElementById('header-user');

//hay que evaluar si tenemos un usuario logueado

//leo el local storag
const loguedUser=json.parse(localStorage.getItem('currentUser'))

if(loguedUser){

    //tengo el usuario logueado
    if(loguedUser.role==='ADMIN_ROLE'){
        //PINTAR los botones de admin
     
    }
}
else{
    //no hay user logueado
}
