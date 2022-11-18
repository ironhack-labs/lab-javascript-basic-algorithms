console.log('i am ready!');

// Iteration 1: Names and Input
const hacker1 ='silvia';
console.log(`The driver name is ${hacker1}`);
const hacker2 ='pedro';
console.log(`The navigator's name is ${hacker2}`)

//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`the driver has the longest name, it has ${hacker1.length} characters`);
    }
else if (hacker2.length> hacker1.length) {
    console.log(`it seems that the navigator has the longest name, it has ${hacker2.length} characters`);ç
    }
else {console.log(`wow! you both have equally long names, ${hacker1.length} characters`)
    };

// Iteration 3: Loops
function capitalLetters (hacker1) {
    const HACKER1 = hacker1.toUpperCase();
      let result='';
      for (let i = 0; i < HACKER1.length; i++) {
          result+=` ${HACKER1[i]}`; 
      }
    return result;
  }

  const result= capitalLetters(hacker1); 
  console.log(result)

function reverseHacker (hacker1) {
    let result='';
    for (let i = hacker1.length-1; i=0; i--) {
        result += hacker1[i]; console.log(result)
    }

}
reverseHacker(hacker1);

    if (hacker1.localeCompare(hacker2) === 1) {
       console.log("the driver's name goes first"); 
    }
    else if (hacker1.localeCompare(hacker2) === 0) {
        console.log("yo, the navigator goes first definitely");
    }

    else {console.log('what?! you both have the same name?'); 
}

