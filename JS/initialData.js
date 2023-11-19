const productList = [
    { 
        image:'/assets/images/couchsolo.png',
        productName: "Libby Cane Dining Chair",
        price: 1596.00,
        color: "Black/Natural",
        measurements: "19.75\"W x 24.75\"D x 36\"H",
        materials: "Wood and Cane",
        category: "Living Room"
    },
    { 
        image:'/assets/images/couchsolo.png',
        productName: "Bisou Accent Chair",
        price: 999.00,
        color: "Sand",
        measurements: "30\"W x 35\"D x 29\"H",
        materials: "Wool- and hemp-blend upholstery",
        category: "Living Room"
    }
    
];
localStorage.setItem('products', JSON.stringify(productList));

const productsInLocal=JSON.parse(localStorage.getItem("products"))
