

const newPhoto = document.getElementById('photo1');
const newPhoto1 = document.getElementById('photo2');
const newPhoto2 = document.getElementById('photo3');
const newPhoto3 = document.getElementById('photo4');
const newPhoto4 = document.getElementById('photo5');

const pcipalImage = document.getElementById('img-pcipal');

newPhoto.addEventListener('click', ()=>{
    pcipalImage.src = newPhoto.src;
    console.log(newPhoto.src);
    console.log(pcipalImage.src);
})//sin terminar





