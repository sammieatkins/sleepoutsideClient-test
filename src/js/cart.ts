import { getLocalStorage } from "./utils.mjs";
import type { Product } from "./types.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  // Ensure cartItems is always an array
  const cartArray = Array.isArray(cartItems) ? cartItems : [cartItems];
  
  const htmlItems = cartArray.map((item: Product) => cartItemTemplate(item));
  const listEl = document.querySelector(".product-list");
  if (listEl) listEl.innerHTML = htmlItems.join("");
}


function cartItemTemplate(item: Product) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
