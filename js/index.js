// Iteration 1 Names and Input

const hacker1 = "Luca";


console.log("The driver's name is " + hacker1);

const hacker2 = "Rico";

console.log(`The navigator's name is ${hacker2}`);

console.log("_________________________________");

// Iteration 2: Conditionals

const checkNameLength = (name1, name2) => {
  if (name1.length === name2.length) {
    console.log(
      `Wow you both have equally long names, ${name1.length} characters.`
    );
    return;
  }
  if (name1.length > name2.length) {
    console.log(
      `The driver has the longest name, it has ${name1.length} characters.`
    );
    return;
  }
  if (name1.length < name2.length) {
    console.log(
      `It seems that he navigator has the longest name, it has ${name2.length} characters.`
    );
    return;
  }
  console.log("there is a mistake somewhere");
};
checkNameLength(hacker1, hacker2);

console.log("_________________________________");

// Iteration 3: Loops

const hackerNameToUppercase = (name) => {
  let capitalizedName = "";
  for (let i = 0; i < name.length; i++) {
    capitalizedName += name[i].toUpperCase() + " ";
  }
  return capitalizedName.trim();
};

console.log(hackerNameToUppercase(hacker1));

console.log(hackerNameToUppercase(hacker2));

const hackerNameReversed = (name) => {
  let reversedName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reversedName += name[i];
  }
  return reversedName;
};

console.log(hackerNameReversed(hacker1));

console.log(hackerNameReversed(hacker2));

const lexicography = (name1, name2) => {
  if (name1 === name2) {
    return "What?! You both have the same name?";
  }
  if (name1 > name2) {
    return "Yo, the navigator's goes first, definitely.";
  }
  if (name1 < name2) {
    return "The driver's name goes first.";
  }
};

console.log(lexicography(hacker1, hacker2));

console.log("--------------------------------")

// Bonus

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante egestas, facilisis ex sit amet, porta sem. Suspendisse vulputate et enim ac eleifend. Cras eu hendrerit felis. Donec hendrerit, nibh vitae fringilla feugiat, odio quam lobortis arcu, at condimentum sapien tellus ut ligula. Praesent auctor tortor at ipsum vulputate convallis. Pellentesque maximus erat leo, a eleifend justo venenatis vel. Phasellus rhoncus ex felis, eu finibus lorem venenatis ac. Duis vitae nibh volutpat, congue ligula a, rhoncus erat.

Donec interdum pretium vulputate. Aenean malesuada, erat sed facilisis facilisis, turpis diam sagittis sapien, eu sodales tortor metus ac magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vitae felis elementum, sollicitudin mauris id, cursus ipsum. Vivamus at cursus ipsum. Suspendisse mollis nisl nec lectus tincidunt, in pulvinar ligula pharetra. Suspendisse ante neque, iaculis quis placerat volutpat, tempor ut nisi. Vestibulum euismod ante nec ipsum aliquam, vel facilisis dolor sagittis. Suspendisse id mi neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eleifend varius porta. Fusce ligula sem, vestibulum commodo ullamcorper in, ornare vel nibh.

Vestibulum blandit eu tellus at pellentesque. Nulla eleifend, orci id varius aliquam, libero nibh finibus elit, id pulvinar tellus felis a eros. Pellentesque eu ipsum sit amet dui volutpat luctus in quis orci. Vivamus maximus hendrerit lacus ac aliquam. Donec vel turpis viverra, pretium libero egestas, rutrum lorem. Suspendisse luctus quam eu magna aliquet blandit. Donec dapibus imperdiet dolor, blandit interdum neque vestibulum non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec et fermentum ex. Nam fringilla nisi nisi, eget vulputate sapien porta nec. Nullam convallis mauris ultrices tincidunt sodales. Pellentesque sit amet mi et ante cursus sagittis. Mauris lacus odio, suscipit nec diam vel, gravida facilisis neque. Nam nec lorem risus.`

const countLoremWords = function (text){
    return text.split(/\n+|\s+/).length;
} 

const etCount = text => {
    let count = 0
    let loremWords = text.split(/\n+|\s+/) 
    for (word of loremWords) {
        (word === "et") && count++
    }
    return count
}
console.log(countLoremWords(lorem))
console.log(etCount(lorem));

console.log("--------------------------------")

let phraseToCheck = "step on no pets";

let palindromCheck = (string) => {
    
};

// console.log(palindromCheck(phraseToCheck))
