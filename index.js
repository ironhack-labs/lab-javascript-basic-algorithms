// Iteration 1: Names and Input

 let hacker1 = "Dominic";
 //console.log("The driver's name is Dominic");
 let hacker2 = "Alonso";
 //console.log("The navigator's name is Alonso");

// Iteration 2: Conditionals
//if (hacker1.length>hacker2.length){
 //   console.log ("The driver has the longest name, it has (hacker1.length) characters.")
//}
//if (hacker1.length<hacker2.length){
   // console.log("It seems that the navigator has the longest name, it has ${hacker2.length} characters.")
//}
//if (hacker1.length===hacker2.length){
 //   console.log("Wow, you both have equally long names, ${hacker2.length} characters!.")
//}

// Iteration 3: Loops

let hacker1upper= hacker1.toUpperCase

    for (let i=0; i<hacker1upper.length; i++){
        const char = hacker1upper[i];
        console.log(char);
    }
