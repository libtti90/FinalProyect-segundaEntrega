const products=JSON.parse(localStorage.getItem("products"))
console.log('productsInLocal')
const tableBody = document.getElementById('table-body');

products.forEach(product => {
    tableBody.innerHTML += `
    <tr class="table-body">
        <td class="image-table"><img src="${product.image}" alt=""></td>
        <td class="name">${product.productName}</td>
        <td class="Details">${product.measurements}, ${product.materials}</td>
        <td class="price">$${product.price}</td>
        <td class="actions"></td>
    </tr>`;
});

