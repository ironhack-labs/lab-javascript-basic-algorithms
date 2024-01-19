// Iteration 1: Names and Input

var hacker1="Shada"; 
var hacker2="Max"; 

console.log ("The driver's name is " + `${hacker1}`);
console.log ("The navigator's name is " + `${hacker2}`); 




// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log("The driver has the longest name, it has " + `${hacker1.length}` + " characters.");}
  
  else if (hacker1.lenght < hacker2.lenght) {
  
      console.log ("It seems that the navigator has the longest name, it has" + `${hacker2.length}` + " " + "characters");
  }
  
  else if (hacker1.lenght = hacker2.lenght) {
  
      console.log ("Wow, you both have equally long names" + `${hacker2.length}` + " " + "characters");
  }


// Iteration 3: Loops

for (let i =0; i< hacker1.length; i++) {

console.log (hacker1[i]);

}

for (let i=hacker1.length-1; i>=0; i--) {

    console.log (hacker1[i]);
    
    }

let result = hacker1[0].localeCompare(hacker2[0]); 

    if (result<0) {

        console.log ("The driver's name goes first."); 
    }

    else if (result>0) {

        console.log ("Yo, the navigator goes first, definitely.");
    }

    else {

        console.log("What?! You both have the same name?");
    }


    