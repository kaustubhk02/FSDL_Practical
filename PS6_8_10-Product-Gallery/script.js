const products = [
    {
        name: "Product 1",
        image: "images/Screenshot 2026-04-21 004512.png",
        category: "Electronics"
    },
    {
        name: "Product 2",
        image: "images/Screenshot 2026-04-21 213824.png",
        category: "Clothing"
    },
    {
        name: "Product 3",
        image: "images/Screenshot 2026-04-21 213908.png",
        category: "Electronics"
    },
    {
        name: "Product 4",
        image: "images/Screenshot 2026-04-21 215507.png",
        category: "Home"
    },
    {
        name: "Product 5",
        image: "images/Screenshot 2026-04-21 220205.png",
        category: "Accessories"
    }
];

const container = document.querySelector('#container');
products.forEach(addItem);

function addItem(product,index){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', index+1);
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">  
        <div class="overlay">
            <button>Buy Now</button>
            <h3 class="category">${product.category}</h3>
        </div>
    `
    container.appendChild(card);
}

const buts = document.querySelectorAll('.card button');

buts.forEach(butitem);
function butitem(but){
    but.addEventListener("click", ()=> {
        alert("Order Placed");
    });
}

function filter(){
    let cat = document.querySelector('#category').value;

    products.forEach((product, index)=>{
        let card = document.getElementById(index + 1);

        if(cat === "All" || cat === product.category){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    });
}