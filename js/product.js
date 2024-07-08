const container = document.getElementById("container");
const header = document.getElementById("header");
const home = document.getElementById("home");
const about = document.getElementById("about");
const product = document.getElementById("product");
const cart = document.getElementById("cart");
const products = document.getElementById("products");
const productEl = document.getElementById("product-1");


function getCard() {
    return `
    <div id="product-1" class="product">
        <img src="${card.img}" alt="">
        <h1 class="title"></h1>
        <h5 class="cost">$339.99</h5>
    </div>
    `
}