// iteration 1 - Names and Input
let hacker1 = "Marta"

console.log(`The driver’s name is ${hacker1}`);

let hacker2 = "Julian"

console.log(`The navigator’s name is ${hacker2}`);


// iteration 2 - Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// iteration 3 - Loops

let withSpaces = ''
let upperCasedDriver = hacker1.toUpperCase();
for(let i = 0; i < upperCasedDriver.length; i++){
   withSpaces += upperCasedDriver.charAt(i) + ' ';
};
console.log(withSpaces);

let reversedString = ''
for(let x = hacker2.length - 1; x >= 0; x--) {
	reversedString = reversedString + hacker2[x];
}
console.log(reversedString);

var order = [hacker1, hacker2];
order.sort(function(a, b) {
    return a.localeCompare(b);
});


if (hacker1 === order[0]) {
  console.log("The driver's name goes first."); 
  } else if (hacker2 === order[0]){
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  };

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac magna a sem dapibus cursus. Suspendisse porttitor leo a orci pretium laoreet. Fusce sed imperdiet purus. Nullam rhoncus lacus velit, in varius enim egestas quis. Aliquam fringilla, nisi eu efficitur interdum, ex erat vestibulum sem, sit amet tempus sapien nisi eu ipsum. Ut facilisis ultrices tellus, sed malesuada felis lacinia quis. Integer nulla eros, finibus ut ex sit amet, mollis euismod ex. Pellentesque tempus elementum libero, scelerisque mollis est tincidunt ac. Nam non rutrum odio. Vivamus consectetur neque eget dolor vulputate semper. Aliquam erat volutpat. Sed dapibus odio at lectus ornare aliquet. Curabitur nec faucibus quam, rhoncus mollis sem. Fusce a metus ut orci tincidunt rhoncus vel quis sem. Duis consequat eu nunc pharetra faucibus. Integer et dui ut turpis dignissim hendrerit ut at diam. In sed volutpat ipsum, id dapibus magna. Mauris at nibh nec mauris vestibulum facilisis. Fusce pretium iaculis sagittis. Nunc aliquet dolor eget tristique gravida. Maecenas placerat sem quis scelerisque congue. Vestibulum quam leo, tempus ut congue tempus, dignissim in neque. Praesent vel nibh ac quam convallis feugiat. Nulla facilisi. Maecenas vel enim erat. Quisque at fermentum ligula. Vivamus feugiat euismod orci vitae consectetur. Praesent scelerisque volutpat justo, ut mollis orci commodo in. In nibh lacus, commodo vitae enim commodo, mattis pretium arcu. Curabitur rhoncus dapibus suscipit. Proin hendrerit metus nisl." 

function WordCount(lorem) { 
  return lorem.split(" ").length;
}

console.log(WordCount(lorem));

function wordSearch(lorem) {
  return lorem.split("et").length;
}

console.log(wordSearch(lorem));

let phraseReverse = ''
let phraseToCheck = "amor roma"
for(let j = phraseToCheck.length - 1; j >= 0; j--) {
	phraseReverse = phraseReverse + phraseToCheck[j];
if (phraseToCheck === phraseReverse) {
 console.log("It's a Palindrome")
}
}