//Iteration 1: Names and Input
/*1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.

1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`.*/

let hacker1 = 'Pedro';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Miguel';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if(hacker1.length>hacker2.length){
console.log(`The driver has the longest name and it has ${hacker1.length}`);

}else if (hacker2.length>hacker1.length){
console.log(`The navigator has the longest name and it has ${hacker2.length}`);
} else {
  console.log(`The driver and the navigator has the same length it has ${hacker2.length}`);
}
/* Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

*/
hacker1= hacker1.split('');
for (let i=0; i<hacker1.length; i++) {
hacker1[i]= hacker1[i].toUpperCase();
}
hacker1= hacker1.join(' ');
console.log(hacker1);

let reverseArray = [];
for (let i= (hacker2.length - 1); i>=0; i--) {
reverseArray.push(hacker2[i]) 
}
reverseArray= reverseArray.join('');
console.log(reverseArray);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/ 

hacker1 = 'Javier';
hacker2 = 'Pedro';

if(hacker1.localeCompare(hacker2)=== -1){  //siempre se compara el 1º con el segundo y si sale -1(true)----> sale por la variable 1 que comparas
 
 console.log('the driver goes first');


} else if(hacker1.localeCompare(hacker2)=== 1){ //siempre se compara el 1º con el segundo y si sale 1(true)----> sale por la variable 2 que comparas

 console.log('Yo, the navigator goes first definitely');

}else {
  console.log('What?! You both have the same name');
}

