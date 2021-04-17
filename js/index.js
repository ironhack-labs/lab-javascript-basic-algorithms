//Iteration 1: Names and Input

/*1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`.
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`.*/

let hacker1 = "Gonzalo";
let hacker2 = "Paula";

//1.1 
console.log (`The driver's name is ${hacker1}`);

//1.2
console.log (`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
/*- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length){
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
  console.log (`Wow, you both have equally long names, ${hacker1} characters!`);
}


// Iteration 3: Loops

/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

//3.1
for (character of hacker1){
    console.log(character.toUpperCase());
  }

//3.2
for (character = hacker2.length - 1; character >= 0; character--) {
    console.log(hacker2[character]);
}

//3.3
if (hacker1 < hacker2){ 
    console.log('hacker1 goes first');
                        }
  else if (hacker1 > hacker2) {
    console.log('hacker2 goes first');
                              }
  else {
    console.log('You have same names');
  }

  /*Bonus 1 Go to lorem ipsum generator and:
Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

//Bonus 1.1
  let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper magna condimentum placerat lacinia. Aliquam sed neque suscipit ipsum dapibus vehicula. Fusce consequat, orci at aliquet vulputate, lectus elit interdum arcu, a facilisis libero massa a justo. Phasellus tempus dui odio, ac tincidunt nisi mollis at. Suspendisse varius, nunc sit amet porta suscipit, urna purus dapibus odio, eget interdum nibh ipsum quis risus. Ut lorem dolor, bibendum et lobortis sed, rutrum quis mi. Fusce suscipit porta nisi sit amet molestie. Praesent tortor massa, convallis vitae turpis vulputate, placerat sodales tortor. Aenean dapibus nisi augue, nec tincidunt libero elementum eu. Maecenas consectetur volutpat odio sed fermentum.

Integer tempus lacus eu justo congue rutrum. Etiam in placerat augue. Curabitur rhoncus erat et ante luctus dignissim. Suspendisse et lectus accumsan, tincidunt nunc vitae, semper metus. Cras dapibus sapien nunc, nec mattis est placerat a. Morbi mattis mattis dolor, sed tempor orci. Maecenas vitae nibh mollis purus convallis malesuada. Vestibulum malesuada, metus ac accumsan ultrices, est est tincidunt sem, et volutpat felis velit vel elit. Nam a velit porta, posuere felis sit amet, venenatis purus. Aenean sed ligula pretium, luctus arcu vel, venenatis dolor. Nullam sagittis, lectus non sollicitudin viverra, tellus sapien vehicula sem, sed ultricies urna quam id lacus. Suspendisse iaculis lorem turpis, nec elementum ante hendrerit nec. Pellentesque vestibulum turpis enim. Nam lacus nisl, varius id tincidunt quis, ullamcorper vel orci.

Nullam id justo in lacus condimentum condimentum eu ut tortor. Vivamus tempus, velit at blandit condimentum, ex mi finibus ipsum, et dictum sapien sapien eu est. Vestibulum posuere tortor nunc. Quisque et turpis quis ante commodo luctus. Integer ac enim nunc. Vestibulum eget nulla et diam ultrices tincidunt. Vestibulum fermentum arcu quis consectetur gravida. Curabitur sit amet ligula a dolor iaculis posuere. Sed eu ante sit amet dolor faucibus tempus. Duis semper nulla tellus, et interdum metus pellentesque quis. Praesent dapibus, arcu non egestas elementum, risus mauris imperdiet risus, nec volutpat est ligula in tortor. Curabitur at feugiat felis.`

//Bonus 1.2

var aux =loremIpsum.split("\n")
// console.log("aux: ",aux, aux.length)
// var auxTemp = []
var counter = 0
for (var i =0;i<aux.length; i++){
    if (aux[i] != "") {
        // auxTemp.push(aux[i])
        var words = aux[i].split(" ")
        counter = counter + words.length
    }
}
console.log("numero: ",counter)
// console.log(auxTemp)

//Bonus1.3
let etCounter = 0;

for ( i = 0; i < loremIpsumArr.length; i++) {
  if (loremIpsumArr[i] === `et`){
    etCounter++;
  }
}
console.log(etCounter);

/*Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/

let phraseToCheck = "eye!";

//Para eliminar caracteres no alfanuméricos y espacios
let reg = /[\W_]/g;
let processedStr = phraseToCheck.toLowerCase().replace(reg, ``);

let isPalindrome = true;

for (let i = 0; i < processedStr.length; i++){
  if (processedStr[i] === processedStr[processedStr.length-i-1]){
  }
  else {
    console.log(`The indicated phrase is NOT a palindrome, try something else.`);
    isPalindrome = false;
    break;
  }
}
if (isPalindrome === true){
console.log(`The indicated phrase is a palindrome.`)
}