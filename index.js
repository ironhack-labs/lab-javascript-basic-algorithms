// Iteration 1: Names and Input
const hacker1 = "Idir";
const hacker2 = "John";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}  characters..`);
  } else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }


// Iteration 3: Loops

function lexicoOrder (person1, person2) {
    listName = [person1, person2]
    listName.sort()
  
    if (listName[0] == person1) {
      return"The driver's name goes first."
    } else if (listName[0] == person2) {
      return "Yo, the navigator goes first, definitely."
    } else if (hacker1 == hacker2) {
      return ("What?! You both have the same name?")
    }
    else {
      return "Please provide 2 names"
    }
  }

console.log(lexicoOrder(hacker1, hacker2))

// Bonus Time!

const longText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veritatis. Dolorum similique ipsam eius? Consequatur quia similique sunt quasi, eveniet voluptates reiciendis vitae quae quaerat, explicabo quo expedita sed sit mollitia voluptas harum? Ducimus temporibus eum voluptates animi! Fugiat ipsa maxime est distinctio sapiente atque porro earum ullam laudantium rem?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veritatis. Dolorum simpsam eius? Consequatur quia similique sunt quasi, eveniet voluptates reiciendis vitae quae quaerat, explicabo quo expedita sed sit mollitia voluptas harum? Ducimus temporibus eum voluptates animi! Fugiat ipsa maxime est distinctio sapiente atque porro earum ullam laudantium rem?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veritatis. Dolorum similique ipsam eius? Consequatur quia similique sunt quasi, eveniet voluptates reiciendis vitae quae quaerat, explicabo quo expedita sed sitm?`;

function countWords(text) {
  if (text === "") {
    return 0;
  } else {
    return text.split(/\s+/).length;
  }
}

console.log(countWords(longText));