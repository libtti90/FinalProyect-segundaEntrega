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
        
        cardContainer.innerHTML += `<article class="card">
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
            <a href="#" class="card-button">Ver mas</a>
            <button class="card-btn">Comprar</button>
        </footer>
        </article>`;
    });
}
pintarCardsCategories()


