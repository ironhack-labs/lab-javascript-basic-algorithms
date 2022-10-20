// Iteration 1: Names and Input
const hacker1 = "Jadde";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Juan";
console.log(`The driver's name is ${hacker2}`);


//

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops

// for (let i = 0; i < hacker1.length; i++) {
//     console.log(hacker1.charAt(i).join(" "))
// }

// for (let i = 0; i < hacker1.length; i++) {
//     console.log(hacker1.charAt(i))
// }
// for (hacker1.length) {

// }
console.log(hacker1.split("").join(" ").toUpperCase())


// Otra opcion de hacerlo al revez
// let charts = ""
// for (let i = hacker1.length - 1; i >= 0; i--) {
//     charts += hacker1.charAt(i)
//     console.log(charts)
//     // hacker1.reverse()
// }
console.log(hacker1.split("").reverse().join(""))


// console.log(hacker1.localeCompare(hacker2))

if (hacker1.localeCompare(hacker2)) {
    console.log("the drivers name goes first")
} else if (!hacker1.localeCompare(hacker2)) {
    console.log("yo, the navigator goes first definitely")
} else if (hacker1 === hacker2) {
    console.log("What? You both have the same name")

}