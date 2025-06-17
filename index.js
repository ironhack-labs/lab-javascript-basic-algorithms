// Iteration 1: Names and Input

const   hacker1 = "Ferran";
console.log("The driver's name is " + hacker1);


const   hacker2 = "Ramos";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

const   name1 = hacker1.length;
const   name2 = hacker2.length;

if (name1 > name2) {
    console.log("The driver has the longest name, it has " + name1 + " characters.");
    document.body.innerHTML = `
    <p>The driver's name is ${hacker1}</p>
    <p>The navigator's name is ${hacker2}</p>
    <p>The driver has the longest name, it has ${name1} characters.</p>
    `;
} else if (name1 < name2) {
    console.log("It seems that the navigator has the longest name, it has " + name2 + " characters.");
    document.body.innerHTML = `
    <p>The driver's name is ${hacker1}</p>
    <p>The navigator's name is ${hacker2}</p>
    <p>It seems that the navigator has the longest name, it has ${name2} characters.</p>
    `;
} else {
    console.log("Wow, you both have equally long names, XX characters!.");
    document.body.innerHTML = `
    <p>The driver's name is ${hacker1}</p>
    <p>The navigator's name is ${hacker2}</p>
    <p>Wow, you both have equally long names, it has ${name2} characters.</p>
    `;
}


// Iteration 3: Loops

let res = "";

for (let i = 0; i < hacker1.length; i++) {
    res += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1)
        res += " ";
}

console.log(res);
document.body.innerHTML = `
    <p>The driver's name is ${hacker1}</p>
    <p>The navigator's name is ${hacker2}</p>
    <p>Wow, you both have equally long names, it has ${name2} characters.</p>
    <h2>${res}</h2>
    `;

let result = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    result += hacker2[i];
}

console.log(result);
document.body.innerHTML = `
    <p>The driver's name is ${hacker1}</p>
    <p>The navigator's name is ${hacker2}</p>
    <p>Wow, you both have equally long names, it has ${name2} characters.</p>
    <h2>${res}</h2>
    <h3>${result}
    `;


let compare = "";

const minLength = Math.min(hacker1.length, hacker2.length);

for (let i = 0; i < minLength; i++) {
  const result = hacker1[i].localeCompare(hacker2[i]);

  if (result < 0) {
    compare = "The driver's name goes first.";
    break;
  } else if (result > 0) {
    compare = "Yo, the navigator goes first, definitely.";
    break;
  }
}

if (compare === "") {
  if (hacker1.length < hacker2.length) {
    compare = "The driver's name goes first.";
  } else if (hacker1.length > hacker2.length) {
    compare = "Yo, the navigator goes first, definitely.";
  } else {
    compare = "What?! You both have the same name?";
  }
}

console.log(compare);
document.body.innerHTML = `
    <p>The driver's name is ${hacker1}</p>
    <p>The navigator's name is ${hacker2}</p>
    <p>Wow, you both have equally long names, it has ${name2} characters.</p>
    <h2>${res}</h2>
    <h3>${result}</h3>
    <h4>${compare}</h4>
    `;