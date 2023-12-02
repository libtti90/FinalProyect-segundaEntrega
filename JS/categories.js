const cardContainer = document.querySelector(".card-container");

const productsArray = JSON.parse(localStorage.getItem("products"));

const categoryProducts = JSON.parse(localStorage.getItem('currentCategory'));


const title=document.querySelector('.main-title');




function pintarTitle(){

    categoryProducts.forEach((product) => {
        title.innerHTML=`<h2 class="category-title">${product.category}</h2>`
    });
    
}
pintarTitle();
function pintarCardsCategories() {
    

    
    categoryProducts.forEach((product) => {
        
        cardContainer.innerHTML += `<article class="card-box">
        <div class="card">
        <header class="card-header">
                <div class="img-box">
                    <img src=${product.image} class="card-image" loading="lazy">
                    <img src=${product.secondImage} alt="Bisou Accent Chair side view" class="card-image2" loading="lazy">
                </div>
            </header>
            <div class="card-body">
                <h2 class="card-info-title">${product.productName}</h2>
                <p class="product-description">${product.caracteristics}</p>
            </div>
            <div class="values">
                <div class="card-values">${product.date}</div>
                <div class="card-price">${product.price}</div>
            </div>
            <footer class="card-footer">
                <button class="card-btn" onclick="seeMore( '${product.id}')">See more</button>
                <button class="card-btn">Comprar</button>
            </footer></div>
            
        </article>`;

    });
}
pintarCardsCategories()

function seeMore(choosenProduct) {
    const product=productsArray.find((pto)=>{
        if(pto.id===choosenProduct){
            
            return true
        }

        else{
            return false
            
        }

    })
    window.location.href = '/pages/Product-description/product-description.html';
    localStorage.setItem('currentProduct', JSON.stringify(product));
}
