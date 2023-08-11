//একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।


function calculateAverage(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        let index = i;
        let element = array[index];
        sum = sum + element;
    }
    const average = sum / array.length;
    return average;

}
const numbers = [10, 20, 30, 40, 50];
const averageValue = calculateAverage(numbers);
console.log(averageValue);