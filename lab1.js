// //Lab-1

// //Iteration 1: Names and Input
const hacker1 = "Kevin";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Ashraf";
console.log(`The navigator's name is ${hacker2}`);


// //Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, ${hacker1.length} characters`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters`);
  }

  // //Iteration 3: Loops
//   3.1 Print driver's name separated by a space and [in capitals]
  let driver1 = "";
  for(let i = 0; i < hacker1.length; i++){
    driver1 += hacker1[i]+" ";
  }
  console.log(driver1.toUpperCase()); //prints: K E V I N
  
  //3.2 Print navigator's name in reverse order.
  let reverseName = "";
  for(let i = hacker2.length - 1; i >= 0; i--){
    reverseName += hacker2[i];
  }
  console.log(reverseName); //prints: farhsA

  // another way is:
  console.log(hacker1.toUpperCase().split("").join(" ")); //the same,prints: K E V I N
  console.log(hacker2.split("").reverse().join("")); //prints: farhsA

// 3.3 Compare Depending on the [lexicographic order]
// We used .localeCompare() method.
let lexi = hacker1.localeCompare(hacker2); // A to Z gives -1,Z to A gives 1.
console.log(lexi);  //here we get 1 because name hacker2='Ashraf' comes before hacker1='Kevin'.
if (lexi === -1) console.log("The driver's name goes first");
 else if (lexi === 1) console.log("The navigator's name goes first");
 else if (lexi === 0) console.log("What?! You both have the same name?");
// so we get: "The navigator's name goes first".

// // 4. Bonus Time!
//Create a program that counts word "et" in the string.
//1.Create a string:
let text = "";
//2.Ganerate lorem and insert to the string:
text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mi ante. Pellentesque sit amet erat neque. Maecenas interdum augue ut euismod iaculis. Fusce luctus tellus ut nisi aliquet semper sit amet ultrices metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et viverra risus. Aenean vel rutrum massa. Curabitur sed nibh nec nisl luctus pharetra sed eu neque. Fusce quis tortor metus. Quisque metus ipsum, semper in neque a, vehicula sollicitudin ex. Morbi sed est posuere, scelerisque quam consequat, mattis ex. Integer bibendum scelerisque dui. Vestibulum consequat dapibus semper. Cras fermentum orci eget ante facilisis lacinia. Maecenas augue elit, pellentesque at urna quis, tristique ultricies eros. Mauris ac est eros."
//3.Create loop to count "et":
let count = 0;
for(let i = 0; i < text.length; i++){
  let wordCount = text[i] + text[i+1];
  if (wordCount === "et"){
    count++;
  }
}
console.log(`The number of word 'et' in the string is: ${count}`);
