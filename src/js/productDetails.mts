import { findProductById } from "./productData.mts";
import type { Product } from "./types.mts";
import { setLocalStorage } from "./utils.mts";

let productData;

export default function productDetails(productId: string, selector: string) {
  // use findProductBßyId to get the details for the current product. findProductById will return a promise! use await or .then() to process it
  const container = document.querySelector(selector);
  //   AI FILLED IN HERE
  findProductById(productId).then((product) => {
    // once we have the product details we can render out the HTML
    const productDetails = productDetailsTemplate(product);
    if (container) {
      container.innerHTML = productDetails;
    }
  });

  // add a listener to Add to Cart button
  document
  .getElementById("addToCart")
  ?.addEventListener("click", addToCartHandler);
}

export function addProductToCart(product: Product) {
  setLocalStorage("so-cart", product);
}

function productDetailsTemplate(product: Product) {
  // alt = empty string because it's a decorative image. The important information is already in the context.
  return `
        <h3 id="productName">${product.Name}</h3>
        <h2 class="divider" id="productNameWithoutBrand">${product.NameWithoutBrand}</h2>
        <img id="productImage" class="divider" src="${product.Image}" alt="" />
        <p class="product-card__price" id="productFinalPrice">${product.ListPrice}</p>
        <p class="product__color" id="productColorName">${product.Colors[0].ColorName}</p>
        <p class="product__description" id="productDescriptionHtmlSimple">${product.DescriptionHtmlSimple}</p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="">Add to Cart</button>
        </div>`;
}

// add to cart button event handler
async function addToCartHandler(e: Event) {
  const target = e.target as HTMLButtonElement;
  if (target.dataset.id) {
    const product = await findProductById(target.dataset.id);
    addProductToCart(product);
  }
}