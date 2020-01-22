// Iteration 1: Names and Input
let hacker1 = "Nata";
console.log("The driver's name is " + hacker1);
let hacker2 = "Kazi"; //4
console.log("The navigator's name is " + hacker2 );

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has"+ hacker1.length  + "characters");
  }else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  }
  else{
   console.log(`Wow, you both have equally long names, ${hacker1.length} `);
  }

// Iteration 3: Loops
//hacker1 = "Nata"; //N A T A

let resultHacker1 = hacker1.toUpperCase();
//console.log(resultHacker1);
resultHacker1 = resultHacker1.split('');
//console.log(resultHacker1);
resultHacker1 = resultHacker1.join(' ');
console.log(resultHacker1);

//hacker2 = "Kazi"; //izaK
let resultHacker2 = hacker2.split(""); //Convert it to Array first
//console.log(resultHacker2);
resultHacker2 = resultHacker2.reverse();//Then apply reverse to Array
//console.log(resultHacker2);
resultHacker2 = resultHacker2.join('');//Finally we join the Array to convert back to String
console.log(resultHacker2);
