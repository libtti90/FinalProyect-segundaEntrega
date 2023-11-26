
const cardContainer = document.querySelector(".card-container");
console.log(cardContainer)
const productsArray=JSON.parse(localStorage.getItem("products"));
console.log(productsArray)


function pintarCards(products) {

    cardContainer.innerHTML=""

    productsArray.forEach((product,index) => {
        cardContainer.innerHTML+=`<articule class="card">
        <header class="card-header">
            <div class="img-box">
                <img src=${product.image} class="card-image" loading="lazy">
                <img src=${product.secondImage} alt="Bisou Accent Chair side view" class="card-image2" loading="lazy">
                    
            </div>
         
        </header>
        <div class="card-body">
            <h2 class="card-info-title">${product.productName}</h2>

            <p class="product-description">${product.caracteristics} </p>
        </div>
        <div class="values">
            <div class="card-values">${product.date}</div>
            <div class="card-price">${product.price}</div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-button">Ver mas</a>
            <button class="card-btn">Comprar</button>

        </footer>`
    });
}

pintarCards()

/*<articule class="card">
                <header class="card-header">
                    <div class="img-box">
                        <img src="" class="card-image" loading="lazy">
                        <img src="" alt="Bisou Accent Chair side view" class="card-image2" loading="lazy">
                            
                    </div>
                 
                </header>
                <div class="card-body">
                    <h2 class="card-info-title"> </h2>

                    <p class="product-description"> </p>
                </div>
                <div class="values">
                    <div class="card-values"></div>
                    <div class="card-price"></div>
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-button">Ver mas</a>
                    <button class="card-btn">Comprar</button>

                </footer>*/