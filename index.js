
// Iteration 2: Conditionals

/* 
  2.1. Depending on which name is longer, print:
  - The driver has the longest name, it has XX characters. or ->
  - It seems that the navigator has the longest name, it has XX characters. or
  - Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }
  
  // Iteration 3: Loops
  
  // 3.1 Print the characters of the hacker1 name, separated by space, and in capital letters, i.e., "J O H N".
  
  let newName = '';
  
  for (let i = 0; i < hacker1.length; i++) {
    const charUpperCase = hacker1[i].toUpperCase()
  
    newName += charUpperCase;
  
    if (i !== hacker1.length - 1) {
      newName += " ";
    }
  }
  console.log(newName);
  
  // 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
  let invertName ='';
  
  for (let i = hacker1.length -1; i >= 0; i--) {
    const  char = hacker1[i];
  
    invertName += char;
  
  }

  console.log(invertName);


  
  
  // 3.3 Depending on the lexicographic order of the strings, print:
  /*     -The driver's name goes first.
        -Yo, the navigator goes first, definitely.
        -What?! You both have the same name?*/
  if (hacker1.localeCompare(hacker2) < 0) {
    console.log(`The driver's name goes first.`);
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log('Yo, the navigator goes first, definitely.');
  } else {
    console.log('What?! You both have the same name?');
  }