// Iteration 1: Names and Input

  let hacker1 = "Solideo";
  console.log(`The driver's name is ${hacker1}`);

  let hacker2 = "Nuno";
  console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
  
  for(let i = 0; i < hacker1.length; i++) {
    if (hacker1.length >= hacker2.length) {
      console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
      } else if (hacker1.length <= hacker2.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
      } else if(hacker1.length === hacker2.length) {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
  }

  let capitalSpaceHacker1 = "";

  for (let i = 0; i < hacker1.length; i++) {
    capitalSpaceHacker1 += hacker1.charAt(i).toUpperCase() + " ";
  }

  console.log(capitalSpaceHacker1);

  let reverseName = "";
  
  for (let i = hacker1.length -1; i >= 0; i--) {
    reverseName += hacker1[i];
  }

  console.log(reverseName);

// Iteration 3: Loops

  const result = hacker1.localeCompare(hacker2);
  console.log(result);

  if(hacker2.localeCompare(hacker1) > 0) {
    console.log(`The ${hacker1} name goes first.`)
  } else if (hacker2.localeCompare(hacker1) < 0) {
    console.log(`Yo, the ${hacker2} goes first, definitely.`)
  } else {console.log("What?! You both have the same name?")}