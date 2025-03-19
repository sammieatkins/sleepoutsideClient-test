import { getParam } from "./utils.mts";
import { findProductById } from "./productData.mts";
import productDetails from "./productDetails.mjs";

let productId = getParam("product");
if (productId) {
  console.log(await findProductById(productId));
  productDetails(productId, ".product-detail");
} else {
  console.error("Product ID is null or undefined");
}

