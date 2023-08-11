// Find the cheapest phone from an array of phone objects
const phones = [
  { name: "A", camera: 12, storage: "32gb", price: 20000, color: "red" },
  { name: "B", camera: 12, storage: "32gb", price: 220000, color: "red" },
  { name: "C", camera: 12, storage: "32gb", price: 10000, color: "red" },
  { name: "D", camera: 12, storage: "32gb", price: 230000, color: "red" },
  { name: "E", camera: 12, storage: "32gb", price: 240000, color: "red" },
  { name: "F", camera: 12, storage: "32gb", price: 2000, color: "red" },
  { name: "G", camera: 12, storage: "32gb", price: 205000, color: "red" },
];
function cheapestPhones(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}
const results = cheapestPhones(phones);
console.log(results);
