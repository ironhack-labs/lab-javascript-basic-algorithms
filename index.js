// Iteration 1: Names and Input


    let hacker1  = "john";
    let hacker2  = "paul";
  
    console.log(`The hacker's name is ${hacker1}`);
    console.log(`The navigator's name is ${hacker2}`);
  

    // Iteratio n 2
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}
else
        console.log(`Wow, you both have equally long names,  ${hacker1.length} characters!`)

// Iteration  3

function hacker1toUpperCase(str) {
    const result = str.toUppercase().split('').join(' ');
    console.log(result);


}// REVERSE

