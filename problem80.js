// Find the matching product by searching products

const products = [
  { id: 1, name: "walton phone", price: 12000 },
  { id: 1, name: "walton phone", price: 12000 },
  { id: 1, name: "walton laptop", price: 12000 },
  { id: 1, name: "walton Phone", price: 12000 },
  { id: 1, name: "walton phone", price: 12000 },
  { id: 1, name: "walton khan", price: 12000 },
  { id: 1, name: "walton laptop", price: 12000 },
  { id: 1, name: "walton jubair", price: 12000 },
  { id: 1, name: "walton yes", price: 12000 },
  { id: 1, name: "walton LAptop", price: 12000 },
];
function matchedProducts(products, search) {
  let matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
const results = matchedProducts(products, "laptop");
console.log(results);
