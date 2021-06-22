// Iteration 1: Names and Input

const hacker1 = {
    name: "Checo"
}
console.log (`Hello there! The drivers's name is ${hacker1.name}`)

const hacker2 = {
    name: "Chrome"
}
console.log (`Hello there! The navigator's name is ${hacker2.name}`)

// let exercise2 = 
// console.log `Hello there! The navigator's name is ${hacker2.name}`(exercise2)

// Iteration 2: CONDITIONALS // 

console.log (hacker1.name.length)

console.log (hacker2.name.length)



if ((hacker1.name.length)>(hacker2.name.length)) {
    console.log (`The driver has the longest name, it has ${hacker1.name.length} characters`);
} else if ((hacker1.name.length)>(hacker2.name.length)) {console.log (`It seems that the navigator has the longest name, it has ${hacker2.name.length} characters.`);
} else {console.log (`Wow, you both have equally long names ${hacker1.name.length} characters`);
}


// const n = hacker1.length
// const n2 = hacker2.length

// let variacion = (hacker1.match || []).length
// console.log (variacion)

// let mystring1 = "Checo"
// console.log (mystring1.length)

// let mystring2 = "Chrome"
// console.log (mystring2.length)




// if (n > n2) {
//     console.log (`The driver has the longest name, it has ${n}`);
// } else {
//     if (n < n2) {
//         console.log (`It seems that the navigator has the longest name, it has ${n2}`);
//     } else (n = n2) {
//         console.log (`Wow, you both have equally long names, ${n1} characters!.`);
//     }
// }


// if ({mystring1.length}==={mystring2.length}) {
//     console.log ('The driver has the longest name, it has xxx characters');
// } else {
//     if ({mystring1.length}<{mystring2.length}) {
//     console.log ('It seems that the navigator has the longest name, it has XX characters');
// }   else {
//     console.log ('Wow, you both have equally long names, XX characters!');
// }

// Iteration 3: LOOPS
// 3.1 
console.log(hacker1.name.charAt(0));
console.log(hacker1.name.charAt(1));
console.log(hacker1.name.charAt(2));
console.log(hacker1.name.charAt(3));
console.log(hacker1.name.charAt(4));


//3.2
console.log(hacker2.name.charAt(5));
console.log(hacker2.name.charAt(4));
console.log(hacker2.name.charAt(3));
console.log(hacker2.name.charAt(2));
console.log(hacker2.name.charAt(1));
console.log(hacker2.name.charAt(0));


//3.3
n = (hacker1.name).localeCompare((hacker2.name));
if (n = 1) {
    console.log("The driver's name goes first");
} else if (n = 0) {
    console.log("What? You both have the same name?");
} else console.log ("Yo, the navigator goes first definitely");


