import { findProductById } from "./productData.mts";
import type { Product } from "./types.mts";
import { setLocalStorage } from "./utils.mts";

let productData;

export default function productDetails(productId: string, selector: string) {
  // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it

//   AI FILLED IN HERE
  findProductById(productId).then((product) => {
    // once we have the product details we can render out the HTML
    const productDetails = productDetailsTemplate(product);
    const container = document.querySelector(selector);
    // container.innerHTML = productDetails;
  });

  // add a listener to Add to Cart button
}

export function addProductToCart(product: Product) {
  setLocalStorage("so-cart", product);
}

export function productDetailsTemplate(product: Product) {
  return `<p>${product.Name}</p>`;
}
