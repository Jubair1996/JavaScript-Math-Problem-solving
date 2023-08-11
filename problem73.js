// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে

function bestFriend(friendsArray) {
  if (friendsArray.length === 0) {
    return "No friends found";
  }
  let maxName = friendsArray[0];
  for (let i = 1; i < friendsArray.length; i++) {
    const friendsIndex = friendsArray[i];
    if (friendsIndex.length > maxName.length) {
      maxName = friendsIndex;
    }
  }
  return maxName;
}
const friends = ["Jubair", "Masud", "Roni", "Zahid", "Sahid"];
const result = bestFriend(friends);
console.log(result);
