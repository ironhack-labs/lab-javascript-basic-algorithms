  // Iteration 1: Names and Input
  let hacker1 = "Aldo"; //DRIVER
  console.log(`The driver´s name is: ${hacker1}`);

  let hacker2 = "Cristian"; //NAVIGATOR
  console.log(`The navigator's name is ${hacker2}`);

  // Iteration 2: Conditionals
  if(hacker1.length>hacker2.length)
    {
    console.log("The driver has the longest name, it has "+hacker1.length+" characters.")
  } else if(hacker1.length<hacker2.length)
  {
    console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters.")
  } else
  {
    console.log("Wow, you both have equally long names, "+hacker1.length+" characters!")
  }
  // Iteration 3: Loops
  let nameWhitSpaces = "";
  for(let i = 0; i <= hacker1.length; i++){
      nameWhitSpaces += hacker1[i] + " ";

  }
  console.log(nameWhitSpaces.toUpperCase());

  let nameReverse = "";

  for(i = hacker1.length - 1; i >= 0; i-- ){
      nameReverse += hacker1[i];
  }
  console.log(nameReverse);

  const order = hacker1.localeCompare(hacker2);

  if(order === 1){
      console.log(`The driver's name goes first.`);

  }else if(order === 0){
      console.log(`Yo, the navigator goes first, definitely.`);

  }else{
      console.log(`What?! You both have the same name?`);
  }