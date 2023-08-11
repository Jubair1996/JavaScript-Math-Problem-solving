// Problem====4

function findAddress(obj) {
  const address1 = obj.street || ",";
  const address2 = obj.house || "__";
  const address3 = obj.society || "__";
  return +address1 + "," + address2 + "," + address3;
}
const obj = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};
const result = findAddress(obj);
console.log(result);
