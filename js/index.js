//Iteration 1
let hacker1 = "Anita";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Gonzalito";
console.log(`The navigator's name is ${hacker2}`)

//Iteration2 
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters `);
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters `);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}  characters`)
}

//Iteration 3
//3.1 
//console.log(hacker1.toUpperCase());
let hackerName = "";
for (let i = 0; i < hacker1.length; i++) {

    (hackerName += hacker1[i] + " ");

}
console.log(hackerName.toUpperCase());

// 3.2
let hackerName1 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    (hackerName1 += hacker1[i] + " ");
}
console.log(hackerName1);

// 3.3
let hacker1Lower = hacker1.toLocaleLowerCase();

let hacker2Lower = hacker2.toLocaleLowerCase();

if (hacker1Lower < hacker2Lower) {
    console.log("The driver's name goes first");

} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What? You both have the same name?");
}

  //Bonus 1