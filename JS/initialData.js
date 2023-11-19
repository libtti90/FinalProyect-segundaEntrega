const productList = [
    { 
        image:'/assets/images/chair.png',
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
    id: '1',
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
    id: '1',
    active: true,
    password: 'Michael1990!',
    bornDate: 725846400000,
    location: 'New York',
    image: 'https://wp-arcus-2020.s3.eu-west-2.amazonaws.com/media/2020/07/16125833/Blank-Silhouette-headshot-Male.png',
    role: 'CLIENT_ROLE'
}]

localStorage.setItem('Users', JSON.stringify(UsersList));

const Users=JSON.parse(localStorage.getItem("Users"));