

const ProductToDisplay = JSON.parse(localStorage.getItem("currentProduct"));

let title = document.querySelector('.main-title');
const productsArray = JSON.parse(localStorage.getItem("products"));
const productContainer = document.querySelector('.product-container');
const main = document.querySelector('.main-container');

function productDescription() {
    productsArray.find((product) => {
        if (product.id === ProductToDisplay.id) {
            
            productContainer.innerHTML = `<articule class="product">
            <header class="product-header">
                <div class="img-pcipal">
                    <img id="img-pcipal"  src="${product.image}" alt="Bisou Accent Chair font view" class="card-image"
                    loading="lazy">
                </div>
                  
                   
                
             
            </header>
            <div class="product-body">
                <h1 class="info-title">${product.productName}</h1>
                <div class="card-price">$${product.price}</div>

                <p class="product-description"> ${product.caracteristics}</p>
                <h2>Care Instructions</h2>
                <p class="product-description"> ${product.instructions}</p>
                
                <h2>Dimensions</h2>
                <ul class="details-dimension">
                    <h3>Overal Dimensions</h3>
                    <li>Width: ${product.width}"</li>
                    <li>Height:${product.height}"</li>
                    <li>Depth:${product.depth}"</li>
                </ul>
                

                
    
            </div>
            
            <footer class="card-footer">
                
                <div class="Qty">
                    <button class="card-btn">+</button>
                    <input type="number" >
                    <label for="number"></label>
                    <button class="card-btn">-</button>
                    
                   
                </div>
                
                <button class="card-btn">Add to cart</button>

            </footer>
        </articule>`
        }
    })


}
productDescription()