// 1. Product Data (JSON)
const products = [
    { name: "Iron", price: 199, qty: 1 },
    { name: "Keyboard", price: 999, qty: 1 },
    { name: "Bottle", price: 499, qty: 1 },
    { name: "Bag", price: 799, qty: 1 }
];

const cart = document.getElementById("cart");

// 2. Render Function
function render() {
    cart.innerHTML = ""; // clear old
    products.forEach((product, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>
                <button onclick="decrease(${index})">-</button>
                ${product.qty}
                <button onclick="increase(${index})">+</button>
            </td>
            <td>${product.price * product.qty}</td>
        `;
        cart.appendChild(row);
    });
}

// 3. Increase
function increase(index) {
    products[index].qty++;
    render();
}

// 4. Decrease
function decrease(index) {
    if(products[index].qty > 1){
        products[index].qty--;
        render();
    }
}

// Initial render
render();