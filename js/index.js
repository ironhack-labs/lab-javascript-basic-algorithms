// Iteration 1: Names and Input

let hacker1 = "Fernanda";
console.log(`${"The driver's name is "}${hacker1}`);

let hacker2 = "Touluse";
console.log(`${"The navigator's name is "}${hacker2}`);

// Iteration 2: Conditionals
/* Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters! */
let caracteresEnHacker1 = hacker1.length;
let caracteresEnHacker2 = hacker2.length;
if (caracteresEnHacker1 > caracteresEnHacker2) {
    console.log(`${"The driver has the longest name, it has"} ${caracteresEnHacker1}${" characters"}`)
   } else if (caracteresEnHacker1 < caracteresEnHacker2) {
    console.log(`${"It seems that the navigator has the longest naame, it has"} ${caracteresEnHacker2} ${" characters"}`)
   }else (caracteresEnHacker1 == caracteresEnHacker2)
    console.log(`${"Wow, you both have equally long names, "}${caracteresEnHacker1}${" characters!"}`);
// Iteration 3: Loops
/* Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/
let HACKERupperCase = hacker1.toUpperCase();
for(let i=0; i < HACKERupperCase.length; i++){
    console.log(HACKERupperCase.charAt(i));
}
for(i = hacker2.length -1; i >= 0; i--){
    hacker2[i];
    console.log(hacker2.charAt(i));
}    

