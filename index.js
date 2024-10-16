const hacker1 = "Pedro";
const hacker2 = "Kurt";
// Iteration 2: Conditionals
let count1 = 0;
for (let i = 0; i < hacker1.length; i++) {
    count1++;
}
let count2 = 0;
for (let i = 0; i < hacker2.length; i++) {
    count2++;
}
if (count1 > count2) {
    console.log(`The driver has the longest name, it has ${count1} characters.`);
} else if (count2 > count1) {
    console.log(`It seems that the navigator has the longest name, it has ${count2} characters.`);
} else if (count2 === count1) {
    console.log(`Wow, you both have equally long names, ${count1} characters!`);
}