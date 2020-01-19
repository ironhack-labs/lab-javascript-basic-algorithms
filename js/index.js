// Iteration 1: Names and Input

let hacker1 = "David";
let hacker2 = "Allan";

console.log("The driver name is" +" " + hacker1);
console.log("The navigator's name is" +" " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name. It has character: " + " " + hacker1.length);
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigators has the longest name. It has character: " + " " + hacker2.length);
} else {
    console.log("Wow, you both have equally long names," + " " + hacker1.length + " " + "characters! and" + " " + hacker2.length + " " + "characters!");
}

// Iteration 3: Loops

// 3.1 loops

let j = ""
for (let i = 0; i < hacker1.length; i++) {
    j += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(j)

// 3.2 loops

let h = ""
for (let i = hacker2.length; i >= 0; i--) {
    h += hacker2.charAt(i) + " ";
}
console.log(h)

// 3.3 loops

let loremIpsumExample = "Lorem Ipsum one.Lorem Ipsum two.Lorem Ipsum three."
let ams = hacker1.localeCompare(hacker2);
console.log(ams);
