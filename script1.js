/* Iteration 1 */

// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Juan";

// 1.2 Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Snow";

// 1.4 Print "The navigator's name is YYYY".
console.log('The drivers name is ${hacker2}');

/* Iteration 2 */

// 2.1 Conditional statements
if(hacker1.length > hacker2.length)
console.log("Driver has the longest name, it has " + hacker1.length + " characters");
else if(hacker1.length < hacker2.length)
console.log("Navigator has the longest name, it has " + hacker2.length + " characters");
else
console.log("The names are the same length, they both have " + hacker2.length + " characters");

/* Iteration 3 */

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
// convert string to array 
let arr = hacker1.split("");

// print array separated by a space and in uppercase 
console.log(arr.join(" ").toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order.
// convert string to array 
let arr2 = hacker2.split("");

// print array in reverse
console.log(arr2.reverse().join(""));

// 3.3 Depending on the lexicographic order of the strings, print the correct statement

// create an array with both names and sort it
let arr3 = [];
arr3.push(arr2.reverse().join(""));
arr3.push(arr.join(""));
arr3.sort();

// print statement depending on lexicographic order
if(arr3[0] === arr3[1])
console.log("What?! You both got the same name?");
else if(arr3[0] === hacker1)
console.log("The driver's name goes first.");
else if(arr3[0] === hacker2)
console.log("Yo, the navigator goes first definitely.");

/* Bonus */

// Generate 3 paragraphs. Store the text in a variable type of string.
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet justo pellentesque, tempus turpis et, sollicitudin erat. Proin at risus non metus fermentum malesuada. Aliquam posuere lacinia mi, id scelerisque nisi porta vitae. Donec a ipsum mattis arcu mattis molestie in a quam. Duis dolor dolor, vehicula nec justo vel, venenatis laoreet lacus. Vestibulum at magna neque. Mauris gravida libero eget sollicitudin euismod. Morbi faucibus magna sagittis, fermentum odio a, efficitur ipsum. Sed ullamcorper vitae nibh non tincidunt. Donec bibendum tellus at fermentum vehicula. Vivamus nec ipsum tristique turpis lobortis fermentum. Proin et ligula sit amet orci eleifend dignissim. Vivamus aliquam lacinia urna eget dignissim. In eu nisl ut massa tempus maximus ac ut libero. Etiam faucibus vitae tortor nec fringilla. Praesent vulputate nisi id risus hendrerit feugiat. Donec ultrices ac nisi a efficitur. Vivamus sit amet odio suscipit, maximus quam non, tristique nulla. Curabitur consectetur est sit amet congue euismod. Sed congue rutrum lectus vel gravida. Quisque arcu neque, pulvinar quis arcu at, vestibulum pretium enim. Nulla a lectus sed mi aliquam gravida. Nunc eu lorem non ex auctor pharetra. Proin tincidunt laoreet odio quis faucibus. Suspendisse urna ipsum, aliquam ut leo dictum, interdum porttitor tellus. In non egestas enim, vel ultricies turpis. Quisque ultrices non augue in lobortis. In ullamcorper nisl feugiat mattis faucibus. Cras ut velit arcu. Fusce et fermentum felis. Praesent bibendum odio in pharetra condimentum. Cras tempus porta condimentum. Mauris ut lacus et orci molestie ultrices ut eu magna. Curabitur blandit nulla quis elementum imperdiet. Proin eget nisi vitae nisi ullamcorper auctor at id nunc. Integer maximus lectus ut dui laoreet, sed volutpat ligula sagittis. Phasellus lacinia volutpat leo sit amet condimentum. Ut eget arcu ultrices, finibus mi in, pretium dolor. Pellentesque pretium magna sit amet risus pulvinar facilisis. Suspendisse potenti. Nullam eget ex non libero iaculis tempus vel ut enim. Sed purus leo, dapibus sed efficitur non, consequat sit amet augue. Morbi neque nisl, sagittis et tristique a, mollis eget nisi. Vivamus venenatis aliquam hendrerit.";

// Make your program count the number of words in the string.
let arrLorem = lorem.split(" ");
console.log(arrLorem.length);

// Make your program count the number of times the Latin word et appears.
let countEt = (lorem.match(/et/g)).length;
console.log(countEt);
