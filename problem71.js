// কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো
function secondLargest(number){
    number.sort();
    const second = number[numbers.length - 2];
    return second;
}
const numbers = [46, 78, 12, 99, 34, 23, 76];
const results = secondLargest(numbers);
console.log(results);