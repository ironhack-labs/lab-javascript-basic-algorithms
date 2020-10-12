// Iteration 1: Names and Input
let hacker1 = "Emma";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Delia";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker1.length < hacker2.length){ 
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`);
    }
    else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

  // Iteration 3: Loops
 //not sure how to only print the name only once with a loop?
for (let i = 0; i < hacker1.length; i++)
console.log(hacker1.toUpperCase().split("").join(" "));

let reverseCase = hacker2.split("").reverse().join("");
console.log(reverseCase);

if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.");
  }else if (hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely.");
  }else{
    console.log("What?! You both have the same name?");
  }

//Bonus 1

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet nulla sit amet finibus sagittis. Mauris odio libero, volutpat luctus ante ac, rutrum pretium eros. Curabitur in placerat arcu. Suspendisse feugiat risus ut luctus auctor. Praesent nisl nunc, pulvinar feugiat purus volutpat, lobortis euismod massa. Sed gravida pharetra ex et mattis. Fusce tristique at ex eget euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam interdum consequat orci non rhoncus.";

function WordCount(str) {
    return str.split(" ").length;
}
console.log(WordCount(loremIpsum));