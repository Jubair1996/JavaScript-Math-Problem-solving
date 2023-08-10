// তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

// Write an array with the prices of all the books you have. The books whose price is above 200 rupees will be skipped. That is, they will not show as output. The rest will be displayed as output. See if you can.
const myBooksPrice =[200, 300,350, 23, 123, 45, 32, 444, 555, 777];
for(let i = 0; i < myBooksPrice.length;  i++){
    const price = myBooksPrice[i];
    if(price >= 200){
        continue;
    }
    console.log(price);
}