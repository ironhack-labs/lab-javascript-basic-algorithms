
// Iteration 1: Names and Input

let hacker1 = 'Giorgia'
console.log(`the driver's name is ${hacker1}`);

let hacker2 = 'Rowan'
console.log (`the navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length) {
  console.log(`the driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length<hacker2.length) {
console.log(`it seems like the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
console.log(`what?! you both have equally long names ${hacker1.length}characters`);
}

// Iteration 3: Loops

//3.1

let hacker1U = hacker1.toUpperCase()
let result = ''

for (let i=0; i<hacker1.length; i++) { 
  
  result+= hacker1U[i] + ' '
} 

console.log(result);


//3.2

let reverseName = ''

for (let i=hacker2.length-1; i>-1; i--){
  reverseName+= hacker2[i];
}

console.log(reverseName);


//3.3

// method one 

if (hacker1<hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1>hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//method two

function order(hacker1, hacker2) {

    return hacker1<hacker2 ? "The driver's name goes first"
         : hacker1>hacker2 ? "Yo, the navigator goes first definitely."
         : "What?! You both have the same name?"
}

console.log(order (hacker1, hacker2));

//method three


if (hacker1.localeCompare(hacker2)<0) {

    console.log("The driver's name goes first")
  
} else if (hacker1.localeCompare(hacker2)>0) {
    console.log("Yo, the navigator goes first definitely.")
    
} else if (hacker1.localeCompare(hacker2)==0) {
   console.log("What?! You both have the same name?")
} 
  
// LONGER METHOD

//let measure

//if (hacker1.length>hacker2.length) {
  //measure = hacker2.length
//} else {
  //measure = hacker1.length
//}

//for (let i=0; i<measure; i++) {

//if ((hacker1[i].localeCompare(hacker2[i]))<0) {

 // console.log("The driver's name goes first")
 // break
//} else if ((hacker1[i].localeCompare(hacker2[i]))>0) {
//  console.log("Yo, the navigator goes first definitely.")
 // break
//} else if (hacker1.localeCompare(hacker2)==0) {
// console.log("you have the same name")
 //break
//} else {
//  continue
//} 
//}




// BONUS CHALLENGE 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ipsum quis mauris pretium blandit ac vitae eros. Aenean et sodales ligula. Phasellus orci lorem, hendrerit at orci sit amet, finibus fringilla arcu. Maecenas ut facilisis mi, eu dictum massa. Nullam sit amet interdum dolor, nec euismod tortor. Suspendisse in maximus libero. Nulla facilisi. Etiam et felis metus. Quisque vitae pretium dui, eu viverra quam.

In et nisl nec elit convallis condimentum. Fusce eros neque, laoreet vel quam eget, malesuada porttitor tortor. Donec commodo, odio at bibendum efficitur, ligula justo rhoncus libero, at feugiat tortor arcu in dui. Donec mattis rhoncus elit sit amet lobortis. Cras interdum lectus ex, id pharetra odio gravida et. Sed placerat dolor vitae nisl varius sollicitudin. Phasellus a libero sollicitudin, imperdiet leo vel, consequat turpis. Ut vestibulum dolor nibh, in pulvinar arcu condimentum sed. Aliquam quis fermentum dui. Nulla odio sem, viverra in leo quis, accumsan suscipit nisl. Nulla a dictum velit. Morbi faucibus feugiat pulvinar. Aenean in accumsan augue.

Ut placerat accumsan est a consectetur. In euismod nisl at maximus porta. Aliquam porttitor dui sed ipsum sodales pretium. Sed non dui imperdiet, euismod massa viverra, auctor elit. In in tempus dolor. Sed vehicula mauris sed ligula mollis semper. Etiam facilisis vestibulum enim, eu egestas sem dictum eu. Duis pharetra mattis rutrum. Pellentesque faucibus nulla eget nibh auctor cursus. Maecenas bibendum gravida accumsan. Fusce molestie lorem eget sapien aliquam auctor. Curabitur eleifend vel nisi ac egestas.`


//word count method no array

let count = 1

for (let i = 0; i<lorem.length; i++) {
    
if (lorem[i]=== ' ') {

  count += 1

  } 
}

console.log(count);


//word count method with array


let arr = lorem.split(" ")

console.log(arr.length)


// "et" count n



let countEt = 0

for (let i = 0; i<lorem.length-2; i++) {

if (lorem[i]+lorem[i+1]+lorem[i+2]===" et") {
  
    countEt += 1

  } 
}

console.log(countEt);


//BONUS CHALLENGE TWO 

//method with join()


let phraseToCheck = "A man, a plan, a canal, Panama!";

let y = phraseToCheck.toLocaleLowerCase()
let forward = y.replace(/[^a-z]/g, "").split(" ").join('')

let reverse = "";

for (let i=forward.length-1; i>-1; i--) {

  reverse += forward[i]

}

if (forward == reverse) {
  console.log(`Yep ${phraseToCheck} is a palindrone`)
} else {
  console.log(`Nope ${phraseToCheck} is not a palindrone`)
}


//Method using today work i.e. no join

let phraseToCheck = "No 'x' in Nixon";
let y = phraseToCheck.toLocaleLowerCase()
let forward = ""

for (let i=0; i<y.length; i++) {

  if (y[i].toUpperCase() != y[i].toLowerCase()) {
   
    forward += y[i]
  }
}

let reverse = "";

for (let i=forward.length-1; i>-1; i--) {
  
  reverse += forward[i]
}

if (reverse===forward) {
  console.log(`Yep "${phraseToCheck}" is a palindrone`)
} else {
  console.log(`Nope "${phraseToCheck}" is not a palindrone`)
}

