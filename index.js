// Iteration 1: Names and Input

//1.1 Create a variable hacker1 with the driver's name.

    let hacker1 = "Nacho";

//1.2 Print "The driver's name is XXXX".

    console.log(`The driver's name is ${hacker1}`); 

//1.3 Create a variable hacker2 with the navigator's name.

    let hacker2 = "Laura"; 

//1.4 Print "The navigator's name is YYYY".*/ 

    console.log(`The navigator's name is ${hacker2}`); 



// Iteration 2: Conditionals
/*
2.1. Depending on which name is longer, print:

    - The driver has the longest name, it has XX characters. or

    - It seems that the navigator has the longest name, it has XX characters. or
    
    - Wow, you both have equally long names, XX characters!. 

*/

if (hacker1.length > hacker2.length){

    console.log(`The driver has the longest name, it has ${hacker1.length} characters`); 
}
else if {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`); 

}
else {

    console.log(`Wow, you both have equally long names, XX characters!.`); 

}



// Iteration 3: Loops

//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

console.log(hacker1.length) //Con esto sacamos la longitud del string en el caso de desconocerla.

let hacker1NameCaptial = hacker1.toUpperCase(); // Pasamos todos los caracteres del nombre a mayúsculas.

console.log(hacker1NameCaptial.substring(0,1)+" "+hacker1NameCaptial.substring(1,2)+" "+hacker1NameCaptial.substring(2,3)+" "+hacker1NameCaptial.substring(3,4)+" "+hacker1NameCaptial.substring(4)+" "); 

// O también: 

console.log(hacker1NameCaptial.slice(0,1)+" "+hacker1NameCaptial.slice(1,2)+" "+hacker1NameCaptial.slice(2,3)+" "+hacker1NameCaptial.slice(3,4)+" "+hacker1NameCaptial.slice(4)+" ");



//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

console.log(hacker2.length); //Así averiguamos el número de caracteres del string.

let reHacker2 = hacker2.split(''); //Con esto separo los caracteres del string.

console.log(reHacker2[4]+reHacker2[3]+reHacker2[2]+reHacker2[1]+reHacker2[0]);
 
/*
3.3 Depending on the lexicographic order of the strings, print:

- The driver's name goes first.

- Yo, the navigator goes first, definitely.

- What?! You both have the same name?

*/

if (hacker1.charCodeAt(hacker1[0]) < hacker2.charCodeAt(hacker2[0])) {
  
    console.log("The driver's name goes first.")
    
  }
  else if (hacker1.charCodeAt(hacker1[0]) > hacker2.charCodeAt(hacker2[0])) {
    
    console.log("Yo, the navigator goes first, definitely.")
    
  }
   else {(console.log("What?! You both have the same name?"));}