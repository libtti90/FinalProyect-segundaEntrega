const products=JSON.parse(localStorage.getItem("products"));

const tableBody = document.getElementById('table-body');

const searchInput=document.getElementById('search');
searchInput.addEventListener('keyup',(eventSearch)=>{
const inputValue=eventSearch.target.value;
const productFound=products.filter((pdct)=>{
const nameProduct=pdct.productName.toLowerCase();
if (nameProduct.includes(inputValue)){
    return true;
}
return false

})
console.log(productFound)
pintarProducts(productFound)

})
//table

function pintarProducts(arrayProducts) {

    tableBody.innerHTML = ""
    arrayProducts.forEach((product,index ) => {
        tableBody.innerHTML += `
        <tr class="table-body">
            <td class="image-table"><img src="${product.image}" alt=""></td>
            <td class="name">${product.productName}</td>
            <td class="name">${product.date}</td>
            
            <td class="Details">Measurements in Inches Width:${product.width}/Height: ${product.height}/Depth:${product.depth}</td>
            <td class="price">$${product.price}</td>
            <td class="actions">
            <button class="btn-table" title="Edit product" onclick="editProduct( '${product.id}')" ><i class="fa-solid fa-pen-to-square"></i>
                  <button class="btn-table" title="Delete" onclick="deleteProduct(${index}, '${product.productName}')">
  <i class="fa-solid fa-trash-can"></i>
</button>

            </td>
        </tr>`;
    });
}



pintarProducts(products)

//obtengo formulario
const formProducts = document.getElementById('ProductForm');
const buttonProducts=formProducts.querySelector('button[type=submit]');
formProducts.addEventListener('submit',(submitForm)=>{
    submitForm.preventDefault();

    let id;

    if(submitForm.target.elements.id.value){
        id=submitForm.target.elements.id.value;
        
    }
    else{
        id=crypto.randomUUID();
    }

    //new product
const newProduct={
    
    productName:submitForm.target.elements.inputName.value,
    price:submitForm.target.elements.inputPrice.value,
    category:submitForm.target.elements.inputCategory.value,
    id:id,
    caracteristics:submitForm.target.elements.inputCaracteristics.value,
    materials:submitForm.target.elements.inputMaterials.value,
    
}



if(submitForm.target.elements.id.value){
    const indice=products.findIndex((productFound)=>{
        if(productFound.id === submitForm.target.elements.id.value){
            return true
                    }
    })

    products[indice]=newProduct;
    Swal.fire(
        'Good Job',
        'Product Edited',
        'success'
      ) 
    
}

else{
    products.push(newProduct);
    
    Swal.fire(
        'Good Job',
        'Product Added',
        'success'
      ) 
}
pintarProducts(products);
formProducts.reset();
localStorage.setItem('products',JSON.stringify(products));




localStorage.setItem('products', JSON.stringify(productList));
})


//EDIT
function editProduct(id) {
    
    const productEdit=products.find((product)=>{
           if(product.id===id){
            return true 
            }


    });
//if product no found 
    if(productEdit===undefined){
        
        Swal.fire(
            'Product No Found',
            'Try again',
            'error'
          )
        
        return 
    }

    formProducts.elements.inputName.value=productEdit.productName;
    formProducts.elements.inputPrice.value=productEdit.price;
    formProducts.elements.id.value=productEdit.id;
    formProducts.elements.inputCategory.value=productEdit.category;
    formProducts.elements.inputCaracteristics.value=productEdit.caracteristics;
    formProducts.elements.inputMaterials.value=productEdit.materials;
    formProducts.elements.inputImage.value=productEdit.image;
    formProducts.elements.inputdate.value=formatInputDate(productEdit.date);

    buttonProducts.classList.add('btn-Edit');
    buttonProducts.innerText ="Edit";
    
    pintarProducts(products);
    localStorage.setItem('products',JSON.stringify(products));
    
};


//DELETE

function deleteProduct(index,name) {

    const confirmDelete = confirm(`Do you want to delete this product ${name}`);

  if (confirmDelete){

    products.splice(index, 1);
    Swal.fire(
        'Good Job',
        'Product Deleted',
        'success'
      )
    pintarProducts(products)
    localStorage.setItem('products',JSON.stringify(products));
  }
    
    
}


function formatedDate(date) {
    const collator = new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const dateFormat = collator.format(date)
    return dateFormat
}

function formatInputDate(fechaInput) {

    const fecha = new Date(fechaInput);
    
    const year = fecha.getFullYear()
    
    let month = fecha.getMonth() + 1;
    
    if(month < 10) {
      month = `0` + month
    }
    
    let day = fecha.getDate()
    if(day < 10) {
      day = `0` + day
    }
    
    
    const formatedDate = `${year}-${month}-${day}`
    
    return formatedDate;
    
    }