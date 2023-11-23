const productList = [
    { 
        image:'/assets/images/chair.png',
        secondImage:'/assets/images/chair2.png',
        productName: "Libby Cane Dining Chair",
        price: "1596.00",
        color: "Black/Natural",
        measurements: "19.75\"W x 24.75\"D x 36\"H",
        materials: "Wood and Cane",
        category: "Living Room",
        date:"08/29/2023",
        caracteristics:"Our Libby dining chair frames intricately woven natural cane in bold black, giving the centuries-old technique a modern edge. Solid nettlewood with a brushed ebony finish shapes the chair's clean lines and crisp angles. A slim cushion finished inhigh-performance linen-blend fabric adds comfort while maintaining the chairs sharp look."
    },
    { 
        image:'/assets/images/couchsolo.png',
        secondImage:'/assets/images/couchsolo2.png',
        productName: "Bisou Accent Chair",
        price: "999.00",
        color: "Sand",
        measurements: "30\"W x 35\"D x 29\"H",
        materials: "Wool- and hemp-blend upholstery",
        category: "Living Room",
        date:"08/29/2023",
        caracteristics:"Named after the French word for kiss our Bisou chair is a loving tribute to both vintage and contemporary European style. Bentwood ash veneer finished in a warm honey tone curves the striking, heart-shaped arms. Set within the embrace of the playful frame, a sculptural cushion shapes the super-comfortable all-in-one seat and back. The off-white, wool-blend fabric lends dimension and touch-me texture. Bisou's bold silhouette belies its petite scale, making the accent chair easy to use in pairs."
    },
    { 
        image:'/assets/images/table.png',
        secondImage:'/assets/images/table2.png',
        productName: "Terra Wood Dining Table",
        price: "1799.00",
        color: "Brown",
        measurements: "65\"W x 37\"D x 30\"H",
        materials: "Oak Solid Wood",
        category: "Living Room",
        date:"08/29/2023",
        caracteristics:"Crafted of solid white oak with a natural finish applied by hand, our Terra dining table celebrates the rustic beauty of wood. The legs intersect the slab top, showcasing the end grain for textural interest. Each table features tonal variations and natural cracking as the wood expands and contracts, mirroring the ebb and flow of the seasons. These characteristics enhance the authentic farmhouse look and are embraced and anticipated characteristics of the table. To make room for everyone at your table, pair with the coordinating dining bench."
    },
    { 
        image:'/assets/images/standnight.png',
        secondImage:'/assets/images/standnight2.png',
        productName: "Dahlia Wood Nightstand",
        price: "599.00",
        color: "Sand",
        measurements: "24\"W x 18\"D x 24\"H",
        materials: "Steel and Oak Wood",
        category: "Bedroom",
        date:"08/29/2023",
        caracteristics:"Tucked next to a bed, our Dahlia nightstand enhances the bedroom with clean lines and strong geometry. Black steel fashions the bedside table's slim frame, enlivening the open rectangle with forged texture. Planes of natural oak with a light driftwood finish form the inset top and the floating box-like shelf that disguises a flat-front drawer. A contemporary mix of wood and metal, the nightstand pairs with our Dahlia dresser and canopy bed for a coordinated bedroom."
    },
    { 
        image:'/assets/images/bookcase.png',
        secondImage:'/assets/images/bookcase2.png',
        productName: "Vertex Storage Bookshelf",
        price: "979.94",
        color: "Sand",
        measurements: "42\"W x 18\"D x 78\"H",
        materials: "Solid oak",
        category: "Living Room",
        date:"08/29/2023",
        caracteristics:"Vertex's converging angles make a dynamic play of oak's beautiful cathedral grain. An integral element to the bookcase's animated design, the wood grain reverses direction on the three fixed shelves and cabinet doors with bold, integrated pulls. Outfitted with an adjustable interior shelf, the cabinet provides storage for books, board games or office supplies. The Vertex bookcase is a Crate and Barrel exclusive."
    },
    { 
        image:'/assets/images/bed1.png',
        secondImage:'/assets/images/bed2.png',
        productName: "Keane Wood Queen Bed",
        price: "1,599.00",
        color: "Espresso",
        measurements: "63\"W x 84\"D x 50\"H",
        materials: "Wood",
        category: "Bedroom",
        date:"08/29/2023",
        caracteristics:"Keane streamlines a classic modern bed in beautiful mahogany enhanced by a dark brown finish. The Keane bed features an architectural yet informal frame for any style bedroom."
    },
    { 
        image:'/assets/images/couch.png',
        secondImage:'/assets/images/couch2.png',
        productName: "Oceanside sofa",
        price: "1599.00",
        color: "Ivory",
        measurements: "78\"W x 39\"D x 39\"H",
        materials: "Polyester-cotton, wood",
        category: "Living Room",
        date:"08/29/2023",
        caracteristics:"Clean lines and an on-trend, how-low-can-you-go seat give our Oceanside sofa its breezy ease and modern attitude.Set on one-inch legs set just beyond the shadow line, the low-profile apartment sofa floats in the room, and the wrap-around flow from arm to back gives it a neat, fully finished look from any angle. Soft-yet-structured cushions provide just enough support for a comfortable seat you won't want to leave. We love the generous width of the arms, perfect for propping books or serving as a casual perch for conversing."
    },
    { 
        image:'/assets/images/drawer.png',
        secondImage:'/assets/images/couchsolo.png',
        productName: "keane drifwood dresser",
        price: "1899.00",
        color: "Driftwood",
        measurements: "64\"W x 19.5\"D x 34\"H",
        materials: "Wood",
        category: "Bedroom",
        date:"08/29/2023",
        caracteristics:"Refined and bold, Keane takes bedroom storage to the next level. Scaled to create a stately presence in the master bedroom, each piece is crafted of beautiful mahogany and meranti wood with a grey-wash driftwood finish. Studded with warm brass round pulls, this roomy six-drawer low dresser has inset panels and channel detailing to call attention to its clean, architectural lines. Designed by Bill Eastburn of William Eastburn Design, the Keane Driftwood 6-Drawer Wood Dresser is a Crate and Barrel exclusive."
    }
    
];
localStorage.setItem('products', JSON.stringify(productList));

const productsInLocal=JSON.parse(localStorage.getItem("products"))


const UsersList = [{
    fullname: 'John Doe',
    age: 20,
    email: 'admin@admin.com',
    id: '1',
    active: true,
    password: 'Admin2023!',
    bornDate: 725846400000,
    location: 'New York',
    image: 'https://wp-arcus-2020.s3.eu-west-2.amazonaws.com/media/2020/07/16125833/Blank-Silhouette-headshot-Male.png',
    role: 'ADMIN_ROLE'
},
{
    fullname: 'Anne Smith',
    age: 25,
    email: 'Anne_Smith@gmail.com',
    id: '2',
    active: true,
    password: 'Anne1990!',
    bornDate: 725846400000,
    location: 'New Jersey',
    image: 'https://tse1.mm.bing.net/th?id=OIP.V_mCEbMV_Tq7Cqer2TYavgD6D6&pid=Api&P=0&h=220',
    role: 'CLIENT_ROLE'
},
{
    fullname: 'Michael Pitt',
    age: 40,
    email: 'MichaelPitt20@gmail.com',
    id: '3',
    active: true,
    password: 'Michael1990!',
    bornDate: 725846400000,
    location: 'New York',
    image: 'https://wp-arcus-2020.s3.eu-west-2.amazonaws.com/media/2020/07/16125833/Blank-Silhouette-headshot-Male.png',
    role: 'CLIENT_ROLE'
}]

localStorage.setItem('Users', JSON.stringify(UsersList));

const Users=JSON.parse(localStorage.getItem("Users"));