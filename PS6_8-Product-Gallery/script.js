const products = [
    {
        name: "Product 1",
        image: "images/Screenshot 2026-04-21 004512.png"
    },
    {
        name: "Product 2",
        image: "images/Screenshot 2026-04-21 213824.png"
    },
    {
        name: "Product 3",
        image: "images/Screenshot 2026-04-21 213908.png"
    },
    {
        name: "Product 4",
        image: "images/Screenshot 2026-04-21 215507.png"
    },
    {
        name: "Product 5",
        image: "images/Screenshot 2026-04-21 220205.png"
    }
];

const container = document.querySelector('#container');

products.forEach(addItem);

function addItem(product){
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">  
        <div class="overlay">
            <button>Buy Now</button>
        </div>
    `
    container.appendChild(card);
}

const buts = document.querySelectorAll('button');

buts.forEach(butitem);
function butitem(but){
    but.addEventListener("click", ()=> {
        alert("Order Placed");
    });
}
