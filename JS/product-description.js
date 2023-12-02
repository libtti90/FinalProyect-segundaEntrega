

const ProductToDisplay = JSON.parse(localStorage.getItem("currentProduct"));

let title = document.querySelector('.main-title');
const productsArray = JSON.parse(localStorage.getItem("products"));
const productContainer = document.querySelector('.product-container');
const main = document.querySelector('.main-container');



function productDescription() {
    productsArray.find((product) => {
        
        if (product.id === ProductToDisplay.id) {
          
            productContainer.innerHTML = `<articule id="articule-product" class="product">
            <header class="product-header">
                <div class="img-pcipal">
                    <img id="img-pcipal"  src="${product.image}" alt="Bisou Accent Chair font view" class="card-image"
                    loading="lazy">
                </div>
                  
                   
                
             
            </header>
            <div class="product-body">
                <h1 class="info-title">${product.productName}</h1>
                <div class="card-price">$${product.price}
                </div>
        <div class="details">

                <p class="product-description"> ${product.caracteristics}</p>
                
                
                <h2>Dimensions</h2>
        <div class="details-dimension">
                <ul>
                    <h3>Overal Dimensions</h3>
                    <li>Width: ${product.width}"</li>
                    <li>Height:${product.height}"</li>
                    <li>Depth:${product.depth}"</li>
                </ul>
        </div>
        </div>

        <footer class="card-footer">
                    
        <div class="Qty">
            <button class="card-btn btn-cat">+</button>
            <input type="number" class="input-qty" name="number">
            <label for="number"></label>
            <button class="card-btn  btn-cat">-</button>
        </div>
            
           
        
        <div class="cart"></div>
        <button class="card-btn ">Add to cart</button>
        </div>
    </footer>  
    
           
            
            
        </articule>`
        }
    })


}
productDescription()