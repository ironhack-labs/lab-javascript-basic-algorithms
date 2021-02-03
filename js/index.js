// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops

let hacker1 = 'giorgia'
console.log(`the driver's name is ${hacker1}`);

let hacker2 = 'rowan'
console.log (`the navigator's name is ${hacker2}`);

if (hacker1.length>hacker2.length) {
  console.log(`the driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length<hacker2.length) {
console.log(`it seems like the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
console.log(`what?! you both have equally long names ${hacker1.length}characters`);
}

let hacker1U = hacker1.toUpperCase()
let result = ' '

for (let i=0; i<hacker1.length; i++) { 
  result+=' ' + hacker1U[i]
} 
console.log(result);

let reverseName = ''

for (let i=hacker1.length-1; i>-1; i--){
  reverseName+= hacker1[i];
}
console.log(reverseName);

//if (hacker1<hacker2) {
  //console.log("The driver's name goes first");
//} else if (hacker1>hacker2) {
  //console.log("Yo, the navigator goes first definitely.");
//} else {
  //console.log("What?! You both have the same name?");
//}

function order(hacker1, hacker2) {
    return hacker1<hacker2 ? "The driver's name goes first"
         : hacker1>hacker2 ? "Yo, the navigator goes first definitely."
         : "What?! You both have the same name?"
}

console.log(order (hacker1, hacker2));

// BONUS CHALLENGE 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ipsum quis mauris pretium blandit ac vitae eros. Aenean et sodales ligula. Phasellus orci lorem, hendrerit at orci sit amet, finibus fringilla arcu. Maecenas ut facilisis mi, eu dictum massa. Nullam sit amet interdum dolor, nec euismod tortor. Suspendisse in maximus libero. Nulla facilisi. Etiam et felis metus. Quisque vitae pretium dui, eu viverra quam.

In et nisl nec elit convallis condimentum. Fusce eros neque, laoreet vel quam eget, malesuada porttitor tortor. Donec commodo, odio at bibendum efficitur, ligula justo rhoncus libero, at feugiat tortor arcu in dui. Donec mattis rhoncus elit sit amet lobortis. Cras interdum lectus ex, id pharetra odio gravida et. Sed placerat dolor vitae nisl varius sollicitudin. Phasellus a libero sollicitudin, imperdiet leo vel, consequat turpis. Ut vestibulum dolor nibh, in pulvinar arcu condimentum sed. Aliquam quis fermentum dui. Nulla odio sem, viverra in leo quis, accumsan suscipit nisl. Nulla a dictum velit. Morbi faucibus feugiat pulvinar. Aenean in accumsan augue.

Ut placerat accumsan est a consectetur. In euismod nisl at maximus porta. Aliquam porttitor dui sed ipsum sodales pretium. Sed non dui imperdiet, euismod massa viverra, auctor elit. In in tempus dolor. Sed vehicula mauris sed ligula mollis semper. Etiam facilisis vestibulum enim, eu egestas sem dictum eu. Duis pharetra mattis rutrum. Pellentesque faucibus nulla eget nibh auctor cursus. Maecenas bibendum gravida accumsan. Fusce molestie lorem eget sapien aliquam auctor. Curabitur eleifend vel nisi ac egestas.`

let count = 1

for (let i = 0; i<lorem.length; i++) {
if (lorem[i]=== ' ') {
  count = count+1
} 
}

console.log(count);

let countet = 0

for (let i = 0; i<lorem.length+2; i++) {
if (lorem[i]+lorem[i+1]+lorem[i+2]+lorem[i+3]===" et ") {
  countet = countet+1
} 
}

console.log(countet);