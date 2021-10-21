// Iteration 1: Names and Input

let hacker1 = "Fernando"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Carlos"
console.log(`The navigator's name is ${hacker2}`) 



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longer name, it has ${hacker1.length} characters`)
    
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }


// Iteration 3: Loops

let splitNameUpper = hacker1.toUpperCase();
  let sepName = splitNameUpper.split('');
  console.log(sepName);

  
  let nameToString = sepName.toString().replaceAll(",", " ");

  console.log(nameToString);
  



console.log(hacker2.split("").reverse().join(""));
