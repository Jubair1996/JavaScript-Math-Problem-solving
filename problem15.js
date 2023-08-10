// তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

// Create an array with the names of all the things you have learned in this lesson. Then use a for loop to output all elements of that array.

const lessons = ["HTML", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Basic JS"];
// For Loop
/* for(let i = 0; i < lessons.length;i++){
    const lesson = lessons[i];
    console.log(lesson);
} */
// While Loop

let i = 0;
while(i < lessons.length){
    const lesson = lessons[i];
    console.log(lesson);
    i++;
}

// For of Loop
/* for(const lesson of lessons){
    console.log(lesson);
} */