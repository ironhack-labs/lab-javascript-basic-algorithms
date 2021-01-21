// Iteration 1: Names and Input
let hacker1 = "Jorge"
console.log(`Driver's name is ${hacker1}`);

let hacker2 = "Keith"
console.log(`Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function longestName(name1, name2){

    let letterCount = 0;
  
    if(name1.length === name2.length){
  
      letterCount = name1.length;
      console.log(`Wow, you both have equally long names, ${letterCount} characters!`);
    }
    else if(name1.length > name2.length){
  
      letterCount = name1.length;
      console.log(`The driver has the longest name, ${letterCount} characters`);
  
    }
    else{
  
      letterCount = name2.length;
      console.log(`It seems that the navigator has the longest name, it has ${letterCount} characters.`);
  
    }
  
  }

// Iteration 3: Loops

//3.1
function printCapitalSpaced(nameDriver){

  let nameDriverUpperCased = nameDriver.toUpperCase();
  let nameDriverSpaced= "";
 
  for(i = 0; i<nameDriverUpperCased.length; i++){

    nameDriverSpaced += nameDriverUpperCased.charAt(i) + " ";

  }

  console.log(nameDriverSpaced);

}

//3.2
function printInReverse(nameNavigator){

  let nameReverse = "";

  for(i = nameNavigator.length - 1; i >= 0; i--){

    nameReverse += nameNavigator.charAt(i);

  }

  console.log(nameReverse);

}