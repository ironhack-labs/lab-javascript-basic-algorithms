console.log("I'm ready!");


// Iteration 1: Names and Input

let hacker1 = "Simo";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Matt";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if(
    hacker1.length > hacker2.length
  ){console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  
  }else if(
    hacker1.length < hacker2.length
  ){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  }else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
  }
  
// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
    for (let j = i + 1; i < hacker1.length; j++) {
    for (let k = j + 1; k < hacker1.length; k++) {
    for (let l = k + 1; l < hacker1.length; l++) {  
    console.log(`${hacker1[i].toUpperCase()} ${hacker1[j].toUpperCase()} ${hacker1[k].toUpperCase()} ${hacker1[l].toUpperCase()}`);
        };
      };
    };
  };

// We know it's not THE answer but it is AN answer :)

